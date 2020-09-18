let scan = (x) => {
let contraband = 0;
	x.forEach((i) => {
		if(i === 'contraband'){
			contraband++;
		}
	})
return contraband;
}
