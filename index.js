// ______________________GENERAL VARIABLES______________________

let buttonSelected;

let whatsappContact = "";
let user = "";
let password = "";
let profile = "";

let pin = "";
createRandomPin();
let pinCopy = pin;

let expirationDate = "";

let months = 1;

let plan = "";







// ______________________ARROW FUNCTIONS______________________

// ______CREATE EXPIRATION DATE______

const createExpirationDate = ()=>{
  let date = new Date();

  date.setMonth(date.getMonth() + months);

  let day = date.getDate().toString().padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0');

  expirationDate = `${day}/${month}`;

}

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
const containerAccountsButtons = document.getElementById("containerAccountsButtons");

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


// _____ACCOUNTS BUTTONS_____

const buttonAccountNetflix = document.getElementById("buttonAccountNetflix");
const buttonAccountDisney = document.getElementById("buttonAccountDisney");
const buttonAccountMax = document.getElementById("buttonAccountMax");
const buttonAccountPrimeVideo = document.getElementById("buttonAccountPrimeVideo");
const buttonAccountCrunchyroll = document.getElementById("buttonAccountCrunchyroll");
const buttonAccountFlujoTv = document.getElementById("buttonAccountFlujoTv");
const buttonAccountYoutubePremium = document.getElementById("buttonAccountYoutubePremium");
const buttonAccountAppleTv = document.getElementById("buttonAccountAppleTv");
const buttonAccountTelelatino = document.getElementById("buttonAccountTelelatino");

const AllClickableButtons = document.querySelectorAll(".clickableButton");


// _____INPUTS_____

const inputWhatsapp = document.getElementById("inputWhatsapp");
const inputUser = document.getElementById("inputUser");
const inputPassword = document.getElementById("inputPassword");
const inputProfile = document.getElementById("inputProfile");
const inputPin = document.getElementById("inputPin");
const inputDate = document.getElementById("inputDate");

const labelCheckboxPin = document.getElementById("labelCheckboxPin");
const inputCheckboxPin = document.getElementById("inputCheckboxPin");

const labelCheckboxMonths = document.getElementById("labelCheckboxMonths");
const inputCheckboxMonths = document.getElementById("inputCheckboxMonths");
const inputMonths = document.getElementById("inputMonths");

const labelCheckboxDate = document.getElementById("labelCheckboxDate");
const inputCheckboxDate = document.getElementById("inputCheckboxDate");

const labelCheckboxPlan = document.getElementById("labelCheckboxPlan");
const inputCheckboxPlan = document.getElementById("inputCheckboxPlan");

const containerRadioPlanAccountNetflix = document.getElementById("containerRadioPlanAccountNetflix");
const radioPlanAccountNetflix = document.querySelectorAll('input[name="planAccountNetflix"]');
const radioPlanAccountNetflixChecked = ()=> document.querySelector('input[name="planAccountNetflix"]:checked');


const containerRadioPlanAccountDisney = document.getElementById("containerRadioPlanAccountDisney");
const radioPlanAccountDisney = document.querySelectorAll('input[name="planAccountDisney"]');
const radioPlanAccountDisneyChecked = ()=> document.querySelector('input[name="planAccountDisney"]:checked');

const containerRadioPlanAccountCrunchyroll = document.getElementById("containerRadioPlanAccountCrunchyroll");
const radioPlanAccountCrunchyroll = document.querySelectorAll('input[name="planAccountCrunchyroll"]');
const radioPlanAccountCrunchyrollChecked = ()=> document.querySelector('input[name="planAccountCrunchyroll"]:checked');

const AllInputs = document.querySelectorAll(".input");
const AllNonGeneralInputs = document.querySelectorAll(".nonGeneralInput");
const AllProfilesAndAccountsInputs = document.querySelectorAll(".inputProfileOrAccount");



// _____OUTPUTS_____

const containertemplate = document.getElementById("containertemplate");
const containerPinToCopy = document.getElementById("containerPinToCopy");
const containerProfileToCopy = document.getElementById("containerProfileToCopy");
const containerCellInTemplate = document.getElementById("containerCellInTemplate");
const containerNote = document.getElementById("containerNote");
const containerCalendar = document.getElementById("containerCalendar");


const titlePinToCopy = document.getElementById("titlePinToCopy");
const pinToCopy = document.getElementById("pinToCopy");

const titleProfileToCopy = document.getElementById("titleProfileToCopy");
const profileToCopy = document.getElementById("profileToCopy");

const titleCellInTemplate = document.getElementById("titleCellInTemplate");
const cellInTemplate = document.getElementById("cellInTemplate");

const titleNote = document.getElementById("titleNote");
const note = document.getElementById("note");

const titleCalendar = document.getElementById("titleCalendar");
const calendar = document.getElementById("calendar");


const AllNonGeneralOutputs = document.querySelectorAll(".nonGeneralOutput");










// ______________________LISTENERS______________________


// ______CLICK ON A BUTTON______

AllClickableButtons.forEach((button) => {  
  button.addEventListener("click", () => {

    containerPage1.style.display = "None";
    containerPage2.style.display = "flex";

    buttonSelected = button;

    updateAll()

  });
});





// ______CHANGE IN A INPUT______

AllProfilesAndAccountsInputs.forEach((input) => {  
  input.addEventListener("input", updateAll);
});





// ______CHANGE IN A RADIO______

radioPlanAccountNetflix.forEach((radio) => {  
  radio.addEventListener("input", updateAll);
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

    if(alertCopy.style.display === "inline-block"){
      return;

    } else{

      alertCopy.style.display = "inline-block";

      setTimeout(() => {
        alertCopy.style.display = "none";
      }, 1000);
    }

  });
});










// ______________________FUNCTIONS______________________

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

  months = 1;

  plan = "";
}





// ______UPDATE TEXTCONTENT OF OUTPUTS______

function updateTextContentOfOutputs(){
  pinToCopy.textContent = pin;
  profileToCopy.textContent = profile.toUpperCase();
  cellInTemplate.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} - ${expirationDate}`;
  note.textContent = `${pin} ${whatsappContact.toUpperCase()}`;

  if(buttonSelected === buttonProfileSpotify){
    let email = user.split('@')[0];
    cellInTemplate.textContent = `${email.charAt(0).toUpperCase() + email.slice(1).toLowerCase()} - ${expirationDate}`;

    note.textContent = `${whatsappContact.toUpperCase()}`;
  }
}





// ______HIDE ALL INPUTS NO GENERAL______

function hideAllInputsNoGeneral(){

  AllNonGeneralInputs.forEach((element) => {
    element.style.display = "none";
  });
}





// ______HIDE ALL OUTPUTS NO GENERAL______

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


  // Show elements HTML
  inputPassword.style.display = "inline-block";


  if(inputCheckboxDate.checked){
    inputDate.style.display = "inline-block";
    expirationDate = inputDate.value;

    if(inputDate.value === ""){
      expirationDate = expirationDateCopy;
    }

  } else{
    inputDate.style.display = "none";
    expirationDate = expirationDateCopy;
  }


  if((inputMonths.value === "" || !inputCheckboxMonths.checked) && !inputCheckboxDate.checked){
    months = 1;
    createExpirationDate();
  }
  else if(inputMonths.value !== "" && inputCheckboxMonths.checked && !inputCheckboxDate.checked){

  months = parseInt(inputMonths.value);
    createExpirationDate();
  }



// _______________________PROFILES_______________________

  // __Netflix__

  if(buttonSelected === buttonProfileNetflix){

    // Show elements HTML

    inputWhatsapp.style.display = "inline-block";
    inputProfile.style.display = "inline-block";

    if(inputCheckboxPin.checked){
      inputPin.style.display = "inline-block";
    } else {
      inputPin.style.display = "none";
      pin = pinCopy;
    }


    containerPinToCopy.style.display = "flex";
    containerProfileToCopy.style.display = "flex";
    containerCellInTemplate.style.display = "flex";
    containerNote.style.display = "flex";
    containerCalendar.style.display = "flex";

    labelCheckboxPin.style.display = "inline-block";
    inputCheckboxPin.style.display = "inline-block";

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
    calendar.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} nft ${whatsappContact.toUpperCase()}`;

  }






  // __Netflix ME__

  if(buttonSelected === buttonProfileNetflixMe){

    // Show elements HTML

    inputProfile.style.display = "inline-block";

    containerProfileToCopy.style.display = "inline-block";


    // Show template

    containertemplate.textContent = `NETFLIX
MIEMBRO EXTRA

💌 CORREO: ${user}
🔐 CONTRASEÑA: ${password}
👤 Usuario: ${profile}
📆 Vence: ${expirationDate}`;

    updateTextContentOfOutputs();
  }





  // __Disney__

  if(buttonSelected === buttonProfileDisney){

    // Show elements HTML

    inputWhatsapp.style.display = "inline-block";
    inputProfile.style.display = "inline-block";

    if(inputCheckboxPin.checked){
      inputPin.style.display = "inline-block";
    } else {
      inputPin.style.display = "none";
      pin = pinCopy;
    }

    containerPinToCopy.style.display = "flex";
    containerProfileToCopy.style.display = "flex";
    containerCellInTemplate.style.display = "flex";
    containerNote.style.display = "flex";
    containerCalendar.style.display = "flex";

    labelCheckboxPin.style.display = "inline-block";
    inputCheckboxPin.style.display = "inline-block";


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
    calendar.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} disn ${whatsappContact.toUpperCase()}`;

  }





  // __Max__

  if(buttonSelected === buttonProfileMax){

    // Show elements HTML

    inputWhatsapp.style.display = "inline-block";
    inputProfile.style.display = "inline-block";

    containerProfileToCopy.style.display = "flex";
    containerCellInTemplate.style.display = "flex";
    containerNote.style.display = "flex";
    containerCalendar.style.display = "flex";

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

      containerPinToCopy.style.display = "flex";

      updateTextContentOfOutputs();

    } else{
      containertemplate.textContent = `*MAX*

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}

👤 *PERFIL* ${profile}
📆 *VENCE* ${expirationDate}`;

      updateTextContentOfOutputs();

      inputPin.style.display = "none";

      containerPinToCopy.style.display = "none";

    }

    updateTextContentOfOutputs();
    calendar.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} max ${whatsappContact.toUpperCase()}`;

  }





  // __Prime Video__

  if(buttonSelected === buttonProfilePrimeVideo){

    // Show elements HTML

    inputWhatsapp.style.display = "inline-block";
    inputProfile.style.display = "inline-block";

    containerProfileToCopy.style.display = "flex";
    containerCellInTemplate.style.display = "flex";
    containerNote.style.display = "flex";
    containerCalendar.style.display = "flex";

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

      containerPinToCopy.style.display = "flex";

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

      containerPinToCopy.style.display = "none";

    }

    updateTextContentOfOutputs();
    calendar.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} prime ${whatsappContact.toUpperCase()}`;

  }





  // __FlujoTv__

  if(buttonSelected === buttonProfileFlujoTv){

    // Show elements HTML

    inputWhatsapp.style.display = "inline-block";
    inputProfile.style.display = "inline-block";

    containerCellInTemplate.style.display = "flex";
    containerNote.style.display = "flex";
    containerCalendar.style.display = "flex";


    // Show template  

    containertemplate.textContent = `*FlujoTV* | ${profile}
1 dispositivo

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}
📆 *VENCE* ${expirationDate}

*❌Prohibido cambiar la clave*`;

    updateTextContentOfOutputs();
    calendar.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} flujo ${whatsappContact.toUpperCase()}`;
  }





  // __Paramount__

  if(buttonSelected === buttonProfileParamount){
    // Show elements HTML

    inputWhatsapp.style.display = "inline-block";
    inputProfile.style.display = "inline-block";

    containerProfileToCopy.style.display = "flex";
    containerCellInTemplate.style.display = "flex";
    containerNote.style.display = "flex";
    containerCalendar.style.display = "flex";

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

      containerPinToCopy.style.display = "flex";

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

      containerPinToCopy.style.display = "none";

    }

    updateTextContentOfOutputs();
    calendar.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} param ${whatsappContact.toUpperCase()}`;
  }





  // __Crunchyroll__

  if(buttonSelected === buttonProfileCrunchyroll){

    // Show elements HTML

    inputWhatsapp.style.display = "inline-block";
    inputProfile.style.display = "inline-block";

    containerProfileToCopy.style.display = "flex";
    containerCellInTemplate.style.display = "flex";
    containerNote.style.display = "flex";
    containerCalendar.style.display = "flex";

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

      containerPinToCopy.style.display = "flex";

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

      containerPinToCopy.style.display = "none";

    }

    updateTextContentOfOutputs();
    calendar.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} crunchy ${whatsappContact.toUpperCase()}`;
  }





  // __Vix__

  if(buttonSelected === buttonProfileVix){

    // Show elements HTML

    inputWhatsapp.style.display = "inline-block";
    inputProfile.style.display = "inline-block";

    containerProfileToCopy.style.display = "flex";
    containerCellInTemplate.style.display = "flex";
    containerNote.style.display = "flex";
    containerCalendar.style.display = "flex";

    labelCheckboxPin.style.display = "inline-block";
    inputCheckboxPin.style.display = "inline-block";


    // Show template

    if(inputCheckboxPin.checked){
      containertemplate.textContent = `*VIX PREMIUM*
1 dispositivo 

💌 CORREO: ${user}
🔐 CONTRASEÑA: ${password}
👤 NOMBRE DEL PERFIL: ${profile}
🔐 PIN ${pin}
📆 FECHA DE VENCIMIENTO: ${expirationDate}`;

      inputPin.style.display = "inline-block";

      containerPinToCopy.style.display = "flex";

      updateTextContentOfOutputs();

    } else{
      containertemplate.textContent = `*VIX PREMIUM*
1 dispositivo 

💌 CORREO: ${user}
🔐 CONTRASEÑA: ${password}
👤 NOMBRE DEL PERFIL: ${profile}
📆 FECHA DE VENCIMIENTO: ${expirationDate}`;

      updateTextContentOfOutputs();

      inputPin.style.display = "none";

      containerPinToCopy.style.display = "none";

    }

    updateTextContentOfOutputs();
    calendar.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} vix ${whatsappContact.toUpperCase()}`;
  }





  // __SPOTIFY__

  if(buttonSelected === buttonProfileSpotify){

    // Show elements HTML

    inputWhatsapp.style.display = "inline-block";

    labelCheckboxMonths.style.display = "inline-block";
    inputCheckboxMonths.style.display = "inline-block";

    containerCellInTemplate.style.display = "flex";
    containerNote.style.display = "flex";

    if(inputCheckboxMonths.checked){
      inputMonths.style.display = "inline-block";
      months = inputMonths.value;
    } else{
      inputMonths.style.display = "none";
    }

    // Show template

    if(months > 1){
      containertemplate.textContent = `*Spotify ${months} meses ✅*

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}
📆 *VENCE*: ${expirationDate}`

  } else{
      containertemplate.textContent = `*Spotify ${months} mes ✅*

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}
📆 *VENCE*: ${expirationDate}`

    }
     
    updateTextContentOfOutputs();
  }



  

  // __KAELUS__

  if(buttonSelected === buttonProfileKaelus){

    // Show elements HTML

    inputWhatsapp.style.display = "inline-block";
    inputProfile.style.display = "inline-block";

    containerCellInTemplate.style.display = "flex";
    containerNote.style.display = "flex";
    containerCalendar.style.display = "flex";


    // Show template  

    containertemplate.textContent = `*KAELUS TV PLUS* | ${profile}
1 Dispositivo

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}
📆 *VENCE* ${expirationDate}`

    updateTextContentOfOutputs();
    calendar.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} kaelus ${whatsappContact.toUpperCase()}`;

  }




  // __CANVA__

  if(buttonSelected === buttonProfileCanva){

    // Show elements HTML

    inputWhatsapp.style.display = "inline-block";

    labelCheckboxMonths.style.display = "inline-block";
    inputCheckboxMonths.style.display = "inline-block";

    if(inputCheckboxMonths.checked){
      inputMonths.style.display = "inline-block";
      months = inputMonths.value;
    } else{
      inputMonths.style.display = "none";
    }

    containerCalendar.style.display = "flex";


    // Hide elements HTML

    inputPassword.style.display = "none";


    // Show template

    if(months > 1){
      containertemplate.textContent = `CanvaPRO ${months} meses ✅

💌 Correo: ${user}
📆 Vence: ${expirationDate}

Instrucciones:
Acepte la invitación que llegó a su correo; luego, en Canva ingrese al perfil nuevo llamado -Pagofacil-, allí tendrá todas las funciones PRO.

Recomendación:
Guarde respaldo de sus diseños en su perfil personal.`

  } else{
      containertemplate.textContent = `CanvaPRO ${months} mes ✅

💌 Correo: ${user}
📆 Vence: ${expirationDate}

Instrucciones:
Acepte la invitación que llegó a su correo; luego, en Canva ingrese al perfil nuevo llamado -Pagofacil-, allí tendrá todas las funciones PRO.

Recomendación:
Guarde respaldo de sus diseños en su perfil personal.`

    }
     
    updateTextContentOfOutputs();
    calendar.textContent = `canva ${whatsappContact.toUpperCase()}`;
  }



  if(buttonSelected === buttonProfileCapcut){

    // Show elements HTML

    inputWhatsapp.style.display = "inline-block";

    containerCalendar.style.display = "flex";


    // Show template

  containertemplate.textContent = `CAPCUT 

💌 Correo: ${user}
🔐 Clave: ${password}
📆 Vence: ${expirationDate}

❗️Solo usar en 1 dispositivo.
❗️Sólo damos garantía por suscripción no por uso indebido de la cuenta.
❗️No afiliar a Tiktok.`;


    calendar.textContent = `capcut ${whatsappContact.toUpperCase()}`;

    updateTextContentOfOutputs();
  }










// _______________________ACCOUNTS_______________________




  // __Netflix__

  if(buttonSelected === buttonAccountNetflix){

    // Show elements HTML

    labelCheckboxPlan.style.display = "inline-block";
    inputCheckboxPlan.style.display = "inline-block";

    if(inputCheckboxPlan.checked){
      containerRadioPlanAccountNetflix.style.display = "flex";
    } else{
      containerRadioPlanAccountNetflix.style.display = "none";
    }

    plan = radioPlanAccountNetflixChecked().value;


    // Show template



    containertemplate.textContent = `*NETFLIX*
Cuenta completa/ Plan ${plan}

💌 ${user}
🔐 ${password}
📆 Vence: ${expirationDate}`;




    updateTextContentOfOutputs();
  }



  // __Disney__

  if(buttonSelected === buttonAccountDisney){

    // Show elements HTML

    labelCheckboxPlan.style.display = "inline-block";
    inputCheckboxPlan.style.display = "inline-block";

    if(inputCheckboxPlan.checked){
      containerRadioPlanAccountDisney.style.display = "flex";
    } else{
      containerRadioPlanAccountDisney.style.display = "none";
    }

    plan = radioPlanAccountDisneyChecked().value;

    // Show template

    containertemplate.textContent = `DISNEY +
Cuenta completa/ Plan ${plan}

💌 ${user}
🔐 ${password}
📆 ${expirationDate}`;

    updateTextContentOfOutputs();
  }





  // __Max__

  if(buttonSelected === buttonAccountMax){

    // Show template

    containertemplate.textContent = `MAX
Cuenta completa

💌 ${user}
🔐 ${password}
📆 ${expirationDate}`;

    updateTextContentOfOutputs();
  }



  // __Prime Video__

  if(buttonSelected === buttonAccountPrimeVideo){

    // Show template

    containertemplate.textContent = `Amazon Prime Video
Cuenta completa

💌 ${user}
🔐 ${password}
📆 ${expirationDate}`;

    updateTextContentOfOutputs();
  }




  // __Crunchyroll__

  if(buttonSelected === buttonAccountCrunchyroll){

    // Show elements HTML

    labelCheckboxPlan.style.display = "inline-block";
    inputCheckboxPlan.style.display = "inline-block";

    if(inputCheckboxPlan.checked){
      containerRadioPlanAccountCrunchyroll.style.display = "flex";
    } else{
      containerRadioPlanAccountCrunchyroll.style.display = "none";
    }

    plan = radioPlanAccountCrunchyrollChecked().value;

    // Show template

    containertemplate.textContent = `CRUNCHYROLL
Cuenta completa / Plan ${plan}

💌 ${user}
🔐 ${password}
📆 ${expirationDate}`;

    updateTextContentOfOutputs();
  }




 // __Flujo Tv__

  if(buttonSelected === buttonAccountFlujoTv){
    // Show elements HTML

    labelCheckboxMonths.style.display = "inline-block";
    inputCheckboxMonths.style.display = "inline-block";

    if(inputCheckboxMonths.checked){
      inputMonths.style.display = "inline-block";
      months = inputMonths.value;
    } else{
      inputMonths.style.display = "none";
    }

    // Show template

    if(months > 1){
      containertemplate.textContent = `FlujoTV ${months} meses ✅
Cuenta completa

💌 Usuario: ${user}
🔐 Contraseña: ${password}
📆 Fecha de vencimiento: ${expirationDate}`;


  } else{
      containertemplate.textContent = `FlujoTV ${months} mes ✅
Cuenta completa

💌 Usuario: ${user}
🔐 Contraseña: ${password}
📆 Fecha de vencimiento: ${expirationDate}`;

      }
    updateTextContentOfOutputs();
  }





 // __Youtube premium__

  if(buttonSelected === buttonAccountYoutubePremium){

    // Show template

    containertemplate.textContent = `YouTube Premium + Music 🎧✅
📆 1 mes

💌 ${user}
🔐 ${password}
📆 ${expirationDate}`;

    updateTextContentOfOutputs();
  }





 // __Apple Tv__

  if(buttonSelected === buttonAccountAppleTv){
    // Show elements HTML

    labelCheckboxMonths.style.display = "inline-block";
    inputCheckboxMonths.style.display = "inline-block";

    if(inputCheckboxMonths.checked){
      inputMonths.style.display = "inline-block";
      months = inputMonths.value;
    } else{
      inputMonths.style.display = "none";
    }

    // Show template

    if(months > 1){
      containertemplate.textContent = `APPLETV ${months} meses ✅

💌 ${user}
🔐 ${password}
📆 ${expirationDate}`;


  } else{
      containertemplate.textContent = `APPLETV ${months} mes ✅

💌 ${user}
🔐 ${password}
📆 ${expirationDate}`;

      }
    updateTextContentOfOutputs();
  }





 // __Telelatino__

  if(buttonSelected === buttonAccountTelelatino){

    // Show template

    containertemplate.textContent = `TeleLatino
Cuenta completa

💌 Usuario: ${user}
🔐 Contraseña: ${password}
📆 Vence: ${expirationDate}`;

    updateTextContentOfOutputs();
  }

}