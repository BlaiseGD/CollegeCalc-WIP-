let collegeName = document.getElementById("collegeName");
let costPerApp = document.getElementById("costPerApp");
let essays = document.getElementById("essays");
let tuition = document.getElementById("tuition");
let totalApp = document.getElementById("totalApp");
let totalEssay = document.getElementById("totalEssay");
let addBtn = document.getElementById("addBtn");
let storeBody = document.getElementById("storeBody");
let removeSaved = document.getElementById("removeSaved");
let addapp = 0;
let addessay = 0;

if(localStorage.getItem('tableBody') != null){
    storeBody.innerHTML = localStorage.getItem('tableBody')
}

addBtn.addEventListener('click',function(e){
    e.preventDefault(); //prevents the table from immediately disappearing
    let row = storeBody.insertRow(-1); //Adds new tr and td's with respective values until line 24
    let collegeCell = row.insertCell(0);
    collegeCell.innerHTML = collegeName.value.toString();
    let costPerAppCell = row.insertCell(1);
    costPerAppCell.innerHTML = costPerApp.value.toString();
    let essaysCell = row.insertCell(2);
    essaysCell.innerHTML = essays.value.toString();
    let tuitionCell = row.insertCell(3);
    tuitionCell.innerHTML = tuition.value.toString();
    addapp += parseInt(costPerApp.value);
    addessay += parseInt(essays.value);
    if(addapp === NaN) totalApp.innerHTML = "Total App Cost:";
    if(addessay === NaN) totalEssay.innerHTML = "Total Essays:";
    totalApp.innerHTML = `Total App Cost: ${addapp}`;
    totalEssay.innerHTML = `Total Essays: ${addessay}`;
    //saves the table's html to be used upon load
    localStorage.setItem('tableBody',storeBody.innerHTML);
});

removeSaved.addEventListener('click', ()=>{
    localStorage.clear();
    location.reload();
});
