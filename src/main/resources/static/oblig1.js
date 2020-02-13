
const ticketList = [10];


const person = {

    antall : document.getElementById("antall").value,
    fornavn : document.getElementById("fornavn").value,
    etternavn : document.getElementById("etternavn").value,
    epost : document.getElementById("epost").value,
};

function registrer() {
    for (let i = 0; i < ticketList.length; i++) {
        ticketList.push(person.antall);
        ticketList.push(person.fornavn);
        ticketList.push(person.etternavn);
        ticketList.push(person.epost);

        console.log("Nå har vi registrert litt ting.");
    }
}

function skrivUt(){
    let tabell = "<table><tr>" + "<th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Epost</th></tr></table>";

    for(let i = 0; i < ticketList.length; i++){
       tabell += "<tr><td>"+ ticketList[i].antall +"</td><td>"+ person[i].fornavn + "</td>" +
           "<td>"+ person[i].etternavn +"</td><td>"+person[i].epost+"</td><br/>";
    }
}