<template>
    <footer>
        <div class="row">
            <div class="col-sm-4" >
                <div>
                    <a href="#">Footer</a>
                </div>
                <div>
                    <a href="#">Footer</a>
                </div>
                <div>
                    <a href="#">Footer</a>
                </div>
            </div>
            <div class="col-sm-4" >
                <div>
                    <a href="#">Footer</a>
                </div>
                <div>
                    <a href="#">Footer</a>
                </div>
            </div>
            <div class="col-sm-4" >
                <div>
                    <a href="#">Footer</a>
                </div>
                <div>
                    <a href="#">Footer</a>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>

</script>
<style lang="scss">
    $primary-color: #FCCB6F;
    footer {
        position: relative;
        padding-left:15px;
        padding-right:15px;
        background-color: $primary-color;
            a {
                color: #fff;
                display:inline-block;
                padding:1rem;
                text-decoration: none;
                font-weight:bold;
                &:hover {
                    text-decoration: underline;
                }
        }
    }
</style>