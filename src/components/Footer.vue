<template>
    <footer>
        <div class="row">
            <div class="col-sm-6" >
                <div>
                    <a href="#">About us</a>
                </div>
                <div>
                    <a href="#">Contact us</a>
                </div>
            </div>
            <div class="col-sm-6">
                <div>
                    <a href="#">Careers</a>
                </div>
                <div>
                    <a href="#">Sitemap</a>
                </div>
            </div>
            <div class="col-xs-12 text-center">Foodie ©</div>
        </div>
    </footer>
</template>
<script>

</script>
<style lang="scss">
    $primary-color: #FCCB6F;
    $secondary-color: #E3B764;
    footer {
        position: relative;
        padding-left:15px;
        padding-right:15px;
        background-color: $primary-color;
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
                    background-color:$secondary-color;
                }
        }
    }
</style>