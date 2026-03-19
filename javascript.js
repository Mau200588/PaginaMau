let darkmode = false;
document.querySelector('a[href="#darkmode"]').addEventListener('click', function(){
if(darkmode){
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "black";
}   else {
    document.body.style.backgroundColor = "#2d4a5e";
    document.body.style.color = "orange";
}
    darkmode = !darkmode;
});


/*window.onload = function() {
    alert("tenemos variedad de platos pide el tuyo");
    alert("Menu: Silpancho Pique Macho y Saice");
};

document.querySelector('a[href="#sobre-nosotros"]').addEventListener('click', function(){
    alert("hizo click en el evento");
    document.body.style.backgroundColor ="#30302f";
}); 
document.querySelectorAll('.btn-primary').forEach(function(btn){
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const producto = btn.closest('.card').querySelector('.card-title').textContent;
        alert("solicitando informacion sobre: " + producto);
    });
});
document.querySelectorAll('.btn-warning').forEach(function(btn){
    btn.addEventListener('click', function(e){
        e.preventDefault();
        alert('gracias por su preferencia en comprar el producto')
        setTimeout(function(){
            window.location.href = btn.getAttribute('href');
        }, 2000);
    });
});*/
