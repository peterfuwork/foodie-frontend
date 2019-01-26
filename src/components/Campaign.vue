<template>
    <section class="campaign-wrapper">
        <ul class="campaign-ul">
            <li>
                <img class="campaign-desktop" src="https://dl.dropboxusercontent.com/s/rf49i4kjj5t0wsa/foodie_campaign_1_desktop.jpg" />
            </li>
            <li>
                <img class="campaign-desktop" src="https://dl.dropboxusercontent.com/s/rf49i4kjj5t0wsa/foodie_campaign_1_desktop.jpg" />
            </li>
            <li>
                <img class="campaign-desktop" src="https://dl.dropboxusercontent.com/s/rf49i4kjj5t0wsa/foodie_campaign_1_desktop.jpg" />
            </li>
        </ul>
        <img class="campaign-mobile" src="https://dl.dropboxusercontent.com/s/l51ylpbprmurm71/foodie_campaign_1_mobile.jpg" />
    </section>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">
    $animation-delay: 4s;
    .campaign-wrapper {
            text-align:center;
            max-width: 1980px;
            width: 100%;
            display:block;
            position:relative;
            .campaign-ul {
                display:inline-block;
                li {
                    list-style: none;
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    &:nth-child(2) img {
                        animation-delay: $animation-delay;
                    }
                    &:nth-child(3) img {
                        animation-delay: $animation-delay * 2;
                    }
                    .campaign-desktop {
                        width: 100%;
                        
                        color: transparent;
                        opacity: 0;
                        animation: slideshow $animation-delay * 3 linear infinite 0s;
                        @media(max-width:767px) {
                            display:none;
                        }
                    }
                }
            }
            .campaign-mobile {
                max-width: 768px;
                width: 100%;
                display:none;
                @media(max-width:767px) {
                    display:block;
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