import React from 'react';
import { useForm } from "react-hook-form";

const AddToys = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        const url = `https://glacial-temple-62836.herokuapp.com/car/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    };
    return (

        <div style={{ marginBottom: "150px" }} className='w-50 mt-5 mx-auto'>
            <h1 style={{color: "#4d1750d1"}} className='text-center'>Add A Toy</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2 p-1' type="text" placeholder='Picture URL' {...register("img")} />
            <input className='mb-2 p-1' placeholder='Product Name' {...register("name")} />
            <input className='mb-2 p-1' placeholder='Supplier' {...register("supplier")} />

            -----------------------------seller email--------
                               ------------------Subcategory -------------------

            <input className='mb-2 p-1' type="number" placeholder='Price' {...register("price")} />

            -----------------------------ekhane Rating-------------------------------

            <input className='mb-2 p-1' type="number" placeholder='Available quantity' {...register("quantity")} />
            <textarea className='mb-2 p-1' placeholder='Description' {...register("description")} />
            <input type="submit" />
        </form>
        </div>
        
    );
};

export default AddToys;  
