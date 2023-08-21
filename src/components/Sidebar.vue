<template>
    <div class="sidebar">
        <ul>
            <li>메뉴 항목 1</li>
            <li>메뉴 항목 2</li>
            <!-- 여러 메뉴 항목 추가 -->
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
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
