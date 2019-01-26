<template>
    <nav class="nav">
        <div class="lists">
            <a class="logo-wrapper" href="#"><img class="logo" src="https://dl.dropboxusercontent.com/s/42hawgg84mqxuy3/donut.png" /></a>
            <a href="#">Top Rating Food</a>
            <a href="#">nav2</a>
            <a href="#">nav3</a>
        </div>
        <section class="campaign-wrapper">
            <ul class="campaign-desktop">
                <li>
                    <span style="background-image: url('https://dl.dropboxusercontent.com/s/rf49i4kjj5t0wsa/foodie_campaign_1_desktop.jpg');">&nbsp;</span>
                </li>
                <li>
                    <span style="background-image: url('https://dl.dropboxusercontent.com/s/a5o40l3flpllhgp/foodie_campaign_2_desktop.jpg');">&nbsp;</span>
                </li>
                <li>
                    <span style="background-image: url('https://dl.dropboxusercontent.com/s/147ecvmtc14aa5e/foodie_campaign_3_desktop.jpg');">&nbsp;</span>
                </li>
            </ul>
            <ul class="campaign-mobile">
                <li>
                    <span style="background-image: url('https://dl.dropboxusercontent.com/s/l51ylpbprmurm71/foodie_campaign_1_mobile.jpg');">&nbsp;</span>
                </li>
                <li>
                    <span style="background-image: url('https://dl.dropboxusercontent.com/s/1m7f8hmyrm84a2u/foodie_campaign_2_mobile.jpg');">&nbsp;</span>
                </li>
                <li>
                    <span style="background-image: url('https://dl.dropboxusercontent.com/s/dlgx20zxaaapl89/foodie_campaign_3_mobile.jpg?dl=0');">&nbsp;</span>
                </li>
            </ul>
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
    $animation-delay: 4s;
    nav {
        position: relative;
        .lists {
            .logo-wrapper {
                padding:.5rem;
                cursor: pointer;
                .logo {
                    max-width:2rem;
                }
                &:hover {
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
                    border-bottom: 3px solid #fff;
                }
            }
        }
        .campaign-wrapper {
            text-align:center;
            height: 350px;
            .campaign-desktop {
                max-width: 1980px;
                width: 100%;
                display:block;
                li {
                    list-style: none;
                    z-index: 1;
                    &:nth-child(2) span {
                        animation-delay: $animation-delay;
                    }
                    &:nth-child(3) span {
                        animation-delay: $animation-delay * 2;
                    }
                    span {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        color: transparent;
                        background-size: cover;
                        background-position: 50% 50%;
                        opacity: 0;
                        animation: slideshow $animation-delay * 3 linear infinite 0s;
                        @media(max-width: 767px) {
                            background-position: 23% 50%;
                        }
                    }
                }
                @media(max-width:767px) {
                    display:none;
                }
            }
            .campaign-mobile {
                max-width: 768px;
                width: 100%;
                display:none;
                li {
                    list-style: none;
                    z-index: 1;
                    &:nth-child(2) span {
                        animation-delay: $animation-delay;
                    }
                    &:nth-child(3) span {
                        animation-delay: $animation-delay * 2;
                    }
                    span {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        color: transparent;
                        background-size: cover;
                        background-position: 50% 50%;
                        opacity: 0;
                        animation: slideshow $animation-delay * 3 linear infinite 0s;
                        @media(max-width: 767px) {
                            background-position: 23% 50%;
                        }
                    }
                }
                @media(max-width:767px) {
                    display:block;
                }
            }
        }

        @keyframes slideshow {
            0% {
                opacity: 0;
                animation-timing-function: ease-in;
            }
            12.5% {
                opacity: 1;
                animation-timing-function: ease-out;
            }
            25% {
                opacity: 1;
            }
            37.5% {
                opacity: 1;
            }
            50% {
                opacity: 0;
            }
            100% {
                opacity: 0;
            }
        }
        @keyframes fadeInBackground {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }
</style>