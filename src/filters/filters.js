import Vue    from 'vue'
import moment from "moment";

//dateFormat
Vue.filter("dateFormat", function (date) {
    return date != null ? moment(String(date)).format(process.env.VUE_APP_DATE_FORMAT) : ''
});