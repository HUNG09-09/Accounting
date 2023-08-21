<template>
    <div class="header">
        <div class="header__left">
            <div class="toggle"></div>
            <div class="logo"></div>
        </div>
        <div class="header__right">
            <div class="header-title">
                <div class="header__icon-tools"></div>
                <div class="header-slogan">CÔNG TY TNHH SẢN XUẤT - THƯƠNG MẠI - DỊCH VỤ QUÍ PHÚC</div>
                <div class="header-icon-down"></div>
            </div>
            <div class="header-profile">
                <div class="header-icon-notifi"></div>
                <div class="header-profile-icon"></div>
                <div class="header-profile-name">Nguyễn Sỹ Hùng</div>
                <div class="header-icon-down"></div>
            </div>
        </div>
    </div>  
</template>
<script>

export default {
    
}
</script>

<style scoped>
    /* header */
.header {
    display: flex;
    height: 56px;
    width: 100%;
    align-items: center;
}

/* header left */
.header__left {
    display: flex;
    width: 200px;
    height: 100%;
    background-color: #041434;
    box-sizing: border-box;
    align-items: center;
    /* column-gap: 16px; */
    padding: 0 16px;
}

.toggle {
    width: 24px;
    height: 24px;
    background: url(../../assets/img/Sprites.64af8f61.svg);
    background-repeat: no-repeat;
    background-position: -420px -88px;
}

.logo {
    margin-left: 16px;
    height: 36px;
    flex: 1;
    background-image: url(../../assets/img/Logo_Module_TiengViet_White.66947422.svg);
    background-size: contain;
    background-repeat: no-repeat;
    
}

.header__left-title {
    margin-left: 8px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
}

/* header right */
.header__right {
    display: flex;
    padding: 0 24px;
    height: 100%;
    flex: 1;
    align-items: center;
    justify-content: space-between;
}

.header-title {
    display: flex;
    height: 36px;
    align-items: center;
}

.header-icon-option {
    height: 36px;
    width: 36px;
    background-color: blueviolet;
}

.header-slogan {
    display: flex;
    height: 36px;
    align-items: center;
    margin-left: 24px;
    color: #212121;
    font-weight: 700;
}

.header-profile {
    display: flex;
    align-items: center;
}

.header-profile-name {
    font-weight: 700;
    color:#212121;
}

.header-icon-notifi {
    background-image: url(../../assets/img/Sprites.64af8f61.svg);
    background-repeat: no-repeat;
    background-position: -781px -24px;
    width: 36px;
    height: 36px;
    margin-right: 24px;
    cursor: pointer;
}

.header-profile-icon {
    height: 36px;
    width: 36px;
    background-image: url(../../assets/img/avatar-default.png);
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 8px;
    cursor: pointer;
}
</style>
