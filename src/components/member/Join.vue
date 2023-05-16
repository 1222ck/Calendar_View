<template>
  <section class="py-9">
    <div class="container py-4">
      <div class="row">
        <div class="col-lg-6 col-md-8 col-6 mx-auto">
          <div class="card">
            <div class="card-header">
              <h4 class="font-weight-bolder text-center mt-2 mb-0">회원가입</h4>
            </div>
            <div class="card-body">
              <form role="form" class="text-start" method="post" v-on:submit.prevent @submit.prevent="submitForm">
                <div style="position: relative;">
                  <div class="input-group input-group-outline mb-3" style="width:75%; float:left;">
                    <!-- v-model: data 속성과 연결 -->
                    <input type="text" id="email" class="form-control form-control-md" placeholder="Email" v-model="email"/>
                    <input type="hidden" id="checkId" name="checkId" v-model="checkId">
                  </div>

                  <button type="button" class="btn bg-gradient-success btn-md w-auto" style="float: right;" v-on:click="checkEmail"> 이메일 중복체크 </button>
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
                  <button class="btn bg-gradient-success btn-md w-100 false my-4 mb-2" type="submit">회원가입</button>
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
import {checkEmail, registerUser} from '@/api/member/index';
import axios from "axios";

export default {
  data() {
    return {
      // form
      username: '',
      password: '',
      confirm_password: '',
      email: '',
      checkId: '0',
      // log
      logMessage: '',
    };
  },
  methods: {
    checkEmail() {
      this.checkId = '0';

      if (this.email == '') {
        alert("이메일을 입력해주세요");
        //this.$refs.mail.focus();
        return false;
      }

      axios.get('/api/member/check-email', {
        params: {
          email: this.email
        }
      }).then((response) => {
          console.log(response);
          if (response.data.statusCode == '200') {
            this.checkId = '1';
            alert("사용가능한 이메일입니다.");
          } else {
            alert("사용 불가능한 이메일입니다.");
          }
      }).catch(function (error) {
          console.log(error);
          this.checkId = '0';
          alert("서버 오류!!");
      });
    },
    async submitForm() {
      if (!parseInt(this.checkId)) {
        alert("이메일 중복체크를 해주세요.");
        return false;
      }

      if (this.password != this.confirm_password) {
        alert("비밀번호를 확인해주세요.");
        return false;
      }

      // API 요청시 전달할 userData 객체
      const userData = {
        name: this.username,
        password: this.password,
        email: this.email,
      };
      const response  = await registerUser(userData);
      if (response.data.statusCode != '200') {
        alert(response.data.statusMessage);
        return false;
      }

      location.href = '/member/complete?email=' + response.data.email;

      console.log(response);

      // this.logMessage = `${data.username} 님이 가입되었습니다.`;

      // 가입 후 폼 초기화
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.password = '';
      this.confirm_password = '';
      this.email = '';
      this.checkId = '0';
    },
  },
};
</script>