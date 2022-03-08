const weakDays = [
	'Воскресенье',
	'Понедельник',
	'Вторник',
	'Среда',
	'Чеверг',
	'Пятница',
	'Суббота'
]
const months = [
	'Января',
	'Февраля',
	'Марта',
	'Апреля',
	'Мая',
	'Июня',
	'Июля',
	'Августа',
	'Сентября',
	'Октября',
	'Ноябрь',
	'Декабря'
]
function getDayInfo(d) {	
	let [day, month, year] = d.split('.');
	month--;
	const date = new Date(year, month, day);
	const conutWeakOfMonth =  Math.ceil(date.getDate() / 7);

	return `${weakDays[date.getDay()]}, ${conutWeakOfMonth} неделя ${months[date.getMonth()]} ${date.getFullYear()} года`

}

console.log(getDayInfo("01.01.2022"));
