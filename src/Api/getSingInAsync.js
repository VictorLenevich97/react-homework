import axios from "axios";
import {SING_IN} from "../Costants/endpoints"

export async function getSingInAsync(form, setServerError, setSubmitForm) {
    try {
        const response = await axios.post(SING_IN, {
            'username': form.username,
            'email': form.email,
            'password': form.password
            ,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const result = response
        if (response.status === 201) {
            setSubmitForm(true)
            return result
        } else {
            setServerError(true)
        }
    } catch (error) {
        setServerError({status: true, errors:{common: 'Error on server!Reload page!'}})
    }
}
