<template>
    <nav class="nav">
        <div class="lists">
            <a href="#">this is nav</a>
            <a href="#">nav2</a>
            <a href="#">nav3</a>
        </div>
        <section class="campaign-wrapper">
            <img class="campaign" src="https://via.placeholder.com/1280x450" />
        </section>
    </nav>
</template>


<script>
    export default {
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
                console.log(window.scrollY);
                console.log('navHeight', navHeight);
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
        .lists {
            background-color: $primary-color;
            position: absolute;
            z-index: 1;
            width: 100%;
            -webkit-transition: background-color .5s; /* Safari */
            transition: background-color .5s;
            &.fixed {
                position:fixed;
                background-color: transparent;
            }
            a {
                color: #fff;
                text-shadow: 1px 1px 1px #000;
                display:inline-block;
                padding:1rem;
                text-decoration: none;
                cursor:pointer;
                font-weight:bold;
                opacity:.8;
                &:hover {
                    text-shadow: none;
                    opacity:1;
                    border-bottom: 3px solid #fff;
                }
            }
        }
        .campaign-wrapper {
            text-align:center;
            .campaign {
                max-width: 1280px;
                width: 100%;
            }
        }
    }
</style>