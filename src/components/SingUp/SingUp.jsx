import React from "react"
 import { useState } from "react"
 import './singUp.css' 
 
 export const SingUp = () =>{
const [form, setForm] = useState({})
const [errPassword, setErrPassword] = useState ('')
const [errUserName, setErrUserName] = useState ('')
const [isformSubmit, setIsFormSubmit] = useState(false)
const [isErrorCatch, setIsErrorCatch] = useState(false)

const handleSubmit = (e) => {

    if(form.password === '' || form.password == null){
        setErrPassword("Field cannot be empty")
    }else{
        setErrPassword("")
    }

    if (form.username === '' || form.username == null) {
        setErrUserName('Field cannot be empty');
    } else {
        setErrUserName("")
    }
}



const handleChange = (e) => {

    const item = e.target.name
    const value = e.target.value
    setForm({...form, [item]: value })
}


    return(
        <form className="form" onSubmit={handleSubmit}>
         <div> Log in</div>
         <br/>
         <input placeholder="Username" type="text" name = 'username' onChange={(e) => handleChange(e)} value = {form.username}/><br/>
         <p>{errUserName}</p>
         <input placeholder='password' type="password" name = "password"  onChange={(e) => handleChange(e)} value = {form.password} /><br/>
         <p>{errPassword}</p>
         <button className="button_logIn"> SingUp</button>
         <div>
            {isformSubmit ? <div className="resultAPI"> Successfull!</div> : <></>}
            {isErrorCatch ? <div className="resultAPI"> Oops... </div> : <></>}
         </div>
        </form>
    )
 }
