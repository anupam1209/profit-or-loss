var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        //loss
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss/(initial*quantity)) * 100;
        var lossPercentageTwoDigits = lossPercentage.toFixed(2);

        outputBox.innerText = `Hey the loss is ${loss} and the percent is ${lossPercentageTwoDigits}%`;
    }else if(current > initial){
        //profit
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/(initial*quantity)) * 100;
        var profitPercentageTwoDigits = profitPercentage.toFixed(2);

        outputBox.innerText = `Hey the profit is ${profit} and the percent is ${profitPercentageTwoDigits}%`;
    }else{
        //no pain, no gain:)
        outputBox.innerText = `No pain, no gain and no gain, no pain:)`;
    }
}

function submitHandler(){
    var initialPriceValue = Number(initialPrice.value);
    var quantityOfStocks = Number(stocksQuantity.value);
    var currentPriceValue = Number(currentPrice.value);

    //bonus part - added the check to see if user has no empty inputs
    if(initialPriceValue.length == 0 || quantityOfStocks == 0 || currentPriceValue == 0){
        alert("Please fill out all fields");
        return;
    }

    calculateProfitAndLoss(initialPriceValue, quantityOfStocks, currentPriceValue);
}

submitBtn.addEventListener("click", submitHandler);
