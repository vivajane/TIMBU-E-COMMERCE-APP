import React from 'react';
import { useState } from 'react';
import { Form } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';




const Contact = () => {
  const [form, setForm] = useState({
  fname: "",
  email: "",
  message: "",

});
const navigate = useNavigate();

const onChangeHandler = (e) =>{
  return setForm((prev) =>({
    ...prev,
    [e.target.name]: e.target.value
  }))
}

const onsubmitHandler = (e) =>{
  
  e.preventDefault();
  toast.success("Your message has been sent");
  setForm({
    fname: "",
    email: "",
    message: "",
  })
  navigate("/");
  
  
}
  return (
    <div className="px-6 py-12 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="mb-4 text-center">We’d love to hear from you! Whether you have a question about an order, need styling advice, or just want to say hi, we're here to help.</p>

      <form onSubmit={onsubmitHandler} className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input onChange={onChangeHandler} value={form.fname} type="text" name='fname' className="w-full border border-gray-300 rounded-lg px-4 py-2" required />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input onChange={onChangeHandler} value={form.email} type="email" name='email' className="w-full border border-gray-300 rounded-lg px-4 py-2" required />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea onChange={onChangeHandler} value={form.message} name='message' rows="5" className="w-full border border-gray-300 rounded-lg px-4 py-2" required></textarea>
        </div>

        <button type="submit" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center text-sm text-gray-600">
        <p><strong>Email:</strong> support@timbu.com</p>
        <p><strong>Phone:</strong> +234 8116070090</p>
        <p><strong>Instagram:</strong> @timbufashion</p>
      </div>
    </div>
  );
};

export default Contact;
