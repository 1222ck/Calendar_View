<template>
    <div class="container">
        <h1>그룹 추가</h1>
        <form @submit.prevent="grpCreateEvent">
            <div class="form-group">
                <label for="grpNm">그룹 이름:</label>
                <input type="text" id="grpNm" v-model="event.grpNm" required />
            </div>
            <input type="hidden" id="regUserId" v-model="event.regUserId" />
            <button type="submit">저장</button>
        </form>
    </div>
</template>

<script>
import {createGrp} from "@/api/calendar/groupCreate";

export default {
    data() {
        return {
            event: {
                grpNm: '',
                leaderId: '',
            },
        };
    },
    methods: {
        async grpCreateEvent() {
            // API 요청시 전달할 userData 객체
            const paramData = {
                grpNm: this.event.grpNm,
                leaderId: this.event.leaderId,

            };
            const { data } = await createGrp(paramData);

            this.logMessage = `${data.grpNm} 등록`;

            // 가입 후 폼 초기화
            this.initForm();
        },
        initForm() {
            this.event.grpNm = '';
            this.event.leaderId = '';

        },
    },
};
</script>

<style>
.container {
    max-width: 400px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 10px;
}

label {
    display: block;
}

button {
    margin-top: 10px;
}
</style>
