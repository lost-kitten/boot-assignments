var hungerLevel = prompt("Are you hungry?(type 'yes' or 'no')");
console.log(hungerLevel);

if (hungerLevel === "no") {
    console.log("You don't seem hungry at the moment. Perhaps you should drink water to stay hydrated.");
  } else if (hungerLevel === "yes")  {
    var foodChoice = prompt("Are you looking for healthy food choices?(type 'yes' or 'no')");
    } if (foodChoice === "no") {
    var foodType = prompt("What type of food are you in the mood for? (Choices: Mexican, Italian, Chinese, Other)");
    } if (foodType === "Mexican") {
      var mexicanRestaurants = ["El Pato", " La Olla", " Arturo's Restaurant."];
      console.log("Your choices of Mexican restaurants include: " + mexicanRestaurants);
    } else if (foodType === "Italian") {
      var italianRestaurants = ["Olive Garden", " Johnny Carinos", "Russo's New York Pizzeria."]; 
      console.log("Your choices of Italian restaurants include: " + italianRestaurants);
    } else if (foodType === "Chinese") {
      var chineseRestaurants = ["Dai Tung", " Panda Express", " Lin's Grand Buffet."];
      console.log("Your choices of Chinese Restaurants include: " + chineseRestaurants);
    } else if (foodType === "Other") {
      var seafoodRestaurants = ["Mariscos El 7 Mar", " Red Lobster", " Pappadeux."];
      console.log("Maybe you are in the mood for seafood. Here are some seafood restaurant choices: " + seafoodRestaurants);
  } else if (foodChoice === "yes") {
    var healthyRestaurants = ["Subway", "Chik-fil-A"];
    var healthyChoice = prompt("Your choices include: " + healthyRestaurants + "Type in your choice: ");
        if (healthyChoice = "Subway") {
          var typeMeat = prompt("What kind of meat do you like in your sandwiches?(type 'beef', 'turkey', 'ham', 'chicken'.)");
          } if (typeMeat === "beef") {
            var beef = ["Roast Beef"];
            console.log("You should order the " + beef + " sub for lunch.");
          } else if (typeMeat === "turkey") {
            var turkey = ["Turkey Breast"];
            console.log("You should order the " + turkey + " sub for lunch.");
          } else if (typeMeat === "ham") {
            var ham = ["Black Forest Ham"];
            console.log("You should order the " + ham + " sub for lunch.");
          } else if (typeMeat === "chicken") {
            var chicken = ["Oven Roasted Chicken Sub", " Sweet Onion Chicken Teriyaki Sub", " Rotisserie Style Chicken Sub"];
            console.log("You should order the " + ham + " sub for lunch.");
          
       } else if (healthyChoice === "Chik-fil-A", "chik-fil-a", "chik fil a") {
         var menuItem = prompt("What are you in the mood for? Type in 'Salad;, 'Sandwhich', or 'other:");
           } if (menuItem === "Salad") {
             var salad = ["Grilled Market Salad", " Cobb Salad", " Asian Salad"];
             console.log("Your choice of salads from Chik-fil-A include:  " + salad);
           } else if (menuItem === "Sandwhich") {
    var sandwhich = prompt("Do you like your chicken to be spicy? Type 'yes' or 'no'.") ;
           }if (sandwhich === "no") {
             var notSpicy = [" Chicken Deluxe Sandwhich", " Chicken Sandwhich"];
             console.log("Your choice of chicken sandwhiches are " + notSpicy + ".");
           }else if (sandwhich ==="yes") {
             var spicy = ["Spicy Chicken Deluxe Sandwhich", "Spicy Chicken Sandwhich"];
           console.log("Your choice of chicken sandwhiches are " + spicy + ".");
           }
  }