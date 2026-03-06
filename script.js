function createPassbook(){

const { jsPDF } = window.jspdf;

var name = document.getElementById("name").value;
var acc = document.getElementById("account").value;
var ifsc = document.getElementById("ifsc").value;
var branch = document.getElementById("branch").value;
var balance = document.getElementById("balance").value;

const doc = new jsPDF();

/* LOGO LOAD */
var img = document.getElementById("logo");
doc.addImage(img,"PNG",20,10,40,20);

/* TITLE */
doc.setFontSize(18);
doc.text("BANK PASSBOOK",80,25);

/* DETAILS */
doc.setFontSize(12);
doc.text("Name: "+name,20,60);
doc.text("Account No: "+acc,20,70);
doc.text("IFSC: "+ifsc,20,80);
doc.text("Branch: "+branch,20,90);
doc.text("Opening Balance: "+balance,20,100);

/* DOWNLOAD */
doc.save("passbook.pdf");

}
