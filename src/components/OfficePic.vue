<template>


<div class="m-p-g">
	<div class="m-p-g__thumbs" data-google-image-layout data-max-height="350">
		<img src="../assets/r1.jpg"  class="m-p-g__thumbs-img" />
		<img src="../assets/r2.jpg"   class="m-p-g__thumbs-img" />
		<img src="../assets/r3.jpg"  data-full="http://unsplash.it/1100/840?image=885" class="m-p-g__thumbs-img" />
		<img src="../assets/r4.jpg"  data-full="http://unsplash.it/1300/900?image=823" class="m-p-g__thumbs-img" />
		<img src="../assets/r5.jpg"  data-full="http://unsplash.it/1200/700?image=815" class="m-p-g__thumbs-img" />
		<img src="../assets/r6.jpg"  data-full="http://unsplash.it/1120/1000?image=677" class="m-p-g__thumbs-img" />
		<img src="../assets/r7.jpg"  data-full="http://unsplash.it/1340/820?image=401" class="m-p-g__thumbs-img" />
        <img src="../assets/r3.jpg"  data-full="http://unsplash.it/1100/840?image=885" class="m-p-g__thumbs-img" />
		<img src="../assets/r4.jpg"  data-full="http://unsplash.it/1300/900?image=823" class="m-p-g__thumbs-img" />
		<img src="../assets/r5.jpg"  data-full="http://unsplash.it/1200/700?image=815" class="m-p-g__thumbs-img" />
		
	</div>

	<div class="m-p-g__fullscreen"></div>
</div>

</template>

<script>
export default {
    name: 'OfficePic'
}
</script>

<style>
html,
.m-p-g__thumbs-img{
    height:270px
}
body {
    width: 100%;
    height: 100%;
}

.container {
    padding: 75px 0;
    margin: 0 auto;
    width: 1140px;
}

h1 {
    position: relative;
    margin-bottom: 45px;
    font-family: 'Oswald', sans-serif;
    font-size: 44px;
    text-transform: uppercase;
    color: #424242;
}

.gallery-wrap {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70vh;
}

.item {
    flex: 1;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: none;
    transition: flex 0.8s ease;

    &:hover {
        flex: 7;
    }
}
.social {
    position: absolute;
    right: 35px;
    bottom: 0;

    img {
        display: block;
        width: 32px;
    }
}
</style>
