// 'use client'

// import { useState } from 'react';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//     preferredTime: '',
//     contactMethod: '',
//     agree: false,
//   });

//   const [errors, setErrors] = useState<{ [key: string]: string }>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
//     setErrors({ ...errors, [name]: '' });
//   };

//   const validate = () => {
//     let newErrors: { [key: string]: string } = {};
//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.phone) newErrors.phone = 'Phone is required';
//     if (!formData.message) newErrors.message = 'Message is required';
//     if (!formData.preferredTime) newErrors.preferredTime = 'Preferred time is required';
//     if (!formData.contactMethod) newErrors.contactMethod = 'Select a contact method';
//     if (!formData.agree) newErrors.agree = 'Consent is required';
//     return newErrors;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     alert('Form submitted successfully!');
//   };

//   return (
//     <div className="max-w-xl mx-auto border border-green-900 p-6 rounded-lg shadow-sm bg-white">
//       <h2 className="text-2xl font-semibold text-green-900 text-center mb-2">Get In Touch</h2>
//       <p className="text-center text-gray-600 mb-6">
//         Simply fill out the brief fields below and Dr. Norman will be in touch with you soon...
//       </p>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {['name', 'email', 'phone'].map((field) => (
//           <div key={field}>
//             <label className="block text-sm text-green-900 capitalize">{field}</label>
//             <input
//               type={field === 'email' ? 'email' : 'text'}
//               name={field}
//               className="w-full border border-green-800 rounded p-2 mt-1"
//               placeholder={field === 'email' ? 'you@example.com' : ''}
//               value={(formData as any)[field]}
//               onChange={handleChange}
//             />
//             {errors[field] && <p className="text-red-600 text-sm mt-1">{errors[field]}</p>}
//           </div>
//         ))}

//         <div>
//           <label className="block text-sm text-green-900">What brings you here?</label>
//           <textarea
//             name="message"
//             className="w-full border border-green-800 rounded p-2 mt-1"
//             placeholder="How can I help you?"
//             value={formData.message}
//             onChange={handleChange}
//           />
//           {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
//         </div>

//         <div>
//           <label className="block text-sm text-green-900">Preferred Contact Time</label>
//           <input
//             type="text"
//             name="preferredTime"
//             className="w-full border border-green-800 rounded p-2 mt-1"
//             placeholder="e.g., Mornings, Afternoons, Evenings"
//             value={formData.preferredTime}
//             onChange={handleChange}
//           />
//           <p className="text-xs text-gray-500 mt-1">Let us know when you're typically available</p>
//           {errors.preferredTime && <p className="text-red-600 text-sm mt-1">{errors.preferredTime}</p>}
//         </div>

//         <div>
//           <label className="block text-sm text-green-900">Preferred Contact Method</label>
//           <select
//             name="contactMethod"
//             className="w-full border border-green-800 rounded p-2 mt-1"
//             value={formData.contactMethod}
//             onChange={handleChange}
//           >
//             <option value="">Select preferred method</option>
//             <option value="phone">Phone</option>
//             <option value="email">Email</option>
//           </select>
//           {errors.contactMethod && <p className="text-red-600 text-sm mt-1">{errors.contactMethod}</p>}
//         </div>

//         <div className="flex items-center mt-2">
//           <input
//             type="checkbox"
//             name="agree"
//             checked={formData.agree}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           <label htmlFor="agree" className="text-sm text-green-900">
//             I agree to be contacted
//           </label>
//         </div>
//         {errors.agree && <p className="text-red-600 text-sm mt-1">{errors.agree}</p>}

        
//         {/* <div className="border mt-4 p-3 text-center text-gray-500 text-sm">
//           [reCAPTCHA would go here]
//         </div> */}

//         <button
//           type="submit"
//           className="w-full bg-green-900 text-white py-2 rounded hover:bg-green-800"
//         >
//           Submit
//         </button>

//         <p className=" text-xs text-center text-gray-600 mt-4">
//           By clicking submit you consent to receive texts and emails from Dr. Marcia T. Norman
//         </p>
//       </form>
//     </div>
//   );
// }


"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredTime: "",
    contactMethod: "",
    agree: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.message) newErrors.message = "Message is required";
    if (!formData.preferredTime)
      newErrors.preferredTime = "Preferred time is required";
    if (!formData.contactMethod)
      newErrors.contactMethod = "Select a contact method";
    if (!formData.agree) newErrors.agree = "Consent is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          preferredTime: "",
          contactMethod: "",
          agree: false,
        });
      } else {
        alert("Submission failed. Try again.");
      }
    } catch (error) {
      alert("Error submitting form.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto border border-green-900 p-6 rounded-lg shadow-sm bg-white">
      <h2 className="text-2xl font-semibold text-green-900 text-center mb-2">
        Get In Touch
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Simply fill out the brief fields below and Dr. Norman will be in touch
        with you soon...
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "email", "phone"].map((field) => (
          <div key={field}>
            <label className="block text-sm text-green-900 capitalize">
              {field}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              className="w-full border border-green-800 rounded p-2 mt-1"
              placeholder={field === "email" ? "you@example.com" : ""}
              value={(formData as Record<string, string | boolean>)[field]}
              onChange={handleChange}
            />
            {errors[field] && (
              <p className="text-red-600 text-sm mt-1">{errors[field]}</p>
            )}
          </div>
        ))}

        <div>
          <label className="block text-sm text-green-900">
            What brings you here?
          </label>
          <textarea
            name="message"
            className="w-full border border-green-800 rounded p-2 mt-1"
            placeholder="How can I help you?"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-green-900">
            Preferred Contact Time
          </label>
          <input
            type="text"
            name="preferredTime"
            className="w-full border border-green-800 rounded p-2 mt-1"
            placeholder="e.g., Mornings, Afternoons, Evenings"
            value={formData.preferredTime}
            onChange={handleChange}
          />
          <p className="text-xs text-gray-500 mt-1">
            By clicking submit you consent to receive texts and emails from Dr. Marcia T. Norman
          </p>
          {errors.preferredTime && (
            <p className="text-red-600 text-sm mt-1">{errors.preferredTime}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-green-900">
            Preferred Contact Method
          </label>
          <select
            name="contactMethod"
            className="w-full border border-green-800 rounded p-2 mt-1"
            value={formData.contactMethod}
            onChange={handleChange}
          >
            <option value="">Select preferred method</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
          </select>
          {errors.contactMethod && (
            <p className="text-red-600 text-sm mt-1">
              {errors.contactMethod}
            </p>
          )}
        </div>

        <div className="flex items-center mt-2">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="agree" className="text-sm text-green-900">
            I agree to be contacted
          </label>
        </div>
        {errors.agree && (
          <p className="text-red-600 text-sm mt-1">{errors.agree}</p>
        )}

        {/* <div className="border mt-4 p-3 text-center text-gray-500 text-sm">
          [reCAPTCHA would go here]
        </div> */}

        <button
          type="submit"
          className="w-full bg-green-900 text-white py-2 rounded hover:bg-green-800"
        >
          Submit
        </button>

        <p className="text-xs text-center text-gray-600 mt-4">
          By clicking submit you consent to receive texts and emails from Dr.
          Marcia T. Norman
        </p>
      </form>
    </div>
  );
}
