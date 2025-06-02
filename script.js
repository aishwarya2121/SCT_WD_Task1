window.addEventListener("scroll",function()
{
    const navbar = document.getElementById("navbar");
    if (this.window.scrollY > 50)      /* tells us how far down the user has scrolled the page.

                                     > 50 means: if the user has scrolled more than 50 pixels down,
                                     then do something (like change the background).*/
    {
        navbar.classList.add("scrolled");    /*This adds a CSS class called "scrolled" to the navbar.*/
    }
    else
    {
        navbar.classList.remove("scrolled");   /*It removes the "scrolled" class.*/
    }

}

);