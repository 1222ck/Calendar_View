<template>
    <div class="app">
        <Sidebar /> <!-- 메뉴 바 삽입 -->
        <div class="content">
            <!-- 나머지 컨텐츠 -->
            <Header></Header>
            <router-view></router-view>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>

import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
import Sidebar from './components/Sidebar.vue';

export default {
    name: 'App',
    components: {
        Sidebar,
        Header,
        Footer,
    }
}
</script>

<style>
.app {
    display: flex;
}

.content {
    flex: 1;
    padding: 20px;
}
</style>