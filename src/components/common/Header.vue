<template>
  <header>
    <!--h1><a href="#" class="logo"><img alt="Vue logo" src="../../assets/logo.png" width="80"></a></h1>
    <div class="menuWrap">
      <ul class="menu">
        <li><a href="javascript:;">메뉴1</a></li>
        <li><a href="javascript:;">메뉴2</a></li>
        <li><a href="javascript:;">메뉴3</a></li>
        <li><a href="javascript:;">메뉴4</a></li>
      </ul>
    </div-->

    <vm-container>
      <div class="row">
        <div class="col-sm">
          <span>One of three columns</span>
        </div>
        <div class="col-sm">
          <span>One of three columns</span>
        </div>
        <div class="col-sm">
          <span>One of three columns</span>
        </div>
      </div>
      <MaterialAvatar image="/src/assets/img/team-1.jpg" alt="Avatar" size="xxl" />
    </vm-container>


  </header>

</template>

<script>
import { defineComponent } from 'vue';
import { VmContainer } from 'vue3-material';
import MaterialAvatar from "@/components/MaterialAvatar.vue";
export default defineComponent({
  components: {
    MaterialAvatar,
    VmContainer,
  }
});
</script>

<style scoped>
header{width:100%; text-align:center; position:relative; height:120px; border-bottom:1px solid #35495e}
header h1{position:absolute; top:0; left:100px;}
header ul.menu:after{display:block; clear:both; content:'';}
header ul.menu{position:absolute; top:20px; right:50px;}
header ul.menu li{float:left; padding:10px 20px; list-style:none;}

a{text-decoration:none; color:#333;}
</style>