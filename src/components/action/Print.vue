<template>
      <span>
        <a class="btn btn-success" v-if="type == 'modal'" href="#" @click="$parent.print(id)">
            <i class="fa fa-print"></i>
        </a>
        <router-link class="btn btn-success" v-else :to="{ name: to_name, params: { id: id }}" title="ID Card">
           <i class="fa fa-print"></i>
         </router-link>
    </span>
</template>

<script>
export default {
  name : "PrintAction",
  props: ['to_name', 'id', 'type']
}
</script>
