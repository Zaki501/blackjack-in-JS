(function BlackJack() {
    const one_suit = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    const card_deck = one_suit.concat(one_suit, one_suit, one_suit);
    const current_deck = card_deck;
 
    const players_hand = [];
    const players_values = []
    // values[0] = value;
    // values[1] = hardValue;
    // values[2] = softValue;
 
    const dealers_hand = [];
    const dealers_values = [];
 
 
    function randomCard() {
       return card_deck[Math.floor(Math.random() * current_deck.length)];
    }
 
    function ace_check(hand) {
       return hand.includes("A")
    }
    // use this later
    function ace_occurrence(hand) {
       return hand.filter((v) => (v === "A")).length;
    }
    function evaluate_hand(hand) {
       let total = 0;
       const n = hand.length;
       for (let i = 0; i < n; i++) {
          total += hand[i];
       }
       return (total);
    }
    function deal(n, hand) {
       //Give a random card, add it to Hand Array
       //After giving a card remove it from current_deck
       //repeat this n times
       for (n; n > 0; n--) {
          let chosenCard = randomCard();
 
          //add card to hand
          hand.push(chosenCard);
          //find and remove card
          const index = current_deck.indexOf(chosenCard);
          current_deck.splice(index, 1);
       }
       console.log("Hand is:", hand);
       return (hand);
    }
    function evaluateCards(hand, values) {
 
       if (ace_check(hand)) {
 
          (function alter_array() {
             //hardValue -> all aces === 1
             (function hard_value() {
                //check if this mutates hand_array
                let arr = hand.toString().replaceAll("A", 1).split(",").map(n => parseInt(n));
            //    console.log("hard hand:", arr);
                values[1] = evaluate_hand(arr);
            //    console.log("hard value:", values[1]);
             })();
 
             (function soft_value() {
                let holding_arr = hand.toString().replace("A", 11).split(",");
                let arr = holding_arr.toString().replaceAll("A", 1).split(",").map(n => parseInt(n));
         //       console.log("soft hand:", arr);
                values[2] = evaluate_hand(arr);
         //       console.log("soft value:", values[2])
             })();
 
          })();
          console.log(`Hard Value: ${values[1]}  Soft Value:${values[2]}`)
          return ([values[1], values[2]]);
 
       } else {
          values[0] = evaluate_hand(hand)
          console.log("value:", values[0])
          return (values[0]);
       }
    }
    function blackJack_check(hand, values) {
       if (values[0] > 21 || values[1] > 21) {
          console.log("Bust! You Lose.");
       } else
          if (values[0] === 21 || values[1] === 21 || values[2] === 21) {
             console.log("BlackJack! Comparing cards...");
             //deal dealers cards function
             play_dealers_cards(dealers_hand, dealers_values);
          } else {
             hitOrStay(hand, values)
 
          }
    }
    function hitOrStay(hand, values) {
       let players_result = Math.max.apply(Math, values.filter((number) => number <= 21))
       let answer = prompt(`Your best value is ${players_result}. Hit or Stay?`);
       console.log(`You chose: ${answer}`)
       if (answer.toLowerCase() == "hit") {
          deal(1, hand);
          evaluateCards(hand, values);
          blackJack_check(hand, values);
       }
       else
          if (answer.toLowerCase() == "stay") {
             play_dealers_cards(dealers_hand, dealers_values);
          } else {
             console.log("Please enter a valid answer.")
          }
    }
 
    function play_dealers_cards(hand, values) {
       deal(2, hand);
       evaluateCards(hand, values);
       //dealer < 17
       while ((values[0] < 17 || values[2] < 17)) {
          console.log("Dealer has less than 17: He takes another card...")
          deal(1, hand);
          evaluateCards(hand, values);
          if (isNaN(values)) {
             console.log("error! break loop...")
             break;
          }
       }
       //dealer > 21
       if (values[0] > 21 || values[1] > 21) {
          console.log("Dealers Bust! You win")
       } else {
          compare_values(players_hand, dealers_hand, players_values, dealers_values);
       }
    }
    function compare_values(players_hand, dealers_hand, players_values, dealers_values) {
       console.log(`Your hand: ${players_hand}`);
       console.log(`His hand: ${dealers_hand}`);
       console.log("Comparing results...")
       let players_result = Math.max.apply(Math, players_values.filter((number) => number <= 21));
       let dealers_result = Math.max.apply(Math, dealers_values.filter((number) => number <= 21));
       if (players_result === dealers_result) {
          console.log(`Draw! Both had ${players_result}`)
       } else
          if (dealers_result > players_result) {
             console.log(`Dealer Wins! He has ${dealers_result}, you have ${players_result}`)
          } else {
             console.log(`Player Wins! You have ${players_result}, he has ${dealers_result}`)
          }
    }
 
 
 
 (function game_starts_here() {
    deal(2, players_hand);
    evaluateCards(players_hand, players_values);
    blackJack_check(players_hand, players_values);
 })()
 
 
 
 
 })()
 