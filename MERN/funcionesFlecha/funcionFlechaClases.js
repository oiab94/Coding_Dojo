/**
 * * Juego de barajas
 */
class Deck {
	constructor() {
		const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
    const faces = ['Ace', '2', '3', 
									 '4', '5', '6', 
									 '7', '8', '9', 
									 '10', 'Jack', 'Queen', 
									 'King'];
		const deck  = []
		
		// * Creación de una carta
		for (const suit of suits)
			for (const face of faces)
				deck.push(this.createCard(suit, face));
	

		// * Creación de una carta refactorizada
		suits.forEach(function (suit) {
			faces.forEach(function (face){
				deck.push(this.createCard(suit, face))
			});
		});


		// * Utilizando funciones flecha
		suits.forEach(
			suit => 
				{ faces.forEach(
						face => { deck.push(this.createCard(suit, face)) });
				}
		);

		this.deck = deck
	}
}