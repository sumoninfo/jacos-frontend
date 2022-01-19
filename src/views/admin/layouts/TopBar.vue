<template>
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Assignment</a>
    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <a @click="logout" class="nav-link px-3" href="#">Sign out</a>
      </div>
    </div>
  </header>
</template>

<script>

import ApiService          from "@/services/api.service";
import NotificationService from "@/services/notification.service";
import JwtService          from "@/services/jwt.service";

export default {
  data() {
    return {}
  },
  methods: {
    logout() {
      const token = JwtService.getToken();
      if (typeof token != "undefined") {
        ApiService.post('/logout').then(response => {
          JwtService.destroyToken();
          this.$router.push({name: "LoginPage"});
          NotificationService.success('Logout successful');
        }).catch(error => {
          NotificationService.error(error.response.data.message);
        })
      }
    },
  }
}
</script>
