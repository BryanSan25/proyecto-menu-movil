const barsMenu = document.querySelector('.fa-bars');
const menuInfo = document.querySelector('.container-info-menu');

barsMenu.addEventListener('click', () => {
    if(menuInfo.classList.contains('container-info-menu-activo')) {
        menuInfo.classList.remove('container-info-menu-activo');
    } else {
        menuInfo.classList.add('container-info-menu-activo');
    }
})

//Para Sub Menu Movil

const aparecerCurso = document.querySelector('.flex-menu-movil-item-p');
const subCurso = document.querySelector('.sub-cursos-menu-movil');

aparecerCurso.addEventListener('click', () => {
    if(subCurso.classList.contains('sub-cursos-movil-activo')) {
        subCurso.classList.remove('sub-cursos-movil-activo');
    } else {
        subCurso.classList.add('sub-cursos-movil-activo');
    }
})

const aparecerCurso2 = document.querySelector('.flex-menu-movil-item-p-2');
const subCurso2 = document.querySelector('.sub-cursos-menu-movil-2-bootcamp');
aparecerCurso2.addEventListener('click', () => {
    if(subCurso2.classList.contains('sub-cursos-movil-activo')) {
        subCurso2.classList.remove('sub-cursos-movil-activo');
    } else {
        subCurso2.classList.add('sub-cursos-movil-activo');
    }
})