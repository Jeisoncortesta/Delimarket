//------------------------------------------------------Carrito-------------------------------------------

//variable que matiene el estado del carro visible
var carritoVisible = false;

if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready();
}


function ready(){
    //funcionalidad botones de eliminar en el carrito
    var botonesEliminarItem = document.getElementsByClassName('btn-eliminar');
    for(var i=0; i < botonesEliminarItem.length;i++){
        var botton = botonesEliminarItem[i];
        botton.addEventListener('click', EliminarItemCarrito);
    }
}


//eliminar item seleccionado del carrito

function EliminarItemCarrito(event){
    var bottonclicked = event.target;
    bottonclicked.parentElement.remove();

    
//actualizar el total del carrito una vez que hemos eliminado un item

actualizarTotalCarrito();


}

//actualizar el carrito total

function actualizarTotalCarrito(){
    var carritoContenedor = document.getElementsByClassName('Carrito'[0]);
    var carritoItems = carritoContenedor.getElementsByClassName('Carrito-Items');
    var total = 0;

    //recorremos cada elemento del carrito para actualizar el total
    for(var i=0; i < carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('Carrito-item-precio')[0];
        console.log(precioElemento);
        //quitar simbolo peso y punto

        var precio = parseFloat(precioElemento.innertext.replace('$','').replace('.',''));
        console.log(precio);
        var cantidadItem = item.getElementsByClassName('Carrito-item-cantidad')[0];
        var cantidad = cantidadItem.value;
        console.log(cantidad);
        total = total + (precio * cantidad)

    }
    total = math.round(total*100)/100;
    document.getElementsByClassName('Carrito-precio-total')[0].innertext = total;
}




//------------------------------------------------------Carrito-------------------------------------------