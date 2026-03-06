function createPassbook(){

const { jsPDF } = window.jspdf;

var name = document.getElementById("name").value;
var acc = document.getElementById("account").value;
var ifsc = document.getElementById("ifsc").value;
var branch = document.getElementById("branch").value;
var balance = document.getElementById("balance").value;

const doc = new jsPDF();

doc.setFontSize(18);
doc.text("BANK PASSBOOK", 70, 20);

doc.setFontSize(12);

doc.text("Name: " + name, 20, 40);
doc.text("Account No: " + acc, 20, 50);
doc.text("IFSC: " + ifsc, 20, 60);
doc.text("Branch: " + branch, 20, 70);

doc.text("-------------------------------------------------", 20, 85);

doc.text("Date", 20, 100);
doc.text("Description", 50, 100);
doc.text("Debit", 120, 100);
doc.text("Credit", 140, 100);
doc.text("Balance", 170, 100);

doc.text("01/03/2026", 20, 110);
doc.text("Opening Balance", 50, 110);
doc.text(balance, 170, 110);

doc.save("passbook.pdf");

}
