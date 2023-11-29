"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import hero from '../assets/landing/hero.png'
import company from '../assets/landing/company.png'
import dashboard1 from '../assets/landing/dashboard-1.png'
import dashboard2 from '../assets/landing/dashboard-2.png'
import dashboard3 from '../assets/landing/dashboard-3.png'
import withXerocodee from '../assets/landing/with.png'
import withoutXerocodee from '../assets/landing/without.png'
import infrastructure from '../assets/landing/infrastructure.png'
import security from '../assets/landing/security.png'
import networking from '../assets/landing/networking.png'
import applications from '../assets/landing/applications.png'
import realTime from '../assets/landing/real-time.png'
import iconography from '../assets/landing/iconography.png'
import fileAttachment from '../assets/landing/file attachment.png'
import cloud from '../assets/landing/cloud.png'
import pipline from '../assets/landing/pipeline.png'
import deploy from '../assets/landing/deploy.png'
import tools from '../assets/landing/tools.png'
import scale from '../assets/landing/scale.png'
import cost from '../assets/landing/cost.png'
import preview from '../assets/landing/preview.png'
import observability from '../assets/landing/observability.png'
import graph from '../assets/landing/graph.png'
import subscribeBackground from '../assets/landing/subscribe background.png'
import profile from '../assets/landing/profile1.jpg'
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FaPaperPlane } from "react-icons/fa";
import { IoWifi } from "react-icons/io5";
import { IoRocket } from "react-icons/io5";
import { FaRegPaperPlane } from "react-icons/fa";


const HomePage = () => {
    const features = ['Apps', 'App Configs', 'Pipelines', 'Infra Creation', 'Cost', 'Add-Ons', 'Monitoring', 'Connections']
    const [email, setEmail] = useState("")
    const [storyNo, setStoryNo] = useState(0);
    const stories =[
        {
            img:"../assets/landing/profile1.jpg",
            tell:"There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.",
            name:"Jhon Kelaven",
            work:"Creative designer"
        },
        {
            img:"../assets/landing/profile1.jpg",
            tell:"Xerocodee Organization is simply perfect. The friendly atmosphere, flexible time management, and exceptional mentorship make it an ideal place to be. The team members are very supportive and friendly. With the ability to manage time effectively and take breaks when needed, work-life balance is prioritised. The mentors provide invaluable guidance, contributing to personal and professional growth.",
            name:"Abcdefgh Ijklmnop",
            work:"Frontend Engineer"
        },
        {
            img:"../assets/landing/profile1.jpg",
            tell:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum magni aliquid quam tenetur culpa quibusdam cumque dicta nihil perferendis odio laudantium atque cum consequatur, omnis laboriosam quae molestias illo optio voluptates vitae reiciendis. Quibusdam debitis eaque aspernatur beatae dicta, iure illum reprehenderit repellendus odio architecto!",
            name:"Xyz yubxi",
            work:"Backend Engineer"
        }
    ]
    

    const goToPrevious = ()=>{
        if(storyNo===0){
            setStoryNo(stories.length-1);
        }
        else{setStoryNo(storyNo-1)}
    }

    
  return (
    <div className='mt-10 mx-2 lg:mx-5'>
        <div className='GetStartNow'>
            <div className='justify-center text-center font-bold text-2xl  md:text-6xl md:mx-6'>Build your audience and grow your brand</div>
            <div className='justify-center text-center text-xs mx-6 md:text-2xl md:mx-16'>no more, no less. Deploy from our single pane of glass, manage them with ease and scale up as fast as your workload grows.</div>
            <div className='justify-center text-center' title='COMING SOON...'><button className='bg-blue-700 text-white px-6 py-3 rounded my-9'>Get Started Now</button></div>
            <div className='flex justify-center'><Image src={hero} alt='dashboard1' className='md:w-full'/></div>
            
        </div>
        <div className='mt-2'>
            <div className='justify-center '><Image src={company} className='w-full' alt='company'/></div>
        </div>
        <div className='features mt-7'>
            <div className='flex justify-center'> <button className='bg-blue-200 text-blue-700 rounded-full px-5 py-2'>Features</button></div>
            <div className='justify-center text-center font-bold text-xl mt-10 md:text-4xl md:mx-6'><span className='md:text-blue-700'>Save 1000s </span>of expensive coder hours</div>
            <div className='justify-center text-center text-xs mx-6 mt-2 md:text-lg md:mx-16'>With cloud native technologies, we assist in modernising infrastructure and applications for resilience and scalability.</div>
            <div className='header hidden md:flex justify-center mt-14 '>
                {features.map((feature, index)=>{
                    return(
                        <div className='bg-white w-20 text-xs text-center mx-6'>
                            {feature}
                        </div>
                    )
                })}
            </div>
            <div className='flex justify-center relative w-full mt-8'>
                <Image src={dashboard1} className='absolute w-3/5 top-4 md:top-14' alt='dashboard-1'/>
                <Image src={dashboard3} className='absolute w-2/5 right-0' alt='dashboard-1'/>
                <Image src={dashboard2} className='absolute w-2/5 top-20 md:top-96 left-0' alt='dashboard-1'/>
            </div>
            <div className='mt-[250px] md:mt-[790px] md:flex justify-center'>
                <div>
                    <div className='font-bold mb-8 md:mb-20 text-center'>Without Xerocodee</div>
                <Image src={withoutXerocodee} className='md:w-3/5 md:ml-32' alt='withXerocodee'/>
                </div>
                <div className='md:ml-20'>
                    <div className='font-bold mt-20 mb-8 md:mb-20 md:mt-1 text-center'>With Xerocodee</div>
                <Image src={withXerocodee} className='md:w-3/5 md:ml-20 ' alt='withoutXerocedd'/>
                </div>
            </div>
            <div className='selfService mt-28'>
                <div className='justify-center text-center w-[362px] md:w-[1115px] h[56px] md:h-[90px] font-[600] top-[1906px]  text-xl md:leading-[2.5rem] md:text-[44px] md:mx-20'>Self service infrastructure platform for <span className='md:text-[#0C5BC6]'>scaling teams</span></div>
                <div className='lg:flex'>
                    <div className='flex bg-gray-50 w-[353px] left-[20px] h-[99.48px] top-[1980px] mt-5 py-5 lg:w-[485px] lg:h-[104px] lg:shadow-[0_20px_20px_0_rgba(0,0,0,0.03)] lg:ml-28'>
                        <Image src={infrastructure} className='w-[51px] h-[51px] left-12 ml-3 bg-white border-white shadow-[0_3px_3px_0_rgba(0,0,0,0.5)] border-[10px] rounded lg:mt-1' alt='infrastructure'/>
                        <div className='ml-4'><span className='w-[258px] font-[600] text-[16px] h-6 left-[110px] lg:text-[24px] lg:h-[30px] lg:w-58 '>Infrastructure</span><br /><span className='w-[255px] font-[400] text-[12px] h-[49px] left-[110px]'>Automated Cloud Infrastructure Workflow</span></div>
                    </div>
                    <div className='flex bg-gray-50 w-[353px] left-[20px] h-[99.48px] top-[1980px] mt-5 py-5 lg:w-[485px] lg:h-[104px] lg:shadow-[0_20px_20px_0_rgba(0,0,0,0.03)] lg:ml-28'>
                        <Image src={security} className='w-[51px] h-[51px] left-12 ml-3 bg-white border-white shadow-[0_3px_3px_0_rgba(0,0,0,0.5)] border-[10px] rounded lg:mt-1' alt='infrastructure'/>
                        <div className='ml-4'><span className='w-[258px] font-[600] text-[16px] h-6 left-[110px] lg:text-[24px] lg:h-[30px] lg:w-58 '>Security</span><br /><span className='w-[255px] font-[400] text-[12px] h-[49px] left-[110px]'>Modern secure Infrastructure Approach</span></div>
                    </div>
                </div>
                <div className='lg:flex'>
                    <div className='flex bg-gray-50 w-[353px] left-[20px] h-[99.48px] top-[1980px] mt-5 py-5 lg:w-[485px] lg:h-[104px] lg:shadow-[0_20px_20px_0_rgba(0,0,0,0.03)] lg:ml-28'>
                        <Image src={networking} className='w-[51px] h-[51px] left-12 ml-3 bg-white border-white shadow-[0_3px_3px_0_rgba(0,0,0,0.5)] border-[10px] rounded lg:mt-1' alt='infrastructure'/>
                        <div className='ml-4'><span className='w-[258px] font-[600] text-[16px] h-6 left-[110px] lg:text-[24px] lg:h-[30px] lg:w-58 '>Networking</span><br /><span className='w-[255px] font-[400] text-[12px] h-[49px] left-[110px]'>Flexible Secure Application Connectivity</span></div>
                    </div>
                    <div className='flex bg-gray-50 w-[353px] left-[20px] h-[99.48px] top-[1980px] mt-5 py-5 lg:w-[485px] lg:h-[104px] lg:shadow-[0_20px_20px_0_rgba(0,0,0,0.03)] lg:ml-28'>
                        <Image src={applications} className='w-[51px] h-[51px] left-12 ml-3 bg-white border-white shadow-[0_3px_3px_0_rgba(0,0,0,0.5)] border-[10px] rounded lg:mt-1' alt='infrastructure'/>
                        <div className='ml-4'><span className='w-[258px] font-[600] text-[16px] h-6 left-[110px] lg:text-[24px] lg:h-[30px] lg:w-58 '>Applications</span><br /><span className='w-[255px] font-[400] text-[12px] h-[49px] left-[110px]'>Automate Application Deployment for Agility</span></div>
                    </div>
                </div>
            </div>
            <div className='infrastructure w-[356px] h-[1172px]  bg-[#0C5BC6] rounded-[15px] mt-24 lg:rounded-[35px] lg:w-[1230px] lg:h-[1498px] '>
                <div className='text-white w-[331px] ml-3  font-[600] text-[20px] text-center pt-10 lg:text-[44px] lg:w-[1113px] lg:ml-10 lg:pt-20'>Modernize apps, infrastructure with cloud native tech for resilience, scalability.</div>
                <div className='mt-12 lg:mt-44 lg:ml-16 lg:flex'>
                    <Image src={realTime} className='w-[320px] h-[187.69px] lg:w-[692.97px] lg:h-[310.98px] mx-auto lg:mx-0 lg:mt-3' alt='Real Time analysis'/>
                    <div className='text-white px-6 md:w-[375px]'>
                        <div className='mt-10 lg:mt-0 heading lg:text-left'>Real-Time Risk Monitoring</div>
                        <div className='content mt-6 lg:text-left'>Real-time risk monitoring across your infrastructure and application ecosystem will help you maintain ongoing compliance with more than 05+ different regulatory standards.</div>
                    </div>
                </div>
                <div className='lg:flex lg:flex-row-reverse mt-20 lg:mt-40 justify-center'>
                    <div className='lg:relative'>
                        <Image src={iconography} className='w-[210.95px] h-[155.66px] ml-28  lg:w-[372.68px] lg:h-[269.16px] lg:mt-3 ' alt='Real Time analysis'/>
                        {/* <div className='hidden lg:block lg:absolute bg-red-300 w-[347.66px] h-[407.19px] top-14 '></div> */}
                        <Image src={fileAttachment} className='w-[199.72px] h-[117.24px] ml-6 mt-4  lg:w-[352.84px] lg:h-[202.73px] lg:mt-8 ' alt='Real Time analysis'/>
                    </div>
                    <div className='text-white px-6 md:w-[483.97px] my-auto'>
                        <div className='heading mt-14 lg:mt-0 lg:text-left'>Collaborative Workflows</div>
                        <div className='content mt-6 lg:text-left'>Share artefacts easily and collaborate with team members, auditors, and pen testers via automated procedures. To manage daily compliance with automatic notifications and reminders, create, assign, and track tasks.</div>
                    </div>
                </div>
            </div>
            <div className='XerocodeeWay border-2 rounded-[15px] mt-10 pb-10 pt-12 lg:mt-20 lg:pb-32 lg:border-0 bg-white'>
                <div className='heading flex justify-center'>The Xerocodee way <div className='text-blue-500 ml-5 lg:mt-3'><div className='text-[10px] lg:text-[15px]'><IoWifi/></div> <div className='text-[23px] lg:text-[30px]'><IoRocket/></div></div></div>
                <div className='point1'>
                    <div className='font-[600] text-[20px] text-center lg:text-[36px] mt-20'>01</div>
                    <div className="line flex justify-center "><div className='h-3 w-3 bg-blue-700 rounded-full'></div><div className='h-[2px] w-2 bg-blue-700 mt-[5px] md:w-16'></div><div className='h-3 w-3 bg-blue-700 rounded-full'></div></div>
                    <div className='secondHeading mt-8 lg:mt-20'>Self serve Infrastructure</div>
                    <div className='content mt-6'> Accelerate by self-serving production-ready infrastructure and customize as you scale.</div>
                    <div className='flex mt-8 justify-center font-[700] text-[10px] lg:justify-start lg:text-[12px] lg:ml-24'>
                        <div className='rounded border-b-4 border-blue-700 px-2 mr-3 lg:py-2 lg:w-[120px] text-center lg:mr-6'> Your Cloud</div>
                        <div className='border-2 px-1 mr-3 rounded lg:py-2 lg:w-[120px] text-center lg:mr-6'> Infra Components</div>
                        <div className='border-2 px-1 rounded lg:py-2 lg:w-[120px] text-center lg:mr-6 '> Self-Hosted Apps</div>
                    </div>
                    <div className='lg:flex lg:justify-center mt-6'>
                        <div className='lg:w-1/2'>
                        <Image src={cloud} className='h-[201.79px] lg:h-[300px] lg:ml-40' alt='cloud'/>
                        </div>
                        <div className='lg:w-1/2 lg:ml-10 lg:mt-16'>
                            <div className='text-[14px] text-center font-[600] mt-6 lg:text-[20px] lg:text-left'>In Your Cloud</div>
                            <div className='content mt-5 lg:text-left lg:text-[16px]'>Your infrastructure runs on your AWS or GCP account. Never get locked in. Infinitely scalable.Azure support (coming soon)</div>
                        </div>
                    </div>
                </div>
                <div className='point2'>
                    <div className='font-[600] text-[20px] text-center lg:text-[36px] mt-20'>02</div>
                    <div className="line flex justify-center "><div className='h-3 w-3 bg-blue-700 rounded-full'></div><div className='h-[2px] w-2 bg-blue-700 mt-[5px] md:w-16'></div><div className='h-3 w-3 bg-blue-700 rounded-full'></div></div>
                    <div className='secondHeading mt-8 lg:mt-20'>Deploy Applications, fast!</div>
                    <div className='content mt-6'>Set up automated deployments of your application in 5 minutes and get back to building stuff that matters.</div>
                    <div className='lg:flex lg:justify-center mt-16 lg:mt-20'>
                        <div className='lg:w-1/2'>
                        <Image src={pipline} className='w-[255px] lg:w-[406px] mx-auto lg:ml-20 lg:mr-20 lg:mt-3 ' alt='cloud'/>
                        </div>
                        <div className='mt-14 lg:w-1/2 lg:ml-10 lg:mt-1'>
                            <div className='text-[14px] text-center font-[600] mt-6 lg:text-[20px] lg:text-left lg:mt-0'>Configurable Build and Deploy pipelines</div>
                            <div className='text-center font-[400] text-[14px] mt-5 mx-[1.2px] lg:text-left lg:text-[16px] lg:w-[550px]'>Portable builds powered by Dagger and continuous deployments powered by ArgoCD - you gain more control of your pipelines with composable custom, build, and deploy stages.</div>
                        </div>
                    </div>
                    <div className='lg:flex lg:flex-row-reverse lg:justify-center mt-16'>
                        <div className='lg:w-1/2'>
                        <Image src={deploy} className='w-[255px] lg:w-[406px] mx-auto lg:ml-1 lg:mt-3 ' alt='cloud'/>
                        </div>
                        <div className='mt-14 lg:w-1/2 lg:ml-20 lg:mt-1 '>
                            <div className='text-[14px] text-center font-[600] mt-6 lg:text-[20px] lg:text-left lg:mt-0'>Push to Deploy</div>
                            <div className='text-center font-[400] text-[14px] mt-5 mx-[1.2px] lg:text-left lg:text-[16px] lg:w-[550px]'>Just connect your repo with one click and push. Argonaut’s deep integration with GitHub Actions and GitLab pipelines build and deploy your code on every push.</div>
                        </div>
                    </div>
                    <div className='lg:flex lg:justify-center mt-16'>
                        <div className='lg:w-1/2'>
                        <Image src={tools} className='w-[255px] lg:w-[400px] mx-auto lg:ml-20 lg:mr-20 lg:mt-3 ' alt='cloud'/>
                        </div>
                        <div className='mt-14 w-[330px] mx-auto lg:w-1/2 lg:ml-10 lg:mt-1 '>
                            <div className='text-[14px] text-center font-[600] mt-6 lg:text-[20px] lg:text-left lg:mt-0'>Multiple Runtimes</div>
                            <div className='text-center font-[400] text-[14px] mt-5 lg:text-left lg:text-[16px] lg:w-[550px]'>Quickly deploy apps to containerized or serverless runtimes on your cloud and customize architectures to cost and performance constraints. Deploy on Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud Functions.</div>
                        </div>
                    </div>
                    <div className='lg:flex lg:flex-row-reverse lg:justify-center mt-16'>
                        <div className='lg:w-1/2'>
                        <Image src={scale} className='w-[255px] lg:w-[406px] mx-auto lg:ml-1 lg:mr-28 lg:mt-3 ' alt='cloud'/>
                        </div>
                        <div className='mt-14 w-[330px] mx-auto lg:w-1/2 lg:ml-20 lg:mt-1 '>
                            <div className='text-[14px] text-center font-[600] mt-6 lg:text-[20px] lg:text-left lg:mt-0'>Scale Infinitely</div>
                            <div className='text-center font-[400] text-[14px] mt-5 mx-[2px] lg:text-left lg:text-[16px] lg:w-[500px]'>Every deployment is a zero-downtime deployment without you needing to choose custom configurations. You can easily configure auto-scaling, resource limits, and health-check URL to further optimize application uptime.</div>
                        </div>
                    </div>
                </div>
                <div className='point3'>
                <div className='font-[600] text-[20px] text-center lg:text-[36px] mt-20'>03</div>
                    <div className="line flex justify-center "><div className='h-3 w-3 bg-blue-700 rounded-full'></div><div className='h-[2px] w-2 bg-blue-700 mt-[5px] md:w-16'></div><div className='h-3 w-3 bg-blue-700 rounded-full'></div></div>
                    <div className='secondHeading mt-8 lg:mt-20'>Visibility into costs and metrics</div>
                    <div className='content mt-6'>Automatically track resource costs, across clouds, on every change. Visualize k8s pod metrics - CPU, Network, and Memory.</div>
                    <div className='lg:flex lg:justify-center mt-16 '>
                        <div className='lg:w-1/2 justify-center '>
                        <Image src={cost} className='w-[86.79px] lg:w-[130px] mx-auto lg:mt-3 ' alt='cloud'/>
                        </div>
                        <div className='w-[330px] mx-auto mt-14 lg:w-1/2 lg:ml-20 lg:mt-1'>
                            <div className='text-[14px] text-center font-[600] mt-6 lg:text-[20px] lg:text-left lg:mt-0'>Customizable cost dashboards and reports</div>
                            <div className='text-center font-[400] text-[14px] mt-5 mx-[1.2px] lg:text-left lg:text-[16px]'>Stay on top of your cloud spending with custom cost dashboards and reports — sort, filter, and group by your various accounts, resources, and cloud regions.</div>
                        </div>
                    </div>
                    <div className='lg:flex lg:flex-row-reverse lg:justify-center mt-16'>
                        <div className='lg:w-1/2'>
                        <Image src={preview} className='w-[180px] lg:w-[259px] mx-auto lg:ml-12 lg:mr-10 lg:mt-3 ' alt='cloud'/>
                        </div>
                        <div className='w-[330px] mx-auto mt-14 lg:w-1/2 lg:ml-20 lg:mt-1 '>
                            <div className='text-[14px] text-center font-[600] mt-6 lg:text-[20px] lg:text-left lg:mt-0'>Preview infra costs</div>
                            <div className='text-center font-[400] text-[14px] mt-5 mx-[1.2px] lg:text-left lg:text-[16px] lg:w-[500px]'>See the cost of a specific resource while choosing it (before provisioning). It saves you the hassle of searching through the complex pricing pages of your cloud provider or tools.</div>
                        </div>
                    </div>
                    <div className='lg:flex lg:justify-center mt-16'>
                        <div className='flex justify-center lg:w-1/2 lg:ml-20'>
                        <Image src={graph} className='w-[132px] lg:w-[200px] lg:mr-2 lg:mt-3 ' alt='cloud'/>
                        <Image src={observability} className='w-[135px] ml-2 lg:w-[203px] lg:ml-2 lg:mr-20 lg:mt-3 ' alt='cloud'/>
                        </div>
                        <div className='mt-14 w-[330px] mx-auto lg:w-1/2 lg:ml-0 lg:mt-1 '>
                            <div className='text-[14px] text-center font-[600] mt-6 lg:text-[20px] lg:text-left lg:mt-0'>Observability from day one</div>
                            <div className='text-center font-[400] text-[14px] mt-5 lg:text-left lg:text-[16px] lg:w-[551px]'>Comes with built-in Kubernetes pod metrics. Easily plug in monitoring and observability tools of your choice, such as Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your application metrics from day 1.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='SuccessStories mt-20'>
            <div className='heading text-[#242331] lg:text-[#332C5C] '>See our Success Stories</div>
            <div className='mt-10 mb-5 lg:rounded-xl '>
                {stories.map((story, index)=>{
                    setTimeout(()=>{
                        setStoryNo((storyNo+1)%(stories.length));
                    },8000)
                    if(index===storyNo){
                    return(
                        <>
                        <div className='flex'>
                        <div className='font-[600] bg-blue-700 rounded-full text-white text-[16px] px-2 h-7 text-center mt-7 ml-2' onClick={(()=>goToPrevious())}>{"<"}</div>
                        <div className='text-center mx-5 lg:flex lg:flex-row-reverse lg:shadow-[5px_5px_10px_1px_rgba(0,0,0,0.4)] lg:rounded-xl lg:w-[800px] lg:mx-auto'>
                            <Image src={profile} className='w-1/3 mx-auto rounded-full border-[10px] border-blue-700 lg:w-24 lg:h-24 lg:my-auto lg:mr-3' alt='profile photo'/>
                            <div>
                                <div className='font-[400] text-[14px] lg:text-left lg:ml-5 lg:mr-12 flex'><BiSolidQuoteAltLeft className='text-blue-700 absolute text-[20px] lg:hidden'/><div>&nbsp;&nbsp;</div>{story.tell}</div>
                                <div className='font-[600] text-[16px] lg:text-right lg:ml-5 lg:mr-12'>-{story.name}</div>
                                <div className='font-[400] text-[14px] lg:text-right lg:ml-5 lg:mr-12'>{story.work}</div>
                            </div>
                            <div className='hidden lg:inline'><BiSolidQuoteAltLeft className='text-white bg-blue-700 h-full text-[20px] w-20'/></div>
                        </div>
                        <div className='font-[600] bg-blue-700 rounded-full text-white text-[16px] px-2 h-7 text-center mt-7 mr-2' onClick={(()=>{setStoryNo((storyNo+1)%(stories.length))})}>{">"}</div>
                        </div>
                        </>
                    )}
                })}
            </div>
            
        </div>

        <div className='relative h-[196.45px] lg:h-[380px] mt-28 mb-24'>
                <div className='absolute h-[196.45px] w-[340px] ml-2 lg:w-[1450px] lg:h-[380px] lg:ml-64'><Image src={subscribeBackground} alt='background '/></div>
                <div className='absolute w-[244px] text-center mt-6 ml-14 lg:ml-[282px] lg:w-[650px] lg:mt-10'>
                    <div className='relative'>
                        <div className='text-[22.5px] text-white ml-24 lg:text-[70px] lg:ml-[260px] absolute'><FaPaperPlane /></div>
                        <div className='text-[22.5px] text-blue-700 ml-24 lg:text-[70px] lg:ml-[260px] absolute'><FaRegPaperPlane /></div>
                    </div>
                    <div className='font-[600] text-[14px] mt-6 lg:text-[34px] lg:mt-24'>Subscribe to our Newsletter & Get The Coupon Code.</div>
                    <div className='font-[400] text-[10px] mt-3 lg:text-[16px]'>All your information is completely confidential</div>
                    <div className='mt-5 lg:mt-8'>
                        <form action="">
                            <input type="email" className='w-[120px] h-[31px] rounded-lg text-[8px] lg:text-[34px] lg:w-[400px] lg:h-[50px]' value={email} onChange={((e)=>{setEmail(e.target.value)})} placeholder='      Type your email'/>
                            <button className='text-white bg-blue-700 px-4 py-1 ml-3 rounded-lg lg:text-[28px]' onClick={(()=>setEmail(""))}>Subscribe</button>
                        </form>
                    </div>
                </div>
        </div>

    </div>
  )
}

export default HomePage