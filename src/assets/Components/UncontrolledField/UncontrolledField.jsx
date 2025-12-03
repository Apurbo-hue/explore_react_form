import React, { useRef } from 'react';

const UncontrolledField = () => {

    const nameRef = useRef('')
    const emailRef = useRef('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        const name=(nameRef.current.value)
        const email = (emailRef.current.value)
        console.log(name,email)
    }
    
    return (
        <div>

           <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} name='name' placeholder='Enter your name:' /><br />
                <input type="email" ref={emailRef} name='email' placeholder='Enter your email:' /><br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default UncontrolledField;