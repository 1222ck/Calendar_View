<template>
    <div class="container">
        <h1>일정 추가</h1>
        <form @submit.prevent="saveEvent">
            <div class="form-group">
                <label for="title">제목:</label>
                <input type="text" id="title" v-model="event.title" required />
            </div>
            <div class="form-group">
                <label for="sDate">시작 시간:</label>
                <input type="time" id="sDate" v-model="event.sDate" required />
            </div>
            <div class="form-group">
                <label for="end-time">종료 시간:</label>
                <input type="time" id="eDate" v-model="event.eDate" required />
            </div>
            <div class="form-group">
                <label for="allDayYn">하루 종일:</label>
                <input type="checkbox" id="allDayYn" v-model="event.allDayYn" />
            </div>
            <div class="form-group">
                <label for="place">장소:</label>
                <input type="text" id="place" v-model="event.place" />
            </div>
            <div class="form-group">
                <label for="color">색상:</label>
                <input type="color" id="color" v-model="event.color" />
            </div>
            <input type="hidden" id="grpId" v-model="event.grpId" />
            <input type="hidden" id="regUserId" v-model="event.regUserId" />
            <button type="submit">저장</button>
        </form>
    </div>
</template>

<script>
import {insertDiary} from "@/api/calendar/diaryRegister";

export default {
    data() {
        return {
            event: {
                title: '',
                sDate: '',
                eDare: '',
                allDayYn: false,
                place: '',
                color: '#000000',
                grpId: 1,
                regUserId: 'kchoi',
            },
        };
    },
    methods: {
        async saveEvent() {
            // API 요청시 전달할 userData 객체
            const paramData = {
                title: this.event.title,
                sDate: this.event.sDate,
                eDate: this.event.eDate,
                allDayYn: this.event.allDayYn,
                place: this.event.place,
                color: this.event.color,
                grpId: this.event.grpId,
                regUserId: this.event.regUserId,
            };
            const { data } = await insertDiary(paramData);

            this.logMessage = `${data.title} 등록`;

            // 가입 후 폼 초기화
            this.initForm();
        },
        initForm() {
            this.event.title = '';
            this.event.sDate = '';
            this.event.eDate = '';
            this.event.allDayYn = false;
            this.event.place = '';
            this.event.color = '#000000';
            this.event.grpId = 1;
            this.event.regUserId = 'kchoi';
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
