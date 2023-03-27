import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import React from 'react';


const Footer = () => {

  return (
    <>
    
    
    <section className="pt-[150px] pb-[150px] bg-[url(https://stylemixthemes.com/consulting/_nuxt/img/4fdf276.webp)] bg-cover relative bg-center bg-no-repeat">

        <div className="after:absolute after:w-full after:h-full after:content-[''] after:top-0 after:left-0 after:bg-[rgba(0,46,91,.8)] z-0"></div>
        
        <div className="lg:w-[1120px] w-[400px] mx-auto flex items-start justify-left">
            <div className="w-[100%] z-10">
                <h1 className="lg:text-[40px] text-[24px] text-center font-bold text-[#fff]"><span className="text-[#FDE428]">PERFECT</span> BUSINESS WORDPRESS THEME</h1>

                <p className="lg:text-[20px] text-[18px] mt-3 text-center font-semibold text-[#fff]">Infinite possibilities. Endless opportunities.</p>

                <a href="" className="lg:w-[180px] w-[150px] rounded-[5px] mx-auto mt-10 bg-[#FDE428] hover:bg-[#002E5B] group lg:text-[15px] text-[14px] lg:h-[45px] h-[35px] flex items-center justify-center font-bold text-[#002E5B] hover:text-[#fff]">
                    Get consulting
                    <ShoppingCartIcon className='h-4 ml-3 group-hover:text-[#FDE428]'/>
                </a>
            </div>
        </div>

    </section>

    <section className="pt-5 pb-5 bg-[#fff]">
        <p className="text-[14px] text-center text-[#595959]">
            Copyright © 2012-2022 Consulting WordPress Theme <br />
            by <a href="#" className="text-[#64809D] hover:text-[#27517F]">StylemixThemes.</a>
        </p>
    </section>
    
    
    </>
  )
}

export default Footer;
