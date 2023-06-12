const dropdown=document.getElementById("language");const languages=["ar","de","en","si","ta","zh-cn"];dropdown.addEventListener("change",(e)=>{const langugage=dropdown.options[dropdown.selectedIndex].value;if(!languages.includes(langugage.toLowerCase())){return;}
window.location.href=window.location.origin+
"/"+
langugage.toLowerCase()+
window.location.pathname.substring(window.location.pathname.indexOf("/",1));});