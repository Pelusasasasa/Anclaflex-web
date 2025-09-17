export const verMensajesLogin = (code: string) => {
    if(code === "invalid_credentials"){
        return "Email o contraseña incorrectos";
    };

    return ''
};