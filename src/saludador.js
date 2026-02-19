function obtenerSaludoHora(idioma) {
    const hora = new Date().getHours();

    if (idioma === "es") {
        if (hora < 12) return "Buen dia";
        if (hora < 19) return "Buenas tardes";
        return "Buenas noches";
    } else {
        if (hora < 12) return "Good morning";
        if (hora < 19) return "Good afternoon";
        return "Good evening";
    }
}

function obtenerGenero(edad, genero, idioma) {
    if (edad > 30) {
        if (idioma === "es") {
            return genero === "masculino" ? "Sr." : "Sra.";
        } else {
            return genero === "masculino" ? "Mr." : "Mrs.";
        }
    }
    return "";
}

function saludar(nombre, edad, genero, idioma) {
    const saludoHora = obtenerSaludoHora(idioma);
    const formalidad = obtenerGenero(edad, genero, idioma);

    if (idioma === "es") {
        return `${saludoHora}, ${formalidad} ${nombre}`;
    } else {
        return `${saludoHora}, ${formalidad} ${nombre}`;
    }
}

export default saludar;
