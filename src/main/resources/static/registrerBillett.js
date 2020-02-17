const ticketList = [];

    //errormeldinger
const mangelMld = "Skriv inn i manglende felt.";
const antMsg = "Skriv inn antall mellom 1 og 99 i dette feltet.";
const tlfMsg = "Skriv inn telefonnummer med 8 tall eller med +47 foran.";

function registrer() {


    //Inputfeltene.
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefon = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;

    //parser til number.
    let quantity = document.getElementById("antall").value;
    let antNumb = Number(quantity);

    let tlf = document.getElementById("telefonnr").value;
    let tlfNumb = Number(tlf);



    //Bool som sier om vi går inn i if-ene. Gjør den det, er den false og
    //vil ikke la oss legge inn person i array.
    let isValid = true;


    //Sjekker om inputfeltene ikke er tomme eller NaN. (Not a number).
    if (film.length === 0) {
        document.getElementById("filmId").innerHTML = mangelMld;
        isValid = false;
    }

    if (antall.length === 0 || Number.isNaN(antNumb) || !antall.match(/^\b\d{1,2}\b$/)){
        document.getElementById("antallId").innerHTML = antMsg;
        isValid = false;
    }

    if (fornavn.length === 0) {
        document.getElementById("fornavnId").innerHTML = mangelMld;
        isValid = false;
    }

    if (etternavn.length === 0) {
        document.getElementById("etternavnId").innerHTML = mangelMld;
        isValid = false;
    }

    if (telefon.length === 0 || Number.isNaN(tlfNumb) || !telefon.match(/\b\d{8,10}\b/)) {

        document.getElementById("telefonnrId").innerHTML = tlfMsg;
        isValid = false;
    }

    if (epost.length === 0) {
        document.getElementById("epostId").innerHTML = mangelMld;
        isValid = false;
    }

    //Hvis alt er riktig/true, opprett person og legg inn i array.
    if(isValid){
        const person = {
            film: document.getElementById("film").value,
            antall: document.getElementById("antall").value,
            fornavn: document.getElementById("fornavn").value,
            etternavn: document.getElementById("etternavn").value,
            telefonnr: document.getElementById("telefonnr").value,
            epost: document.getElementById("epost").value,
        };

        ticketList.push(person);

        let tabell = "<table><tr>" + "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epost</th>" + "</tr>";

        for (let i = 0; i < ticketList.length; i++) {
            tabell += "<tr><td>" + ticketList[i].film + "</td><td>" + ticketList[i].antall + "</td><td>" + ticketList[i].fornavn + "</td>" +
                "<td>" + ticketList[i].etternavn + "</td><td>" + ticketList[i].telefonnr + "</td><td>" + ticketList[i].epost + "</td>";
        }
        tabell += "</table>";
        document.getElementById("textfield").innerHTML = tabell;

        //fjerner inputverdier når en trykker registrer.
        document.getElementById("film").value = "Velg film";
        document.getElementById("antall").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("epost").value = "";

        document.getElementById("filmId").innerHTML = "";
        document.getElementById("antallId").innerHTML = "";
        document.getElementById("fornavnId").innerHTML = "";
        document.getElementById("etternavnId").innerHTML = "";
        document.getElementById("telefonnrId").innerHTML = "";
        document.getElementById("epostId").innerHTML = "";
    }
}


//funksjon som tar inn elementId som paramter. Sletter errormelding i feltet when onchange.
function deleteMsg(elementId){
    document.getElementById(elementId).innerHTML = "";
}