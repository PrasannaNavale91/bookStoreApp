import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
        fullname: data.fullname,
        email: data.email,
        phone: data.phone
    }
    await axios.post("http://localhost:4001/user/submit", userInfo)
    .then((res)=> {
        console.log(res.data)
        if (res.data) {
            toast.success('Your resposne successfully recorded..!');
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
    })
    .catch((err)=> {
        if(err.response){
            console.log(err)
            toast.error("Error: ", + err.response.data.message);
        }
    })
  };
  return (
    <>
      <Navbar />
        <div className='mx-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 dark:bg-slate-900 dark:text-white'>
          <div className='w-full md:w-1/2 pt-12 md:mt-24 bg-gray-950 p-5 lg:px-16'>
            <h2 className='font-bold text-4xl text-center py-2'>Contact Information</h2>
            <h3 className="font-bold text-lg text-center py-2">Our phones and live chat are open 9-8PM CT, Monday through Friday</h3>
            <div className='mt-4 my-8 space-y-3'>
              <h5 className='font-bold text-2xl'>Head Office</h5>
              <hr/>
              <p>Beckam Street, California – 19 United States of America</p>
            </div>
            <div className='mt-4 my-8 space-y-3'>
              <h5 className='font-bold text-2xl'>Call Us</h5>
              <hr/>
              <p>Mon – Fri : 10am – 8pm</p>
              <p>@ +123 124567890</p>
              <p>@ +123 789456123</p>
            </div>
            <div className='mt-4 my-8 space-y-3'>
              <h5 className='font-bold text-2xl'>Write Us</h5>
              <hr/>
              <p>help@bookstore.support</p>
              <p>sales@bookstore.support</p>
            </div>
          </div>
          <div className='w-full md:w-1/2 pt-12 md:mt-24 bg-stone-100 p-5'>
            <form method="" onSubmit={handleSubmit(onSubmit)} >
              <h2 className='font-bold text-4xl text-center py-2 text-black'>Have A Question?</h2>
              <h3 className="font-bold text-lg text-center py-2 text-black">Our phones and live chat are open 9-8PM CT, Monday through Friday</h3>
              <div className="mt-4 space-y-2">
                <p className='text-stone-600 font-semibold'>First and Last Name <span className='text-red-500'>*</span></p>
                <br />
                <input
                    type="text"
                    className="w-[90%] px-3 py-5 bg-stone-200 rounded-md outline-none"
                    {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="mt-4 space-y-2">
                <p className='text-stone-600 font-semibold'>Your Email <span className='text-red-500'>*</span></p>
                <br />
                <input
                    type="email"
                    className="w-[90%] px-3 py-5 bg-stone-200 rounded-md outline-none"
                    {...register("email", { required: true })}
                />
                <br />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="mt-4 space-y-2">
                <p className='text-stone-600 font-semibold'>Phone <span className='text-red-500'>*</span></p>
                <br />
                <input
                    type="tel"
                    className="w-[90%] px-3 py-5 bg-stone-200 rounded-md outline-none"
                    {...register("phone", { required: true, maxLength: 10 })}
                />
                <br />
                {errors.phone && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="mt-4 space-y-2">
                <p className='text-stone-600 font-semibold'>Message</p>
                <br />
                <textarea
                    rows="4"
                    className="w-[90%] px-3 py-5 bg-stone-200 rounded-md outline-none"
                    {...register("phone", { required: true, maxLength: 10 })}
                ></textarea>
                <br />
                {errors.phone && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="space-y-2 mt-4">
                <button className="bg-pink-500 text-white rounded-md px-7 py-3 hover:bg-pink-700 duration-200">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Contact;