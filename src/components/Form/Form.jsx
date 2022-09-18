import { useState, useEffect } from "react"
import React from "react"
import validator from "validator";
import {postData} from "./postData"
import './form.css'
 

export const Form = () => {
    const [form, setForm] = useState({ })
    const [errorForm, setErrorForm] = useState('')
    const [info, setInfo] = useState([])
    const [serverError, setServerError] = useState(false);
    const [isSubmitForm, setSubmitForm] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
        setErrorForm({
            name: ((!validator.isAlphanumeric(form.username) && validator.isLength(form.password, {minLength:5})) ? 'Please enter a valid name!' : ''),
            password: ((!validator.isLength(form.password, {minLength:8})) ? 'Is Not Strong Password!' : ''),
            email: !validator.isEmail(form.email) ? 'Please, enter valid Email!' : ''
        })
        postData (form, setServerError, setSubmitForm)
        setServerError( false)
        setSubmitForm(false)
    }
    useEffect(() => {
        if (errorForm.username === '' && errorForm.password === '' && errorForm.email === '') {
            setInfo([...info, form])
            setForm({ username: '', password: '', email: '' })
        }
    }, [errorForm])

    const handleChange = ({ target: { name, value } }) => {
        setForm({
            ...form, [name]: value
        })
    }
    

return (

    <form className="form" onSubmit={handleSubmit}>
        <header className="header">Sing in</header>
        <div className='form-list'>
            <div className='form-item'>
                <label className='form-name' htmlFor='username'>Name</label>
                <input className='form-input' type='text' value={form.username} name='username' onChange={(e)=> handleChange(e)} placeholder='Your name' />
                <div className='form-error' >{errorForm.name}</div>
            </div>
            <div className='form-item'>
                    <label className='form-name' htmlFor='email'>Email</label>
                    <input className='form-input' type='email' value={form.email} name='email' onChange={(e)=> handleChange(e)} placeholder='Your email' />
                    <div className='form-error'>{errorForm.email}</div>
            </div>
            <div className='form-item'>
                <label className='form-name' htmlFor='password'>Password</label>
                <input className='form-input' type='password' value={form.password} name='password' onChange={(e)=> handleChange(e)} placeholder='Your password' />
                <div className='form-error'>{errorForm.password}</div>
            </div>
            <div>
                {isSubmitForm ? <p className="form-message_success">Activation email has been sent to your email address!</p> : ''}
                {serverError ? <p className="form-message_fail"> Activation email not sent! Check the data!</p> : ''}
            </div>
            <div><button className='form-btn' type="submit" >Sing in</button></div>
        </div>
        
    </form>
    
)
}


