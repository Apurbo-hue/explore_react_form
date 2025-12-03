import React, { useState } from 'react';

const ControlledData = () => {

    const [name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const handleName =(e)=>{
        e.preventDefault()
        console.log(e.target.value)
        setName(e.target.value)
    }

    const handleEmail=(e)=>{
        e.preventDefault()
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePassword=(e)=>{
        e.preventDefault()
        console.log(e.target.value)
        setPassword(e.target.value)
    }


    const submitChange=(e)=>{
        e.preventDefault()
        console.log('Name:',name)
        console.log('Email:',email)
        console.log('Password:',password)
    }


    return (
        <div>
              <form onSubmit={submitChange}>
                <input type="text" name='name' onChange={handleName} placeholder='Enter the name:' />
                <br />
                <input type="email" name="email" onChange={handleEmail} placeholder='Enter the email:' />
                <br />
                <input type="password" name="password" onChange={handlePassword} placeholder='Enter the password:' />
                <br />
                <input type="submit" value="Submit" />
              </form>
        </div>
    );
};

export default ControlledData;