async function generatePDF(){

const { jsPDF } = window.jspdf;
const doc = new jsPDF();

let name=document.getElementById("name").value;
let acc=document.getElementById("acc").value;
let branch=document.getElementById("branch").value;
let ifsc=document.getElementById("ifsc").value;
let balance=document.getElementById("balance").value;

let img = new Image();
img.src="logo.png";

img.onload=function(){

doc.addImage(img,'PNG',15,10,40,15);

doc.setFontSize(16);
doc.text("ICICI BANK PASSBOOK",105,20,null,null,"center");

doc.setFontSize(11);

doc.text("Name : "+name,15,40);
doc.text("Account No : "+acc,15,48);
doc.text("Branch : "+branch,15,56);
doc.text("IFSC : "+ifsc,15,64);
doc.text("Balance : ₹ "+balance,15,72);

doc.line(10,80,200,80);

doc.text("Date",15,90);
doc.text("Description",50,90);
doc.text("Debit",140,90);
doc.text("Credit",165,90);

doc.line(10,95,200,95);

doc.text("01/01/2026","15","Opening Balance");
doc.text("₹ "+balance,"165","100");

doc.save("passbook.pdf");

}

}
