let namasteBtn=document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg);

function inputMsg(){
    // alert("namsate world");
    let name =prompt("Enter name of student");
    namasteBtn.textContent='Roll No 1:'+name;
}
