<template>
    <div class="ms-body ms-primary-theme ms-logged-out">
        <!-- Main Content -->
        <main class="body-content">
            <!-- Body Content Wrapper -->
            <div class="ms-content-wrapper ms-auth">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "AuthLayout"
    }
</script>

<style scoped>

</style>
