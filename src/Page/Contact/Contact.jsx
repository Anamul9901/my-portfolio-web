import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Contai from '../../component/Shared/Contai';
import { FaLocationDot } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qo1r6jo', 'template_0h2ytja', form.current, 'pbLzIm3Ta3Mtb_nbp')
            .then((result) => {
                console.log(result);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your message sent successfully.",
                    showConfirmButton: false,
                    timer: 1500
                  });
                
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
      <div className='style'>
          <Contai>
            <div className='pt-20 md:h-[80vh] h-full items-center'>
                <div className='grid md:grid-cols-2 gap-4 text-white'>
                    <div className=' bg-stone-700 rounded-md p-5 flex items-center gap-5'>
                        <div className='btn rounded-full text-xl'>
                            <FaLocationDot />
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>My Address</h2>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>

                    <div className='  p-5 flex items-center gap-5 bg-stone-700 rounded-md'>
                        <div className='btn rounded-full text-xl'>
                            <IoShareSocialOutline />
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>Social Profiles</h2>
                            <div className="flex items-center gap-1">
                                <NavLink to="https://www.linkedin.com/in/anamul-haque-772264299/" target="_blan" className="btn glass rounded-full btn-sm text-white"><FaLinkedin /></NavLink>

                                <NavLink to="https://github.com/Anamul9901" target="_blank" className="btn glass rounded-full btn-sm text-white"><FaGithub /></NavLink>

                                <NavLink to="https://www.facebook.com/Anamul114" target="_blank" className="btn glass rounded-full btn-sm text-white"><FaFacebook /></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className=' bg-stone-700 rounded-md p-5 flex items-center gap-5'>
                        <div className='btn rounded-full text-xl'>
                            <MdOutlineMail />
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>Email Me</h2>
                            <p>anamulhaque9901@gmail.com</p>
                        </div>
                    </div>

                    <div className=' bg-stone-700 rounded-md p-5 flex items-center gap-5'>
                        <div className='btn rounded-full text-xl'>
                            <IoMdCall />
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>Call Me</h2>
                            <p>+8801864668089</p>
                        </div>
                    </div>
                </div>


                {/* email */}

                <div className='pt-10'>
                    <form ref={form} onSubmit={sendEmail}>

                        <div className=''>
                            <div className=' text-center'>
                                <div className='pb-5'>

                                    <input type="text" placeholder="Your Name" className="input input-bordered w-96  " name="from_name" />
                                </div>

                                <div>
                                    <input type="text" placeholder="Your Email" className="input  input-bordered w-96  " name="from_email" />
                                </div>
                            </div>

                            <div className='text-center pt-5'>
                                <textarea type="text" placeholder="Your Message" className="input input-bordered w-96 h-20  " name="message" />
                            </div>
                            <div className='text-center pt-5 pb-10'>
                            <input className='btn btn-sm  btn-primary' type="submit" value="Send Message" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Contai>
      </div>
    );
};

export default Contact;