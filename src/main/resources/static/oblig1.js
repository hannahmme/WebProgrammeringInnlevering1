
const ticketList = [10];



function registrer() {

    let errorMelding = "Skriv inn i manglende felt.";

    try{
        let antall = document.getElementById("antallId").value;
        let antNumb = Number(antall);

        let tlf = document.getElementById("telefonnrId").value;
        let tlfNumb = Number(tlf);


        //Sjekker om inputfeltene ikke er tomme.
    if (
        document.getElementById("film").value === null ||
        document.getElementById("antall").value === null ||
        document.getElementById("fornavn").value === null ||
        document.getElementById("etternavn").value === null ||
        document.getElementById("telefonnr").value === null ||
        document.getElementById("epost").value === null) {

        document.getElementById("antallId").innerHTML = errorMelding;
        document.getElementById("fornavnId").innerHTML = errorMelding;
        document.getElementById("etternavnId").innerHTML = errorMelding;
        document.getElementById("telefonnrId").innerHTML = errorMelding;
        document.getElementById("epostId").innerHTML = errorMelding;

        //Sjekker om telefon og antall faktisk er tall.
    } else if(
        isNaN(antNumb) ||
        isNaN(tlfNumb)){

        document.getElementById("antallId").innerHTML = errorMelding;
        document.getElementById("telefonnrId").innerHTML = errorMelding;

        //Hvis alt er riktig, opprett person og legg inn i array.
    } else {
        let person = {

            film: document.getElementById("film").value,
            antall: document.getElementById("antall").value,
            fornavn: document.getElementById("fornavn").value,
            etternavn: document.getElementById("etternavn").value,
            telefonnr: document.getElementById("telefonnr").value,
            epost: document.getElementById("epost").value,

        };

        ticketList.push(person.film, person.antall, person.fornavn, person.etternavn, person.telefonnr, person.epost);
        console.log(ticketList.length + " = her er lengden.")

      /*  console.log(i+"<"+ticketList.length,i < ticketList.length);
        console.log("i : ",i);
        console.log("ticketList.length",ticketList.length);*/
        }
        /*for (let i = 0; i < 10; i++) {*/

        //for (let i = 0; i < ticketList.length; i++) {


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

}catch(Exception){
        document.getElementById("fornavnId").innerHTML = errorMelding;
    }
}

/*function slettArray(){

}*/
