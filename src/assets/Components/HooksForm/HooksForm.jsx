import React from 'react';
import useInputField from '../../Hooks/useInputField';

const HooksForm = () => {

    const [name,nameOnchange]=useInputField('')
    const [email,emailOnChange]=useInputField('')
    const [password,passwordOnChange]= useInputField('')

    const handleSubmit =(e)=> {
        e.preventDefault()
        console.log('Submitted',name,email,password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' onChange={nameOnchange} placeholder='Enter your name:' />
                <br />
                <input type="email" name="email" onChange={emailOnChange} placeholder='Enter your email:'/>
                <br />
                <input type="password" name="password" onChange={passwordOnChange} placeholder='Enter your password'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HooksForm;