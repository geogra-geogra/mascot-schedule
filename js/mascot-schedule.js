import { updateScheduleCommon } from './schedule-detail.js?20231114';

let today = new Date();
today.setHours(0, 0, 0, 0);
let mascotData;

// Fetch mascot data first
fetch("../data/mascot.json?20231114")
    .then(response => response.json())
    .then(data => {
        mascotData = data;
    });

export function updateSchedule(year, month) {
    const startDate = new Date(year, month - 1, 1);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(year, month, 0); // monthの値は1-12のため、monthで次の月の1日を取得し、0日目（前の月の最後の日）をendDateとして取得します。
    endDate.setHours(23, 59, 59, 999);

    function mascotFilterCallbackWithDate(eventDate, event) {
        const characters = event.character.split('/');
        const item = mascotData.find(mascot => mascot.name === filename);

        return item
            && characters.some(character => character.trim() === item.search)
            && eventDate >= startDate
            && eventDate <= endDate;

    }


    updateScheduleCommon('mascot-schedule', mascotFilterCallbackWithDate);
}

