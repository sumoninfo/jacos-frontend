import Vue                   from 'vue'
import IndexAction           from "@/components/action/Index";
import PrintAction           from "@/components/action/Print";
import ViewAction            from "@/components/action/View";
import CreateAction          from "@/components/action/Create";
import UpdateAction          from "@/components/action/Update";
import DeleteAction          from "@/components/action/Delete";
import ButtonAction          from "@/components/action/Button";
//Action Button Component
Vue.component('index-action', IndexAction);
Vue.component('print-action', PrintAction);
Vue.component('view-action', ViewAction);
Vue.component('create-action', CreateAction);
Vue.component('update-action', UpdateAction);
Vue.component('delete-action', DeleteAction);
Vue.component('button-action', ButtonAction);
