
let captchaValue=false;
function beforesubmit(event){

if(captchaValue){
    let inputDate=document.querySelector("#Lead_date").value;
    let output= document.querySelector('.outputdate');
    let formattedDate=new Date(inputDate).toLocaleDateString("en-US");
    output.value=formattedDate;
    console.log(output.value);
}
    
else{
    alert("Please tick the captcha and then resubmit the form.");
    event.preventDefault();
}
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
function setCaptcha(){
    captchaValue=true;
}