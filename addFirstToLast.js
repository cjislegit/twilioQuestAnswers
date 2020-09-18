const addFirstToLast = (array) => {
	if(array.length === 0){return ''};
	let answer = array[0]  + array[array.length - 1];
	return answer;
}

console.log(addFirstToLast([]));
