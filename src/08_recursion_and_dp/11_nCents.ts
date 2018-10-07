// Coins: Given an innnite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and
// pennies (1 cent), write code to calculate the number of ways of representing n cents.

interface ICoins {
    quarters: number;
    dimes: number;
    nickels: number;
    pennys: number;
}

enum COIN_VALS {
    QUARTER = 0.25,
    DIME = 0.10,
    NICKEL = 0.05,
    PENNY = 0.01
};

function floatingNumberPrecisioner(n: number): number {
    return parseFloat(Number(n).toFixed(2));

}

function nCents(
    n: number,
    chosenCoins: ICoins = {quarters: 0, dimes: 0, nickels: 0, pennys: 0},
    printedCoins: Set<string> = new Set()
): void {
    if(n === 0) {
        const chosenCoinsStr: string = JSON.stringify(chosenCoins);
        
        if(!printedCoins.has(chosenCoinsStr)) {
            printedCoins.add(chosenCoinsStr);
            console.log(chosenCoinsStr);
        }
    } else {
        if(n >= COIN_VALS.QUARTER) {
            chosenCoins.quarters++;
            nCents(floatingNumberPrecisioner(n - COIN_VALS.QUARTER), chosenCoins, printedCoins);
            chosenCoins.quarters--;
        }

        if(n >= COIN_VALS.DIME) {
            chosenCoins.dimes++;
            nCents(floatingNumberPrecisioner(n - COIN_VALS.DIME), chosenCoins, printedCoins);
            chosenCoins.dimes--;
        }

        if(n >= COIN_VALS.NICKEL) {
            chosenCoins.nickels++;
            nCents(floatingNumberPrecisioner(n - COIN_VALS.NICKEL), chosenCoins, printedCoins);
            chosenCoins.nickels--;
        }

        if(n >= COIN_VALS.PENNY) {
            chosenCoins.pennys++;
            nCents(floatingNumberPrecisioner(n - COIN_VALS.PENNY), chosenCoins, printedCoins);
            chosenCoins.pennys--;
        }
    }
}

nCents(0.40);