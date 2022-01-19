<template>
  <main>
    <div class="container py-4">
      <Navbar/>
      <router-view/>
      <Footer/>
    </div>
  </main>
</template>

<script>
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

export default {
  name: "WebLayout",

  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      settings: {
        logo: 'http://api.seanddh.com/images/logo-7.jpg',
        // logo: 'https://safewaypharmaonline.com/resources/images/logo/logo.png',
        title  : 'SAFEWAY EYE AND DENTAL HOSPITAL',
        email  : 'seanddh55@gmaul.com',
        phone  : '+88-01779883969, +88-01831801494',
        address: '55, Atish Diponkar Road, South Mugda, Mugda , Dhaka -1214',
      },
    }
  },
};
</script>

<style scoped>
</style>
