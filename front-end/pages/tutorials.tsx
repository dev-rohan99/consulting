import Image from 'next/image';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DesktopChannel from '../images/channelDesktop.png';
import ChannelVideo from "../images/channelVideo.png";
import ChannelVideo2 from "../images/channelVideo2.png";


const tutorials = () => {


  return (
    <>
    
        <section className="bg-gradient-to-tl from-slate-700 to-slate-500 relative h-[699px] w-100">

            <img className='h-full w-full object-cover absolute mix-blend-overlay' src="https://stylemixthemes.com/consulting/_nuxt/img/76b88c8.webp" alt="" />
            
            <div className='z-50 relative'>

            <Header/>

            <div className="w-[400px] mx-auto lg:w-[100%]">

                <h1 className="text-[24px] lg:text-[45px] font-[700] mt-20 text-center text-white after:absolute after:bg-[#FDE428] lg:after:left-[48%] after:left-[45%] after:bottom-0 after:w-[50px] after:rounded-full pb-5 after:h-[7px] relative after:content-['']">CONSULTING TUTORIALS</h1>

                <p className="text-[#fff] text-center text-[20px] font-medium mt-9 mb-9">Knowledge Base by StylemixThemes</p>

                <div className="w-[400px] lg:w-[880px] xl:w-[1110px] md:[718px] flex mx-auto">
                    
                    <div className="youtubeChannelVideoImage flex items-end mr-[-40px] z-10">
                        <div style={{boxShadow:'0px 0px 15px 1px gray'}} className="shadow-lg flex items-end">
                            <Image src={ChannelVideo} alt="" />
                        </div>
                    </div>
                    
                    <div className="youtubeChannelImageItem flex items-end">
                        <Image src={ DesktopChannel } alt="" />
                    </div>
                    
                    <div className="youtubeChannelVideoImage flex items-center ml-[-40px] z-10">
                        <div style={{boxShadow:'0px 0px 15px 1px gray'}} className="shadow-lg flex items-center">
                            <Image className='shadow-lg' src={ChannelVideo2} alt="" />
                        </div>
                    </div>

                </div>

            </div>

            </div>

        </section>
    
        <Footer/>

    </>
  )
}

export default tutorials;
