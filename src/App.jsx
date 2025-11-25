import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import 'remixicon/fonts/remixicon.css'


const App = () => {

  const [showcontent,setShowcontent]=useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "center center",
    })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "expo.inOut",
        transformOrigin: "center center",
        opacity: 0,
        onUpdate:function(){
          if(this.progress()>= .9){
            document.querySelector(".svg").remove();
            setShowcontent(true);
            this.kill();
          }
        }
      })
  })

  useGSAP(()=>{
    const main=document.querySelector(".main");

    main?.addEventListener("mousemove",function(e){
      // console.log(e.clientX,e.clientY);

      const xMove=(e.clientX /window.innerWidth -.5)*40 ;
      gsap.to(".imagesdiv .text",{
        x:`${xMove*.4}%`
      })
      gsap.to(".sky ",{
        x: xMove
      })
      gsap.to(".bg ",{
        x: xMove*1.7
      })
    })
  },[showcontent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href=".\bg (1).png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showcontent && 
      <div className='main w-full'>
        <div className='landing w-full h-screen bg-black'>
          <div className="navbar w-full py-3 px-8 absolute top-0 left-0 z-[10] ">
             <div className="logo flex gap-4  items-center">
              <div className="lines flex gap-[3px] flex-col ">
                <div className="line w-8 h-1 bg-white"></div>
                <div className="line w-6 h-1 bg-white"></div>
                <div className="line w-4 h-1 bg-white"></div>
              </div>
              <h3 className='text-2xl text-white font-bold mt-[-6px] leading-none'>Rockstar</h3>
             </div>
          </div>
          
          <div className="imagesdiv w-full h-screen relative overflow-hidden">
            <img src=".\sky.png" alt="sky-bg" className='absolute sky top-0 left-0 w-full h-full object-cover scale-[1.2]' />
            <img src=".\bg (1).png" alt="background" className='absolute bg top-0 left-0 w-full h-full object-cover scale-[1.1]'/>

            <div className="text absolute top-0 left-1/2 -translate-x-1/2 flex flex-col gap-2 mt-7">
            <h1 className='text-white text-8xl -ml-18 leading-none'>grand</h1>
            <h1 className='text-white text-8xl ml-18 leading-none'>theft</h1>
            <h1 className='text-white text-8xl -ml-18 leading-none'>auto</h1>
          </div>
            <img src="/girlbg.png" alt="background" className=' character h-[420px]
            absolute -bottom-[25%] left-1/2 -translate-x-1/2 scale-[1.4]'/>
            
          </div>
          <div className="btmbar text-white absolute bottom-0 left-0 w-full py-8 px-8 bg-gradient-to-t from-black to-transparent">
            <div className="flex gap-1 items-center">
              <i className='ri-arrow-down-line text-[15px]'></i>
              <h3 className="font-sans text-[12px]">Scroll Down</h3>
            </div>
            <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40px]' src="./ps5.png" alt="" />
          </div>
        </div>
        <div className='w-full py-20 bg-black flex items-center justify-center'>
          <div className="cntr w-full p-10 flex text-white">
            <div className="lg relative w-1/2 flex items-center justify-center">
            <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.3]"
            src="./imag.png" alt="" />
          </div>
            <div className="rg w-[40%]">
              <h1 className='text-6xl'>Still Running</h1>
              <h1 className='text-6xl'>Not Hunting</h1>
              <p className='mt-10 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium in cumque necessitatibus. Officiis neque pariatur fugiat, voluptas eius modi!</p>
              <p className='mt-3 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro veritatis sapiente voluptatem nesciunt!</p>
              <button className='bg-yellow-500 py-10 px-5 text-2xl text-black mt-10'>Download Now</button>
            </div>

          </div>
          
        </div>
      </div>
      }
    </>
  )
}

export default App