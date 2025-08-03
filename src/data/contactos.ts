import { Contacto } from "@/interface/contacto";
import { BiPhone } from "react-icons/bi";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { mail, telefono } from "./variables";

export const contactos: Contacto[] = [
    {
        tipo: 'Telefono',
        bgIcon: 'bg-yellow',
        icon: BiPhone,
        textos: [telefono]
    },

    {
        tipo: 'Email',
        bgIcon: 'bg-orange',
        icon: CiMail,
        textos: [mail]
    },

    {
        tipo: 'Direccion',
        bgIcon: 'bg-yellow',
        icon: CiLocationOn,
        textos: ['Av. Belgrano 1340', 'Chajari, Entre Rios']
    },

    {
        tipo: 'Horarios',
        bgIcon: 'bg-orange',
        icon: GoClock,
        textos: ['Lun-Vie: 8:00 - 12:00 y 16:00 - 20:00', 'Sab: 8:00 - 12:00']
    },
]