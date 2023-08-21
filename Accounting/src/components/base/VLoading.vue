<template>
    <div class="m-loading-overlay">
        <div class="m-loading-container">
            <div class="loading-rorate"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: "VLoading",
};
</script>

<style scoped>
.m-loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 15;
}

.m-loading-container {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    z-index: 300;
}

.loading-rorate {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 50%;
    background: transparent url('../../assets/loading.svg') no-repeat center;
    background-size: 100%;
    animation: rotate 1s linear infinite;
    z-index: 800;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>