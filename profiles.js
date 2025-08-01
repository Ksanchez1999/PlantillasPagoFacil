
// ______________________GENERAL VARIABLES______________________

let buttonSelected;

let whatsappContact = "";
let user = "";
let password = "";
let profile = "";

let pin = "";
createRandomPin()
let pinCopy = pin;

let expirationDate = "";
createExpirationDate();
let expirationDateCopy = expirationDate;










// ______________________HTML SELECTORS______________________


// _____OUTSIDE THE DOM AND OTHERS_____

const alertCopy = document.getElementById("alertCopy");
const AllElementsToCopy = document.querySelectorAll(".elementToCopy");
const arrowBack = document.getElementById("arrowBack");


// _____PRINCIPAL CONTAINERS_____

const containerPage1 = document.getElementById("containerPage1");
const containerProfilesButtons = document.getElementById("containerProfilesButtons");

const containerPage2 = document.getElementById("containerPage2");
const containerinputs = document.getElementById("containerinputs");
const containerResults = document.getElementById("containerResults");
const containerExcelElements = document.getElementById("containerExcelElements");


// _____PROFILE BUTTONS_____

const buttonProfileNetflix = document.getElementById("buttonProfileNetflix");
const buttonProfileNetflixMe = document.getElementById("buttonProfileNetflixMe");
const buttonProfileDisney = document.getElementById("buttonProfileDisney");
const buttonProfileMax = document.getElementById("buttonProfileMax");
const buttonProfilePrimeVideo = document.getElementById("buttonProfilePrimeVideo");
const buttonProfileFlujoTv = document.getElementById("buttonProfileFlujoTv");
const buttonProfileParamount = document.getElementById("buttonProfileParamount");
const buttonProfileCrunchyroll = document.getElementById("buttonProfileCrunchyroll");
const buttonProfileVix = document.getElementById("buttonProfileVix");
const buttonProfileSpotify = document.getElementById("buttonProfileSpotify");
const buttonProfileKaelus = document.getElementById("buttonProfileKaelus");
const buttonProfileCanva = document.getElementById("buttonProfileCanva");
const buttonProfileCapcut = document.getElementById("buttonProfileCapcut");

const AllProfileButtons = document.querySelectorAll(".buttonProfile");


// _____INPUTS_____

const inputWhatsapp = document.getElementById("inputWhatsapp");
const inputUser = document.getElementById("inputUser");
const inputPassword = document.getElementById("inputPassword");
const inputProfile = document.getElementById("inputProfile");
const inputPin = document.getElementById("inputPin");
const inputDate = document.getElementById("inputDate");

const labelCheckboxPin = document.getElementById("labelCheckboxPin");
const inputCheckboxPin = document.getElementById("inputCheckboxPin");

const labelCheckboxDate = document.getElementById("labelCheckboxDate");
const inputCheckboxDate = document.getElementById("inputCheckboxDate");

const AllInputs = document.querySelectorAll(".input");
const AllNonGeneralInputs = document.querySelectorAll(".nonGeneralInput");
const AllProfileInputs = document.querySelectorAll(".inputProfiles");


// _____OUTPUTS_____

const containertemplate = document.getElementById("containertemplate");

const titlePinToCopy = document.getElementById("titlePinToCopy");
const pinToCopy = document.getElementById("pinToCopy");

const titleProfileToCopy = document.getElementById("titleProfileToCopy");
const profileToCopy = document.getElementById("profileToCopy");

const titlecellInTemplate = document.getElementById("titlecellInTemplate");
const cellInTemplate = document.getElementById("cellInTemplate");

const titleNote = document.getElementById("titleNote");
const note = document.getElementById("note");

const titleCalendar = document.getElementById("titleCalendar");
const calendar = document.getElementById("calendar");

const AllNonGeneralOutputs = document.querySelectorAll(".nonGeneralOutput");








// ______________________FUNCTIONS______________________


// ______UPDATE TEXTCONTENT OF OUTPUTS______

function updateTextContentOfOutputs(){
  pinToCopy.textContent = pin;
  profileToCopy.textContent = profile.toUpperCase();
  cellInTemplate.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} - ${expirationDate}`;
  note.textContent = `${pin} ${whatsappContact.toUpperCase()}`;
  calendar.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} nft ${whatsappContact.toUpperCase()}`;
}


// ______RESTORE ALL VARIABLES TO DEFAULT______

function restoreAllVariablesToDefault(){

  buttonSelected = "";

  whatsappContact = "";
  user = "";
  password = "";
  profile = "";

  pin = "";
  createRandomPin()
  pinCopy = pin;

  expirationDate = "";
  createExpirationDate();
  expirationDateCopy = expirationDate;
}





// ______HIDE ALL INPUTS NO GENERAL______

function hideAllInputsNoGeneral(){

  AllNonGeneralInputs.forEach((element) => {
    element.style.display = "none";
  });
}





// ______HIDE ALL INPUTS NO GENERAL______

function hideAllOutputsNoGeneral(){

  AllNonGeneralOutputs.forEach((element) => {
    element.style.display = "none";
  });
}




// ______CLEAR ALL INPUTS______

function clearAllInputs(){

  AllInputs.forEach((input) => {
    input.value = "";
    input.checked = false;
  });
}





// ______CREATE EXPIRATION DATE______

function createExpirationDate(){
  let date = new Date();

  date.setMonth(date.getMonth() + 1);

  let day = date.getDate().toString().padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0');

  expirationDate = `${day}/${month}`;
}





// ______CREATE RANDOM PIN______

function createRandomPin(){
  pin = Math.floor(1000 + Math.random() * 9000);
}





// ______UPDATE ALL______

function updateAll(){

// Update variables with the content of the inputs

  user = inputUser.value;
  password = inputPassword.value;
  profile = inputProfile.value.toUpperCase();
  whatsappContact = inputWhatsapp.value;

  if(inputPin.value === ""){
    pin = pinCopy;
  } else{
    pin = inputPin.value;
  }

  if(inputCheckboxDate.checked){
    inputDate.style.display = "inline-block";
    expirationDate = inputDate.value;

  } else{
    inputDate.style.display = "none";
    expirationDate = expirationDateCopy;
  }




// Display HTML elements according to service

  // __Netflix__

  if(buttonSelected === buttonProfileNetflix){createTemplateNetflix()}


  // __Netflix ME__

  if(buttonSelected === buttonProfileNetflixMe){createTemplateNetflixMe()}


  // __Disney__

  if(buttonSelected === buttonProfileDisney){createTemplateDisney()}


  // __Max__

  if(buttonSelected === buttonProfileMax){createTemplateMax()}


  // __Prime Video__

  if(buttonSelected === buttonProfilePrimeVideo){createTemplatePrimeVideo()}


  // __FlujoTv__

  if(buttonSelected === buttonProfileFlujoTv){createTemplateFlujoTv()}


  // __Paramount__

  if(buttonSelected === buttonProfileParamount){createTemplateParamount()}


  // __Crunchyroll__

  if(buttonSelected === buttonProfileCrunchyroll){createTemplateCrunchyroll()}






  // En contrucción


  if(buttonSelected === buttonProfileVix){
    alert("En construcción");
  }

  if(buttonSelected === buttonProfileSpotify){
    alert("En construcción");
  }

  if(buttonSelected === buttonProfileKaelus){
    alert("En construcción");
  }

  if(buttonSelected === buttonProfileCanva){
    alert("En construcción");
  }

  if(buttonSelected === buttonProfileCapcut){
    alert("En construcción");
  }
}





// ______CREATE PROFILES______


function createTemplateNetflix(){

  // Show elements HTML

  inputWhatsapp.style.display = "inline-block";
  inputProfile.style.display = "inline-block";
  inputPin.style.display = "inline-block";
  inputCheckboxDate.style.display = "inline-block";
  labelCheckboxDate.style.display = "inline-block";

  titlePinToCopy.style.display = "inline-block";
  titleProfileToCopy.style.display = "inline-block";
  titleCellInTemplate.style.display = "inline-block";
  titleNote.style.display = "inline-block";
  titleCalendar.style.display = "inline-block";

  pinToCopy.style.display = "inline-block";
  profileToCopy.style.display = "inline-block";
  cellInTemplate.style.display = "inline-block";
  note.style.display = "inline-block";
  calendar.style.display = "inline-block";  


  // Show template

  containertemplate.textContent = `*NETFLIX*

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}

👤 *PERFIL* ${profile.toUpperCase()}
🔐 *PIN* ${pin}
📆 *VENCE* ${expirationDate}

_*Normas de uso*_
✅ Puede cambiar la imagen de su perfil. Si desea cambiar el pin, favor notificar.
✅ Es una cuenta compartida, se deben respetar los perfiles de los demás.
❌ Está prohibido abrir y visualizar su perfil en dos o más dispositivos al mismo tiempo.
❌ No intentar cambiar correo o clave de la cuenta.
❌ No cambiar el nombre de su perfil.
❗️ Pasar por alto estas normas conllevará que pierda su perfil y su garantía.`;

  updateTextContentOfOutputs();

}






function createTemplateNetflixMe(){

  // Show elements HTML

  inputProfile.style.display = "inline-block";
  inputPin.style.display = "inline-block";
  inputCheckboxDate.style.display = "inline-block";
  labelCheckboxDate.style.display = "inline-block";

  titleProfileToCopy.style.display = "inline-block";
  profileToCopy.style.display = "inline-block";  


  // Show template

  containertemplate.textContent = `NETFLIX
MIEMBRO EXTRA

💌 CORREO: ${user}
🔐 CONTRASEÑA: ${password}
👤 Usuario: ${profile}
📆 Vence: ${expirationDate}`;

  updateTextContentOfOutputs();

}





function createTemplateDisney(){

  // Show elements HTML

  inputWhatsapp.style.display = "inline-block";
  inputProfile.style.display = "inline-block";
  inputPin.style.display = "inline-block";
  inputCheckboxDate.style.display = "inline-block";
  labelCheckboxDate.style.display = "inline-block";

  titlePinToCopy.style.display = "inline-block";
  titleProfileToCopy.style.display = "inline-block";
  titleCellInTemplate.style.display = "inline-block";
  titleNote.style.display = "inline-block";
  titleCalendar.style.display = "inline-block";

  pinToCopy.style.display = "inline-block";
  profileToCopy.style.display = "inline-block";
  cellInTemplate.style.display = "inline-block";
  note.style.display = "inline-block";
  calendar.style.display = "inline-block";


  // Show template

  containertemplate.textContent = `*DISNEY+*

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}

👤 *PERFIL* ${profile}
🔐 *PIN* ${pin}
📆 *VENCE* ${expirationDate}

_*Normas*_
❗️ *-El uso debe ser en 1 dispositivo.*
❗️ *- Verifique estar escribiendo bien los datos de la cuenta, sobre todo la contraseña (si lleva mayúsculas, minúsculas, símbolos, colóquelos segun lo indicado)*
*❗️-Evite cerrar sesión*`;

  updateTextContentOfOutputs();

}





function createTemplateMax(){

  // Show elements HTML

  inputWhatsapp.style.display = "inline-block";
  inputProfile.style.display = "inline-block";
  inputCheckboxDate.style.display = "inline-block";
  labelCheckboxDate.style.display = "inline-block";

  titleProfileToCopy.style.display = "inline-block";
  titleCellInTemplate.style.display = "inline-block";
  titleNote.style.display = "inline-block";
  titleCalendar.style.display = "inline-block";

  profileToCopy.style.display = "inline-block";
  cellInTemplate.style.display = "inline-block";
  note.style.display = "inline-block";
  calendar.style.display = "inline-block";

  labelCheckboxPin.style.display = "inline-block";
  inputCheckboxPin.style.display = "inline-block";



  // Show template

  if(inputCheckboxPin.checked){
    containertemplate.textContent = `*MAX*

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}

👤 *PERFIL* ${profile}
🔐 *PIN* ${pin}
📆 *VENCE* ${expirationDate}`;

    inputPin.style.display = "inline-block";

    titlePinToCopy.style.display = "inline-block";
    pinToCopy.style.display = "inline-block";

    updateTextContentOfOutputs();

  } else{
    containertemplate.textContent = `*MAX*

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}

👤 *PERFIL* ${profile}
📆 *VENCE* ${expirationDate}`;

    updateTextContentOfOutputs();

    inputPin.style.display = "none";

    titlePinToCopy.style.display = "none";
    pinToCopy.style.display = "none";

  }

  updateTextContentOfOutputs();
}





function createTemplatePrimeVideo(){

  // Show elements HTML

  inputWhatsapp.style.display = "inline-block";
  inputProfile.style.display = "inline-block";
  inputCheckboxDate.style.display = "inline-block";
  labelCheckboxDate.style.display = "inline-block";

  titleProfileToCopy.style.display = "inline-block";
  titleCellInTemplate.style.display = "inline-block";
  titleNote.style.display = "inline-block";
  titleCalendar.style.display = "inline-block";

  profileToCopy.style.display = "inline-block";
  cellInTemplate.style.display = "inline-block";
  note.style.display = "inline-block";
  calendar.style.display = "inline-block";

  labelCheckboxPin.style.display = "inline-block";
  inputCheckboxPin.style.display = "inline-block";


  // Show template

  if(inputCheckboxPin.checked){
    containertemplate.textContent = `*AMAZON PRIME VIDEO*

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}

👤 *PERFIL* ${profile}
🔐 *PIN* ${pin}
📆 *VENCE* ${expirationDate}

_*Normas*_
❗️ *_Al entrar a Prime verificar estar dentro del perfil con su nombre, a través del ícono Mi Espacio_*

❗️ _*Si está contratando UNA pantalla, el uso debe ser en UN dispositivo. Si se detectan más dispositivos se le cerrará la sesión y perderá la garantía*_

❗️ *_No hacer compras o realizar pedidos a través de Amazon, ni ingresar a la página de Amazon compras. Perderá garantía_*`;

    inputPin.style.display = "inline-block";

    titlePinToCopy.style.display = "inline-block";
    pinToCopy.style.display = "inline-block";

    updateTextContentOfOutputs();

  } else{
    containertemplate.textContent = `*AMAZON PRIME VIDEO*

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}

👤 *PERFIL* ${profile}
📆 *VENCE* ${expirationDate}

_*Normas*_
❗️ *_Al entrar a Prime verificar estar dentro del perfil con su nombre, a través del ícono Mi Espacio_*

❗️ _*Si está contratando UNA pantalla, el uso debe ser en UN dispositivo. Si se detectan más dispositivos se le cerrará la sesión y perderá la garantía*_

❗️ *_No hacer compras o realizar pedidos a través de Amazon, ni ingresar a la página de Amazon compras. Perderá garantía_*`;

    updateTextContentOfOutputs();

    inputPin.style.display = "none";

    titlePinToCopy.style.display = "none";
    pinToCopy.style.display = "none";

  }

  updateTextContentOfOutputs();
}





function createTemplateFlujoTv(){

  // Show elements HTML

  inputWhatsapp.style.display = "inline-block";
  inputProfile.style.display = "inline-block";

  inputCheckboxDate.style.display = "inline-block";
  labelCheckboxDate.style.display = "inline-block";

  titleCellInTemplate.style.display = "inline-block";
  titleNote.style.display = "inline-block";
  titleCalendar.style.display = "inline-block";

  cellInTemplate.style.display = "inline-block";
  note.style.display = "inline-block";
  calendar.style.display = "inline-block";


  // Show template  

  containertemplate.textContent = `*FlujoTV* | ${profile}
1 dispositivo

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}
📆 *VENCE* ${expirationDate}

*❌Prohibido cambiar la clave*`;


  updateTextContentOfOutputs();
}





function createTemplateParamount(){

  // Show elements HTML

  inputWhatsapp.style.display = "inline-block";
  inputProfile.style.display = "inline-block";
  inputCheckboxDate.style.display = "inline-block";
  labelCheckboxDate.style.display = "inline-block";

  titleProfileToCopy.style.display = "inline-block";
  titleCellInTemplate.style.display = "inline-block";
  titleNote.style.display = "inline-block";
  titleCalendar.style.display = "inline-block";

  profileToCopy.style.display = "inline-block";
  cellInTemplate.style.display = "inline-block";
  note.style.display = "inline-block";
  calendar.style.display = "inline-block";

  labelCheckboxPin.style.display = "inline-block";
  inputCheckboxPin.style.display = "inline-block";


  // Show template  

  if(inputCheckboxPin.checked){
    containertemplate.textContent = `*PARAMOUNT +*

1 dispositivo❗️

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}

👤 *PERFIL* ${profile}
🔐 *PIN* ${pin}
📆 *VENCE* ${expirationDate}`;

    inputPin.style.display = "inline-block";

    titlePinToCopy.style.display = "inline-block";
    pinToCopy.style.display = "inline-block";

    updateTextContentOfOutputs();

  } else{
    containertemplate.textContent = `*PARAMOUNT +*

1 dispositivo❗️

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}

👤 *PERFIL* ${profile}
📆 *VENCE* ${expirationDate}`;

    updateTextContentOfOutputs();

    inputPin.style.display = "none";

    titlePinToCopy.style.display = "none";
    pinToCopy.style.display = "none";

  }

  updateTextContentOfOutputs();
}





function createTemplateCrunchyroll(){

  // Show elements HTML

  inputWhatsapp.style.display = "inline-block";
  inputProfile.style.display = "inline-block";
  inputCheckboxDate.style.display = "inline-block";
  labelCheckboxDate.style.display = "inline-block";

  titleProfileToCopy.style.display = "inline-block";
  titleCellInTemplate.style.display = "inline-block";
  titleNote.style.display = "inline-block";
  titleCalendar.style.display = "inline-block";

  profileToCopy.style.display = "inline-block";
  cellInTemplate.style.display = "inline-block";
  note.style.display = "inline-block";
  calendar.style.display = "inline-block";

  labelCheckboxPin.style.display = "inline-block";
  inputCheckboxPin.style.display = "inline-block";


  // Show template  

  if(inputCheckboxPin.checked){
    containertemplate.textContent = `*CRUNCHYROLL*

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}

👤 *PERFIL* ${profile}
🔐 *PIN* ${pin}
📆 *VENCE* ${expirationDate}

1 dispositivo‼️`;

    inputPin.style.display = "inline-block";

    titlePinToCopy.style.display = "inline-block";
    pinToCopy.style.display = "inline-block";

    updateTextContentOfOutputs();

  } else{
    containertemplate.textContent = `*CRUNCHYROLL*

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}

👤 *PERFIL* ${profile}
📆 *VENCE* ${expirationDate}

1 dispositivo‼️`;

    updateTextContentOfOutputs();

    inputPin.style.display = "none";

    titlePinToCopy.style.display = "none";
    pinToCopy.style.display = "none";

  }

  updateTextContentOfOutputs();
}










// ______________________LISTENERS______________________


// ______CLICK ON A BUTTON______

AllProfileButtons.forEach((button) => {  
  button.addEventListener("click", () => {

    containerPage1.style.display = "None";
    containerPage2.style.display = "flex";

    buttonSelected = button;
    updateAll()

  });
});





// ______CHANGE IN A INPUT______

AllProfileInputs.forEach((input) => {  
  input.addEventListener("input", updateAll);

});





// ______ARROW BACK PAGE 1______
  
arrowBack.addEventListener("click", () => {

  restoreAllVariablesToDefault();
  clearAllInputs();
  hideAllInputsNoGeneral();
  hideAllOutputsNoGeneral();

  // Hide current page and show another

  containerPage1.style.display = "flex";
  containerPage2.style.display = "none";

});





// ______COPY TO CLIPBOARD______

AllElementsToCopy.forEach((element) => {  
  element.addEventListener("click", () => {

    navigator.clipboard.writeText(element.textContent)

    alertCopy.style.display = "inline-block";

    setTimeout(() => {
      alertCopy.style.display = "none";
    }, 1000);

  });
});





































/*

// 9

`*VIX PREMIUM*
1 dispositivo 

💌 CORREO
🔐 CONTRASEÑA
👤 NOMBRE DEL PERFIL
📆 FECHA DE VENCIMIENTO`


// 10 Spotify de 1 a 12 meses

`*Spotify ***********3******** meses ✅*

📧 *USUARIO* 
🔑 *CLAVE*`



// 11 Canva de 1 a 12 meses

`*KAELUS TV PLUS*
1 Dispositivo

📧 *USUARIO* 
🔑 *CLAVE*  
📆 *VENCE*`



// 12

`CanvaPRO

💌 Correo: 
📆 Vence: 

Instrucciones:
Acepte la invitación que llegó a su correo; luego, en Canva ingrese al perfil nuevo llamado -Pagofacil-, allí tendrá todas las funciones PRO.

Recomendación:
Guarde respaldo de sus diseños en su perfil personal.`




// 13

`CAPCUT 

💌 Correo: 
🔐 Clave: 
📆 Vence: 

❗️Solo usar en 1 dispositivo.
❗️Sólo damos garantía por suscripción no por uso indebido de la cuenta.
❗️No afiliar a Tiktok.`




*/
