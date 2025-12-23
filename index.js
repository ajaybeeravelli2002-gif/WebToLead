

function beforesubmit(){
    let inputDate=document.querySelector("#Lead_date").value;
    let output= document.querySelector('.outputdate');
    let formattedDate=new Date(inputDate).toLocaleDateString("en-US");
    output.value=formattedDate;
    console.log(output.value);
}