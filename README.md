# blackjack-in-JS
BlackJack made in javascript, paste into web console for best results.



//////////////////////////////////////////////////////////

/*   RULES OF THE GAME:


Card Values: 

2 to 9 === respective values
10 , J , Q , K === 10
Ace === 1 OR 11 (up to card holder)

Terminology:

BlackJack === 21
Bust === over 21
Hit === deal extra card
Stay === keep cards, no more

Choices from Player:
- While under 21: Stay or Hit

Winning conditions:
- Get 21 on first two cards (blackJack)
- Reach a final score higher than the dealer without exceeding 21
- Let the dealer draw additional cards until his or her hand exceeds 21 (dealer must hit below 17)

Losing Conditions:
- Card values exceed 21 (bust)
- Dealer has less than 21 && higher score than you

A hand with an Ace has two values. They are:
- Soft value: Ace valued at 11, player can take another card risk free
- Hard value: Ace valued at 1, player potentially goes bust

Functions:

Deal(n) - A card is dealt, then said card is removed from Deck. Repeats (n) times.
HitorStay() - User is prompted, Enter "Stay" or "Hit". If Hit, Deal one card. Stay stops game.
Bust() - Check is players lowest value is higher than 21. If so dealer wins, else continue game
EvaluateCards() - Players Cards are added up. Dealers cards are dealt

//////////////////////////////////////////////////////////

METHOD

1. START - Deal() two random cards for user. These cards are removed from the deck.
		First two Cards are presented to the player. Evaluate the cards (if theres an Ace, give player two values: Hard and Soft values)
			If Value === 21: Blackjack! Go to Step 3


2.(Loop starts here) 
	STAY or HIT - Player chooses:

		HIT - Deal() another card, repeat until Stay or Bust
			  Each time Deal() is ran, EvaluateCards() and present value[s] to user.
				If lowest value > 21: Bust! Gameover
				If lowest value < 21: HitorStay()
				If value === 21: Blackjack! Go to Step 3

		STAY - Exit Loop. Value is worked out. If theres an Ace, highest value under 21 is selected.

3. When Stay is selected OR blackjack is hit:
	If Stay was chosen, select users highest value below 21. 

	Dealers cards are dealt, if:
		Highest value < 17: Deal() one card
		Value === 21: BlackJack
		Value > 21: Bust! User wins

4. Compare users selected Value with Dealers Value (dealers Ace is always 11). 
  	Play alert() with Game result

*/
//////////////////////////////////////////////////////////
