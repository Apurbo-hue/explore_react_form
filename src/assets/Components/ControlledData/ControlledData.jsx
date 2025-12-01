import React, { useState } from 'react';

const ControlledData = () => {

    const [password,setPassword]=useState()
    const[error,setError]=useState('')

     const submitHandeler =(e)=>{
           e.preventDefault()
            console.log(password)
           
     }

     const handlePasswordChange=(e)=>{
           console.log(e.target.value)
           setPassword(e.target.value) 
           if(password.length<8)      
           {
            setError('Password must be at least 8 characters.')
           }
           else{
            setError('')
           }
     }

    return (
        <div>
            <form onSubmit={submitHandeler}>
               <input type="text" name='name' placeholder='Enter your name:' /><br />
               <input type="email" name='email' placeholder='Enter your email:' /><br />
               <input type="password" name="password" onChange={handlePasswordChange} placeholder='Enter your password'/><br />
               <p><small style={{color:'red'}}>{error}</small></p>
               <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlledData;