"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, Rocket } from "lucide-react";

export default function RegistrationForm() {
  // Your active Google Apps Script Webhook
  const scriptURL = "https://script.google.com/macros/s/AKfycbxYhr9wYxMdYt0l2P7F8MXr8O0Fzy_hXW47sgW48AsROmR1NpJS1_JbEMBUQunU1NBU/exec";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fieldOfStudy: "",
    yearOfStudy: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // mode: "no-cors" is the magic key here. It forces the browser to send 
      // the data to Google without getting blocked by Google's strict redirect rules.
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      // Because of "no-cors", if the fetch didn't crash, we assume success!
      setStatus("success");
      
      // 1. Show the Success Alert
      alert("🚀 Mission Received! Your registration was successful.");
      
      // 2. Reset the form
      setFormData({ name: "", email: "", fieldOfStudy: "", yearOfStudy: "", message: "" });
      setStatus("idle");
      
      // 3. Send the user back to the main page / top of the site
      window.location.href = "/"; 

    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      
      // 1. Show the Error Alert
      alert("⚠️ There was a problem submitting your registration. Please check your internet connection and try again.");
    }
  };

  const inputClasses =
    "w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#3b9eff] focus:ring-1 focus:ring-[#3b9eff] transition-all duration-300";

  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8 rounded-2xl border border-white/10 bg-[#020510]/80 backdrop-blur-md relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b9eff] opacity-[0.03] blur-3xl rounded-full pointer-events-none" />

      <div className="mb-8 text-center relative z-10">
        <Rocket className="w-8 h-8 text-[#3b9eff] mx-auto mb-4" />
        <h2 className="text-3xl font-black text-white uppercase tracking-tight">
          Secure Your Spot
        </h2>
        <p className="text-white/50 text-sm mt-2">
          Join the 4th edition of Race to Space. Enter your details below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 ml-1 font-mono">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={inputClasses}
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 ml-1 font-mono">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 ml-1 font-mono">
              Field of Study *
            </label>
            <input
              type="text"
              name="fieldOfStudy"
              required
              value={formData.fieldOfStudy}
              onChange={handleChange}
              className={inputClasses}
              placeholder="e.g. Computer Science"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 ml-1 font-mono">
              Year of Study *
            </label>
            <select
              name="yearOfStudy"
              required
              value={formData.yearOfStudy}
              onChange={handleChange}
              className={`${inputClasses} appearance-none cursor-pointer`}
            >
              <option value="" disabled className="text-black">Select Year</option>
              <option value="L1" className="text-black">L1</option>
              <option value="L2" className="text-black">L2</option>
              <option value="L3" className="text-black">L3</option>
              <option value="M1" className="text-black">M1</option>
              <option value="M2" className="text-black">M2</option>
              <option value="Other" className="text-black">Other</option>
            </select>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-2 ml-1 pr-1">
            <label className="block text-xs uppercase tracking-wider text-white/50 font-mono">
              Short Message
            </label>
            <span className={`text-xs font-mono ${formData.message.length >= 30 ? 'text-red-400' : 'text-white/30'}`}>
              {formData.message.length}/30
            </span>
          </div>
          <input
            type="text"
            name="message"
            maxLength={30}
            value={formData.message}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Why join? (Max 30 chars)"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          disabled={status === "submitting"}
          className="w-full mt-6 bg-gradient-to-r from-[#3b9eff] to-[#2b7fff] text-white font-bold uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(59,158,255,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          type="submit"
        >
          {status === "submitting" ? (
            <span className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Launching...
            </span>
          ) : status === "success" ? (
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> Mission Received
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Rocket className="w-5 h-5" /> Submit Application
            </span>
          )}
        </motion.button>
      </form>
    </div>
  );
}