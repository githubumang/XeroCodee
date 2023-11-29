import React from 'react'
import Image from 'next/image'
import logo from '../assets/landing/logo.png'
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import Link from 'next/link';

const Footer = () => {
    const Services=[
        {
            title:"Infrastructure provisioning",
            link:"#"
        },
        {
            title:"Network infrastructure automation",
            link:"#"
        },
        {
            title:"Cost optimization",
            link:"#"
        },
        {
            title:"Cloud migration",
            link:"#"
        },
        {
            title:"Kubernetes at scale",
            link:"#"
        }
    ]

    const ourLinks =[
        {
            title:"Home",
            link:"#"
        },
        {
            title:"About us",
            link:"https://xerocodee.com/about/"
        },
        {
            title:"Integrations",
            link:"https://xerocodee.com/integrations/"
        },
        {
            title:"Team",
            link:"https://xerocodee.com/team/"
        },
        {
            title:"Blog",
            link:"https://blog.xerocodee.com/"
        }
    ]
    const otherLinks=[
        {
            title:"FAQ",
            link:"https://xerocodee.com/faq/"
        },
        {
            title:"Careers",
            link:"https://careers.xerocodee.com/"
        },
        {
            title:"Privacy Policy",
            link:"https://xerocodee.com/privacypolicy/"
        },
        {
            title:"Terms & Condition",
            link:"https://xerocodee.com/termsandcondition/"
        },
        {
            title:"Support",
            link:"https://xerocodee.com/support/"
        }
    ]
  return (
    <div className='lg:bg-[#C6DEFF]/10 pb-20 mb-20'>
        <div className='ml-5 lg:flex mt-14 mb-10 justify-center lg:mx-20'>
            <div className='information mb-5 ml-2  lg:mt-16'>
                <div className='logo lg:hidden'><Image src={logo} className='h-[54.06px] w-[54.06px]' alt='logo'/></div>
                <div className='font-[400] text-[14px] w-[305px] mt-5 lg:w-[256px]'>You get just what you need to run your cloud workloads--no more, no less. Deploy from our single pane of glass, manage them with ease and scale up as fast as your workload grows</div>
                <div className='flex mt-5'>
                    <div className='bg-[#C6DEFF] p-2 rounded-full'><Link href={"https://github.com/xerocodees"} target='__blank'><FiGithub/></Link></div>
                    <div className='bg-[#C6DEFF]/30 p-2 rounded-full ml-3'><Link href={"https://linkedin.com/company/xerocodee/"} target='__blank'><LuLinkedin/></Link></div>
                    <div className='bg-[#C6DEFF]/30 p-2 rounded-full ml-3'><Link href={"mail:hello@xerocodee.com"} target='__blank'><MdOutlineMail/></Link></div>
                </div>
            </div>
            <hr className='border-black mr-2 lg:hidden  '/>
            <div className='link mt-10 flex ml-3 mr-6 lg:w-[700px] lg:mr-0 lg:ml-16'>
                <div className='w-1/2 md:w-1/4'>
                    <div className='font-[600] text-[20px] mb-3'>Our Links</div>
                    <div className='font-400] text-[14px] leading-10'>
                        {ourLinks.map((link, index)=>{
                            return(
                                <div>
                                    <Link href={link.link} className='hover:text-blue-700' target='__blank'>{link.title}</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='services text-left mt-16 hidden md:inline md:mt-0  mr-16'>
                    <div className='font-[600] text-[20px] mb-3'>Our Services</div>
                    <div className='font-[400] text-[14px] leading-10 '>
                        {Services.map((service,index)=>{
                            return(
                                <div>
                                    <Link href={service.link} className='hover:text-blue-700' target='__blank'>{service.title}</Link>
                                </div>
                            )
                        })}
                    </div>

                </div>
                <div className='text-right w-1/2 md:text-left lg:w-1/4'>
                    <div className='font-[600] text-[20px] mb-3'>Other Links</div>
                    <div className='font-400] text-[14px] leading-10'>
                        {otherLinks.map((link,index)=>{
                            return(
                                <div>
                                    <Link href={link.link} className='hover:text-blue-700' target='__blank'>{link.title}</Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='services text-center mt-16 md:hidden'>
                <div className='font-[600] text-[20px] mb-3'>Our Services</div>
                <div className='font-400] text-[14px] leading-10'>
                {Services.map((service,index)=>{
                    return(
                        <div>
                            <Link href={service.link} className='hover:text-blue-700' target='__blank'>{service.title}</Link>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
        <hr className='border-black ml-4 mr-2 lg:hidden'/>
        <div className='copyright mt-8 lg:flex lg:mx-32'>
            <div className='font-[400] text-[14px] text-center lg:w-1/2 lg:text-left ' ><Link href={"https://xerocodee.com/termsandcondition/"} target='__blank'>Terms & Condition</Link> | <Link href={"https://xerocodee.com/privacypolicy/"} target='__blank'>Privacy Policy</Link></div>
            <div className='font-[400] text-[14px] text-center mt-6 leading-6 lg:mt-0 lg:w-1/2 lg:text-left'>Copyright &copy; <span className='font-[700]'>EXOCODE TECHNOLOGIES <span className='hidden lg:inline'>| </span></span><br className='lg:hidden'/>All right reserved</div>
        </div>

    </div>
  )
}

export default Footer