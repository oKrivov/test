function conversionOfNumberSystem (value, base) {
	value = prompt().trim();
	base = prompt().trim();
	if(isNaN(value) || isNaN(base) || base < 2 || base > 32 || value === ''){
		return console.log('Некорректный ввод!');
	}

	return console.log((+value).toString(base));
}
// conversionOfNumberSystem();

function sumAndQuotientOfTwoNumbers(value1, value2) {
	value1 = +prompt().trim();
	value2 = +prompt().trim();
	if(value1 === '' || value2 === '' || value2 === 0 ||isNaN(value1) || isNaN(value2)){
		return console.log('Некорректный ввод!');
	} 
	
	return console.log(`Ответ: ${value1 + value2}, ${(value1 / value2)}`);
}

// sumAndQuotientOfTwoNumbers();

