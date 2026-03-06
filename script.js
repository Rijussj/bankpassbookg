function generatePDF(){

const { jsPDF } = window.jspdf;

const doc = new jsPDF();

let name=document.getElementById("name").value;
let acc=document.getElementById("acc").value;
let branch=document.getElementById("branch").value;
let ifsc=document.getElementById("ifsc").value;
let balance=document.getElementById("balance").value;

/* header */

doc.setFontSize(18);
doc.text("ICICI BANK PASSBOOK",105,20,null,null,"center");

/* customer details */

doc.setFontSize(12);

doc.text("Name: "+name,20,40);
doc.text("Account Number: "+acc,20,50);
doc.text("Branch: "+branch,20,60);
doc.text("IFSC: "+ifsc,20,70);
doc.text("Balance: ₹ "+balance,20,80);

/* line */

doc.line(10,90,200,90);

/* table header */

doc.text("Date",20,100);
doc.text("Description",60,100);
doc.text("Debit",140,100);
doc.text("Credit",170,100);

doc.line(10,105,200,105);

/* example transaction */

doc.text("01/01/2026",20,115);
doc.text("Opening Balance",60,115);
doc.text("-",140,115);
doc.text(balance,170,115);

/* save pdf */

doc.save("passbook.pdf");

}
