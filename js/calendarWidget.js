function updateCalendarWidget() {
    const now = new Date();

    const days = [
        'SUNDAY',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
    ];

    const months = [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC',
    ];

    const dayName = days[now.getDay()];
    const dayNumber = now.getDate();
    const monthName = months[now.getMonth()];

    document.getElementById('calendarDay').textContent = dayName;
    document.getElementById('calendarDate').textContent = dayNumber;
    document.getElementById('calendarMonth').textContent = monthName;
}

// spusti hneď
updateCalendarWidget();

// aktualizácia každú minútu
setInterval(updateCalendarWidget, 60000);
