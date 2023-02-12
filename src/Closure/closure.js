// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`Money Box: You have $${saveCoins}`);
// };

// moneyBox(5);
// moneyBox(5);

// Pequeño programa de alcancia utilizando las closures.

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`Money Box: You have $${saveCoins}`);
    };
    return countCoins;
};

const myMoneyBox = moneyBox();
myMoneyBox(10);
myMoneyBox(20);

// Pequeño programa para agregar animales con modificadores.