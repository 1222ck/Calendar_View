<script setup>
//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialSwitch from "@/components/MaterialSwitch.vue";
</script>
<template>
  <section class="py-9">
    <div class="container py-4">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1">
                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                  Sign in
                </h4>
                <div class="row mt-3">
                  <div class="col-2 text-center ms-auto">
                    <a class="btn btn-link px-3" href="javascript:;">
                      <i class="fa fa-facebook text-white text-lg"></i>
                    </a>
                  </div>
                  <div class="col-2 text-center px-1">
                    <a class="btn btn-link px-3" href="javascript:;">
                      <i class="fa fa-github text-white text-lg"></i>
                    </a>
                  </div>
                  <div class="col-2 text-center me-auto">
                    <a class="btn btn-link px-3" href="javascript:;">
                      <i class="fa fa-google text-white text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <!--form role="form" class="text-start" method="post">
                <div style="position: relative;">
                  <div class="input-group input-group-outline mb-3">
                    <input type="text" id="email" class="form-control form-control-md" placeholder="Email" v-model="email"/>
                  </div>
                </div>
                <div class="input-group input-group-outline mb-3">
                  <input type="password" id="password" class="form-control form-control-md" placeholder="Password" v-model="password"/>
                </div>
                <div class="text-center">
                  <button type="button" class="btn bg-gradient-success btn-md w-100 false my-4 mb-2" @click="loginSubmit">로그인</button>
                </div>
                <p class="mt-4 text-sm text-center">
                  Don't have an account?
                  <a href="/member/join" class="text-success text-gradient font-weight-bold">Sign up</a>
                </p>
              </form-->
              <form @submit.prevent="login">
                <input type="text" v-model="email" placeholder="Email">
                <input type="password" v-model="password" placeholder="Password">
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import {loginUser, registerUser} from '@/api/member/index';
import axios from "axios";
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async loginSubmit() {
      let saveData = {};
      saveData.email = this.email;
      saveData.password = this.password;

      try {
        const response = await loginUser(saveData);
        console.log(response);
        console.log(response.status);
        console.log(response.data);
        /*if (response.data.statusCode != '200') {
          alert(response.data.statusMessage);
          return false;
        }*/

        /*this.$axios
            .post("http://localhost:8080/api/member/login", JSON.stringify(saveData), {
              headers: {
                "Content-Type": `application/json`,
              },
            })
            .then((res) => {
              if (res.status === 200) {
                // 로그인 성공시 처리해줘야할 부분
                console.log(res);
              }
            });*/
      } catch (error) {
        console.error(error);
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.confirm_password = '';
      this.email = '';
      this.checkId = '0';
    },
    async login() {
      try {
        const response = await loginUser({
          email: this.email,
          password: this.password
        });

        console.log(response);

        if (response.status !== "200") {
          alert("로그인 실패");
          return false;
        }

        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        localStorage.setItem('expiresIn', response.data.expiresIn);
        location.href = '/';

        let now = new Date();
        let expiry = response.data.expiresIn - Number(now.getTime().toString().substr(0, 10));
        console.log(expiry);
      } catch (error) {
        console.error('로그인 실패', error);
      }
    }
  },
};
</script>