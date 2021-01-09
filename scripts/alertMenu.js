
console.log("hola")
document.getElementById('btnadd').addEventListener('click',showAlert)


function showAlert()
{
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
}
