function generatePDF(){

const { jsPDF } = window.jspdf;

const doc = new jsPDF();

/* customer data */

let name=document.getElementById("name").value;
let acc=document.getElementById("acc").value;
let branch=document.getElementById("branch").value;
let ifsc=document.getElementById("ifsc").value;
let balance=document.getElementById("balance").value;

/* header bar */

doc.setFillColor(243,111,33);
doc.rect(0,0,210,20,"F");

doc.setTextColor(255,255,255);
doc.setFontSize(16);
doc.text("ICICI PASSBOOK",105,13,null,null,"center");

/* reset color */

doc.setTextColor(0,0,0);

/* customer details */

doc.setFontSize(12);

doc.text("Customer Name: "+name,20,40);
doc.text("Account Number: "+acc,20,50);
doc.text("Branch: "+branch,20,60);
doc.text("IFSC Code: "+ifsc,20,70);
doc.text("Current Balance: ₹ "+balance,20,80);

/* table */

doc.line(10,90,200,90);

doc.text("Date",20,100);
doc.text("Description",70,100);
doc.text("Debit",140,100);
doc.text("Credit",170,100);

doc.line(10,105,200,105);

doc.text("01/01/2026",20,115);
doc.text("Opening Balance",70,115);
doc.text("-",140,115);
doc.text(balance,170,115);

/* save */

doc.save("passbook.pdf");

}
