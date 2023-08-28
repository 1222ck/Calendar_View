<template>
    <div class="container">
        <h1>일정 추가</h1>
        <form @submit.prevent="saveEvent" style="margin-top: 100px">
            <div class="form-group">
                <label for="title">제목:</label>
                <input type="text" id="title" v-model="event.title" required />
            </div>
            <div class="form-group">
                <label for="sDate">시작 날짜:</label>
                <input type="text" id="sDate" v-model="event.sDate" required />
            </div>
            <div class="form-group">
                <label for="sDate">시작 시간:</label>
                <input type="time" id="sDateTime" v-model="event.sDateTime" required />
            </div>
            <div class="form-group">
                <label for="eDate">종료 날짜:</label>
                <input type="text" id="eDate" v-model="event.eDate" required />
            </div>
            <div class="form-group">
                <label for="end-time">종료 시간:</label>
                <input type="time" id="eDateTime" v-model="event.eDateTime" required />
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
                diaryId: 1,
                title:"title1",
                contents:"contents1",
                sDateYear:"sDateYear1",
                sDateMonth:"sDateMonth1",
                sDateDay:"sDateDay1",
                sDateTime:"sDateTime1",
                eDateYear:"eDateYear1",
                eDateMonth:"eDateMonth1",
                eDateDay:"eDateDay1",
                eDateTime:"eDateTime1",
                allDayYn:"N",
                color:"#000000",
                place:"place1",
                regUserId:"userId1",
                regDate: "11111111",
            },
        };
    },
    methods: {
        async saveEvent() {
            // API 요청시 전달할 userData 객체
            const paramData = {
                diaryId: this.event.diaryId ?? 1,
                title:this.event.title ?? "",
                contents:this.event.contents ?? "",
                sDateYear:this.event.sDate.substr(0,4) ?? "",
                sDateMonth:this.event.sDate.substr(4,2) ?? "",
                sDateDay:this.event.sDate.substr(6,2) ?? "",
                sDateTime:this.event.sDateTime ?? "",
                eDateYear:this.event.eDate.substr(0,4) ?? "",
                eDateMonth:this.event.eDate.substr(4,2) ?? "",
                eDateDay:this.event.eDate.substr(6,2) ?? "",
                eDateTime:this.event.eDateTime ?? "",
                allDayYn:this.event.allDayYn ?? "N",
                color:this.event.color ?? "#000000",
                place:this.event.place ?? "",
                regUserId:this.event.regUserId ?? "",
                regDate: this.event.regDate ?? "",
            };
            const { data } = await insertDiary(paramData);

            this.logMessage = `${data.title} 등록`;

            // 가입 후 폼 초기화
            this.initForm();
        },
        initForm() {
            this.event.diaryId = 0;
            this.event.title = "";
            this.event.contents = "";
            this.event.sDateYear = "";
            this.event.sDateMonth = "";
            this.event.sDateDay = "";
            this.event.sDateTime = "";
            this.event.eDateYear = "";
            this.event.eDateMonth = "";
            this.event.eDateDay = "";
            this.event.eDateTime = "";
            this.event.allDayYn = "N";
            this.event.color = "#000000";
            this.event.place = "";
            this.event.regUserId = "";
            this.event.regDate = "";
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
