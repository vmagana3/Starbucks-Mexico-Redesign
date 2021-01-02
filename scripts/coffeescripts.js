//-----------------------------Show and hidde second elements--------------------------------//
var title = document.getElementsByClassName('misionTitle');
for(var i = 0; i<title.length; i++)
{
    title[i].addEventListener("click",showTextMision)   
}

function showTextMision()
{            
    var text = this.nextElementSibling;    

    if(text.style.display === "none")
    {        
        text.style.display = "inline"                        
    }   
    else
    {
        text.style.display = "none"                  
    }    
}
