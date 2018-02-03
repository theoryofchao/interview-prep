function tripleStep(n) {
	if (n > 3) {
		return tripleStep(n-3) + tripleStep(3);
	} else if (n === 3) {
		return 4;
	} else if (n === 2) {
		return 2
	} else {
		return 1;
	}
}

console.log(tripleStep(4))