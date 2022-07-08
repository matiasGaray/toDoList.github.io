const input = document.querySelector('input');
const addBtn = document.querySelector('.btn');
const ul = document.querySelector('ul');
const empty = document.querySelector('p');

addBtn.addEventListener('click', (e)=>{
    //Hacemos que no se recargue la pagina
    e.preventDefault();
    //la variable toma el valor del texto del input
    const text = input.value;
    //Solo si no esta vacio el input se va a ejecutar
    if(text !== ""){
    //creamos los elementos de la lista
    const li = document.createElement('li');
    const p = document.createElement('p');
    //p toma el valor de la variable text
    p.textContent = text;
    //añadimos p a li y li a ul
    li.appendChild(p);
    //Se agrega la funcion para borrar tareas
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    //Se esconde el p
    empty.style.display = "none";
    }

});

function addDeleteBtn(){
    //Se crea un boton para eliminar tareas
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";
    deleteBtn.addEventListener('click', (e)=>{
        //se crea una variable que va a seleccionar al padre del boton, o sea, al li
        const item = e.target.parentElement;
        //se remueve el li
        ul.removeChild(item);
        //se crea una variable que selecciona a todos los li
        const items = document.querySelectorAll('li')
        //Si no hay elementos li se vuelve a mostrar el p escondido
        if(items.length === 0){
            empty.style.display = "block"
        }
    });
    //se retorna el boton
    return deleteBtn;
};

