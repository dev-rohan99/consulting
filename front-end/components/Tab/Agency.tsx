import React from 'react';
import DemoItem from '../DemoItem';


const Agency = () => {

  return (
    <>
    
        <div className="w-[400px] md:w-[718px] flex-col lg:w-[880px] xl:w-[1250px] mx-auto mt-16 flex items-center lg:justify-center lg:flex-row gap-6">

            <DemoItem src="https://stylemixthemes.com/consulting/_nuxt/img/1592050-423.webp" title="LISBON" subTitle="MANAGEMENT"/>

            <DemoItem src="https://stylemixthemes.com/consulting/_nuxt/img/cf241a7-423.webp" title="BERLIN" subTitle="BUSINESS CONSULTING"/>

            <DemoItem src="https://stylemixthemes.com/consulting/_nuxt/img/135f728-423.webp" title="MILAN" subTitle="CONSULTING AGENCY"/>

        </div>

        <div className="w-[400px] md:w-[718px] flex-col lg:w-[880px] xl:w-[1250px] mx-auto mt-16 flex items-center lg:justify-center lg:flex-row gap-6">

            <DemoItem src="https://stylemixthemes.com/consulting/_nuxt/img/ad4c4ca-423.webp" title="SINGAPORE" subTitle="STRATEGY"/>

            <DemoItem src="https://stylemixthemes.com/consulting/_nuxt/img/39b4cdd-423.webp" title="BRUSSELS" subTitle="FOREX CONSULTING"/>

            <DemoItem src="https://stylemixthemes.com/consulting/_nuxt/img/a3aa464-423.webp" title="OSLO" subTitle="BUSINESS CONSULTANT"/>

        </div>
    
    </>
  )
}

export default Agency;
