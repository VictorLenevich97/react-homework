import axios from "axios";

export async function postData(form, setServerError, setSubmitForm) {
    try {
        let response = await axios.post('https://studapi.teachmeskills.by/auth/users/', {
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
            const e = new Error('Error on the server!Try again!')
            throw e
        }
    } catch (error) {
        console.log(error)
    }
}
