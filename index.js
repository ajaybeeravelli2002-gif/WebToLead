

function beforesubmit(){
    let inputDate=document.querySelector("#Lead_date").value;
    let output= document.querySelector('.outputdate');
    let formattedDate=new Date(inputDate).toLocaleDateString("en-US");
    output.value=formattedDate;
    console.log(output.value);
}
function timestamp() { 
    var response = document.getElementById("g-recaptcha-response");
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
     } 
} 
setInterval(timestamp, 500);