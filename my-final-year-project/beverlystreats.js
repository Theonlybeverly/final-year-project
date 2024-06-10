//To open and close the mobile navigation menu

let navbar = document.getElementById("mobile-navigation");

function showNavbar(){
    if (navbar.style.display ==="flex"){
        navbar.style.display = "none";
    }

    else{
        navbar.style.display ="flex";
    }
};




/*  To indicate the current web page on the navigation bar by adding
 a purple background and white text color to the navigation link
*/

/* declaring a variable called "path" to store the path name of the current web page. 
This variable can be given any name, even beverly.
*/
const path = window.location.pathname;

/* declaring a variable called "navLinks" to store all anchor tags inside your nav element in HTML. 
This variable can be given any name.
*/
const navLinks = document.querySelectorAll('nav a');


/*Calling "forEach" method on all anchor tags inside your nav element in HTML
previously stored in "navLinks"
The JavaScript "forEach" method is an Array method that executes 
a provided function once for each element in an array. 
It is used to iterate over the elements of an array, 
and perform a certain task for each element.

javascript "if" statement is used to execute fuctions conditionally. Here we're 
checking the user's current location so we can add a new class name "current" 
to that paticular anchor tag so we can style that class in CSS with purple background and white text,
then remove that class when the user leaves that location
*/
navLinks.forEach(link => {
  if (link.href.includes(`${path}`)){
    link.classList.add("current")
  }
  else{
    link.classList.remove("current")
  }
});