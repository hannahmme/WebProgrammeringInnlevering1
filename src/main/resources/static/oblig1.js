
const ticketList = [10];



function registrer() {

    if (
        document.getElementById("film").value === null ||
        document.getElementById("antall").value === null ||
        document.getElementById("fornavn").value === null ||
        document.getElementById("etternavn").value === null ||
        document.getElementById("telefonnr").value === null ||
        document.getElementById("epost").value === null) {

        let errorMelding = "Skriv inn i manglende felt.";

        document.getElementById("antallId").innerHTML = errorMelding;
        document.getElementById("fornavnId").innerHTML = errorMelding;
        document.getElementById("etternavnId").innerHTML = errorMelding;
        document.getElementById("telefonnrId").innerHTML = errorMelding;
        document.getElementById("epostId").innerHTML = errorMelding;

    } else {
        const person = {

            film: document.getElementById("film").value,
            antall: document.getElementById("antall").value,
            fornavn: document.getElementById("fornavn").value,
            etternavn: document.getElementById("etternavn").value,
            telefonnr: document.getElementById("telefonnr").value,
            epost: document.getElementById("epost").value,

        };

        for (let i = 0; i < ticketList.length; i++) {
            ticketList.push(person.film);
            ticketList.push(person.antall);
            ticketList.push(person.fornavn);
            ticketList.push(person.etternavn);
            ticketList.push(person.epost);

            console.log("Nå har vi registrert litt ting.");
        }
        let tabell = "<table><tr>" + "<th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Epost</th></tr></table>";

        for (let i = 0; i < ticketList.length; i++) {
            tabell += "<tr><td>" + ticketList[i].film + "</td><td>" + ticketList[i].antall + "</td><td>" + ticketList[i].fornavn + "</td>" +
                "<td>" + ticketList[i].etternavn + "</td><td>" + ticketList[i].epost + "</td><br/>";
        }
        document.getElementById("textfield").innerHTML = tabell;

        /*Setter inputfeltene blanke:*/
        document.getElementById("antall").innerHTML = "";
        document.getElementById("fornavn").innerHTML = "";
        document.getElementById("etternavn").innerHTML = "";
        document.getElementById("epost").innerHTML = "";
    }
}

/*function slettArray(){

}*/
