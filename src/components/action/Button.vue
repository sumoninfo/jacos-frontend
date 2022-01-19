<template>
    <router-link :to="{ name: to_name}" class="ct-width-btn text-light bg-primary">
        {{ title }}
    </router-link>
</template>

<script>
export default {
    name : "ButtonAction",
    props: ['to_name', 'title', 'type']
}
</script>
