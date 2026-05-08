document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("form").onsubmit = function(){

    let name = document.querySelector("#name").value;
    console.log("Hi"+name);

    document.querySelector("h1").innerHTML = "Hi "+name;

//////////////////////////////////////////////////////////////////////////////////
    let now = new Date();

    let hour = now.getHours();
    if (hour < 12)
        { document.querySelector("#time").innerHTML = "☀️Good morning!"; }
    else if (hour < 18)
        { document.querySelector("#time").innerHTML = "🌄 Good afternoon!"; }
    else
        { document.querySelector("#time").innerHTML = "🌜Good night!"; }

//////////////////////////////////////////////////////////////////////////////////

    let day = now.getDay();
    if (day < 5)
        { document.querySelector("#day").innerHTML = "Not Friday, yet!"; }
    else if (day == 5)
        { document.querySelector("#day").innerHTML = "Finally Fridaaaaaay! 🕺"; }
    else
        { document.querySelector("day").innerHTML = "Just enjoy your weekend 🙌"; }

//////////////////////////////////////////////////////////////////////////////////

    return false; //Prevent website from reloading
};
});
