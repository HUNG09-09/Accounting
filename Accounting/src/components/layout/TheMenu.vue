<template>
    <div class="sidebar">
                <!-- nav top -->
                <div class="nav">
                    <router-link to="/" class="nav-item ">
                        <div class="nav__icon"></div>
                        <div class="nav__text">Tổng quan</div>
                    </router-link>
                    <router-link to="/customer" class="nav-item">
                        <div class="nav__icon"></div>
                        <div class="nav__text">Khách hàng</div>
                    </router-link>
                    <router-link to="/" class="nav-item">
                        <div class="nav__icon"></div>
                        <div class="nav__text">Báo cáo</div>
                    </router-link>
                    <router-link to="/employee" class="nav-item">
                        <div class="nav__icon"></div>
                        <div class="nav__text">Mua hàng</div>
                    </router-link>
                    <router-link to="/" class="nav-item">
                        <div class="nav__icon"></div>
                        <div class="nav__text">Bán hàng</div>
                    </router-link>
                    <router-link to="/" class="nav-item ">
                        <div class="nav__icon"></div>
                        <div class="nav__text">Quản lý hóa đơn</div>
                    </router-link>
                    <router-link to="/" class="nav-item">
                        <div class="nav__icon"></div>
                        <div class="nav__text">Kho</div>
                    </router-link>
                    <router-link to="/" class="nav-item">
                        <div class="nav__icon"></div>
                        <div class="nav__text">Công cụ dụng cụ</div>
                    </router-link>
                    <router-link to="/" class="nav-item">
                        <div class="nav__icon"></div>
                        <div class="nav__text">Tài sản cố định</div>
                    </router-link>
                    <router-link to="/" class="nav-item">
                        <div class="nav__icon"></div>
                        <div class="nav__text">Thuế</div>
                    </router-link>
                    <router-link to="/" class="nav-item">
                        <div class="nav__icon"></div>
                        <div class="nav__text">Giá thành</div>
                    </router-link>
                    <router-link to="/" class="nav-item">
                        <div class="nav__icon"></div>
                        <div class="nav__text">Tổng hợp</div>
                    </router-link>
                    <router-link to="/" class="nav-item">
                        <div class="nav__icon"></div>
                        <div class="nav__text">Ngân sách</div>
                    </router-link>
                    <router-link to="/" class="nav-item">
                        <div class="nav__icon"></div>
                        <div class="nav__text">Báo cáo</div>
                    </router-link>
                    <router-link to="/" class="nav-item ">
                        <div class="nav__icon"></div>
                        <div class="nav__text">Phân tích tài chính</div>
                    </router-link>
                </div>
        
                <!-- nav buttom -->
                <!-- <div class="nav-action">
                    <div class="nav-item">
                        <div class="nav__icon-back"></div>
                        <div class="nav__text">Thu gọn</div>
                    </div>
                </div> -->
            </div>
</template>

<script>
export default {
    name:"TheSidebar"
}
</script>

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    background-color: #041434;
    min-width: 200px;
    height: calc(100vh - 56px);
    overflow: hidden;
}

.nav {
    flex: 1;
    padding: 20px 12px;
}

.nav-item {
    border-radius: 4px;
    color: #869AB8;
    height: 44px;
    padding: 0 12px;
    column-gap: 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    text-decoration: none;
}

/* menu được chọn */
.nav-item--active {
    background-color: #213253;
    color: #fff;
}

.nav-item:hover {
    background-color: #213253;
    color: #fff;
}
.nav-item:focus {
    background-color: #213253;
    color: #fff;
}

.nav-item + .nav-item {
    margin-top: 4px;
}

.nav__icon {
    width: 24px;
    height: 24px;
}

.nav-action {
    display: flex;
    align-items: center;
    border-top: 1px solid #213553;
    height: 44px;
    width: 100%;
}
</style>