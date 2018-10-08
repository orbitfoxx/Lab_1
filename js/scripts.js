

/* -------------------------------FEEDBACK-FORM--------------------------------------- */

var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var cancel = popup.querySelector(".btn-cancel");
var form = popup.querySelector("form");
var userName = popup.querySelector("[name = 'name-field']");
var userEmail = popup.querySelector("[name = 'email-field']");
var message = popup.querySelector("[name = 'message-field']");
var storageName = localStorage.getItem("userName");
var storageEMail = localStorage.getItem("userEmail");


link.addEventListener("click", function (event){
	event.preventDefault();
	popup.classList.add("modal-content-show");
	if (storageName){
		userName.value = storageName;
		userEmail.value = storageEMail;
		message.focus();
	} else {
		userName.focus();
	}
});


close.addEventListener("click", function (event){
	event.preventDefault();
	if (popup.classList.contains("modal-content-show")){
		popup.classList.remove("modal-content-show");
	}
});

cancel.addEventListener("click", function (event){
	event.preventDefault();
	if (popup.classList.contains("modal-content-show")){
		popup.classList.remove("modal-content-show");
	}
});

window.addEventListener("keydown", function (event){
	if (event.keyCode === 27){
		if (popup.classList.contains("modal-content-show")){
			popup.classList.remove("modal-content-show");
		}
	}
});

form.addEventListener("submit", function (event){
	event.preventDefault();
	if (!(userName.value)){
		alert("Укажите Ваше имя, пожалуйста!");
		userName.focus();
	} else if (!(userEmail.value)){
		alert("Укажите адрес Вашей электронной почты!");
		userEmail.focus();
	} else if (!(message.value)){
		alert("Заполните, пожалуйста, поле сообщения!");
		message.focus();
	} else {
		localStorage.setItem("userName", userName.value);
		localStorage.setItem("userEmail", userEmail.value);

		if (popup.classList.contains("modal-content-show")){
		popup.classList.remove("modal-content-show");
      	message.value = "";
      }
	}
});



/* -------------------------------MAP--------------------------------------- */


function initialize() {
        
var latlng = new google.maps.LatLng(50.0152877, 36.2278514);
var settings = {
    zoom: 17,
    center: latlng,
    panControl: false,
    zoomControl: false,
    scaleControl: false,
    rotateControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
      
var map = new google.maps.Map(document.getElementById("map-canvas"), settings);
        
var companyLogo = new google.maps.MarkerImage("img/map-marker.png",
                                              new google.maps.Size(231,190),
                                              new google.maps.Point(0,0),
                                              new google.maps.Point(49,190)
                                             );

var companyPos = new google.maps.LatLng(50.0152877, 36.2278514);
var companyMarker = new google.maps.Marker({
        position: companyPos,
        map: map,
        icon: companyLogo,
        title:"Nerds",
      });
      }

document.addEventListener("load", initialize());