const currentDate = document.querySelector('.today');
const days = document.querySelector('.days');
prevNextIcon = document.querySelectorAll('.icon span');



let date = new Date();
currentYear = date.getFullYear();
currentMonth = date.getMonth();

// const months = Intl.DateTimeFormat('default',{month:'long'}).format(date);
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aguest', 'September', 'October', 'November', 'December']



const renderCalendar = () => {
    let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    let lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
    let lastDateOflastMonth = new Date(currentYear, currentMonth, 0).getDate();
    let liTag = '';

    for(let i = firstDayOfMonth ; i > 0 ; i--){
        liTag += `<li class='inactive'>${lastDateOflastMonth - i + 1 }</li>`
        }
    for(let i = 1; i<= lastDateOfMonth; i++){
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear()? 'active': '';
        liTag += `<li class = '${isToday}'>${i}</li>`
        }
    for(let i = lastDayOfMonth; i < 6 ; i++){
        liTag += `<li class='inactive'>${i - lastDayOfMonth + 1 }</li>`
    }
    currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
    days.innerHTML=liTag;

}
renderCalendar(); 

prevNextIcon.forEach( icon => {
    icon.addEventListener('click', () => {
        currentMonth = icon.id === 'prev' ? currentMonth -1 : currentMonth + 1;
         if(currentMonth < 0 || currentMonth > 11){
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
         }else {
            date = new Date();
         }
        renderCalendar()
    });    
});