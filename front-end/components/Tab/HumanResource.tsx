import React from 'react';
import DemoItem from '../DemoItem';


const HumanResource = () => {

  return (
    <>
    
        <div className="w-[400px] md:w-[718px] flex-col lg:w-[880px] xl:w-[1250px] mx-auto mt-16 flex items-center lg:justify-center lg:flex-row gap-6">

            <DemoItem src="https://stylemixthemes.com/consulting/_nuxt/img/46da902-423.webp" title="FRANKFURT" subTitle="CONSULTING"/>

            <DemoItem src="https://stylemixthemes.com/consulting/_nuxt/img/4ac507a-423.webp" title="TORONTO" subTitle="FINANCE CONSULTING"/>

            <DemoItem src="https://stylemixthemes.com/consulting/_nuxt/img/e93ae8d-423.webp" title="BEIJING" subTitle="CORPORATE CONSULTANT"/>

        </div>

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
    
    </>
  )
}

export default HumanResource;
