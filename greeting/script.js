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

    const dweek = today.toLocaleDateString('en-US', { weekday: 'long' });
    console.log(dayName);

//////////////////////////////////////////////////////////////////////////////////

    return false; //Prevent website from reloading
};
});
