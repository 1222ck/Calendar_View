<template>
  <div class="fixed inset-0 grid place-items-center z-50">
    <div
      class="modal-container bg-gray-100 w-4/5 h-4/6 lg:h-5/6 rounded-xl shadow-sm border overflow-y-hidden"
    >
      <div class="modal-header w-full h-[14%]">
        <slot name="header">
          <div
            class="w-full flex justify-between items-center border-b-2 py-2 md:py-3"
          >
            <div class="w-2/3 pl-4">
              <h4 class="text-xl lg:text-2xl text-left font-semibold">
                {{ modalWeekDay + " " + modalDate.getDate() }}
                <span class="font-medium text-sm lg:text-base">
                  {{ modalShortMonth }}</span
                >
              </h4>
            </div>
            <div class="w-1/3 pr-3" align="right">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </slot>
      </div>

      <div class="modal-body h-[72%] overflow-y-scroll transition-none">
        <slot name="body">
          <div class="h-full w-full px-1 md:px-5">
            <div class="w-full flex space-x-2 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 text-purple-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 class="text-xl md:text-xl font-medium">
                  <b>일정 만들기</b>
                </h4>
              </div>
            </div>

            <div>
                <h5 class="text-left text-s md:text-base pl-2 uppercase">제목 :
                  <input id="title" placeholder="제목과 이름은 여기"/>
                </h5>
            </div>

            <div>
              <h5 class="text-left text-s md:text-base pl-2 uppercase">날짜 :
                <div>
                <Datepicker
                    v-model="start_date"
                    auto-apply
                    @update:modelValue="handleStartDate"
                    id="start_date" style="width:200px; float:left"></Datepicker>
                </div>
                <div style="float:left">&nbsp;~&nbsp;</div>
                <div>
                <Datepicker
                    v-model="end_date"
                    auto-apply
                    @update:modelValue="handleEndDate"
                    id="end_date" style="width:200px; float: left"></Datepicker>
                </div>
              </h5>
            </div>
            <div>
              <h5 class="text-left text-s md:text-base pl-2 uppercase">하루 종일 :
                <input id="allDateYN" type="checkbox" v-model="agreement">
              </h5>
            </div>

            <div>
              <h5 class="text-left text-s md:text-base pl-2 uppercase">장소 :
                <input id="location" placeholder="장소는 여기"/>
              </h5>
            </div>

            <div>
              <h5 class="text-left text-s md:text-base pl-2 uppercase">내용 : </h5>
              <textarea id="content" style="width : 500px; height : 200px;" placeholder="다이어리 내용"></textarea>
            </div>

            <div class="w-full mt-5">
              <div
                v-for="event in events"
                @click="eventClick($event, event)"
                class="w-full px-1 md:px-4 py-2 md:py-4 flex space-x-3 md:space-x-5 items-center cursor-pointer border lg:border-none rounded hover:shadow-md hover:bg-slate-300 transition-colors"
              >
                <div class="w-2/6 md:w-1/6">
                  <h2 class="text-xl md:text-2xl font-medium">
                    <span>{{
                      formatTime(event.time.start).substring(0, 5)
                    }}</span>
                    <!-- <br class="md:hidden" /> -->
                    <span class="text-xs uppercase">{{
                      formatTime(event.time.start).slice(-2)
                    }}</span>
                  </h2>
                </div>
                <div
                  class="w-4/6 md:w-5/6 border-l-4 border-purple-600 rounded overflow-x-hidden"
                >
                  <div class="w-full">
                    <p
                      class="tracking-tight text-clip text-left overflow-hidden text-sm md:text-base font-medium pl-2 whitespace-nowrap"
                    >
                      {{ event.title }}
                    </p>
                  </div>
                  <div>
                    <h5 class="text-left text-xs md:text-base pl-2 uppercase">
                      {{ formatTime(event.time.start) }} -
                      {{ formatTime(event.time.end) }}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </slot>
      </div>

      <div
        class="modal-foooter w-full flex justify-center items-center h-[14%]"
      >
        <slot name="footer">
          <div class="flex space-x-1 items-center">
            <div>
              <h3 class="text-sm md:text-base font-medium font-semibold hover:rotate-90 transition-all duration-700 cursor-pointer"
                  @click="submitModal()">submit</h3>
            </div>
            <div>
              <h3 class="text-sm md:text-base font-medium font-semibold hover:rotate-90 transition-all duration-700 cursor-pointer"
                  @click="$emit('closeModal')">close</h3>
            </div>
            <div class="font-semibold hover:rotate-90 transition-all duration-700 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, defineEmits, defineProps } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useCalendarStore } from "../../stores/calendar";
import axios from 'axios';

/**************************************
 * PROPS
 * ************************************
 */
const props = defineProps({
  day: {
    type: Number,
    required: true,
  },
  month: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  events: {
    type: Object,
    required: true,
  },
});

/**************************************
 * EMITS
 * ************************************
 */
const emit = defineEmits(["togglePopover"]);
const eventClick = (evt, event) => {
  emit("togglePopover", evt, event);
};

// Component state
const start_date = ref();
const end_date = ref();
const agreement = ref();
const modalDate = ref(new Date());
const calendarStore = useCalendarStore();
const handleStartDate = (modelData) => {
  start_date.value = modelData;

  calendarStore.setMonth(start_date.value.getMonth());
  calendarStore.setYear(start_date.value.getFullYear());

  // do something else with the data
};

const handleEndDate = (modelData) => {
  end_date.value = modelData;

  calendarStore.setMonth(end_date.value.getMonth());
  calendarStore.setYear(end_date.value.getFullYear());
}

const modalWeekDay = computed(() =>
  new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(modalDate.value)
);
const modalShortMonth = computed(() =>
  new Intl.DateTimeFormat("en-US", { month: "short" }).format(modalDate.value)
);

/**
 * Format date from year, month and day prop
 */
const getDisplayDate = () => {
  modalDate.value = new Date(props.year, props.month, props.day);
};

// const getTodaysDate = computed(() =>
//   new Intl.DateTimeFormat("en-US", {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   }).format(new Date())
// );

/**
 * Re-format given time string
 * @param {string} timeStr The time string to reformat
 *
 * @return The formatted time string
 */
const formatTime = (timeStr) => {
  let rearrangedTimeStr = timeStr.replace(" ", "T");

  let constructedTime = new Date(rearrangedTimeStr + ":00");
  return constructedTime.toLocaleTimeString();
};

const submitModal = () => {
  let title = document.querySelector("#title").value;
  let sDate = start_date.value;
  let eDate = end_date.value;
  let AllDate = false
  let location = document.querySelector("#location").value;
  let content = document.querySelector("#content").value;

  if(agreement.value == true){
    AllDate = true;
  }

  let data = {
    title : title,
    sDate : sDate,
    eDate : eDate,
    AllDate : AllDate,
    location : location,
    content : content
  };


  //axios로 ajax post 사용하기
  axios.post('localhost:8080/api/calendar/diaryRegister', data).then((result) => {
    console.log(result);
  })

}

/************************************************************************
 *  LIFECYCLE HOOKS
 * **********************************************************************
 */
onMounted(() => {
  getDisplayDate();
});
</script>
