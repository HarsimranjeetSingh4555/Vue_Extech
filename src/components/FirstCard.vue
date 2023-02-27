<template>
        <div class="photo">
            <div class="pic-bg">
                <img src="../assets/Angular.png" class="pics" />
                <!-- <img src='pic' class="pics" /> -->
                <h6>{{name}}</h6>
            </div>

        </div>
</template>

<script>
export default {
    name: 'FirstCard',
    props: ['name', 'pic']
}
</script>

<style>
.photo {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
}

.pic-bg {
    background-color: #f6f6f6;
    margin: 15px;
    height: 200px;
    width: 145px;
    border-radius: 10px;
    box-shadow: -1px -6px 13px 4px rgb(0 0 0 / 10%);

}

.pic-bg:hover {
    background-color: white;
}

.pics {
    width: 70px !important;
    padding: 8px;
    margin: 9px;
}

h6 {
    font-size: 16px;
    font-weight: 600;
    margin: 25px 0 0;
    text-align: center;

}
</style>
