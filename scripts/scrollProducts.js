var scrollPerClick = 300;
var scrollAmount = 0;
var carrousel = document.getElementById('carrouselBox');  

console.log(scrollAmount)
console.log(carrousel.scrollWidth)
console.log(carrousel.clientWidth)


function leftScroll()
{        
    carrousel.scrollTo({
        top:0,
        left:(scrollAmount = scrollAmount - scrollPerClick),
        behavior:"smooth"
    });   
    
    if(scrollAmount < 0)
    {
        scrollAmount = 0;
    }
}


function scrollRight()
{         
    console.log("right")
    if(scrollAmount <= carrousel.scrollWidth - carrousel.clientWidth)
    {
        carrousel.scrollTo({
            top:0,
            left:(scrollAmount = scrollAmount + scrollPerClick),
            behavior:"smooth"
        });          
    }
}