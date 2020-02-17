
//starter på index 0. Sletter antall elementer lik listen sin lengde.
//Setter output-boksen til "".
function deleteReg(){
    ticketList.splice(0, ticketList.length);
    document.getElementById("textfield").innerHTML = "";
}