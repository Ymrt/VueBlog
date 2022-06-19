<template>
  <div v-if="isUp" class="login-view">
    <el-card class="box-card" >
    <el-form
    label-position="top"
    label-width="100px"
    :model="user"
    style="max-width: 600px">
    <el-form-item label="Name" prop="name">
      <el-input v-model="user.name" />
    </el-form-item>
    <el-form-item label="Password" prop="psd">
      <el-input v-model="user.psd" type="password" autocomplete="off"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm"
        >Submit</el-button
      >
      <el-button @click="cancelLogin">Reset</el-button>
    </el-form-item>
    </el-form>
    </el-card>
  </div>
  <div>
      <MenuButton id="menuBtn" @click="showInfo"></MenuButton>
      <el-drawer v-model="drawer"  :with-header="false" :direction="ltr" :before-close="handleClose">
        <el-avatar src="3f7ca39bdfa02b8a9ca8741fb7db6092.jpg" size = "large"/>
      </el-drawer>
      <NavigationTemplete id="nav"/>  
      <div id="content">
        <div></div>
          <router-view/>
        <div></div>
      </div>
    </div>
</template>

<script>
import NavigationTemplete from './components/Navigation.vue'
import MenuButton from  './components/MenuButton.vue'

export default {
  name: 'App',
  components: {
    NavigationTemplete,
    MenuButton
  },
  data(){
    return{
      drawer : false,
      ltr:'ltr',
      isUp:true,
      user:{
        name:"",
        psd:"",
      }
    }
  },
  methods:{
    showInfo(){
      this.drawer = true;
    },
    cancelLogin(){
      this.isUp = false;
      this.user.name="";
      this.user.psd="";
    },
    submitForm(){
      
    }
  }
}
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #f6f9fd;
}

#nav{
  width:100%;
  background: url('@/assets/images/v2-57a722b8df8e42f3e277a54f8e1cb194_r.jpg') no-repeat center;
  background-size:cover;
  height: 500px;
}

#content{
  display: flex;
  justify-content: space-between;
  height: 100vh;


}

#menuBtn{
  position: fixed;
  left: 20px;
  top:10px;
}

.box-card{
  height: 300px;
}
.login-view{
  width:100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  position:fixed;
  z-index: 2;
}
</style>
