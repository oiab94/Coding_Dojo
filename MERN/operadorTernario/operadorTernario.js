// * Permite verificar si una función se puede pagar o no
let canAfford = 
		( itemPrice, accountBalance ) => {
			if ( itemPrice > accountBalance )
				return `Cannot afford! You are $${itemPrice - accountBalance} short`;
			return 'Can afford!';
		}


// * Utilizando declaración ternaria
let canAfford2 =
		(itemPrice, accountBalance) => {
			let aprobado 	= 'Can afford';
			let rechazado = `Cannot affor! You are $${itemPrice - accountBalance} short`;

			return itemPrice > accountBalance ? rechazado : aprobado;
		}
console.log(canAfford2(123, 120));