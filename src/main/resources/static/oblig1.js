
const ticketList = [];



function registrer() {

    let mangelMld = "Skriv inn i manglende felt.";
    let notNumbMsg = "Skriv inn tall i dette feltet.";


    //Inputfeltene.
    let film = document.getElementById("film").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;
    let telefon = document.getElementById("telefonnr").value;
    let epost = document.getElementById("epost").value;


    //Div-feltene feilmeldinger skal skrives ut i.
    let divFilm = document.getElementById("filmId").innerHTML;
    let divAntall = document.getElementById("antallId").innerHTML;
    let divFornavn = document.getElementById("fornavnId").innerHTML;
    let divEtternavn = document.getElementById("etternavnId").innerHTML;
    let divTlf = document.getElementById("telefonnrId").innerHTML;
    let divEpost = document.getElementById("epostId").innerHTML;


    /*   try {*/
    let quantity = document.getElementById("antall").value;
    let antNumb = Number(quantity);

    let tlf = document.getElementById("telefonnr").value;
    let tlfNumb = Number(tlf);


    //Sjekker om inputfeltene ikke er tomme eller NaN. (Not a number).
    if (film.length === 0) {
        document.getElementById("filmId").innerHTML = mangelMld;
    }  else if (antall.length === 0 || Number.isNaN(antNumb)) {
        console.log(antNumb + "Dette er antNumb");
        console.log(antall.length + "Dette er lengden på antall.");


        document.getElementById("antallId").innerHTML = notNumbMsg;
    } else if (fornavn.length === 0) {
        document.getElementById("fornavnId").innerHTML = mangelMld;
    } else if (etternavn.length === 0) {
        document.getElementById("etternavnId").innerHTML = mangelMld;
    } else if (telefon.length === 0 || Number.isNaN(tlfNumb)) {
        document.getElementById("telefonnrId").innerHTML = notNumbMsg;
    } else if (epost.length === 0) {
        document.getElementById("epostId").innerHTML = mangelMld;
    }
        //Sjekker om input faktisk er tall.
     /*else if (
            !isNaN(antNumb)){
            document.getElementById("antallId").innerHTML = notNumbMsg;
            console.log("Nå er vi i antNumber sin if");

            //Hvis alt er riktig, opprett person og legg inn i array.
        } */ else {
        const person = {

            film: document.getElementById("film").value,
            antall: document.getElementById("antall").value,
            fornavn: document.getElementById("fornavn").value,
            etternavn: document.getElementById("etternavn").value,
            telefonnr: document.getElementById("telefonnr").value,
            epost: document.getElementById("epost").value,

        };

        ticketList.push(person);
        console.log(ticketList.length + " = her er lengden.");


        let tabell = "<table><tr>" + " <th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epost</th>" + "</tr>";

        for (let i = 0; i < ticketList.length; i++) {
            tabell += "<tr><td>" + ticketList[i].film + "</td><td>" + ticketList[i].antall + "</td><td>" + ticketList[i].fornavn + "</td>" +
                "<td>" + ticketList[i].etternavn + "</td><td>" + ticketList[i].telefonnr + "</td><td>" + ticketList[i].epost + "</td><br/>";
        }
        document.getElementById("textfield").innerHTML = tabell;
        tabell += "</table>";



        //onchange feltene med error gjør at tab funker til å slette
    }
}

/*function slettArray(){

}*/
