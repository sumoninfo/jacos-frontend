<template>
    <span>
        <a title="Create" v-if="type == 'modal'" href="#" @click="$parent.openModal" class="ms-text-primary btn btn-sm btn-success">
            <i class="material-icons fs-20">add_box</i> Create {{title}}
        </a>
        <router-link title="Create" v-else :to="{ name: to_name}" class="btn btn-primary w-100">
            <i class="fa fa-plus-square"></i> Create {{title}}
        </router-link>
    </span>
</template>

<script>
    export default {
        name: "CreateAction",
        props: ['to_name', 'title', 'type']
    }
</script>
