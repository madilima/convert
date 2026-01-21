//currency exchange rate of the day
const USD = 5.16; //United States Dollar
const EUR = 5.42; //Euro
const GBP = 6.38; //British Pound
const CHF = 6.69; //Swiss Franc
const AUD = 3.57; //Australian Dollar
const CAD = 4.10; //Canadian Dollar
const KWD = 17.32; //Kuwaiti Dinar
const BHD = 14.11; //Bahraini Dinar
const OMR = 13.84; //Omani Rial
const JPY = 0.038; //Japanese Yen
const CNY = 0.76; //Chinese Yuan
const KRW = 0.0038; //South Korean Won
const INR = 0.064; //Indian Rupee
const THB = 0.17; //Thai Baht
const MXN = 0.27; //Mexican Peso

//Getting the elements from the DOM
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency =document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//Manipulating the input amount to receive only numbers
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})


//submitting event for the form
form.onsubmit = (event) => {
  event.preventDefault()
  // to do the conversion based on the selected currency
  // use a switch case to select the correct currency
    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, 'U$');
            break;
        case 'EUR':
            convertCurrency(amount.value, EUR, '€');
            break;
        case 'GBP':
            convertCurrency(amount.value, GBP, '£');
            break;
        case 'CHF':
            convertCurrency(amount.value, CHF, 'Fr');
             break;
        case 'AUD':
            convertCurrency(amount.value, AUD, 'A$');
             break;
        case 'CAD':
            convertCurrency(amount.value, CAD, 'C$');
             break;
        case 'KWD':
            convertCurrency(amount.value, KWD, 'KD');
             break;
        case 'BHD':
            convertCurrency(amount.value, BHD, 'BD');
             break;
        case 'OMR':
            convertCurrency(amount.value, OMR, 'RO');
             break;
        case 'JPY':
            convertCurrency(amount.value, JPY, '¥');
             break;
        case 'CNY':
            convertCurrency(amount.value, CNY, '¥');
             break;
        case 'KRW':
            convertCurrency(amount.value, KRW, '₩');
             break;
        case 'INR':
            convertCurrency(amount.value, INR, '₹');
             break;
        case 'THB':
            convertCurrency(amount.value, THB, '฿');
             break;
        case 'MXN':
            convertCurrency(amount.value, MXN, 'Mex$');
             break;
    }
}


// Function to convert the currency.
function convertCurrency(amount, price, symbol){
  try {
    // show the conversion description
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // calculate the total value
    let total = amount * price

    // verify if the total is a number
    if (isNaN(total)) {
      return alert("Por favor, digite o valor corretamente para converter.")
    }

    // Format the total value to BRL and remove the "R$" to show only the number.
   // To take R$ from de front -> can use ->  .replace("R$", "") after formatCurrencyBRL(total)
    total = formatCurrencyBRL(total) 

    // show the result
    // can use `${total} BRL` to show the currency symbol at the end
    result.textContent = `${total}`

    // show the footer with the result.
    footer.classList.add("show-result")
  } catch {
    // remove the footer with the result.
    footer.classList.remove("show-result")
    
    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}

// format a value to BRL currency format
function formatCurrencyBRL(value) {
  // convert the value to BRL currency format
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}