import { useEffect, useState } from "react";

export const useForm = (initialForm: object = {}) => {
    const [formState, setFormState] = useState<object>(initialForm);

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