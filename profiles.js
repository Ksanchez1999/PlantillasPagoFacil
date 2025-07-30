// Spotify de 1 a 12 meses

//Canva de 1 a 12 meses



// ___________SELECT HTML___________

// CONTAINERS

const containerPage1Profiles = document.getElementById("containerPage1Profiles");
const containerProfilesButtons = document.getElementById("containerProfilesButtons");
const containerPage2Profiles = document.getElementById("containerPage2Profiles");
const containerinputs = document.getElementById("containerinputs");
const containerResults = document.getElementById("containerResults");
const containertemplate = document.getElementById("containertemplate");
const containerExcelElements = document.getElementById("containerExcelElements");

const alertCopy = document.getElementById("alertCopy");
const arrowBack = document.getElementById("arrowBack");


// INPUTS

const inputWhatsapp = document.getElementById("inputWhatsapp");
const inputUser = document.getElementById("inputUser");
const inputPassword = document.getElementById("inputPassword");
const inputProfile = document.getElementById("inputProfile");

const inputCheckboxPin = document.getElementById("inputCheckboxPin");
const labelCheckboxPin = document.getElementById("labelCheckboxPin");
const inputPin = document.getElementById("inputPin");


const inputCheckboxDate = document.getElementById("inputCheckboxDate");
const labelCheckboxDate = document.getElementById("labelCheckboxDate");
const inputDate = document.getElementById("inputDate");
const inputMonths = document.getElementById("inputMonths");

const AllProfileInputs = document.querySelectorAll(".inputProfiles");


// BUTTONS PROFILES

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




// OUTPUTS

const titlePinToCopy = document.getElementById("titlePinToCopy");

console.log(titlePinToCopy);
const pinToCopy = document.getElementById("pinToCopy");

const titleProfileToCopy = document.getElementById("titleProfileToCopy");
const profileToCopy = document.getElementById("profileToCopy");

const titlecellInTemplate = document.getElementById("titlecellInTemplate");
const cellInTemplate = document.getElementById("cellInTemplate");

const titleNote = document.getElementById("titleNote");
const note = document.getElementById("note");

const titleCalendar = document.getElementById("titleCalendar");
const calendar = document.getElementById("calendar");


const AllElementsToCopy = document.querySelectorAll(".elementToCopy");





// ______GENERAL VARIABLES______

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


let months = 1;
let plan = "";



// ___________GENERAL LISTENER___________

// __Click on a button__

AllProfileButtons.forEach((button) => {  
  button.addEventListener("click", () => {
    containerPage1Profiles.style.display = "None";
    containerPage2Profiles.style.display = "flex";

    buttonSelected = button;

    updateTemplate()

  });
});


// __Change in a input__

AllProfileInputs.forEach((input) => {  
  input.addEventListener("input", updateTemplate);

});


// __Back Page 1__

  
arrowBack.addEventListener("click", () => {

  buttonSelected = "";

  user = "";
  password = "";
  profile = "";
  whatsappContact = "";

  pin = "";
  createRandomPin()
  pinCopy = pin;

  expirationDate = "";
  createExpirationDate();
  expirationDateCopy = expirationDate;

  months = 1;
  plan = "";


  inputWhatsapp.value = "";
  inputUser.value = "";
  inputPassword.value = "";
  inputProfile.value = "";

  inputCheckboxPin.checked = false;
  inputPin.value = "";

  inputCheckboxDate.checked = false;
  inputDate.value = "";
  inputMonths.value = "";


  labelCheckboxPin.style.display = "none";
  inputCheckboxPin.style.display = "none";

  inputPin.style.display = "none";
  inputDate.style.display = "none";
  inputMonths.style.display = "none";

  containerPage1Profiles.style.display = "flex";
  containerPage2Profiles.style.display = "none";
});




// __COPY__

AllElementsToCopy.forEach((element) => {  
  element.addEventListener("click", () => {
    navigator.clipboard.writeText(element.textContent)


    alertCopy.style.display = "inline-block";

    setTimeout(() => {
      alertCopy.style.display = "none";
    }, 1000);

  });
});






// ___________FUNCTION: CREATE EXPIRATION DATE___________


function createExpirationDate(){
  let date = new Date();

  date.setMonth(date.getMonth() + 1);

  let day = date.getDate().toString().padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0');

  expirationDate = `${day}/${month}`;
}



// ___________FUNCTION: CREATE RANDOM PIN___________


function createRandomPin(){
  pin = Math.floor(1000 + Math.random() * 9000);
}


// ___________FUNCTION: UPDATE TEMPLATE___________


function updateTemplate(){

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


  // Netflix

  if(buttonSelected === buttonProfileNetflix){
    createTemplateNetflix();

    inputProfile.style.display = "inline-block";
    inputPin.style.display = "inline-block";
    inputCheckboxDate.style.display = "inline-block";
    labelCheckboxDate.style.display = "inline-block";


    titlePinToCopy.style.display = "inline-block";
    pinToCopy.style.display = "inline-block";

    titleProfileToCopy.style.display = "inline-block";
    profileToCopy.style.display = "inline-block";

    titleCellInTemplate.style.display = "inline-block";
    cellInTemplate.style.display = "inline-block";

    titleNote.style.display = "inline-block";
    note.style.display = "inline-block";

    titleCalendar.style.display = "inline-block";
    calendar.style.display = "inline-block";
  
  }


  // Netflix ME

  if(buttonSelected === buttonProfileNetflixMe){
    createTemplateNetflixMe();

    inputWhatsapp.style.display = "none";

    inputProfile.style.display = "inline-block";
    inputPin.style.display = "inline-block";
    inputCheckboxDate.style.display = "inline-block";
    labelCheckboxDate.style.display = "inline-block";

    titleProfileToCopy.style.display = "inline-block";
    profileToCopy.style.display = "inline-block";  
  }


  // Disney

  if(buttonSelected === buttonProfileDisney){
    createTemplateDisney();

    inputProfile.style.display = "inline-block";
    inputPin.style.display = "inline-block";
    inputCheckboxDate.style.display = "inline-block";
    labelCheckboxDate.style.display = "inline-block";


    titlePinToCopy.style.display = "inline-block";
    pinToCopy.style.display = "inline-block";

    titleProfileToCopy.style.display = "inline-block";
    profileToCopy.style.display = "inline-block";

    titleCellInTemplate.style.display = "inline-block";
    cellInTemplate.style.display = "inline-block";

    titleNote.style.display = "inline-block";
    note.style.display = "inline-block";

    titleCalendar.style.display = "inline-block";
    calendar.style.display = "inline-block";

  }


  // Max

  if(buttonSelected === buttonProfileMax){
    createTemplateMax();

    inputProfile.style.display = "inline-block";
    inputCheckboxDate.style.display = "inline-block";
    labelCheckboxDate.style.display = "inline-block";

    titleProfileToCopy.style.display = "inline-block";
    profileToCopy.style.display = "inline-block";

    titleCellInTemplate.style.display = "inline-block";
    cellInTemplate.style.display = "inline-block";

    titleNote.style.display = "inline-block";
    note.style.display = "inline-block";

    titleCalendar.style.display = "inline-block";
    calendar.style.display = "inline-block";

    labelCheckboxPin.style.display = "inline-block";
    inputCheckboxPin.style.display = "inline-block";

  }


  // Prime Video

  if(buttonSelected === buttonProfilePrimeVideo){
    createTemplatePrimeVideo();

    inputProfile.style.display = "inline-block";
    inputCheckboxDate.style.display = "inline-block";
    labelCheckboxDate.style.display = "inline-block";

    titleProfileToCopy.style.display = "inline-block";
    profileToCopy.style.display = "inline-block";

    titleCellInTemplate.style.display = "inline-block";
    cellInTemplate.style.display = "inline-block";

    titleNote.style.display = "inline-block";
    note.style.display = "inline-block";

    titleCalendar.style.display = "inline-block";
    calendar.style.display = "inline-block";

    labelCheckboxPin.style.display = "inline-block";
    inputCheckboxPin.style.display = "inline-block";
  }


  // FlujoTv

  if(buttonSelected === buttonProfileFlujoTv){

    createTemplateFlujoTv();

    inputProfile.style.display = "inline-block";

    inputCheckboxDate.style.display = "inline-block";
    labelCheckboxDate.style.display = "inline-block";

    titleCellInTemplate.style.display = "inline-block";
    cellInTemplate.style.display = "inline-block";

    titleNote.style.display = "inline-block";
    note.style.display = "inline-block";

    titleCalendar.style.display = "inline-block";
    calendar.style.display = "inline-block";
  
  }


  // Paramount

  if(buttonSelected === buttonProfileParamount){
    createTemplateParamount();

    inputProfile.style.display = "inline-block";
    inputCheckboxDate.style.display = "inline-block";
    labelCheckboxDate.style.display = "inline-block";

    titleProfileToCopy.style.display = "inline-block";
    profileToCopy.style.display = "inline-block";

    titleCellInTemplate.style.display = "inline-block";
    cellInTemplate.style.display = "inline-block";

    titleNote.style.display = "inline-block";
    note.style.display = "inline-block";

    titleCalendar.style.display = "inline-block";
    calendar.style.display = "inline-block";

    labelCheckboxPin.style.display = "inline-block";
    inputCheckboxPin.style.display = "inline-block";
  }


  // Crunchyroll

  if(buttonSelected === buttonProfileCrunchyroll){
    createTemplateCrunchyroll();

    inputProfile.style.display = "inline-block";
    inputCheckboxDate.style.display = "inline-block";
    labelCheckboxDate.style.display = "inline-block";

    titleProfileToCopy.style.display = "inline-block";
    profileToCopy.style.display = "inline-block";

    titleCellInTemplate.style.display = "inline-block";
    cellInTemplate.style.display = "inline-block";

    titleNote.style.display = "inline-block";
    note.style.display = "inline-block";

    titleCalendar.style.display = "inline-block";
    calendar.style.display = "inline-block";

    labelCheckboxPin.style.display = "inline-block";
    inputCheckboxPin.style.display = "inline-block";
  }








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





// ___________FUNCTIONS: CREATE PROFILES___________

function createTemplateNetflix(){
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

  pinToCopy.textContent = pin;
  profileToCopy.textContent = profile.toUpperCase();
  cellInTemplate.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} - ${expirationDate}`;
  note.textContent = `${pin} ${whatsappContact.toUpperCase()}`;
  calendar.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} nft ${whatsappContact.toUpperCase()}`;
}






function createTemplateNetflixMe(){
  containertemplate.textContent = `NETFLIX
MIEMBRO EXTRA

💌 CORREO: ${user}
🔐 CONTRASEÑA: ${password}
👤 Usuario: ${profile}
📆 Vence: ${expirationDate}`;

  profileToCopy.textContent = profile.toUpperCase();

}





function createTemplateDisney(){
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

  pinToCopy.textContent = pin;
  profileToCopy.textContent = profile.toUpperCase();
  cellInTemplate.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} - ${expirationDate}`;
  note.textContent = `${pin} ${whatsappContact.toUpperCase()}`;
  calendar.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} disn ${whatsappContact.toUpperCase()}`;
}





function createTemplateMax(){

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

    pinToCopy.textContent = pin;
    note.textContent = `${pin} ${whatsappContact.toUpperCase()}`;

  } else{
    containertemplate.textContent = `*MAX*

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}

👤 *PERFIL* ${profile}
📆 *VENCE* ${expirationDate}`;

    note.textContent = `${whatsappContact.toUpperCase()}`;

    inputPin.style.display = "none";

    titlePinToCopy.style.display = "none";
    pinToCopy.style.display = "none";

  }

  profileToCopy.textContent = profile.toUpperCase();
  cellInTemplate.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} - ${expirationDate}`;
  calendar.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} max ${whatsappContact.toUpperCase()}`;
}





function createTemplatePrimeVideo(){

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

    pinToCopy.textContent = pin;
    note.textContent = `${pin} ${whatsappContact.toUpperCase()}`;


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


    note.textContent = `${whatsappContact.toUpperCase()}`;

    inputPin.style.display = "none";

    titlePinToCopy.style.display = "none";
    pinToCopy.style.display = "none";

  }

  profileToCopy.textContent = profile.toUpperCase();
  cellInTemplate.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} - ${expirationDate}`;
  calendar.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} prime ${whatsappContact.toUpperCase()}`;
}





function createTemplateFlujoTv(){
  containertemplate.textContent = `*FlujoTV* | ${profile}
1 dispositivo

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}
📆 *VENCE* ${expirationDate}

*❌Prohibido cambiar la clave*`;


  cellInTemplate.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} - ${expirationDate}`;
  note.textContent = `${whatsappContact.toUpperCase()}`;
  calendar.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} flujo ${whatsappContact.toUpperCase()}`;
}





function createTemplateParamount(){

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

    pinToCopy.textContent = pin;
    note.textContent = `${pin} ${whatsappContact.toUpperCase()}`;

  } else{
    containertemplate.textContent = `*PARAMOUNT +*
1 dispositivo❗️

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}

👤 *PERFIL* ${profile}
📆 *VENCE* ${expirationDate}`;

    note.textContent = `${whatsappContact.toUpperCase()}`;

    inputPin.style.display = "none";

    titlePinToCopy.style.display = "none";
    pinToCopy.style.display = "none";

  }

  profileToCopy.textContent = profile.toUpperCase();
  cellInTemplate.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} - ${expirationDate}`;
  calendar.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} param ${whatsappContact.toUpperCase()}`;
}








function createTemplateCrunchyroll(){

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

    pinToCopy.textContent = pin;
    note.textContent = `${pin} ${whatsappContact.toUpperCase()}`;

  } else{
    containertemplate.textContent = `*CRUNCHYROLL*

📧 *USUARIO* ${user}
🔑 *CLAVE* ${password}

👤 *PERFIL* ${profile}
📆 *VENCE* ${expirationDate}

1 dispositivo‼️`;

    note.textContent = `${whatsappContact.toUpperCase()}`;

    inputPin.style.display = "none";

    titlePinToCopy.style.display = "none";
    pinToCopy.style.display = "none";

  }

  profileToCopy.textContent = profile.toUpperCase();
  cellInTemplate.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} - ${expirationDate}`;
  calendar.textContent = `${profile.charAt(0).toUpperCase() + profile.slice(1).toLowerCase()} crunchy ${whatsappContact.toUpperCase()}`;
}



























/*

// 9

`*VIX PREMIUM*
1 dispositivo 

💌 CORREO
🔐 CONTRASEÑA
👤 NOMBRE DEL PERFIL
📆 FECHA DE VENCIMIENTO`




// 10

`*Spotify ***********3******** meses ✅*

📧 *USUARIO* 
🔑 *CLAVE*`



// 11

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
