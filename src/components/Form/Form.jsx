import { useEffect, useState } from "react"
import styles from '../Form/form.css'
import { formFetch } from "../post API/poatAPI"

export const Form = () => {
    const [form, setForm] = useState({})
    const [formValid, setFormValid] = useState('')
    const [emailValid, setEmailValid] = useState('')
    const [isformSubmit, setIsFormSubmit] = useState(false)
    const [isErrorCatch, setIsErrorCatch] = useState(false)

    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;


    const handleSubmit = (e) => {
        e.preventDefault()

        if (reg.test(form.email) === false) {
            setEmailValid('Email is not valid')
        }
        if (form.username === '' || form.email === '' || form.password === '') {
            setFormValid('All fields are required')
        }

        formFetch(form, setIsFormSubmit, setIsErrorCatch)
        setIsErrorCatch(false)
        setIsFormSubmit(false)
    }

    const handleChange = (e) => {

        const el = e.target.name
        const value = e.target.value

        setForm({
            ...form,
            [el]: value,
        })
    }

    return (

        <form className="form" onSubmit={handleSubmit}>
            <div className="form-left-decoration"></div>
            <div className="form-right-decoration"></div>
            <div className="form-circle"></div>
            <div className="form-inner">
                <p className="form-item">Fill the form</p>
                <input className='form-input' type='text' name='username' placeholder="Username" onChange={(e) => handleChange(e)} value={form.username} />
                <input className='form-input' type='text' name='email' placeholder="Email" onChange={(e) => handleChange(e)} value={form.email} />
                <p className="form-emailError">{emailValid}</p>
                <input className='form-input' type='password' name="password" placeholder="Password" onChange={(e) => handleChange(e)} value={form.password} />
                <p className="form-error">{formValid}</p>
                 {isformSubmit ? <p className="massage-success">Data sent successfully</p> : <></>}
                 {isErrorCatch ? <p className="massage-fail"> Oops... Something went wrong</p> : <></>}
                <button className="form-button" type='submit'>Submit</button>
            </div>
        </form>

    )

}
