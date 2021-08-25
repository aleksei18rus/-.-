function startTime()
{
var tm=new Date();
var h=tm.getHours();
var m=tm.getMinutes();
var s=tm.getSeconds();
m=checkTime(m);
s=checkTime(s);
document.getElementById('timer').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);
var timOut = String(h)+ String(m);
/*document.getElementById('tam').innerHTML=timOut;*/
if ((timOut >=800) && (timOut < 830)) {
    document.getElementById('previous').textContent = "Подготовка к смене караулов.";
    document.getElementById('current').textContent = "Смена караулов.";
    document.getElementById('next').textContent = "Подготовка к занятиям, информационно - правовой час.";
}
if ((timOut >=830) && (timOut < 900)) {
    document.getElementById('previous').textContent = "Смена караулов.";
    document.getElementById('current').textContent = "Подготовка к занятиям, информационно правовой час.";
    document.getElementById('next').textContent = "Первый учебный час.";
}
if ((timOut >=900) && (timOut < 945)) {
    document.getElementById('previous').textContent = "Подготовка к занятиям, информационно правовой час.";
    document.getElementById('current').textContent = "Первый учебный час.";
    document.getElementById('next').textContent = "Перерыв 5 минут.";
}
if ((timOut >=945) && (timOut < 950)) {
    document.getElementById('previous').textContent = "Первый учебный час.";
    document.getElementById('current').textContent = "Перерыв 5 минут.";
    document.getElementById('next').textContent = "Второй учебный час.";
}
if ((timOut >=950) && (timOut < 1035)) {
    document.getElementById('previous').textContent = "Перерыв 5 минут.";
    document.getElementById('current').textContent = "Второй учебный час.";
    document.getElementById('next').textContent = "Перерыв 15 минут.";
}
if ((timOut >=1035) && (timOut < 1050)) {
    document.getElementById('previous').textContent = "Второй учебный час.";
    document.getElementById('current').textContent = "Перерыв 15 минут.";
    document.getElementById('next').textContent = "Третий учебный час.";
}
if ((timOut >=1050) && (timOut < 1135)) {
    document.getElementById('previous').textContent = "Перерыв 15 минут.";
    document.getElementById('current').textContent = "Третий учебный час.";
    document.getElementById('next').textContent = "Перерыв 5 минут.";
}
if ((timOut >=1135) && (timOut < 1140)) {
    document.getElementById('previous').textContent = "Третий учебный час.";
    document.getElementById('current').textContent = "Перерыв 5 минут.";
    document.getElementById('next').textContent = "Четверный учебный час.";
}
if ((timOut >=1140) && (timOut < 1225)) {
    document.getElementById('previous').textContent = "Перерыв 5 минут.";
    document.getElementById('current').textContent = "Четверный учебный час.";
    document.getElementById('next').textContent = "Подготовка к обеду.";
}
if ((timOut >=1225) && (timOut < 1230)) {
    document.getElementById('previous').textContent = "Четверный учебный час.";
    document.getElementById('current').textContent = "Подготовка к обеду.";
    document.getElementById('next').textContent = "Время приема пищи, обед.";
}
if ((timOut >=1230) && (timOut < 1330)) {
    document.getElementById('previous').textContent = "Подготовка к обеду.";
    document.getElementById('current').textContent = "Время приема пищи, обед.";
    document.getElementById('next').textContent = "Психологическая разгрузка.";
}
if ((timOut >=1330) && (timOut < 1345)) {
    document.getElementById('previous').textContent = "Время приема пищи, обед.";
    document.getElementById('current').textContent = "Психологическая разгрузка.";
    document.getElementById('next').textContent = "Пятый учебный час. ФП.";
}
if ((timOut >=1345) && (timOut < 1430)) {
    document.getElementById('previous').textContent = "Психологическая разгрузка.";
    document.getElementById('current').textContent = "Пятый учебный час. ФП.";
    document.getElementById('next').textContent = "Психологическая разгрузка.";
}
if ((timOut >=1430) && (timOut < 1435)) {
    document.getElementById('previous').textContent = "Пятый учебный час. ФП.";
    document.getElementById('current').textContent = "Перерыв.";
    document.getElementById('next').textContent = "Шестой учебный час. ПСП.";
}
if ((timOut >=1435) && (timOut < 1520)) {
    document.getElementById('previous').textContent = "Перерыв.";
    document.getElementById('current').textContent = "Шестой учебный час. ПСП.";
    document.getElementById('next').textContent = "Перерыв.";
}
if ((timOut >=1520) && (timOut < 1525)) {
    document.getElementById('previous').textContent = "Шестой учебный час. ПСП.";
    document.getElementById('current').textContent = "Перерыв.";
    document.getElementById('next').textContent = "Административно - хоз. мероприятия.";
}
if ((timOut >=1525) && (timOut < 1745)) {
    document.getElementById('previous').textContent = "Перерыв.";
    document.getElementById('current').textContent = "Административно - хоз. мероприятия.";
    document.getElementById('next').textContent = "Обслуживание ПТ, ПТВ, АСО.";
}
if ((timOut >=1745) && (timOut < 1845)) {
    document.getElementById('previous').textContent = "Административно - хоз. мероприятия.";
    document.getElementById('current').textContent = "Обслуживание ПТ, ПТВ, АСО.";
    document.getElementById('next').textContent = "Время приема пищи, ужин.";
}
if ((timOut >=1845) && (timOut < 1930)) {
    document.getElementById('previous').textContent = "Обслуживание ПТ, ПТВ, АСО.";
    document.getElementById('current').textContent = "Время приема пищи, ужин.";
    document.getElementById('next').textContent = "САМПО, изучение нормативных документов.";
}
if ((timOut >=1930) && (timOut < 2030)) {
    document.getElementById('previous').textContent = "Время приема пищи, ужин.";
    document.getElementById('current').textContent = "САМПО, изучение нормативных документов.";
    ocument.getElementById('next').textContent = "Резервное время НК.";
}
if ((timOut >=2030) && (timOut < 2130)) {
    document.getElementById('previous').textContent = "САМПО, изучение нормативных документов.";
    document.getElementById('current').textContent = "Резервное время НК.";
    document.getElementById('next').textContent = "Вечерний туалет.";
}
if ((timOut >=2130) && (timOut < 2200)) {
    document.getElementById('previous').textContent = "Резервное время НК.";
    document.getElementById('current').textContent = "Вечерний туалет.";
    document.getElementById('next').textContent = "Несение караульной службы в ночное время.";
}
if ((timOut >=2200) || (timOut < 600)) {
    document.getElementById('previous').textContent = "Вечерний туалет.";
    document.getElementById('current').textContent = "Несение караульной службы в ночное время.";
    document.getElementById('next').textContent = "Подъем.";
}
if ((timOut >=600) && (timOut < 601)) {
    document.getElementById('previous').textContent = "Несение караульной службы в ночное время.";
    document.getElementById('current').textContent = "Подъем.";
    document.getElementById('next').textContent = "Утренний туалет.";
}
if ((timOut >=601) && (timOut < 615)) {
    document.getElementById('previous').textContent = "Подъем.";
    document.getElementById('current').textContent = "Утренний туалет.";
    document.getElementById('next').textContent = "Физическая зарядка.";
}
if ((timOut >=615) && (timOut < 630)) {
    document.getElementById('previous').textContent = "Утренний туалет.";
    document.getElementById('current').textContent = "Физическая зарядка.";
    document.getElementById('next').textContent = "Время приема пищи, завтрак.";
}
if ((timOut >=630) && (timOut < 700)) {
    document.getElementById('previous').textContent = "Физическая зарядка.";
    document.getElementById('current').textContent = "Время приема пищи, завтрак.";
    document.getElementById('next').textContent = "Уход ПТ, ПТВ, АСО.";
}
if ((timOut >=700) && (timOut < 730)) {
    document.getElementById('previous').textContent = "Время приема пищи, завтрак.";
    document.getElementById('current').textContent = "Уход ПТ, ПТВ, АСО.";
    document.getElementById('next').textContent = "Подготовка к смене караулов.";
}
if ((timOut >=730) && (timOut < 800)) {
    document.getElementById('previous').textContent = "Уход ПТ, ПТВ, АСО.";
    document.getElementById('current').textContent = "Подготовка к смене караулов.";
    document.getElementById('next').textContent = "Смена караулов.";
}
}

function checkTime(i)
{
if (i < 10)
{
i="0" + i;
}
return i;
}

