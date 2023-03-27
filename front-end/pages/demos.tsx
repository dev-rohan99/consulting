import React, { useState } from 'react';
import Corporate from '../components/Corporate';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Agency from '../components/Tab/Agency';
import All from '../components/Tab/All';
import Business from '../components/Tab/Business';
import Consultant from '../components/Tab/Consultant';
import Finance from '../components/Tab/Finance';
import HumanResource from '../components/Tab/HumanResource';

const demos = () => {

    const [PageTab, setPageTab] = useState<number>(0);

  return (
    <>
    
        <section className="bg-gradient-to-tl from-slate-700 to-slate-500 relative h-[520px] w-100">

            <img className='h-full w-full object-cover absolute mix-blend-overlay' src="https://stylemixthemes.com/consulting/_nuxt/img/76b88c8.webp" alt="" />

            <div className='z-50 relative'>

            <Header/>

            <div className="w-[400px] mx-auto lg:w-[100%]">

                <h1 className="text-[24px] lg:text-[45px] font-[700] mt-20 text-center text-white after:absolute after:bg-[#FDE428] lg:after:left-[48%] after:left-[45%] after:bottom-0 after:w-[50px] after:rounded-full pb-5 after:h-[7px] relative after:content-['']">CONSULTING DEMOS</h1>

                <p className="text-[#fff] text-center text-[20px] font-medium mt-9 mb-9">Knowledge Base by StylemixThemes</p>

            </div>

            </div>

        </section>

        <section className='pt-[70px] pb-[70px] bg-[#002E5B]'>

            <h1 className="text-center font-bold text-[40px] text-[#ffffff] after:content-[''] after:bg-[#fde428] after:h-[7px] after:absolute relative after:w-[50px] after:left-[48%] pb-5 after:rounded-full after:bottom-0 mb-10">CHOOSE A DEMO</h1>


            {/* PageTab menu */}
            <div className="lg:w-[850px] md:w-[670px] w-[400px] border-[2px] border-[#1A436C] mx-auto">
            <ul className="w-full flex justify-between">
                <li className="inline-block"><a onClick={(e) => {e.preventDefault(); setPageTab(0);}} className={PageTab === 0 ? "active block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]" : "block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]"} href="#">ALL</a></li>

                <li className="inline-block"><a onClick={(e) => {e.preventDefault(); setPageTab(1);}} className={PageTab === 1 ? "active block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]" : "block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]"} href="#">BUSINESS</a></li>

                <li className="inline-block"><a onClick={(e) => {e.preventDefault(); setPageTab(2);}} className={PageTab === 2 ? "active block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]" : "block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]"} href="#">CORPORATE</a></li>

                <li className="inline-block"><a onClick={(e) => {e.preventDefault(); setPageTab(3);}} className={PageTab === 3 ? "active block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]" : "block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]"} href="#">FINANCE</a></li>

                <li className="inline-block"><a onClick={(e) => {e.preventDefault(); setPageTab(4);}} className={PageTab === 4 ? "active block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]" : "block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]"} href="#">AGENCY</a></li>

                <li className="inline-block"><a onClick={(e) => {e.preventDefault(); setPageTab(5);}} className={PageTab === 5 ? "active block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]" : "block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]"} href="#">HUMAN RESOURCE</a></li>

                <li className="inline-block"><a onClick={(e) => {e.preventDefault(); setPageTab(6);}} className={PageTab === 6 ? "active block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]" : "block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]"} href="#">CONSULTANT</a></li>
            </ul>
            </div>

            <div className={PageTab === 0 ? "tabBlock activeTwo" : "tabBlock"}>
            <All/>
            </div>

            <div className={PageTab === 1 ? "tabBlock activeTwo" : "tabBlock"}>
            <Business/>
            </div>

            <div className={PageTab === 2 ? "tabBlock activeTwo" : "tabBlock"}>
            <Corporate/>
            </div>

            <div className={PageTab === 3 ? "tabBlock activeTwo" : "tabBlock"}>
            <Finance/>
            </div>

            <div className={PageTab === 4 ? "tabBlock activeTwo" : "tabBlock"}>
            <Agency/>
            </div>

            <div className={PageTab === 5 ? "PageTabBlock activeTwo" : "PageTabBlock"}>
            <HumanResource/>
            </div>

            <div className={PageTab === 6 ? "PageTabBlock activeTwo" : "PageTabBlock"}>
            <Consultant/>
            </div>

        </section>


        <Footer/>

    
    </>
  )
}

export default demos;
