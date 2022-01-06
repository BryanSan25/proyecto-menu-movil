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
});

const isMenuMovil = () => {
    const select = document.querySelector('.login-is');
    select.addEventListener('click', () => {
        const container = document.querySelector('main')
        const element = document.createElement('div');
        element.classList.add('contenedor-is');
        element.innerHTML = `
            <div class="login-is-p">
            <div class="login-is-contenedor">
            <div class="mar-is-contenedor">
                <div class="close-title-is-p">
                    <h3>Iniciar Sesion</h3>
                </div>
                <div class="wrap-is-cont">
                    <button class="span-container-align-is">        
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 184 184" class="svg-icon s-mr-05 big" fill="currentColor"><path d="M40.778,199.771l-6.4,23.91-23.409.5a92.161,92.161,0,0,1-.677-85.909h.005l20.841,3.821,9.13,20.716a54.906,54.906,0,0,0,.516,36.967Z" transform="translate(0 -88.578)" fill="#fbbb00"></path><path d="M350,208.176a91.965,91.965,0,0,1-32.8,88.932l-.005-.005-26.25-1.339-3.715-23.192a54.831,54.831,0,0,0,23.591-28H261.628v-36.4H350Z" transform="translate(-167.605 -133.363)" fill="#518ef8"></path><path d="M169.136,361.955l.005.005A92.03,92.03,0,0,1,30.509,333.814l29.814-24.405a54.716,54.716,0,0,0,78.847,28.014Z" transform="translate(-19.545 -198.215)" fill="#28b446"></path><path d="M169.061,21.18l-29.8,24.4A54.709,54.709,0,0,0,58.6,74.227L28.629,49.69h-.005A92.019,92.019,0,0,1,169.061,21.18Z" transform="translate(-18.337)" fill="#f14336"></path></svg>
                        <span>Google</span>
                    </button>
                    <button class="span-container-align-is">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.40em" height="1.40em" viewBox="0 0 136 136" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="b"><stop offset="0" stop-color="#3771c8"/><stop stop-color="#3771c8" offset=".128"/><stop offset="1" stop-color="#60f" stop-opacity="0"/></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#fd5"/><stop offset=".1" stop-color="#fd5"/><stop offset=".5" stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></linearGradient><radialGradient id="c" cx="158.429" cy="578.088" r="65" xlink:href="#a" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.402 454.004)" fx="158.429" fy="578.088"/><radialGradient id="d" cx="147.694" cy="473.455" r="65" xlink:href="#b" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)" fx="147.694" fy="473.455"/></defs><path fill="url(#c)" d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z" transform="translate(1.004 1)"/><path fill="url(#d)" d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z" transform="translate(1.004 1)"/><path fill="#fff" d="M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"/></svg>    
                        <span>Instagram</span>
                    </button>
                    <button class="span-container-align-is">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.40em" height="1.40em" viewBox="0 0 32 32"><path fill="transparent" d="M0 0h32v32H0z"/><path fill="#55ACEE" d="M28 8.557c-.884.39-1.833.656-2.828.775 1.017-.608 1.798-1.573 2.166-2.725-.953.567-2.006.976-3.13 1.194-.896-.956-2.176-1.554-3.593-1.554-2.72 0-4.924 2.206-4.924 4.925 0 .387.045.763.13 1.125-4.094-.208-7.724-2.168-10.15-5.147-.423.726-.667 1.573-.667 2.476 0 1.71.87 3.214 2.19 4.1-.806-.027-1.564-.25-2.23-.616v.06c0 2.39 1.7 4.378 3.952 4.83-.414.113-.85.172-1.297.172-.317 0-.625-.03-.927-.086.63 1.956 2.447 3.38 4.6 3.42-1.685 1.318-3.808 2.107-6.114 2.107-.398 0-.79-.023-1.175-.068 2.18 1.396 4.768 2.213 7.55 2.213 9.056 0 14.01-7.506 14.01-14.012 0-.213-.005-.426-.015-.637.96-.694 1.795-1.56 2.455-2.55z"/></svg>
                        <span>Twitter</span>
                    </button>
                </div>
                <div>
                    <h4>O usa tu correo electronico</h4>
                </div>
                <form>
                    <div>
                        <label for="input-correo">Correo electronico</label>
                        <input type="email" name="email-is" id="email-is" placeholder="Coloca tu correo electronico">
                    </div>
                    <div>
                        <label for="input-correo">Contraseña</label>
                        <input type="password" name="password-is" id="password-is" placeholder="Coloca tu contraseña">
                    </div>
                </form>
            </div>
        </div>
            </div>
        `
        container.appendChild(element);
    });
}
isMenuMovil();

