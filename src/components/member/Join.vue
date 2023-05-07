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
        <div class="col-lg-6 col-md-8 col-6 mx-auto">
          <div class="card">
            <div class="card-header">
              <h4 class="font-weight-bolder text-center mt-2 mb-0">
                Sign Up
              </h4>
            </div>
            <div class="card-body">
              <form role="form" class="text-start" method="post" v-on:submit.prevent @submit.prevent="submitForm">
                <div style="position: relative;">
                  <div class="input-group input-group-outline mb-3" style="width:80%; float:left;">
                    <!-- v-model: data 속성과 연결 -->
                    <input type="text" id="email" class="form-control form-control-md" placeholder="Email" v-model="email"/>
                  </div>
                  <MaterialButton variant="gradient" color="success" class="w-auto my-3" style="float: right;">
                    Check
                  </MaterialButton>
                </div>
                <div class="input-group input-group-outline mb-3">
                  <!-- v-model: data 속성과 연결 -->
                  <input type="text" id="username" class="form-control form-control-md" placeholder="Name" v-model="username"/>
                </div>
                <div class="input-group input-group-outline mb-3">
                  <!-- v-model: data 속성과 연결 -->
                  <input type="password" id="password" class="form-control form-control-md" placeholder="Password" v-model="password"/>
                </div>
                <div class="input-group input-group-outline mb-3">
                  <!-- v-model: data 속성과 연결 -->
                  <input type="password" id="confirm_password" class="form-control form-control-md" placeholder="Confirm Password" v-model="confirm_password"/>
                </div>

                <div class="text-center">
                  <MaterialButton
                      class="my-4 mb-2"
                      variant="gradient"
                      color="success"
                      fullWidth
                      type="submit"
                  >Sign Up</MaterialButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { registerUser } from '@/api/member/index';

export default {
  data() {
    return {
      // form
      username: '',
      password: '',
      confirm_password: '',
      email: '',
      // log
      logMessage: '',
    };
  },
  methods: {
    async submitForm() {
      // API 요청시 전달할 userData 객체
      const userData = {
        NAME: this.username,
        PASSWORD: this.password,
        E_MAIL: this.email,
      };
      const { data } = await registerUser(userData);

      this.logMessage = `${data.username} 님이 가입되었습니다.`;

      // 가입 후 폼 초기화
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.confirm_password = '';
      this.email = '';
    },
  },
};
</script>