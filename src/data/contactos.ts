import { Contacto } from "@/interface/contacto";
import { BiPhone } from "react-icons/bi";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { GoClock } from "react-icons/go";

export const contactos: Contacto[] = [
    {
        tipo: 'Telefono',
        bgIcon: 'bg-yellow',
        icon: BiPhone,
        textos: ['+543456445977']
    },

    {
        tipo: 'Email',
        bgIcon: 'bg-orange',
        icon: CiMail,
        textos: ['info@anclacentro.com', 'ventas@anclacentro.com']
    },

    {
        tipo: 'Direccion',
        bgIcon: 'bg-yellow',
        icon: CiLocationOn,
        textos: ['AV. Principal 1144', 'Chajari, Entre Rios']
    },

    {
        tipo: 'Horarios',
        bgIcon: 'bg-orange',
        icon: GoClock,
        textos: ['Lun - Vie: 8:00 - 18:00', 'Sab: 8:00 - 12:30']
    },
]