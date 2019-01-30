<template>
    <div class="search-wrapper">
        <form class="form">
            <input @input="onSearch" class="search" type="text" placeholder="search" />
        </form>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
    export default {
        computed: mapGetters(['search']),
        methods:  mapActions(['onSearch']),
        name: 'SearchBar'
    }
</script>

<style lang="scss">
    .search-wrapper {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 350px;
        font-size: 2rem;
        .form {
            .search {
                width:100%;
                padding:.5rem;
            }
            @media(max-width:767px) {
                margin: 0 1rem;
            }
        }
        
    }
</style>