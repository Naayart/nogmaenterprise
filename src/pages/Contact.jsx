import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiMessageCircle, FiUser, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact({ cart }) {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeTab, setActiveTab] = useState('contact');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        "service_xztmj7q",    // 🔁 Replace with your EmailJS Service ID
        "template_yf4lk67",   // 🔁 Replace with your EmailJS Template ID
        form.current,
        "1BZlt3DgCz3Hay6Rw"     // 🔁 Replace with your EmailJS Public Key
      )
      .then(() => {
        setSubmitStatus('success');
        form.current.reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch(() => {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Navbar cart={cart} />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#046404] via-[#2D5A27] to-[#4A7C59] py-24 pt-28 relative overflow-hidden mt-15">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#D5A20A]/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-[#D5A20A]/15 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#D5A20A]/25 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Let's Connect
          </h1>
          <p className="text-xl text-[#F5F5DC] font-medium max-w-3xl mx-auto leading-relaxed">
            Ready to start a conversation? Choose your preferred way to reach us
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-20">
        <div className="container mx-auto px-4">
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg border border-gray-100">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === 'contact'
                      ? 'bg-[#D5A20A] text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-[#046404] hover:bg-gray-50'
                  }`}
                >
                  <FiMessageCircle size={18} />
                  <span>Contact Form</span>
                </button>
                <button
                  onClick={() => setActiveTab('direct')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === 'direct'
                      ? 'bg-[#D5A20A] text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-[#046404] hover:bg-gray-50'
                  }`}
                >
                  <FiUser size={18} />
                  <span>Direct Contact</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form Tab */}
          {activeTab === 'contact' && (
            <div className="max-w-4xl mx-auto">
              {/* Floating Contact Form */}
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-[#D5A20A]/20 to-transparent rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-[#046404]/20 to-transparent rounded-full blur-xl"></div>
                
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative z-10 border border-gray-100">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#D5A20A] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiMessageSquare className="text-white" size={28} />
                    </div>
                    <h2 className="text-3xl font-bold text-[#046404] mb-2">
                      Send us a Message
                    </h2>
                    <p className="text-gray-600">
                      We would love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3">
                      <FiCheckCircle className="text-green-500" size={20} />
                      <span className="text-green-700 font-medium">Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3">
                      <FiCheckCircle className="text-red-500" size={20} />
                      <span className="text-red-700 font-medium">Something went wrong. Please try again or contact us directly.</span>
                    </div>
                  )}

                  <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    {/* Name Fields - Side by side with icons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="" className="font-semibold">First Name</label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                            <FiUser size={20} />
                          </div>
                          <input 
                            name="user_firstname" 
                            type="text" 
                            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D5A20A] focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white" 
                            placeholder="First Name" 
                            required 
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="" className="font-semibold">Last Name</label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <FiUser size={20} />
                          </div>
                          <input 
                            name="user_lastname" 
                            type="text" 
                            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D5A20A] focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white" 
                            placeholder="Last Name" 
                            required 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Contact Fields - Side by side with icons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="" className="font-semibold">Email Address</label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <FiMail size={20} />
                          </div>
                          <input 
                            name="user_email" 
                            type="email" 
                            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D5A20A] focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white" 
                            placeholder="Email Address" 
                            required 
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="" className="font-semibold">Phone Number</label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <FiPhone size={20} />
                          </div>
                          <input 
                            name="user_phone" 
                            type="tel" 
                            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D5A20A] focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white" 
                            placeholder="Phone Number (Optional)" 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="" className="font-semibold">Subject</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <FiMessageSquare size={20} />
                        </div>
                        <input 
                          name="subject" 
                          type="text" 
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D5A20A] focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white" 
                          placeholder="Subject" 
                          required 
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="" className="font-semibold">Message</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <FiMessageSquare size={20} />
                        </div>
                        <textarea 
                          name="message" 
                          className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D5A20A] focus:border-transparent outline-none transition-all bg-gray-50 hover:bg-white resize-none" 
                          rows={6} 
                          placeholder="Tell us about your inquiry, questions, or how we can assist you..." 
                          required 
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#D5A20A] to-[#B8860B] text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <FiSend size={18} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Direct Contact Tab */}
          {activeTab === 'direct' && (
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Email Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D5A20A] to-[#B8860B] rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-transparent group-hover:border-[#D5A20A] transition-all duration-300">
                    <div className="w-16 h-16 bg-[#D5A20A] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#046404] transition-colors duration-300">
                      <FiMail className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-[#046404] mb-3">Email Us</h3>
                    <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours</p>
                    <a 
                      href="mailto:akunyarahelenakunyara@gmail.com" 
                      className="inline-flex items-center space-x-2 text-[#D5A20A] font-semibold hover:text-[#046404] transition-colors"
                    >
                      <span>Send Email</span>
                      <FiSend size={16} />
                    </a>
              </div>
            </div>

                {/* Phone Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#046404] to-[#2D5A27] rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-transparent group-hover:border-[#046404] transition-all duration-300">
                    <div className="w-16 h-16 bg-[#046404] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D5A20A] transition-colors duration-300">
                      <FiPhone className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-[#046404] mb-3">Call Us</h3>
                    <p className="text-gray-600 mb-4">Speak directly with our team</p>
                    <div className="space-y-2">
                      <a 
                        href="tel:+233505944839" 
                        className="block text-[#D5A20A] font-semibold hover:text-[#046404] transition-colors"
                      >
                        +233 50 594 4839
                      </a>
                      <a 
                        href="tel:+233256869185" 
                        className="block text-[#D5A20A] font-semibold hover:text-[#046404] transition-colors"
                      >
                        +233 25 686 9185
                      </a>
              </div>
            </div>
          </div>

                {/* WhatsApp Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-transparent group-hover:border-green-500 transition-all duration-300">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                      <FaWhatsapp className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-[#046404] mb-3">WhatsApp</h3>
                    <p className="text-gray-600 mb-4">Quick chat with instant responses</p>
                    <a 
                      href="https://wa.me/233505944839" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-green-500 font-semibold hover:text-green-600 transition-colors"
                    >
                      <span>Start Chat</span>
                      <FaWhatsapp size={16} />
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-xl border-2 border-transparent group-hover:border-purple-500 transition-all duration-300">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                      <FiMapPin className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-[#046404] mb-3">Visit Us</h3>
                    <p className="text-gray-600 mb-4">Come see us in person</p>
                    <a 
                      href="https://maps.google.com/?q=Tamale,Ghana" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-purple-500 font-semibold hover:text-purple-600 transition-colors"
                    >
                      <span>Get Directions</span>
                      <FiMapPin size={16} />
                    </a>
                  </div>
              </div>
              </div>

              {/* Social Media Section */}
              <div className="mt-16 text-center">
                <h3 className="text-3xl font-bold text-[#046404] mb-6 font-heading">
                  Follow Our Journey
                </h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Stay connected with us on social media for the latest updates, product launches, and community stories.
                </p>
                <div className="flex justify-center space-x-6">
                  <a href="#" className="w-16 h-16 bg-gradient-to-br from-[#D5A20A] to-[#B8860B] rounded-full flex items-center justify-center hover:bg-white hover:text-[#046404] transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <FaFacebookF size={24} />
                  </a>
                  <a href="#" className="w-16 h-16 bg-gradient-to-br from-[#D5A20A] to-[#B8860B] rounded-full flex items-center justify-center hover:bg-white hover:text-[#046404] transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <FaInstagram size={24} />
                  </a>
                  <a href="#" className="w-16 h-16 bg-gradient-to-br from-[#D5A20A] to-[#B8860B] rounded-full flex items-center justify-center hover:bg-white hover:text-[#046404] transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <FaLinkedinIn size={24} />
                  </a>
              </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
