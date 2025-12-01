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
   