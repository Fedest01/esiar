function Alta() {
    db.collection("Usuarios").add({
            correoElectronico: document.getElementById("correo").value,
            contraseña: document.getElementById("contraseña").value,
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}