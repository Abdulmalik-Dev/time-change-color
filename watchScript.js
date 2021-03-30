// Function to call time and annual date
function updateDate() {

    // To call date object 
    let date = new Date();

    // To call time element 
    let setTime = document.getElementById("time");

    // To call annual date element
    let AnnualDate = document.getElementById("AnnualDate");

    // To set hours and minutes and seconds
    setTime.innerHTML =
        date.getHours() + ":" +     // To call hours
        date.getMinutes() + ":" +  // To call minutes
        date.getSeconds();        // To call seconds

    // To set years and month and day 
    AnnualDate.innerHTML =
        date.getDate() + "-" +        // To call days
        Number(date.getMonth() + 1) +  // To call months
        "-" + date.getFullYear();   // To call years
};

// Function to change background color of page and framework
function wallColor() {

    // To call the value of input color of change background color
    let wall = document.getElementById("inputColor").value;

    // To save the value of background color in local storage
    localStorage.setItem("wallColor", wall);

    // To get background color of body from local storage
    document.body.style.background = localStorage.getItem("wallColor");

    // To gwt background color of inner main of watch from local storage
    document.getElementById("yungMain").style.background = localStorage.getItem("wallColor");

};

// Function to call value of background color of body and inner main of watch from local storage
function wallColorAfterReload() {

    // To get the value from local storage
    localStorage.getItem("wallColor");

    // To get the background color of body from local storage after reload the page 
    document.body.style.background = localStorage.getItem("wallColor");

    // To get the background color of inner main of watch from local storage after reload the page 
    document.getElementById("yungMain").style.background = localStorage.getItem("wallColor");
};


onload = () => {
    // To call the date function after load and reload the page 
    updateDate();

    //To call the input of change background color of body and watch framework function after reload the page 
    wallColorAfterReload();

    // To update the date after every seconds
    setInterval(updateDate, 1000);
};
