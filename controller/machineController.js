exports.machineRoute = (req, res) => {
    const reel1 = ["🍒", "🍋", "🍎", "🍋", "🍌", "🍌", "🍋", "🍋"];
    const reel2 = ["🍋", "🍎", "🍋", "🍋", "🍒", "🍎", "🍌", "🍋"];
    const reel3 = ["🍋", "🍎", "🍋", "🍎", "🍒", "🍋", "🍌", "🍋"];

    const spinCost = 1;
    const initialCoins = req.params.coins;
    
    let coins = initialCoins;
    
    // Spin the reels
    const result1 = reel1[Math.floor(Math.random() * reel1.length)];
    const result2 = reel2[Math.floor(Math.random() * reel2.length)];
    const result3 = reel3[Math.floor(Math.random() * reel3.length)];
    
    // Check for winning combinations
    let winnings = 0;
    
    if (result1 === "cherry" && result2 === "cherry" && result3 === "cherry") {
      winnings = 50;
    } else if (result1 === "cherry" && result2 === "cherry") {
      winnings = 40;
    } else if (result1 === "apple" && result2 === "apple" && result3 === "apple") {
      winnings = 20;
    } else if (result1 === "apple" && result2 === "apple") {
      winnings = 10;
    } else if (result1 === "banana" && result2 === "banana" && result3 === "banana") {
      winnings = 15;
    } else if (result1 === "banana" && result2 === "banana") {
      winnings = 5;
    } else if (result1 === "lemon" && result2 === "lemon" && result3 === "lemon") {
      winnings = 3;
    }
    
    // Update the remaining coins
    coins -= spinCost;
    coins += winnings;
    
    // Return the result
    res.send ({
      result1,
      result2,
      result3,
      coins
    });
};

  
  // Example usage
  //const spinResult = spinSlotMachine();
  //console.log("Result:", spinResult.result1, spinResult.result2, spinResult.result3);
  //console.log("Coins:", spinResult.coins);
  