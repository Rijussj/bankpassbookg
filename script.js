function generatePDF(){

const { jsPDF } = window.jspdf;
const doc = new jsPDF();

let name=document.getElementById("name").value;
let account=document.getElementById("account").value;
let balance=document.getElementById("balance").value;

/* HEADER COLOR (ICICI ORANGE) */

doc.setFillColor(243,123,32);
doc.rect(0,0,210,25,"F");

/* LOGO */

var logo="logo.png";

doc.addImage(logo,"PNG",10,5,30,15);

/* BANK NAME */

doc.setTextColor(255,255,255);
doc.setFontSize(18);
doc.text("ICICI Bank Passbook",105,15,null,null,"center");

/* TEXT RESET */

doc.setTextColor(0,0,0);
doc.setFontSize(12);

/* CUSTOMER DETAILS */

doc.text("Customer Name : "+name,20,40);
doc.text("Account Number : "+account,20,50);
doc.text("Current Balance : ₹ "+balance,20,60);

/* TABLE HEADER */

doc.setFillColor(230,230,230);
doc.rect(10,80,190,10,"F");

doc.text("Date",15,87);
doc.text("Description",45,87);
doc.text("Debit",120,87);
doc.text("Credit",150,87);
doc.text("Balance",180,87);

/* SAMPLE TRANSACTIONS */

doc.text("03/04/2026",15,100);
doc.text("ATM Withdrawal",45,100);
doc.text("2000",120,100);
doc.text("-",150,100);
doc.text(balance,180,100);

doc.text("05/04/2026",15,110);
doc.text("UPI Credit",45,110);
doc.text("-",120,110);
doc.text("5000",150,110);
doc.text(balance,180,110);

/* DOWNLOAD */

doc.save("ICICI_Passbook.pdf");

}
