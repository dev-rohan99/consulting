import React, { useState } from 'react';
import Header from '../components/Header';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

// import required modules
import { EffectCards, FreeMode, Pagination } from "swiper";
import { CalendarDaysIcon, ChatBubbleLeftEllipsisIcon, ChatBubbleOvalLeftEllipsisIcon, ChevronRightIcon, CodeBracketIcon, DevicePhoneMobileIcon, MapPinIcon, PlayIcon, Square3Stack3DIcon } from '@heroicons/react/24/solid';
import ReviewItem from '../components/ReviewItem';
import AboutCard from '../components/AboutCard';
import FeaturedCard from '../components/FeaturedCard';
import Footer from '../components/Footer';
import All from '../components/Tab/All';
import Business from '../components/Tab/Business';
import Corporate from '../components/Corporate';
import Finance from '../components/Tab/Finance';
import Agency from '../components/Tab/Agency';
import HumanResource from '../components/Tab/HumanResource';
import Consultant from '../components/Tab/Consultant';


const HomePage = () => {

  const [tab, setTab] = useState<number>(0);

  return (
    <>
    
      <section className="bg-gradient-to-tl from-slate-700 to-slate-500 relative h-[750px] w-100">

        <img className='h-full w-full object-cover absolute mix-blend-overlay' src="https://stylemixthemes.com/consulting/_nuxt/img/76b88c8.webp" alt="" />
          
        <div className='z-50 relative'>

          <Header/>

          <div className="w-[400px] mx-auto lg:w-[100%]">

            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU0AAABQCAMAAACqEdcHAAADJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUQzRjRGNUI2RDA1MTFFNzgxMTRFNkFDRUY2NDEyMzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUQzRjRGNUM2RDA1MTFFNzgxMTRFNkFDRUY2NDEyMzIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRDNGNEY1OTZEMDUxMUU3ODExNEU2QUNFRjY0MTIzMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRDNGNEY1QTZEMDUxMUU3ODExNEU2QUNFRjY0MTIzMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuzBK+UAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAh1BMVEVHcEz//////e7///3////////+62H//////////////////////////On////////////////////////////////23yn//OT////g0C7///////+Ij0D95Cj////95Cj////95Cj95Cj////95CgBLlshRVRre0VEX03BuTSFjkCgoTuVmT2OeQNOAAAAI3RSTlMAeQYsxCAQ31aX8tI8FrKGaEz7pOlF9TS7+l+N7LRyT5J8ke2WY4MAAAiZSURBVHja7ZwJk6MoG8cVtVW8ImqbjrXZnjVJHzPf//O9gEYOwYNOde/Wy7NblUlUhJ9/eA6ccRxrgj09X4ztL4tPsl/mMC+Bxfc4af6y+CT7xxzmM7D4RAu+MM//tvgk+8u6oMeZ94V5/mQnul6aL9gopfGTfn+hpnRUvyxMyf7m6Py+Xq+/8ecf/Em+v1+vt8vtSu32OZempbe0aj5jam8DRUJ1+DrSvF7frQvaI81RjJeX60CVSPWD0LzdKNI/1gWtmLge/qH8PqkUn0e2N0r2ZS7OJ0tvUZp0bn/SiU6m+o18GWmSH99tFrRoQHbVRI5Ehhjh+wcV6kjzY1xSJ+42C1ovd5Cp/oZh4iXz9kYnOvVCw7r5YV3QvnLH8+C+Py/3zwvz6Z/WBe2txA1r5sv4+TFp8/3tQ8yCLD1Zmor05vcYWX7QiP1ymbyQLcQZVOJexsDy+XZ3OyqaNgvaWIl7pxP9cnm7ux0FzWfrgjZW4j7e3j7HzwHi55u4ZFoXtCFw31WIs/S2SdPuBX23NG0W9EBpWhc0S9DNpfnPf3XMWTBZtkAm2HTacrnj/2AvyO8nixfiRnZWn2/Og4ztP7tq7qd5tIvYT2jT0nQcl/0QWpqWpqVpaVozpYmsT38cTdAys2/6fpXmv8qC5uC651OqScqC8lx0hRt563lg6XbFucyUbZwL91AGP0TTOxVFcWgVWQxoySFlpw0sfQ2n/iXFrM00ZodhFfHdaUNm5Lo2H5cvlKfiULqhDXIYHt37U4nZ5d10LtdmKdNs8I8153DG8yJ8GrvqgK8q2NeKADsk4xW1PEDv9d4gOpL7edz9968ZJddd2mYs3K5MxMN9eGA8Uwpo+C9wQMyfF7PTglxqAyVDI/l0fV9NZ7Mm+0imWfaolw3/gvmF4x/x/y6+6pU14mNC/CBgyc+lWGjQDxwPsUu9nSyzata7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" className='w-[150px] lg:w-[350px] m-auto mt-16' alt="" />

            <h1 className="text-[24px] lg:text-[50px] font-[700] mt-12 text-center text-white">THE BEST BUSINESS THEME</h1>
            <h3 className='text-[20px] lg:text-[30px] text-white font-[700] text-center'>AS PER ENVATO <span className='text-[#FDE428]'>MOST WANTED CONTEST</span></h3>

            <div className="w-[110px] h-[110px] rounded-full border-[2px] border-[#FDE428] mx-auto mt-10 transition duration-200 transform animate-pulse ease-in">
              <a className='w-full h-full flex items-center justify-center' href="#">
                <img className='w-[60px] h-[75px] ml-2' src="https://iconsplace.com/wp-content/uploads/_icons/ffe500/256/png/play-icon-19-256.png" alt="" />
              </a>
            </div>

          </div>

        </div>

      </section>

      <section className="mt-[-130px] bg-[#E9EBEE]">
        <div className="w-[400px] lg:w-[667px] mx-auto lg:h-[460px] h-[350px]">

          <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          >
            <SwiperSlide className="bg-transparent">
              <div className='relative lg:w-[670px] lg:h-[400px] w-[400px] h-[250px]'>
                <img src="https://stylemixthemes.com/consulting/_nuxt/img/8727838-986.webp" className='w-full h-full object-cover absolute' alt="" />

                <div className='hover:bg-[#ffffff73] transition duration-200 transform ease-in opacity-0 hover:opacity-100 hover:animate-pulse w-full h-full flex items-center justify-center absolute z-10'>
                  <a className='pt-4 pb-4 pl-7 pr-7 text-white bg-slate-500 rounded-full' href="#">Contact Us</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='relative lg:w-[670px] lg:h-[400px] w-[400px] h-[250px]'>
                <img src="https://stylemixthemes.com/consulting/_nuxt/img/6d8d1d2-986.webp" className='w-full h-full object-cover absolute' alt="" />

                <div className='hover:bg-[#ffffff73] transition duration-200 transform ease-in opacity-0 hover:opacity-100 hover:animate-pulse w-full h-full flex items-center justify-center absolute z-10'>
                  <a className='pt-4 pb-4 pl-7 pr-7 text-white bg-slate-500 rounded-full' href="#">Portfolio</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='relative lg:w-[670px] lg:h-[400px] w-[400px] h-[250px]'>
                <img src="https://stylemixthemes.com/consulting/_nuxt/img/88b953d-832.webp" className='w-full h-full object-cover absolute' alt="" />

                <div className='opacity-0 hover:opacity-100 hover:bg-[#ffffff73] transition duration-200 transform ease-in hover:animate-pulse w-full h-full flex items-center justify-center absolute z-10'>
                  <a className='pt-4 pb-4 pl-7 pr-7 text-white bg-slate-500 rounded-full' href="#">RTL version</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='relative lg:w-[670px] lg:h-[400px] w-[400px] h-[250px]'>
                <img src="https://stylemixthemes.com/consulting/_nuxt/img/94a6ff7-986.webp" className='w-full h-full object-cover absolute' alt="" />

                <div className='opacity-0 hover:opacity-100 hover:bg-[#ffffff73] transition duration-200 transform ease-in hover:animate-pulse w-full h-full flex items-center justify-center absolute z-10'>
                  <a className='pt-4 pb-4 pl-7 pr-7 text-white bg-slate-500 rounded-full' href="#">Business and Finance Demo</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='relative lg:w-[670px] lg:h-[400px] w-[400px] h-[250px]'>
                <img src="https://stylemixthemes.com/consulting/_nuxt/img/4ec1732-986.webp" className='w-full h-full object-cover absolute' alt="" />

                <div className='opacity-0 hover:opacity-100 hover:bg-[#ffffff73] transition duration-200 transform ease-in hover:animate-pulse w-full h-full flex items-center justify-center absolute z-10'>
                  <a className='pt-4 pb-4 pl-7 pr-7 text-white bg-slate-500 rounded-full' href="#">Home page</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='relative lg:w-[670px] lg:h-[400px] w-[400px] h-[250px]'>
                <img src="https://stylemixthemes.com/consulting/_nuxt/img/5cd8f24-986.webp" className='w-full h-full object-cover absolute' alt="" />

                <div className='opacity-0 hover:opacity-100 hover:bg-[#ffffff73] transition duration-200 transform ease-in hover:animate-pulse w-full h-full flex items-center justify-center absolute z-10'>
                  <a className='pt-4 pb-4 pl-7 pr-7 text-white bg-slate-500 rounded-full' href="#">Single Work</a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='relative lg:w-[670px] lg:h-[400px] w-[400px] h-[250px]'>
                <img src="https://stylemixthemes.com/consulting/_nuxt/img/0e8951e-986.webp" className='w-full h-full object-cover absolute' alt="" />

                <div className='opacity-0 hover:opacity-100 hover:bg-[#ffffff73] transition duration-200 transform ease-in hover:animate-pulse w-full h-full flex items-center justify-center absolute z-10'>
                  <a className='pt-4 pb-4 pl-7 pr-7 text-white bg-slate-500 rounded-full' href="#">Shop</a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>



        </div>

        <h1 className='text-center font-bold text-[40px] text-[#002E5B] pb-0'>TRUSTED BY 20,000+</h1>
        <h1 className="text-center font-bold text-[25px] text-[#002E5B] after:content-[''] after:bg-[#fde428] after:h-[7px] after:absolute relative after:w-[50px] after:left-[48%] pb-5 after:rounded-full after:bottom-0">CONSULTANTS IN THE WORLD</h1>

        <div className="pt-10 pb-16 lg:w-[1120px] mx-auto flex items-center justify-between">

          <div className="w-[250px] h-auto text-center">
            <img className='mx-auto object-contain w-[200px] h-[200px]' src="https://images.vexels.com/media/users/3/145799/isolated/lists/2c7aaf362485babc23e951c7ac01975d-premium-quality-badge.png" alt="" />
            <h1 className="text-center mt-3 font-bold text-[22px] text-[#002E5B] pb-0">#1 Selling Consulting Theme of All Time</h1>
          </div>

          <div className="w-[250px] h-auto text-center">
            <img className='mx-auto w-[200px] h-[200px] object-contain' src="https://www.cppng.com/file/thumb/2020-06/5-2-best-seller-transparent-thumb.png" alt="" />
            <h1 className="text-center mt-3 font-bold text-[22px] text-[#002E5B] pb-0">#1 Best Rated Consulting Theme</h1>
          </div>

          <div className="w-[250px] h-auto text-center">
            <img className='mx-auto object-contain w-[200px] h-[200px]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_of_Be%C5%9Fikta%C5%9F_JK.svg/800px-Logo_of_Be%C5%9Fikta%C5%9F_JK.svg.png" alt="" />
            <h1 className="text-center mt-3 font-bold text-[22px] text-[#002E5B] pb-0">Developed by Power Elite Author</h1>
          </div>

          <div className="w-[250px] h-auto text-center">
            <img className='mx-auto w-[200px] h-[200px] object-contain' src="https://performance-insulation.ca/wp-content/uploads/2019/06/45-512.png" alt="" />
            <h1 className="text-center mt-3 font-bold text-[22px] text-[#002E5B] pb-0">Envato Most Wanted Contest Winner</h1>
          </div>

        </div>
      </section>

      <section className='pt-[70px] pb-[70px] bg-[#002E5B]'>
        <h1 className="text-center font-bold text-[40px] text-[#ffffff] after:content-[''] after:bg-[#fde428] after:h-[7px] after:absolute relative after:w-[50px] after:left-[48%] pb-5 after:rounded-full after:bottom-0 mb-10">CHOOSE A DEMO</h1>


        {/* tab menu */}
        <div className="lg:w-[850px] md:w-[670px] w-[400px] border-[2px] border-[#1A436C] mx-auto">
          <ul className="w-full flex justify-between">
            <li className="inline-block"><a onClick={(e) => {e.preventDefault(); setTab(0);}} className={tab === 0 ? "active block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]" : "block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]"} href="#">ALL</a></li>

            <li className="inline-block"><a onClick={(e) => {e.preventDefault(); setTab(1);}} className={tab === 1 ? "active block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]" : "block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]"} href="#">BUSINESS</a></li>

            <li className="inline-block"><a onClick={(e) => {e.preventDefault(); setTab(2);}} className={tab === 2 ? "active block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]" : "block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]"} href="#">CORPORATE</a></li>

            <li className="inline-block"><a onClick={(e) => {e.preventDefault(); setTab(3);}} className={tab === 3 ? "active block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]" : "block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]"} href="#">FINANCE</a></li>

            <li className="inline-block"><a onClick={(e) => {e.preventDefault(); setTab(4);}} className={tab === 4 ? "active block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]" : "block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]"} href="#">AGENCY</a></li>

            <li className="inline-block"><a onClick={(e) => {e.preventDefault(); setTab(5);}} className={tab === 5 ? "active block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]" : "block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]"} href="#">HUMAN RESOURCE</a></li>

            <li className="inline-block"><a onClick={(e) => {e.preventDefault(); setTab(6);}} className={tab === 6 ? "active block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]" : "block pt-3 pb-3 font-bold pl-6 pr-6 hover:bg-[#FFE504] text-[14px] text-[#fff] hover:text-[#002E5B]"} href="#">CONSULTANT</a></li>
          </ul>
        </div>

        <div className={tab === 0 ? "tabBlock activeTwo" : "tabBlock"}>
          <All/>
        </div>

        <div className={tab === 1 ? "tabBlock activeTwo" : "tabBlock"}>
          <Business/>
        </div>

        <div className={tab === 2 ? "tabBlock activeTwo" : "tabBlock"}>
          <Corporate/>
        </div>

        <div className={tab === 3 ? "tabBlock activeTwo" : "tabBlock"}>
          <Finance/>
        </div>

        <div className={tab === 4 ? "tabBlock activeTwo" : "tabBlock"}>
          <Agency/>
        </div>

        <div className={tab === 5 ? "tabBlock activeTwo" : "tabBlock"}>
          <HumanResource/>
        </div>

        <div className={tab === 6 ? "tabBlock activeTwo" : "tabBlock"}>
          <Consultant/>
        </div>

      </section>

      <section className="pt-[60px] pb-[60px] bg-[#F0F2F5]">

          <div className="flex flex-col lg:flex-row w-[400px] md:w-[718px] lg:w-[880px] xl:w-[1300px] lg:justify-between mx-auto gap-5">

            <div className="lg:w-[430px] w-[100%]">
              <video autoPlay loop muted className='shadow-xl shadow-[#C2C3C6]' src="https://stylemixthemes.com/consulting/_nuxt/videos/vc_builder.d1827df.webm"></video>

              <img className='w-[261px] mx-auto mt-14' src="https://stylemixthemes.com/consulting/_nuxt/img/d190ab2.webp" alt="" />
            </div>

            <div className="lg:w-[350px] w-[100%] text-center">
              <img className='mx-auto w-[160px]' src="https://stylemixthemes.com/consulting/_nuxt/img/d8c733c.png" alt="" />
              <h1 className='text-[#002E5B] font-bold text-[37px]'>Build & Edit with Elementor or WPBakery Page Builder</h1>
            </div>

            <div className="lg:w-[430px] w-[100%]">
              <video className='shadow-xl shadow-[#C2C3C6]' autoPlay loop muted  src="https://stylemixthemes.com/consulting/_nuxt/videos/elementor.5410b3f.webm"></video>

              <img className='w-[261px] mx-auto mt-14' src="https://stylemixthemes.com/consulting/_nuxt/img/83cc2e5.webp" alt="" />
            </div>

          </div>

      </section>

      <section className="pt-[70px] pb-[70px] bg-[url(https://stylemixthemes.com/consulting/_nuxt/img/22c0587.webp)] bg-cover bg-no-repeat text-center">

        <div className="w-[400px] md:w-[718px] lg:w-[880px] xl:w-[1300px] mx-auto">
          <h1 className="text-center font-bold xl:text-[40px] lg:text-[36px] text-[26px] relative after:content-[''] after:bg-[#FDE428] after:w-[50px] after:h-[7px] after:absolute after:left-[48%] after:bottom-0 pb-5 after:rounded-full text-[#ffffff]"><span className='text-[#FDE428]'>100+</span> INNER PAGES TEMPLATES</h1>

          <p className="text-center mb-10 text-[#ffffff] font-[400] lg:text-[20px] text-[16px] lg:w-[875px] mx-auto mt-5">Enjoy 100+ premade templates. Save time on design by applying ready-to-use pages: multiple designs of About us page, various types of Portfolios, different templates to present Events, Services and News. A pre-built template for every case.</p>

          <a className="pt-4 pb-4 pl-7 pr-7 rounded-[5px] bg-[#FDE428] font-bold hover:bg-[#002E5B] text-[#002E5B] hover:text-[#ffffff]" href="#">VIEW ALL FEATURES</a>
        </div>

      </section>

      <section className="pt-[70px] pb-[70px] bg-[#FFFFFF]">

        <div className="xl:w-[1120px] w-[400px] md:w-[718px] lg:w-[880px] mx-auto flex lg:justify-between lg:flex-row flex-col">

            <div className="text-left xl:w-[570px] lg:w-[300px] mb-5 sm:mb-0 w-[100%]">
              <h1 className="lg:text-[40px] text-[26px] md:text-[36px] font-bold text-[#002E5B] after:absolute after:bg-[#FDE428] after:left-0 after:bottom-0 after:w-[50px] after:rounded-full pb-5 after:h-[7px] relative after:content-[''] w-[450px]">LARGE TEMPLATE LIBRARY</h1>

              <p className='lg:text-[20px] text-[16px] mt-5 font-md text-[#595959]'>Browse through the archive of quality templates for your website. Any page from any theme layout is ready for you. Explore the library of good-looking templates that you can import and use on your website. Easily install premade designs and make your site more attractive with stylish pages using the powerful WPbakery Page Builder and Elementor.</p>
            </div>

            <div className="xl:w-[570px] lg:mt-0 mt-5 lg:w-[300px] w-[100%]">
              <img className="w-full h-auto" src="https://stylemixthemes.com/consulting/_nuxt/img/932e232.webp" alt="" />
            </div>

        </div>

      </section>

      <section className="pt-[70px] pb-[70px] bg-[#F0F2F5]">

          <div className="lg:w-[880px] md:w-[768px] xl:w-[1120px] w-[400px] mx-auto flex lg:justify-between flex-col md:flex-row">

            <div className="xl:w-[500px] mb-10 md:mb-0 xl:h-[331px] lg:w-[350px] lg:h-[200px] md:w-[300px] md:h-[170px] w-[100%] h-[250px] rounded-[10px] overflow-hidden shadow-xl">
              <Swiper pagination={{clickable: true,}} modules={[Pagination]} className="mySwiper">
                
                <SwiperSlide>
                  <img className="w-full h-auto" src="https://stylemixthemes.com/consulting/_nuxt/img/b508067.webp" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img className="w-full h-auto" src="https://stylemixthemes.com/consulting/_nuxt/img/2065fe4.webp" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img className="w-full h-auto" src="https://stylemixthemes.com/consulting/_nuxt/img/0101bb1.webp" alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img className="w-full h-auto" src="https://stylemixthemes.com/consulting/_nuxt/img/20d7bf9.webp" alt="" />
                </SwiperSlide>

              </Swiper>
            </div>

            <div className="xl:w-[525px] lg:w-[350px] md:w-[300px] w-[100%]">
              <h1 className="xl:text-[40px] lg:text-[36px] text-[26px] font-bold text-[#002E5B] after:absolute after:bg-[#FDE428] after:left-0 after:bottom-0 after:w-[50px] after:rounded-full pb-5 after:h-[7px] relative after:content-[''] xl:w-[450px] w-[100%]">THEME OPTIONS</h1>

              <p className="text-[16px] mt-5 text-[#595959] leading-[26px]">Customize your website’s behavior and styles. Extended pack of powerful theme options make it possible for you to change the smallest details of the site pages.</p>

              <div className="flex items-center mt-5 mb-5 justify-between">
                <div className="w-[50%]">
                  <ul className="list-outside list-disc pl-5">
                    <li className="font-bold mb-2 text-[#002E5B] text-[16px] lg:text-[18px]">Header setup</li>
                    <li className="font-bold mb-2 text-[#002E5B] text-[16px] lg:text-[18px]">Typography</li>
                    <li className="font-bold text-[#002E5B] text-[16px] lg:text-[18px]">Page settings</li>
                  </ul>
                </div>
                
                <div className="w-[50%]">
                  <ul className="list-outside list-disc pl-5">
                    <li className="font-bold mb-2 text-[#002E5B] text-[16px] lg:text-[18px]">Logo settings</li>
                    <li className="font-bold mb-2 text-[#002E5B] text-[16px] lg:text-[18px]">Footer</li>
                    <li className="font-bold text-[#002E5B] text-[16px] lg:text-[18px]">Post types</li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-start">
                <a href="#" className="bg-[#002E5B] mr-4 w-[171px] h-[45px] flex items-center justify-center rounded-[5px] text-[16px] font-bold text-[#ffffff] hover:bg-[#FDE428] hover:text-[#002E5B]">How It Works <ChevronRightIcon className="h-5 ml-3"/></a>
                
                <a href="#" className="bg-[#FDE428] w-[171px] h-[45px] flex items-center justify-center rounded-[5px] text-[16px] font-bold text-[#002E5B] hover:bg-[#002E5B] hover:text-[#ffffff]">Watch Video <PlayIcon className="h-5 ml-3"/></a>
              </div>
            </div>

          </div>

      </section>

      <section className="pt-[70px] pb-[70px] bg-[#ffffff]">

        <h1 className="xl:text-[40px] lg:text-[36px] text-[26px] text-center font-bold text-[#002E5B] after:absolute after:bg-[#FDE428] lg:after:left-[48%] after:left-[45%] after:bottom-0 after:w-[50px] after:rounded-full pb-5 after:h-[7px] relative after:content-['']">UNLIMITED HEADERS WITH HEADER BUILDER</h1>
        <p className="md:text-[20px] text-[18px] font-[400] text-center text-[#595959] mt-8">12+ Ready Headers</p>


        <div className="xl:w-[1120px] lg:w-[880px] md:w-[718px] w-[400px] flex-col lg:flex-row mx-auto flex justify-center gap-12 mt-12">

          <a href="" className="hover:translate-y-[-6px] transition duration-200">
            <div className="w-[244px] mx-auto">
              <img className='w-full h-auto' src="https://stylemixthemes.com/consulting/_nuxt/img/8281868-244.webp" alt="" />
            </div>
          </a>

          <a href="" className="hover:translate-y-[-6px] transition duration-200">
            <div className="w-[244px] mx-auto">
              <img className='w-full h-auto' src="https://stylemixthemes.com/consulting/_nuxt/img/3b06e8b-244.webp" alt="" />
            </div>
          </a>

          <a href="" className="hover:translate-y-[-6px] transition duration-200">
            <div className="w-[244px] mx-auto">
              <img className='w-full h-auto' src="https://stylemixthemes.com/consulting/_nuxt/img/71e38b8-244.webp" alt="" />
            </div>
          </a>

          <a href="" className="hover:translate-y-[-6px] transition duration-200">
            <div className="w-[244px] mx-auto">
              <img className='w-full h-auto' src="https://stylemixthemes.com/consulting/_nuxt/img/0ec27c5-244.webp" alt="" />
            </div>
          </a>

        </div>

        <div className="xl:w-[1120px] lg:w-[880px] md:w-[718px] w-[400px] mx-auto flex justify-center flex-col lg:flex-row gap-12 mt-12">

          <a href="" className="hover:translate-y-[-6px] transition duration-200">
            <div className="w-[244px] mx-auto">
              <img className='w-full h-auto' src="https://stylemixthemes.com/consulting/_nuxt/img/bdbe5ae-244.webp" alt="" />
            </div>
          </a>

          <a href="" className="hover:translate-y-[-6px] transition duration-200">
            <div className="w-[244px] mx-auto">
              <img className='w-full h-auto' src="https://stylemixthemes.com/consulting/_nuxt/img/5dd1d75-244.webp" alt="" />
            </div>
          </a>

          <a href="" className="hover:translate-y-[-6px] transition duration-200">
            <div className="w-[244px] mx-auto">
              <img className='w-full h-auto' src="https://stylemixthemes.com/consulting/_nuxt/img/71e38b8-244.webp" alt="" />
            </div>
          </a>

          <a href="" className="hover:translate-y-[-6px] transition duration-200">
            <div className="w-[244px] mx-auto">
              <img className='w-full h-auto' src="https://stylemixthemes.com/consulting/_nuxt/img/02ef19f-244.webp" alt="" />
            </div>
          </a>

        </div>

        <div className="xl:w-[1120px] lg:w-[880px] md:w-[718px] w-[400px] mx-auto flex justify-center flex-col lg:flex-row gap-12 mt-12">

          <a href="" className="hover:translate-y-[-6px] transition duration-200">
            <div className="w-[244px] mx-auto">
              <img className='w-full h-auto' src="https://stylemixthemes.com/consulting/_nuxt/img/2735d8b-244.webp" alt="" />
            </div>
          </a>

          <a href="" className="hover:translate-y-[-6px] transition duration-200">
            <div className="w-[244px] mx-auto">
              <img className='w-full h-auto' src="https://stylemixthemes.com/consulting/_nuxt/img/cf6f497-244.webp" alt="" />
            </div>
          </a>

          <a href="" className="hover:translate-y-[-6px] transition duration-200">
            <div className="w-[244px] mx-auto">
              <img className='w-full h-auto' src="https://stylemixthemes.com/consulting/_nuxt/img/7e2e9d7-244.webp" alt="" />
            </div>
          </a>

          <a href="" className="hover:translate-y-[-6px] transition duration-200">
            <div className="w-[244px] mx-auto">
              <img className='w-full h-auto' src="https://stylemixthemes.com/consulting/_nuxt/img/6f39547-244.webp" alt="" />
            </div>
          </a>

        </div>


      </section>

      <section className="pt-[0px] pb-[70px] bg-[#ffffff]">

        <div className="xl:w-[1120px] lg:w-[880px] md:w-[718px] w-[400px] flex-col lg:flex-row mx-auto flex items-center lg:justify-between">
          <div className="xl:w-[550px] lg:w-[390px] w-[100%]">
            <h1 className="xl:text-[40px] lg:text-[36px] text-[26px] text-left font-bold text-[#002E5B] after:absolute after:bg-[#FDE428] after:left-0 after:bottom-0 after:w-[50px] after:rounded-full pb-5 after:h-[7px] relative after:content-[''] xl:w-[500px] w-[100%]">ELEMENTOR HEADER & FOOTER BUILDER</h1>

            <p className="xl:text-[18px] text-[16px] leading-[30px] mt-7 font-[400] text-[#595959]">Stunning premade header and footer templates to use with your Consulting website. We designed stylish, modern, and functional header and footer layouts for you to choose from. Save time with prebuilt designs or create your own blocks with Elementor.</p>
          </div>
          
          <div className="xl:w-[570px] lg:w-[390px] mt-5 lg:mt-0 w-[100%]">
            <img className="w-full h-auto" src="https://stylemixthemes.com/consulting/_nuxt/img/94a9698.webp" alt="" />
          </div>
        </div>

      </section>

      <section className="pt-[70px] pb-[70px] bg-[#F0F2F5]">

        <div className="xl:w-[1120px] lg:w-[880px] md:w-[718px] w-[400px] flex-col md:flex-row mx-auto flex items-center lg:justify-between">
          <div className="xl:w-[560px] lg:w-[390px] md:w-[330px] w-[100%]">
            <img src="https://stylemixthemes.com/consulting/_nuxt/img/0691193.webp" alt="" />
          </div>

          <div className="xl:w-[540px] lg:w-[390px] md:w-[330px] w-[100%]">
            <h1 className="xl:text-[40px] lg:text-[36px] md:text-[28px] text-[24px] text-left font-bold text-[#002E5B] after:absolute after:bg-[#FDE428] after:left-0 after:bottom-0 after:w-[50px] after:rounded-full pb-5 after:h-[7px] relative after:content-[''] w-[500px]">ONLINE SHOP WITH WOOCOMMERCE</h1>

            <p className="text-[18px] leading-[30px] mt-7 mb-5 font-[400] text-[#595959]">Create your own online shop. WooCommerce plugin provides a beautiful product display, secure payment solution, and more. Whether you are planning to use your services as a product, such as meetings and webinars, or sell actual things, this online customizable eCommerce platform is your key solution. And it’s fully compatible with the Consulting theme.</p>

            <a href="#" className="bg-[#002E5B] mr-4 w-[171px] h-[45px] flex items-center justify-center rounded-[5px] text-[16px] font-bold text-[#ffffff] hover:bg-[#FDE428] hover:text-[#002E5B]">How It Works <ChevronRightIcon className="h-5 ml-3"/></a>
          </div>
        </div>

      </section>

      <section className="pt-[70px] pb-[70px] bg-[#ffffff]">

        <div className="w-[1120px] mx-auto flex items-start justify-between">
          
          <div className="w-[370px] h-[130px] p-5 flex rounded-xl hover:bg-[#EEEEEE] justify-start">
            <div className="w-[54px] h-[54px] rounded-full text-[#ffffff] flex items-center justify-center mr-[15px] bg-[#002E5B]">
              <DevicePhoneMobileIcon className="h-8"/>
            </div>

            <div className="w-[265px]">
              <h1 className="text-[#002E5B] font-bold leading-6 w-[200px] text-[20px]">50+ Unique One-Click Demos</h1>
              <p className="text-[15px] font-medum mt-1 text-[#595959]">Select the best layout for your website.</p>
            </div>
          </div>
          
          <div className="w-[370px] h-[130px] p-5 flex rounded-xl hover:bg-[#EEEEEE] justify-start">
            <div className="w-[54px] h-[54px] rounded-full text-[#ffffff] flex items-center justify-center mr-[15px] bg-[#002E5B]">
              <CodeBracketIcon className="h-8"/>
            </div>

            <div className="w-[265px]">
              <h1 className="text-[#002E5B] font-bold leading-6 w-[200px] text-[20px]">Custom Widgets and Sidebars</h1>
              <p className="text-[15px] font-medum mt-1 text-[#595959]">Create your own sidebar with available widgets and shortcodes.</p>
            </div>
          </div>
          
          <div className="w-[370px] h-[130px] p-5 flex rounded-xl hover:bg-[#EEEEEE] justify-start">
            <div className="w-[54px] h-[54px] rounded-full text-[#ffffff] flex items-center justify-center mr-[15px] bg-[#002E5B]">
              <MapPinIcon className="h-8"/>
            </div>

            <div className="w-[265px]">
              <h1 className="text-[#002E5B] font-bold leading-6 w-[200px] text-[20px]">Multi-Location on Google Map</h1>
              <p className="text-[15px] font-medum mt-1 text-[#595959]">You can add your locations both on the website and with Google maps!</p>
            </div>
          </div>

        </div>

        <div className="w-[1120px] mt-6 mx-auto flex items-start justify-between">
          
          <div className="w-[370px] h-[130px] p-5 flex rounded-xl hover:bg-[#EEEEEE] justify-start">
            <div className="w-[54px] h-[54px] rounded-full text-[#ffffff] flex items-center justify-center mr-[15px] bg-[#002E5B]">
              <Square3Stack3DIcon className="h-8"/>
            </div>

            <div className="w-[265px]">
              <h1 className="text-[#002E5B] font-bold leading-6 w-[200px] text-[20px]">Three Portfolio Layout Templates</h1>
              <p className="text-[15px] font-medum mt-1 text-[#595959]">Add portfolio cases with photos, videos and description.</p>
            </div>
          </div>
          
          <div className="w-[370px] h-[130px] p-5 flex rounded-xl hover:bg-[#EEEEEE] justify-start">
            <div className="w-[54px] h-[54px] rounded-full text-[#ffffff] flex items-center justify-center mr-[15px] bg-[#002E5B]">
              <CalendarDaysIcon className="h-8"/>
            </div>

            <div className="w-[265px]">
              <h1 className="text-[#002E5B] font-bold leading-6 w-[200px] text-[20px]">Built-in Appointment plugin</h1>
              <p className="text-[15px] font-medum mt-1 text-[#595959]">Let customers book services directly through the website.</p>
            </div>
          </div>
          
          <div className="w-[370px] h-[130px] p-5 flex rounded-xl hover:bg-[#EEEEEE] justify-start">
            <div className="w-[54px] h-[54px] rounded-full text-[#ffffff] flex items-center justify-center mr-[15px] bg-[#002E5B]">
              <ChatBubbleLeftEllipsisIcon className="h-8"/>
            </div>

            <div className="w-[265px]">
              <h1 className="text-[#002E5B] font-bold leading-6 w-[200px] text-[20px]">RTL support & 8 Ready Translations</h1>
              <p className="text-[15px] font-medum mt-1 text-[#595959]">Translation to multiple languages, 100% WPML compatible.</p>
            </div>
          </div>

        </div>

        <div className="w-[1120px] mt-6 mx-auto flex items-start justify-between">
          
          <div className="w-[370px] h-[130px] p-5 flex rounded-xl hover:bg-[#EEEEEE] justify-start">
            <div className="w-[54px] h-[54px] rounded-full text-[#ffffff] flex items-center justify-center mr-[15px] bg-[#002E5B]">
              <DevicePhoneMobileIcon className="h-8"/>
            </div>

            <div className="w-[265px]">
              <h1 className="text-[#002E5B] font-bold leading-6 w-[200px] text-[20px]">Three Portfolio Layout Templates</h1>
              <p className="text-[15px] font-medum mt-1 text-[#595959]">Add portfolio cases with photos, videos and description.</p>
            </div>
          </div>
          
          <div className="w-[370px] h-[130px] p-5 flex rounded-xl hover:bg-[#EEEEEE] justify-start">
            <div className="w-[54px] h-[54px] rounded-full text-[#ffffff] flex items-center justify-center mr-[15px] bg-[#002E5B]">
              <CodeBracketIcon className="h-8"/>
            </div>

            <div className="w-[265px]">
              <h1 className="text-[#002E5B] font-bold leading-6 w-[200px] text-[20px]">Built-in Appointment plugin</h1>
              <p className="text-[15px] font-medum mt-1 text-[#595959]">Let customers book services directly through the website.</p>
            </div>
          </div>
          
          <div className="w-[370px] h-[130px] p-5 flex rounded-xl hover:bg-[#EEEEEE] justify-start">
            <div className="w-[54px] h-[54px] rounded-full text-[#ffffff] flex items-center justify-center mr-[15px] bg-[#002E5B]">
              <MapPinIcon className="h-8"/>
            </div>

            <div className="w-[265px]">
              <h1 className="text-[#002E5B] font-bold leading-6 w-[200px] text-[20px]">RTL support & 8 Ready Translations</h1>
              <p className="text-[15px] font-medum mt-1 text-[#595959]">Translation to multiple languages, 100% WPML compatible.</p>
            </div>
          </div>

        </div>

      </section>

      <section className="pt-[80px] pb-[80px] bg-[#F0F2F5]">

        <div className="w-[1120px] mx-auto flex items-start justify-between">

            <div className="w-[550px]">

                <div className="w-full p-5 mb-3 bg-[#fff] rounded-[7px] flex items-start justify-start">
                    <img className="w-[90px] h-[90px]" src="https://stylemixthemes.com/consulting/_nuxt/img/42b8b0b.webp" alt="" />

                    <div className="w-[460px] pl-4">
                      <h3 className="font-bold text-[#002E5B] mb-1 leading-8 text-[24px]">Cost Calculator</h3>
                      <p className="text-[17px] leading-6 font-medum mt-1 text-[#595959]">A professional tool to create custom calculators and make immediate estimations.</p>
                    </div>
                </div>

                <div className="w-full p-5 mb-3 bg-[#fff] rounded-[7px] flex items-start justify-start">
                    <img className="w-[90px] h-[90px]" src="data:image/webp;base64,UklGRngDAABXRUJQVlA4WAoAAAAQAAAAWQAAWQAAQUxQSJgAAAABd6A0kiQ1egxvSb3CYD4iAmrB8ed6KCWJ4bTWtqd5UzWKKWJxaR6XeMoaaSP8I8TiUEyQeEb4HR3+JVB5BsiJ6P8ESLpkk/u9vQWap6Njlr6kc+uoZi0VjhvKa0FmkTjy9oPaVaioQb16VD6hrPvLf0LZHpU3qFeFir6ofYLaei3ILFSAQuncYt5rSekIKX3Nr9kEsLdAElZQOCC6AgAAsBEAnQEqWgBaAD5RJI5FI6IhFOrs9DgFBKAM6uCn8B+M2zMd7/JLcMdCifXqM5ZvcB/Y/Yn4jfSA8yH7T/sB70foW9AD9cPSA9jH0JfBV+Cz9zPSIJnEYdClSPbDbQnMWQZFwdBgH39iXx+7qrvzl6gtsX0hTT1bARXL/HNrxjglLX6Qcm0Lm4WqcR1y1bV1AK+fPkXAAP7pu7hNXJ97ZCJR4+bS+bS7iIKU3XAkRrNlXQWH0N0wdYc9w2n3W7c3YO8XFQlzeHFW8T+IZTjCKuayDzFAEvyIZCKQ0L3/9o9+v8zvF3fyGmaJfylFgsKrHRrXRmZFVjpi6qa8F9LzeNSc4oUWwBg1Ugrwyq7PLAbH2fPHO6GFSCXsnR8kgJZzyHJm9o6NPGOjeTpTQEU9dexjaZ5I/8cBBXU3qG5keBzb+JUlMEJWcLqJqMtJkTWmn6VPTV7uyWrp0ocIJFeM0DFb1zisswFzZ7Y1eJO5zVzFSItPaRvorun46SXQwNIUeVkeH4QP2N0LM6pxI78cd3Bv1gXyl0914t32wcSh6RcVJ/asjT0meUgxwg5SIez36zS+HF7QXr78CLxOhKK7Y+FJ0PrISz5GVylIcU51Jy757P0cvrTwp2fIMVMcQrbW5ji54lUYlSCZtAkF7ERunW1tFhVwtEoelawje/sWnx+dxhkB5MXbskNcj8wriYNuTKfQKSZWWVX70O2RzMtZFxSQAU7h9r20MPiuD7lImNjSPKKyV9UcwpqG7zikNZfBxEOpNCDVbV536AdXI+N6S3Q2zG+rKUeEaYbcpliv1QMWUm8HDeQGd9Jpm39tV4NlcH1MHQooIAANTK786b1m7xi287/x9AQy9mNt6WAb6Lq3znIatjIAPZHf7jKFgfrm3SGr/aNX/P/ob+73gIROM1rV5v/j/k3p4AA=" alt="" />

                    <div className="w-[460px] pl-4">
                      <h3 className="font-bold mb-1 text-[#002E5B] leading-8 text-[24px]">eRoom — Zoom meetings and webinars</h3>
                      <p className="text-[17px] leading-6 font-medum mt-1 text-[#595959]">Make your online meetings like the real ones. Connect with Zoom meetings through eRoom plugin.</p>
                    </div>
                </div>

                <div className="w-full p-5 bg-[#fff] rounded-[7px] flex items-start justify-start">
                    <img className="w-[90px] h-[90px]" src="https://stylemixthemes.com/consulting/_nuxt/img/641b033.webp" alt="" />

                    <div className="w-[460px] pl-4">
                      <h3 className="font-bold mb-1 text-[#002E5B] leading-8 text-[24px]">Professional Booking System</h3>
                      <p className="text-[17px] leading-6 font-medum mt-1 text-[#595959]">Take control over your appointments by using the built-in BookIt plugin - a powerful appointment management tool.</p>
                    </div>
                </div>

            </div>

            <div className="w-[550px] shadow-lg rounded-[7px] overflow-hidden">
              <img className="w-full h-auto" src="https://stylemixthemes.com/consulting/_nuxt/img/6b8d78e.webp" alt="" />
            </div>
        </div>
      
      </section>

      <section className="pt-[80px] pb-[80px] bg-[#ffffff]">

        <h1 className="text-[40px] text-center font-bold text-[#002E5B] after:absolute after:bg-[#FDE428] after:left-[48%] after:bottom-0 after:w-[50px] after:rounded-full pb-5 after:h-[7px] relative after:content-['']">WHAT OUR CLIENTS SAY</h1>

        <div className="lg:w-[930px] mx-auto mt-10">

          <Swiper modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
              <ReviewItem title={"Designheap"} paragraph={"Theme is solid and well designed. To make things even better their support is superb. I would highly recommend Stylemix Themes. Thank you!"}/>
            </SwiperSlide>

            <SwiperSlide>
              <ReviewItem title={"ccc777"} paragraph={"This theme is well designed, because it\'s pretty easy to customize it without touching code. It looks professional, even if you are not a professional web designer! I am enjoying using it. Also, the support I have received has been very helpful."}/>
            </SwiperSlide>

            <SwiperSlide>
              <ReviewItem title={"ccc777"} paragraph={"This theme is well designed, because it\'s pretty easy to customize it without touching code. It looks professional, even if you are not a professional web designer! I am enjoying using it. Also, the support I have received has been very helpful."}/>
            </SwiperSlide>

            <SwiperSlide>
              <ReviewItem title={"ccc777"} paragraph={"This theme is well designed, because it\'s pretty easy to customize it without touching code. It looks professional, even if you are not a professional web designer! I am enjoying using it. Also, the support I have received has been very helpful."}/>
            </SwiperSlide>

            <SwiperSlide>
              <ReviewItem title={"ccc777"} paragraph={"This theme is well designed, because it\'s pretty easy to customize it without touching code. It looks professional, even if you are not a professional web designer! I am enjoying using it. Also, the support I have received has been very helpful."}/>
            </SwiperSlide>
          </Swiper>

          <a href="#" className="w-[160px] h-[45px] hover:bg-[#FDE428] group hover:text-[#002E5B] flex justify-center items-center rounded-[7px] bg-[#002E5B] text-[#fff] font-bold mx-auto">All Reviews <ChatBubbleOvalLeftEllipsisIcon className="h-6 text-[#FDE428] group-hover:text-[#002E5B] ml-3"/></a>

        </div>

      </section>

      <section className="pt-[80px] pb-[80px] bg-[url(https://img.freepik.com/premium-photo/dark-working-place-programmer-hacker-with-computer_93675-112268.jpg?w=2000)] bg-fixed bg-cover bg-center bg-no-repeat">

        <h1 className="text-[40px] text-center font-bold text-[#fff] after:absolute after:bg-[#FDE428] after:left-[48%] after:bottom-0 after:w-[50px] after:rounded-full pb-5 after:h-[7px] relative after:content-['']">WE ARE STYLEMIXTHEMES</h1>

        <div className="w-[1120px] mx-auto mt-16 flex items-start justify-between">

          <AboutCard src={"https://stylemixthemes.com/consulting/_nuxt/img/d3512d6.png"} title={"Envato Contest Winners"}/>

          <AboutCard src={"https://stylemixthemes.com/consulting/_nuxt/img/91ae878.png"} title={"Envato Contest Winners"}/>

          <AboutCard src={"https://stylemixthemes.com/consulting/_nuxt/img/81c3608.png"} title={"Envato Contest Winners"}/>

        </div>
      </section>

      <section className="pt-[80px] pb-[80px] bg-[#F0F2F5]">

        <h1 className="text-[40px] text-center font-bold text-[#002E5B] after:absolute after:bg-[#FDE428] after:left-[48%] after:bottom-0 after:w-[50px] after:rounded-full pb-5 after:h-[7px] relative after:content-['']">WE ARE FEATURED ON:</h1>

        <div className="w-[1120px] mt-16 mx-auto flex items-start justify-between">
          <FeaturedCard src={"https://stylemixthemes.com/consulting/_nuxt/img/c28b9dc.png"}/>
          <FeaturedCard src={"https://stylemixthemes.com/consulting/_nuxt/img/f3512c5.png"}/>
          <FeaturedCard src={"https://stylemixthemes.com/consulting/_nuxt/img/eb0bc0b.png"}/>
        </div>

        <div className="w-[1120px] mt-9 mx-auto flex items-start justify-between">
          <FeaturedCard src={"https://stylemixthemes.com/consulting/_nuxt/img/e0ed787.png"}/>
          <FeaturedCard src={"https://stylemixthemes.com/consulting/_nuxt/img/73f746f.png"}/>
          <FeaturedCard src={"https://stylemixthemes.com/consulting/_nuxt/img/5e56b07.png"}/>
        </div>

        <div className="w-[1120px] mt-9 mx-auto flex items-start justify-between">
          <FeaturedCard src={"https://stylemixthemes.com/consulting/_nuxt/img/d9bc88d.png"}/>
          <FeaturedCard src={"https://stylemixthemes.com/consulting/_nuxt/img/254c87a.png"}/>
          <FeaturedCard src={"https://stylemixthemes.com/consulting/_nuxt/img/66469f3.png"}/>
        </div>

      </section>

      <section className="pt-[150px] pb-[150px] bg-[url(https://stylemixthemes.com/consulting/_nuxt/img/7c29a4b.webp)] bg-fixed bg-cover bg-center bg-no-repeat">

        <div className="xl:w-[1120px] lg:w-[880px] md:w-[718px] w-[400px] mx-auto flex items-start justify-center md:justify-left">
          <div className="w-[365px]">

            <h1 className="text-[40px] text-left font-bold text-[#fff] after:absolute after:bg-[#FDE428] leading-[52px] pb-10 after:left-0 after:bottom-0 after:w-[50px] after:rounded-full after:h-[7px] relative after:content-['']"><span className="text-[#FDE428]">Free</span> Corporate Identity templates</h1>

            <p className="text-[20px] mt-10 font-[300] text-[#fff]">Two Business Cards, Envelope & Letterhead templates are included in the theme bundle.</p>

          </div>
        </div>

      </section>

      <section className="pt-[50px] pb-[50px] bg-[#fff]">

        <div className="lg:w-[1120px] w-[400px] mx-auto flex items-start justify-left">

        <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        >
          <SwiperSlide>
            <img className="w-[180px] h-[50px] object-contain" src="https://stylemixthemes.com/consulting/_nuxt/img/98b0266-80.webp" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-[180px] h-[50px] object-contain" src="https://stylemixthemes.com/consulting/_nuxt/img/0122402-207.webp" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-[180px] h-[50px] object-contain" src="https://stylemixthemes.com/consulting/_nuxt/img/84b892d-94.webp" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-[180px] h-[50px] object-contain" src="https://stylemixthemes.com/consulting/_nuxt/img/5f139e6-191.webp" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-[180px] h-[50px] object-contain" src="https://stylemixthemes.com/consulting/_nuxt/img/235a427-120.webp" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-[180px] h-[50px] object-contain" src="https://stylemixthemes.com/consulting/_nuxt/img/e09912c-167.webp" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-[180px] h-[50px] object-contain" src="https://stylemixthemes.com/consulting/_nuxt/img/39af067-313.webp" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-[180px] h-[50px] object-contain" src="https://stylemixthemes.com/consulting/_nuxt/img/ac07766-207.webp" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-[180px] h-[50px] object-contain" src="https://stylemixthemes.com/consulting/_nuxt/img/ba16f13-169.webp" alt="" />
          </SwiperSlide>

          <SwiperSlide>
            <img className="w-[180px] h-[50px] object-contain" src="https://stylemixthemes.com/consulting/_nuxt/img/9295203-201.webp" alt="" />
          </SwiperSlide>

        </Swiper>

        </div>

      </section>

      <Footer/>

    </>
  )
}

export default HomePage;
