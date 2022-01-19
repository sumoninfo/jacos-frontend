<template>
 <span>
    <button v-if="filter" @click="activeFilter = !activeFilter" class="btn btn-sm btn-primary mr-2" type="button">
    <span class="material-icons fs-16 text-white">manage_search</span> {{ activeFilter ? 'Close' : 'Open' }} Filter
  </button>
  <button v-if="print" @click="printData" class="btn btn-sm btn-secondary" type="button">
    <span class="material-icons fs-16 text-white">print</span> Print
  </button>
 </span>
</template>

<script>
export default {
  name   : "FilterPrintAction",
  props  : {
    filter: {type: Boolean, default: true},
    print : {type: Boolean, default: true},
  },
  data   : () => ({
    activeFilter: false,
  }),
  methods: {
    printData() {
      this.$htmlToPaper('printMe');
    },
  }
}
</script>
