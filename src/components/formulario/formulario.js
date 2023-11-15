export function formulario(){
return(
    //LOGIN Y REGISTRO 
<div class="container" id="container">

//FORMULARIO REGISTRO 
<div class="form-container sign-up-container">
   <form action="#">
       <h1 class="registrar">Registrate</h1>
       <input type="text" placeholder="Nombre" />
       <input type="email" placeholder="Email" />
       <input type="password" placeholder="Contraseña" />
       <button>Crear cuenta</button>
   </form>
</div>

//FORMULARIO INICIAR SESION 
<div class="form-container sign-in-container">
   <form action="#">
       <h1>Inicia sesion</h1>
       <div class="social-container">
           <a href="#" class="social anonimo"><i class="fab fa-creative-commons-by"></i></a>
           <a href="#" class="social google"><i class="fab fa-google-plus-g"></i></a>
           <a href="#" class="social github"><i class="fab fa-github"></i></a>
       </div>
       <span>o ingresa con</span>
       <input type="email" placeholder="Email" />
       <input type="password" placeholder="Contraseña" />
       
       <button>Iniciar sesion</button>
   </form>
</div>

//PANELES DE ACCESO A INICIAR SESION Y REGISTRO
<div class="overlay-container">
   <div class="overlay">

       //ACCESO A PANEL INICIAR SESION 
       <div class="overlay-panel overlay-left">
           <h1>¿Ya tienes una cuenta?</h1>
           <p>Inicia sesion con tu cuenta para poder seguir descubriendo mas sobre ESI </p>
           <button class="ghost" id="signIn">Inicia Sesion</button>
       </div>
       
       //ACCESO A PANEL DE REGISTRO 
       <div class="overlay-panel overlay-right">
           <h1>No tenes cuenta?</h1>
           <p>Registrate para poder seguir descubriendo mas sobre ESI </p>
           <button class="ghost" id="signUp">Registrate</button>
       </div>

   </div>
</div>
</div>
)
}