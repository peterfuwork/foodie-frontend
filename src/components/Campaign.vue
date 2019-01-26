<template>
    <section class="campaign-wrapper">
        <SearchBar @termChange="onTermChange"></SearchBar>
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
</template>
<script>
import SearchBar from './Search.vue';
export default {
  name: 'Campaign',
  components: {
    SearchBar
  },
  methods: {
      onTermChange: function(searchTerm) {
          console.log(searchTerm);
      }
  }
}
</script>
<style lang="scss">
    $animation-delay: 4s;
    .campaign-wrapper {
        position: relative;
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
                    background-color:#333;
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