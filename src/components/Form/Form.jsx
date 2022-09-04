import { useState } from "react"
import {formFetch} from './formFetch/formFetch'

export const Form = () => {
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        
    })
    const [formValid, setFormValid] = useState('')
    const [isformSubmit, setIsFormSubmit] = useState(false)
    const [isErrorCatch, setIsErrorCatch] = useState(false)
    const [errors, setErrors] = useState({
        name:"",
        email:"",
        password:"",
        
    })
    const handleSubmit = (e) => { 
         e.preventDefault() 
         setErrors(  {
            name: user.name.length < 3 ? "Имя должно быть не короче 3 букв" : '',
            password: user.password.length < 10 ? "Минимальная длина пароля: 10 символов": '',
        })
        formFetch(user, setIsFormSubmit, setIsErrorCatch)
        setIsErrorCatch(false)
        setIsFormSubmit(false)
    }

    const handleChange = ({target:{name, value}}) => { 
        setUser({
            ...user, [name]: value 
        })
    }
    
    return (
        <div className="wrapper">
            <form>
                <h1 className="formTitle">Регистрация</h1>
                <div className="form">
                <p className="formInput_title">Имя пользователя <input className="formInput_name" type="text" name="name" value={user.name} placeholder="Введите имя" onChange={handleChange}/></p>
                <p className="formError"> {errors.name} </p>
                <p className="formInput_title">Email <input className="formInput_email" type="email" name="email" value={user.email} placeholder="Введите email" onChange={handleChange}/></p>
                <span></span>
                <p className="formError">{errors.email}</p>
                <p className="formInput_title">Пароль <input className="formInput_password" id="password" type="password" name="password" value={user.password} placeholder="Введите пароль" onChange={handleChange} /></p>
                <p className="formError">{errors.password}</p>
                <p className="formError">{formValid}</p>
                 {isformSubmit ? <p className="massage-success">Data sent successfully</p> : ''}
                 {isErrorCatch ? <p className="massage-fail"> Oops... Something went wrong</p> : ''}
                </div>
                <button className="formBtn" onClick={handleSubmit}>Готово</button> 
            </form>
        </div>
    )
}