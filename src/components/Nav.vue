<template>
    <nav class="nav">
        <div class="lists">
            <a class="logo-wrapper" href="#"><img class="logo" src="https://dl.dropboxusercontent.com/s/42hawgg84mqxuy3/donut.png" /></a>
            <a href="/">Top Rating Food</a>
            <a href="#">Restaurants</a>
            <a href="#">Food Blog</a>
        </div>
    </nav>
</template>
<script>
    export default {
        name: 'Nav',
        created: function() {
            window.addEventListener('scroll', this.onHandleScroll);
        },
        destroyed: function() {
            window.removeEventListener('scroll', this.onHandleScroll);
        },
        methods: {
            onHandleScroll: function(event) {
                const nav = event.target.querySelector('.nav .lists');
                const navHeight = event.target.querySelector('.nav .lists').offsetHeight;
                const body = event.target.querySelector('body');
                if (window.scrollY >= navHeight) {
                    nav.classList.add('fixed');
                } else {
                    nav.classList.remove('fixed');
                }
            }
        }
    }
</script>

<style lang="scss">
    $primary-color: #FCCB6F;
    $secondary-color: #E3B764;
    nav {
        position: relative;
        z-index:2;
        .lists {
            .logo-wrapper {
                padding:.5rem;
                cursor: pointer;
                .logo {
                    max-width:2rem;
                }
                &:hover {
                    background-color: transparent;
                    border-bottom: none;
                }
            }
            background-color: transparent;
            position: absolute;
            z-index: 1;
            width: 100%;
            -webkit-transition: opacity .5s; /* Safari */
            transition: opacity .5s;

            @media(max-width: 767px) {
                position: relative;
                background-color: $primary-color;
            }
            &.fixed {
                opacity:1;
                box-shadow: none;
                position:fixed;
                background-color: $primary-color;
            }
            a {
                color: #fff;
                text-shadow: 1px 1px 1px #000;
                display:inline-block;
                padding:1rem;
                text-decoration: none;
                cursor:pointer;
                font-weight:700;
                vertical-align: middle;
                &:hover {
                    text-shadow: none;
                    opacity:1;
                    background-color: $secondary-color;
                }
            }
        }
    }
</style>