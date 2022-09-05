 import React from "react"
 import { useState } from "react"
 import './index.css' 
 
 export const UserForm = () =>{
const [form, setForm] = useState({})
const [errEmail, setErrEmail] = useState('')
const [errPassword, setErrPassword] = useState ('')
const [errUserName, setErrUserName] = useState ('')
const [isformSubmit, setIsFormSubmit] = useState(false)
const [isErrorCatch, setIsErrorCatch] = useState(false)
const requestURL ='https://studapi.teachmeskills.by/auth/users/'

const handleSubmit = (e) => {
    e.preventDefault()
    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    if(form.password === '' || form.password == null){
        setErrPassword("Field cannot be empty")
    }else{
        setErrPassword("")
    }

    if(reg.test(form.email) === false){
        setErrEmail('Email is not valid')
    } else{
        setErrEmail("")
    }

    if (form.username === '' || form.username == null) {
        setErrUserName('Field cannot be empty');
    } else {
        setErrUserName("")
    }
    console.log(form)
        setIsErrorCatch(false)
        setIsFormSubmit(false)

        
        fetch(requestURL, {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }    
        }).then(response => {
            if (response.ok) {
            setIsFormSubmit(true)
                return response.json()
            }
        
            return response.json().then(error => {
                setIsErrorCatch(true)
                const e = new Error()
                e.data = error
                throw e
            })
        }).then(data => console.log(data)).catch(err => console.log(err))
        

}



const handleChange = (e) => {

    const item = e.target.name
    const value = e.target.value
    setForm({...form, [item]: value })
}


    return(
        <form className="form" onSubmit={handleSubmit}>
         <div> Fill the form</div>
         <br/>
         <input placeholder="Username" type="text" name = 'username' onChange={(e) => handleChange(e)} value = {form.username}/><br/>
         <p>{errUserName}</p>
         <input placeholder="example@gmail.com" name="email" type="text"  onChange={(e) => handleChange(e)} value = {form.email}/><br/>
         <p>{errEmail}</p>
         <input placeholder='password' type="password" name = "password"  onChange={(e) => handleChange(e)} value = {form.password} /><br/>
         <p>{errPassword}</p>
         <button className="button">Submit form!</button>
         <div>
            {isformSubmit ? <div className="resultAPI"> Successfull!</div> : <></>}
            {isErrorCatch ? <div className="resultAPI"> Oops... </div> : <></>}
         </div>
        </form>
    )
 }