Form Methods:

1.    
    function=(e)=>{
        console.log(e.target.name.value)
    }
    <form onSubmit={function}></form>

2.  
   function=(formData)=>{
    console.log(formData.get('name'))
   }

   <form action={function}></form>

3.  
    using the onChange

    function =(e)=>{
       console.log(e.target.value) <!--  it will show the every changed values for using the onchange -->
    }

    <form onSubmit={function}>
     <input type="password" name="password" onChange={function} placeholder='Enter your password'/> 
    </form>


   