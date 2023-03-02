let priceInput = document.querySelector(".in");
let submitBtn = document.querySelector(".submit");
let CurrSelection = document.querySelector(".rates");
let fResult = document.querySelector(".Result");

submitBtn.onclick = function () {
  exchange();
};

function exchange() {
  let selectedOption = CurrSelection.options[CurrSelection.selectedIndex].text;

  if (priceInput.value == "") {
    fResult.innerHTML = "Amount can't be empty";
  } else {
    // console.log(priceInput.value);
    fetch(
      "https://api.freecurrencyapi.com/v1/latest?apikey=wFR6lyKPP77cKCwXGZG6ZcmJvZAwnco7qB7bAmlN"
    )
      .then((slove) => {
        return slove.json();
      })
      .then((result) => {
        // console.log(result.data);
        let neededcurrencyRate = result.data[selectedOption];
        console.log(neededcurrencyRate);

        fResult.innerHTML =
          priceInput.value +
          "USD" +
          " = " +
          (neededcurrencyRate * priceInput.value).toFixed(2) +
          "  " +
          selectedOption;
        priceInput.value = "";
      });
  }
}
