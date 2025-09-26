import { useEffect, useState } from "react";

export const useForm = <T extends Record<string, any>>(initialForm: T) => {
    const [formState, setFormState] = useState<T>(initialForm);

    useEffect(() => {
        setFormState(initialForm);
    }, [initialForm])


    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value, id} = e.target;
        setFormState({
            ...formState,
            [name]: value === 'on' ? id : value
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
}