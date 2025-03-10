"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors before validation
    setFormErrors({
      email: "",
      phone: "",
      message: ""
    });

    const email = form.current.querySelector('input[name="email"]').value;
    const phone = form.current.querySelector('input[name="phone"]').value;
    const message = form.current.querySelector('textarea').value;

    // Validate the form fields
    let isValid = true;
    const errors = {};

    if (!email) {
      isValid = false;
      errors.email = "Email is required";
    }

    if (!phone) {
      isValid = false;
      errors.phone = "Phone number is required";
    }

    if (!message) {
      isValid = false;
      errors.message = "Message is required";
    }

    if (!isValid) {
      setFormErrors(errors);
      return;
    }

    const requestBody = {
      email: "ahmedsuhail629@gmail.com",
      password: "fsrf ohvx raav trsm",
      provider: "gmail",
      smtpHost: "smtp.gmail.com",
      smtpPort: "465",
      to: 'ahmedsuhail629@gmail.com',
      subject: `New Contact Email`,
      text: `Message: ${message}`,
      html: `<div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 10px;">
          <h2 style="color: #4CAF50;">New Contact Form Submission</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #e8f5e9; padding: 10px; border-radius: 5px;">${message}</p>
        </div>
      </div>`
    };

    try {
      const response = await fetch("https://email.flutterforever.com/api/v1/send-email", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        setSuccess(true);
        setError(false);
      } else {
        setError(true);
        setSuccess(false);
      }
    } catch (err) {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <motion.div 
      initial={{ y: "-200vh" }} 
      animate={{ y: "0%" }} 
      transition={{ duration: 1 }} 
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-red-100 px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE - Animated "Hello" */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-800">
            {"Say Hello".split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, delay: index * 0.1, repeat: Infinity }}
              >
                {letter}
              </motion.span>
            ))}
            👋
          </h1>
        </div>

        {/* RIGHT SIDE - Contact Form */}
        <form 
          ref={form} 
          onSubmit={handleSubmit} 
          className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-lg"
        >
          <span className="text-lg font-medium text-gray-700">Dear Zeeshan,</span>
          <textarea 
            rows="5" 
            placeholder="Write your message here..." 
            className={`bg-gray-50 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full p-3 mt-2 outline-none resize-none focus:ring-2 focus:ring-blue-300`}
          ></textarea>
          {formErrors.message && <p className="text-sm text-red-600">{formErrors.message}</p>}

          <span className="text-lg font-medium text-gray-700 mt-4 block">My Email is:</span>
          <input 
            type="text" 
            name="email"
            placeholder="Enter your email" 
            className={`bg-gray-50 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full p-3 mt-2 outline-none focus:ring-2 focus:ring-blue-300`}
          />
          {formErrors.email && <p className="text-sm text-red-600">{formErrors.email}</p>}

          <span className="text-lg font-medium text-gray-700 mt-4 block">My Phone Number:</span>
          <input 
            type="text" 
            name="phone"
            placeholder="Enter your phone number" 
            className={`bg-gray-50 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg w-full p-3 mt-2 outline-none focus:ring-2 focus:ring-blue-300`}
          />
          {formErrors.phone && <p className="text-sm text-red-600">{formErrors.phone}</p>}

          <span className="text-lg font-medium text-gray-700 mt-4 block">Regards,</span>

          {/* SUCCESS & ERROR MESSAGES */}
          {success && <span className="text-sm text-green-600 font-semibold">Email sent successfully!</span>}
          {error && <span className="text-sm text-red-600 font-semibold">Error sending email. Try again.</span>}

          {/* SUBMIT BUTTON */}
          <button 
            type="submit" 
            className="w-full mt-4 bg-blue-600 text-white font-medium text-lg py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;