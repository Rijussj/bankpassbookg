function generatePDF(){

const { jsPDF } = window.jspdf;
const doc = new jsPDF();

let name=document.getElementById("name").value;
let account=document.getElementById("account").value;
let branch=document.getElementById("branch").value;
let ifsc=document.getElementById("ifsc").value;
let address=document.getElementById("address").value;

/* ICICI HEADER COLOR */

doc.setFillColor(243,123,32);
doc.rect(0,0,210,25,"F");

/* LOGO */

doc.addImage("logo.png","PNG",10,5,30,15);

/* TITLE */

doc.setTextColor(255,255,255);
doc.setFontSize(18);
doc.text("ICICI Bank Passbook",105,15,null,null,"center");

/* TEXT COLOR RESET */

doc.setTextColor(0,0,0);
doc.setFontSize(12);

/* CUSTOMER DETAILS */

doc.text("Customer Name : "+name,20,50);
doc.text("Account Number : "+account,20,60);
doc.text("Branch : "+branch,20,70);
doc.text("IFSC Code : "+ifsc,20,80);
doc.text("Address : "+address,20,90);

/* SAVE PDF */

doc.save("ICICI_Passbook.pdf");

}
