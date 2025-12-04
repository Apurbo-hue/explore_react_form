import React, {  useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
    const [error,setError]=useState('')

        const handleProductSubmit =(e)=>{
             e.preventDefault()
             console.log(e.target)
             const name = e.target.name.value 
             const price = e.target.price.value
             const quantity = e.target.quantity.value
            
             const newProduct ={
                name,
                price,
                quantity
             }
             if(name.length===0)
             {
               setError('Enter the name of the product') 
               return
             }
             else if(price.length===0)
             {
                setError('Enter valid price')
                return
             }

             else if(quantity.length===0)
             {
                setError('Enter valid quantity')
                return
             }
             else{
                setError('')
             }

            //   console.log(newProduct)
            handleAddProduct(newProduct)
            }


    return (

        <div>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Enter product name:' /><br />
                <input type="text" name='price' placeholder='Enter product price:'/><br />
                <input type="text" name='quantity' placeholder='Enter product quantity:' /><br />
                <input type="submit" value="Submit" />
            </form>
            <h3>{error}</h3>
        </div>
    );
};

export default ProductForm;