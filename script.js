/*let msg = null
let vek = 19
const odstavec = document.querySelector("#odstavec")


const mojeFce = () => {
    console.log("test")
    return true
}
if (odstavec === null) {
    console.log("Element nebyl nalezen")
} else {
    console.log(odstavec)
}

const hodnot = mojeFce()

const goodbye = (name) => {
 const closingParagraph = document.querySelector('.email__closing');
 closingParagraph.textContent = `S pozdravem ${name}`;
  }
let name="Pavel Ovesný";
const content = `<p>konec - ${document.querySelector('.email__closing').textContent}</p>`; 
document.body.innerHTML += `<p>${content}</p>`

  

*/
/*
const hesloDatabaze = "admin"

const overeniHesla = (heslo) => {
    const uzivatelskeJmeno = prompt("Zadej jmeno")

    if(heslo === hesloDatabaze) {
        const zprava = "Vitej uzivateli " + uzivatelskeJmeno
        return zprava
    } else {
        return "Pristup odepren"
    }
}

const uzivatelskeJmeno = "Michal"

document.body.innerHTML = overeniHesla("admin")
console.log(uzivatelskeJmeno)

*/
/*
const vek = 20
const zprava = "vitej"

if(vek > 18){
    const zprava ="vitej uzivateli"
    console.log(zprava)
}

console.log(zprava)
*/

/*

const komponenta = (nazev, cena, cilovka, sleva) => {
    const vypocetSlevy = cena - (cena * sleva)
    return `<h2>${nazev}</h2>
    <p>Puvodni cena: ${cena}, Cena po sleve: ${vypocetSlevy}</p>
    <p>${cilovka}</p>`
}

komponenta("a", "b", "c", 0.3)

console.log(nazev)
*/

/*

function preved() {
    const kurz = {
      'EUR': 24.47,
      'GBP': 28.09,
      'USD': 24.81,
      'BTC': 478637,
    };
  
    const mena = prompt('Zadejte kód měny (např. EUR, GBP, USD, BTC):');
  
    if (!(mena in preve)) {
      console.error('Neznámý kód měny.');
      return null;
    }
  
    const mnozstvi = prompt(`Zadejte částku v ${mena}:`);
    
    const result = Math.round(amount * exchangeRates[currencyCode]);
  
    return result;
  }
  
  
  const convertedAmount = convertToCZK();
  if (convertedAmount !== null) {
    document.body.innerHTML += `<p>Převedená částka je ${convertedAmount} Kč</p>`;
  }
  */

  function parseDate(dateString) {
    const casti = dateString.split('.');
    const den = parseInt(casti[0], 10);
    const mesic = parseInt(casti[1], 10);
    const rok = parseInt(casti[2], 10);

    return { den, mesic, rok }; 
}

function prompt() {
    const zadejDatum = prompt('Zadej datum ve formátu DD.MM.YYYY:');

    const parsedDate = parseDate(zadejDatum);


    displayDate(parsedDate);
}

function displayDate({ den, mesic, rok }) {
    document.body.innerHTML += `<p>den ${den} </p>
                                <p>mesic  ${mesic}</p>
                                <p>rok  ${rok}</p>`;
}







