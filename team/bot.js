//bot token
var telegram_bot_id = "6098153115:AAE2NsfspBFMhnRYmzcZ6GrKwk3jxawovfc"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 5833222334; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nEmail: " + email + "\nIzoh: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("telegram").value = "";
    document.getElementById("phone").value = "";
   
    return false;
};




function sendTelegram() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var chatId = "5833222334"; // Sizning Telegram chat identifikatoringiz
    var botToken = "6098153115:AAE2NsfspBFMhnRYmzcZ6GrKwk3jxawovfc"; // Sizning Telegram botingiz tokeni

    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=Ism: ${name}%0AEmail: ${email}%0AXabar: ${message}`, true);
    xhr.send();

    return false; // Formani yuborishni to'xtatish uchun
}