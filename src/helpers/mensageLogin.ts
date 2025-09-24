export const verMensajesLogin = (code: string) => {
    if(code === "invalid_credentials"){
        return "Email o contraseña incorrectos";
    };

    if(code === 'user_already_exists'){
        return "El email ya esta registrado"
    }

    return ''
};