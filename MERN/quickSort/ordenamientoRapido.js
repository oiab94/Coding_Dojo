function swap (array, posIzq, posDer){
	let temp = array[posIzq];
	array[posIzq] = array[posDer];
	array[posDer] = temp;
}

function particion(array, posIzq, posDer){
	let pivot = array[Math.floor((posIzq + posDer) / 2)];
	let i = posIzq;
	let j = posDer;

	while (i <= j) {
		while(array[i] < pivot) i++;
		while(array[j] > pivot) j--;
		if (i <= j) {
			swap(array, i, j);
			i++;
			j--;
		}
	}

	return i;
}

function quickSort(array, posIzq, posDer){
	let index;

	if (array.length > 1) {
		index = particion(array, posIzq, posDer);

		if (posIzq < index - 1) {	// Indica que hay mas de dos elementos
			quickSort(array, posIzq, index - 1);
		}
		if (index < posDer) { // 
			quickSort(array, index, posDer);
		}
	}

	return array;
}


let array = [4, 3, 2, 1]
console.log(quickSort(array, 0 , array.length - 1));