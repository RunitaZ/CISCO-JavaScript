

//! ingresamos a Join GitBuh en el navegador
//*ingresamos el correo: zotar.rut.05tae@gmail.com


//! ingresamos contra:
//* Nenita BTS 05


//! seguimos agregando el nombre de usuario
//* RunitaZ

//!INICIAMOS PARA TRABAJAR SOLOS COMO ESTUDIANTES

//*para entrar a una ruta en gitbash, vas directamente a la carpeta, das click derecho y le das click en la opcion: git bash here
//? en el GIT BASH
//?     ls      para ver todos los archivos dentro de una carpeta local
//?     ls -a       sirve para ver archivos ocultos dentro de la ruta de la carpeta local
//?     git init    sirve para inicializar un repositorio(proyecto) en Git en la ruta de la carpeta local, debe de tener (master) al final de la ruta
//?     git status  sirve para que podamos ver el estado de nuestros archivos en el repositorio (si los archivos están color rojo, no están siendo inicializados en Git, por lo tanto no existirán en nuestro respositorio)
//?     git add .   sirve para agregar todos los archivos de la ruta que no estén inicializadas en el respositorio de Git. (deberíamos ver los archivos de color verde, quiere decir que Git ya está haciendo seguimiento a nuestros archivos de la carpeta local)(actualizaciones)
//?     git commit -m "first commit"        es como un comentario para nuestro respositorio y validar que somos nosotros como usuario
//?     git config --global user.email "zotar.rut.05tae@gmail.com"      si no reconoce nuestra sesión en git bash ingresamos esto seguido de:
//?     git config --global user.name "RunitaZ"     y así estamos dentro del área local de trabajo de git

//*     origin   quiere decir que estamos trabajando desde nuestros repositorios remotos (repositorio remoto)

//*     para GitHub la rama principal es Master, para Git es Main.
//?     git push -u origin main         
//?     git remote -v               muestra con qué repositorios está vinculado
//?     si al iniciar Git Bash en una ruta específica, si tiene la palabra MASTER al final, quiere decir que ya está trabajando dentro del Git

//?     git commit -m "add files object and POO"    para verificar datos de nuestros archivos
//?     git push 

//!crear ramas en git bash para GitHub

//?     git branch "TareasJs"           comando para crear ramas en nuestro arbol MASTER
//?     git branch                      comando para ver el arbol MASTER y las ramas (TareasJs)
//?     code .                          comando para direccionarme a visual studio code a ver las ramas que tiene mi repositorio
//?     git checkout TareasJs           comando para ver lo que contiene la rama del arbol principal (Master) y para direccionarme a la rama
//?     git push -u origin TareasJs     comando para subir al repositorio local la rama recientemente creada
//?     git merge TareasJs              comando para subir los cambios al arbol principal MASTER.
//?     git pull                        comando para descargar los ultimos cambios de la rama al repositorio local. y Actualizar posibles cambios de otro repositorio clonado.
//?     git clone                       comando para clonar archivos de otros repositorios
//?     git push                        comando para cargar los últimos cambios, luego agregar un commit "algun comentario", y luego actualizamos con git add .
//?     git checkout -b inserta nombre rama   comando para cambiar de rama, ya sea al MASTER o a alguna rama creada
//?     git checkout -                  comando para retornar a la anterior rama en la que nos encontrábamos
console.log("Hola Mundo")

console.log("HOla como estas");