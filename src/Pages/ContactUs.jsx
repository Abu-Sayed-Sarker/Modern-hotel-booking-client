import { FaFacebookF, FaInstagram, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast from "react-hot-toast";
import { CiLinkedin } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import img1 from '../assets/contact-us.png'
import img2 from '../assets/contact-img-2.png'

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_f7hkpzb', 'template_qa9fkkd', form.current, {
                publicKey: 'gBTOjCr1a-vF-ddLk',
            })
            .then(
                () => {
                    toast.success("Your mail send success")
                    console.log('SUCCESS!');
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className="w-11/12 mx-auto">
            <div>
                <h1 className="text-2xl lg:text-5xl text-teal-500 pt-10 pb-5 text-center font-bold">Contact Us</h1>
            </div>
            <div className="flex lg:flex-row items-center md:flex-row flex-col">
                <div className="lg:w-1/2 md:w-1/2 w-full">
                    <img src={img1} alt="" />
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full space-y-4">
                    <h1 className="text-3xl font-bold text-teal-600 mb-10">Contact Form</h1>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        <input type="text" placeholder="Your Name" name="user_name" required className="w-full p-2 border-teal-400 border rounded-xl px-4" />
                        <input type="email" placeholder="Your email" name="user_email" required className="w-full p-2 border-teal-400 border rounded-xl px-4" />
                        <input type="number" name="phone" placeholder="Your phone number" className="w-full p-2 border-teal-400 border rounded-xl px-4" />
                        <textarea name="message" className="textarea textarea-ghost w-full  border-teal-400 border rounded-xl" placeholder="comment here......."></textarea>
                        <input className="py-2 rounded-xl px-4 bg-teal-400 hover:bg-teal-600 cursor-pointer" type="submit" value="Send email" />
                    </form>
                </div>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col">
                <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center">
                    <h1 className="text-teal-600 lg:text-4xl md:text-3xl text-2xl font-semibold">If you have any problem or need help. Contact our social media</h1>

                    <div className="py-3 space-y-2">
                        <p className="flex text-lg items-center gap-3"><FaLocationDot /> Comilla, Chittgong, Bangladesh</p>
                        <p className="flex text-lg items-center gap-3"><FaPhoneAlt /> +8801967287131</p>
                        <p className="flex text-lg items-center gap-3"><MdEmail /> hotelmaster@hotel.com</p>
                    </div>

                    <div className='flex gap-4 mt-4 pb-5'>
                        <a className='p-4 border border-teal-600 hover:bg-teal-400 rounded-full' href="https://www.facebook.com/p/Abu-Sayed-100035598160323/"><FaFacebookF /></a>
                        <a className='p-4 border border-teal-600 hover:bg-teal-400 rounded-full' href="https://github.com/Abu-Sayed-Sarker"><FiGithub /></a>
                        <a className='p-4 border border-teal-600 hover:bg-teal-400 rounded-full' href="https://www.instagram.com/as_sayed31/"><FaInstagram /></a>
                        <a className='p-4 border border-teal-600 hover:bg-teal-400 rounded-full' href="https://api.whatsapp.com/send?phone=01967287131"><FaWhatsapp /></a>
                        <a className='p-4 border border-teal-600 hover:bg-teal-400 rounded-full' href="https://www.linkedin.com/in/abu-sayed-32a591342/"><CiLinkedin /></a>
                    </div>
                </div>
                <div className="lg:w-1/2 md:w-1/2 w-full space-y-4">
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;