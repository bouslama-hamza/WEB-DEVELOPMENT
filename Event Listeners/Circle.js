document.addEventListener('mousemove', function(e){

document.getElementById('circle').style.bottom = e.clientY + "px";

document.getElementById('circle').style.right = e.clientX + "px";

});
