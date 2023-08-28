<template>
    <div class="sidebar">
        <ul>
            <li v-for="menu in menus" :key="menu.id" :value="menu.id">{menu.grpNm}</li>
            <!-- 여러 메뉴 항목 추가 -->
        </ul>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import {getMenus} from "@/api/menu/getMenus";

export default {
    setup() {
        const menus = ref([]);

        // 컴포넌트가 마운트되면 API 호출을 통해 옵션 데이터 가져오기
        onMounted(async () => {
            menus.value = await getMenus();
        });

        return {
            menus
        };
    }
};
</script>


<style>
.sidebar {
    width: 200px; /* 메뉴 바의 너비 */
    background-color: #f0f0f0;
    padding: 20px;
}

.sidebar ul {
    list-style-type: none;
    padding: 0;
}

.sidebar li {
    margin-bottom: 10px;
    cursor: pointer;
}
</style>
