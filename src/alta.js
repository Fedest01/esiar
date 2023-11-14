function Alta() {
    db.collection("Usuarios").add({
            correoElectronico: document.getElementById("correo").value,
            contraseña: document.getElementById("contraseña").value,
        })
        .then((docRef) => {
            alert("Registro exitoso");

        })
        .catch((error) => {
            alert("Error en el registro");
        });
}