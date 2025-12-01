import React from 'react';

const FormData = () => {
    const formData =(formData)=>
    {
        console.log(formData.get('name'))
        console.log(formData.get('email'))
    }
    return (
        <div>
            <form action={formData}>
                <input type="text" name='name' placeholder='Enter your name:' />
                <br/>
                <input type="email" name='email' placeholder='enter your email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default FormData;