<template>
    <div id="user-list-section" class="create-section mt-5">
        <div class="container">
            <form @submit.prevent="getList()">
                <div class="mb-3 row">
                    <div class="col-sm-2">
                        <create-action  v-if="$root.$can('staff', 'staff-create')" name="Staff" to_name="staffCreate"/>
                    </div>
                    <div class="col-sm-3 ms-auto">
                        <input v-model="table.search" type="text" class="form-control mb-3" id="name"
                               placeholder="Searching...">
                    </div>
                    <div class="col-sm-2">
                        <input type="submit" class="btn btn-primary w-100" value="Searching">
                    </div>
                </div>
            </form>
            <div class="row">
                <table class="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Age</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Role</th>
                        <th v-if="$root.$can('staff', 'staff-commission')" scope="col">Commission</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <template v-if="lists.length">
                        <tr v-for="(list, index) in lists" class="align-middle">
                            <th scope="row">{{ table.pagination.from + index }}</th>
                            <td>{{ list.id_number }}</td>
                            <td>{{ list.full_name }}</td>
                            <td>P: {{ list.phone }}<br>E: {{ list.email }}</td>
                            <td>{{ list.gender }}</td>
                            <td>M: {{ list.date_of_month }} Y: {{ list.date_of_year }}</td>
                            <td>{{ list.designation ? list.designation.name : '' }}</td>
                            <td>{{ list.role ? list.role.name : '' }}</td>
                            <td v-if="$root.$can('staff', 'staff-commission')">{{ list.commission }}</td>
                            <td>
                                <div class="form-image-preview">
                                    <img class="form-img img-thumbnail w-100 h-100" :src="list.image"/>
                                </div>
                            </td>
                            <td>
                                <div class="dropdown">
                                    <button class="btn btn-primary dropdown-toggle" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1"
                                         style="padding: 10px 15px!important;">
                                        <div class="d-flex justify-content-around align-items-center">
                                            <router-link v-if="$root.$can('visit', 'visit-view')" title="All Visit"
                                                         :to="{name: 'prescriptionList', query: {doctor_id: list.id}}"
                                                         class="btn btn-primary m-1">
                                                <i class="far fa-calendar-alt"></i>
                                            </router-link>
                                            <router-link v-if="$root.$can('bill', 'bill-view')" title="All Bill"
                                                         :to="{name: 'invoiceList', query: {doctor_id: list.id}}"
                                                         class="btn btn-primary m-1">
                                                <i class="fab fa-buffer"></i>
                                            </router-link>
                                            <update-action v-if="$root.$can('staff', 'staff-update')" to_name="staffEdit"
                                                           :params="{ id: list.id }"/>
                                            <delete-action v-if="$root.$can('staff', 'staff-delete')" class="w-auto"
                                                           :id="list.id"/>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </template>
                    <template v-if="!lists.length">
                        <tr>
                            <th class="text-center font-weight-bolder" colspan="100%">No data found</th>
                        </tr>
                    </template>
                    </tbody>
                </table>
                <pagination v-if="lists.length>0" :pagination="table.pagination" @paginate="getList()" :offset="5"/>
            </div>
        </div>
    </div>
</template>

<script>
import ApiService          from "@/services/api.service";
import NotificationService from "@/services/notification.service";
import Pagination          from "@/components/Pagination";

export default {
    name      : "StaffList",
    components: {Pagination},
    data      : () => ({
        lists: [],
        table: {
            per_page  : 10,
            search    : '',
            pagination: {
                current_page: 1
            }
        }
    }),
    mounted() {
        this.getList();
    },
    methods: {
        //-------CRUD------
        getList() {
            let params = {
                ...this.table,
                page: this.table.pagination.current_page,
            };
            ApiService.get('/users', {params: params}).then((res) => {
                this.lists            = res.data.data;
                this.table.pagination = res.data.meta;
            }).catch(error => {
                NotificationService.error(error.response.data.message);
            })
        },
        destroy(id) {
            Swal.fire({
                title             : 'Are you sure?',
                text              : "You won't be able to revert this!",
                icon              : 'warning',
                showCancelButton  : true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor : '#d33',
                confirmButtonText : 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    ApiService.delete(`/users/${id}`,).then(res => {
                        this.getList();
                        NotificationService.success(res.data.message);
                    }).catch(error => {
                        NotificationService.error(error.response.data.message);
                    })
                }
            }).catch(error => {
                NotificationService.error(error.response.data.message);
            })
        },
        //-------CRUD--------
    }
}
</script>
