import React from 'react';
import DemoItem from './DemoItem';


const Corporate = () => {

  return (
    <>
    
        <div className="w-[400px] md:w-[718px] flex-col lg:w-[880px] xl:w-[1250px] mx-auto mt-16 flex items-center lg:justify-center lg:flex-row gap-6">

            <DemoItem src="https://stylemixthemes.com/consulting/_nuxt/img/4de668a-423.webp" title="SAN" subTitle="FRANCISCO CONSULTING"/>

            <DemoItem src="https://stylemixthemes.com/consulting/_nuxt/img/73d506b-423.webp" title="ISTANBUL" subTitle="INTERNATIONAL CONSULTANTS"/>

            <DemoItem src="https://stylemixthemes.com/consulting/_nuxt/img/9d722e5-423.webp" title="VIENNA" subTitle="BUSINESS CONSULTANT"/>

        </div>

        <div className="w-[400px] md:w-[718px] flex-col lg:w-[880px] xl:w-[1250px] mx-auto mt-16 flex items-center lg:justify-center lg:flex-row gap-6">

            <DemoItem src="https://stylemixthemes.com/consulting/_nuxt/img/1bf7547-423.webp" title="DENVER" subTitle="GLOBAL TRADING"/>

            <DemoItem src="https://stylemixthemes.com/consulting/_nuxt/img/4a02212-423.webp" title="AMSTERDAM" subTitle="TAX CONSULTING"/>

            <DemoItem src="https://stylemixthemes.com/consulting/_nuxt/img/1137b55-423.webp" title="DAVOS" subTitle="TRADE CONSULTANT"/>

        </div>

        <div className="w-[400px] md:w-[718px] flex-col lg:w-[880px] xl:w-[1250px] mx-auto mt-16 flex items-center lg:justify-center lg:flex-row gap-6">

            <DemoItem src="https://stylemixthemes.com/consulting/_nuxt/img/050a840-423.webp" title="HONG KONG" subTitle="INSURANCE CONSULTING"/>

            <DemoItem src="https://stylemixthemes.com/consulting/_nuxt/img/6b059bc-423.webp" title="TEL AVIV" subTitle="RTL CONSULTING"/>

            <DemoItem src="https://stylemixthemes.com/consulting/_nuxt/img/4435b46-423.webp" title="DUBAI" subTitle="RTL BUSINESS"/>

        </div>
    
    </>
  )
}


export default Corporate;
