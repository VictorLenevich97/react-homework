import { useState } from "react"
import styles from "../Form/form.css"
import { formFetch } from "../../api/postAPI"
import { Link } from "react-router-dom";

const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;


export const Form = () => {
    const [form, setForm] = useState({})
    const [formValid, setFormValid] = useState('')
    const [isformSubmit, setIsFormSubmit] = useState(false)
    const [isErrorCatch, setIsErrorCatch] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (reg.test(form.email) === false) {
            setFormValid('Email is not valid')
        }
        if (form.username === undefined || form.email === undefined || form.password === undefined) {
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
        <div className="form-inner">
        <Link to='/'><p className="form-navLink">Back to home</p></Link>        
        <p className="page-name">Sign in</p>
        <form className="form" onSubmit={handleSubmit}>
                <input className='form-input' type='text' name='username' placeholder="Username" onChange={(e) => handleChange(e)} value={form.username} />
                <input className='form-input' type='text' name='email' placeholder="Email" onChange={(e) => handleChange(e)} value={form.email} />
                <input className='form-input' type='password' name="password" placeholder="Password" onChange={(e) => handleChange(e)} value={form.password} />
                <p className="form-emailError">{formValid}</p>
                {isformSubmit ? <p className="massage-success">Data sent successfully</p> : <></>}
                {isErrorCatch ? <p className="massage-fail"> Oops... Something went wrong</p> : <></>}
                <button className="form-button" type='submit'>Sign in</button>
        </form>
        </div>

    )

}