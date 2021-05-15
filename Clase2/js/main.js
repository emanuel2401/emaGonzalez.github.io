let datos = [
    {id:1,titulo:'carne',cantidad:12,precio:2500},
    {id:2,titulo:'jabon',cantidad:15,precio:1500},
    {id:3,titulo:'pollo',cantidad:11,precio:2000}
]

let datosPrevios = [];

const btnAgregar = document.querySelector('#btnAgregar');
const inpBusqueda = document.querySelector('#inpBusqueda');
const btnDeshacer = document.querySelector('#btnDeshacer');
const inpAgregar = document.querySelector('#inpAgregar');
const galeria = document.querySelector('#galeria');
const limpiarLista = document.getElementById('limpiarLista');


//funciones
const  template = ({titulo,cantidad,precio})=>`
<div class="item">
<div class="titulo">
    ${titulo}
</div>
<div class="controles">
<span>${cantidad}</span>
<span>${precio}</span>
</div>
<div class="borrar">
    <a href="#" class="borrar"> Eliminar</a>
</div>
</div>`;

function render(lista = [{titulo:'',catidad:0,precio:0}]) {
    galeria.innerHTML = '';
    lista.forEach(item => {
        galeria.innerHTML += template(item);
    })
}


//eventos

//al cargar la web
document.addEventListener('DOMContentLoaded',()=>{
    render(datos);
})
//al hacer click en el boton agregar item
btnAgregar.addEventListener('click',()=>{
    datosPrevios =datos.slice(0);
    datos.push({
        titulo:inpAgregar.value,
        cantidad:0,
        precio:0
    })
    render(datos);
    inpAgregar.value = '';
});
//al hacer click en el boton Deshacer 
btnDeshacer.addEventListener('click',()=>{
    datos = datosPrevios;
    render(datos);
});
//al ingresar datos en el campo de busqueda
inpBusqueda.addEventListener('input',e=>{
   /*  let vista = datos.filter((val) =>{
        if(val.titulo.includes(e.target.value)){
            return true
        }else{
            return false
        }
    }) */
    let vista =  datos.filter(val => val.titulo.includes(e.target.value))
    render(vista);
})
//al hacer click en limpiar lista 
limpiarLista.addEventListener('click',()=>{
    datosPrevios = datos.slice(0);
    datos = [];
    render(datos);
})
//al hacer click en guardar lista 
//al hacer click en cargar lista
//al hacer click en un item con la clase borrar 

//objetos