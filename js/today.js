import { updateScheduleCommon } from './schedule-detail.js?20231114';

function todayFilterCallback(eventDate) {
    const now = new Date();
    return eventDate.getFullYear() === now.getFullYear() &&
        eventDate.getMonth() === now.getMonth() &&
        eventDate.getDate() === now.getDate();
}

window.onload = function () {
    updateScheduleCommon('today-schedule', todayFilterCallback);
};
