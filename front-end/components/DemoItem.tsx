import React from 'react';

type demeItemProps = {
    src : string;
    title : string;
    subTitle : string;
}

const DemoItem = (props : demeItemProps) => {

  return (
    <>
    
    
        <div className="lg:w-[280px] xl:w-[400px] w-[100%] h-auto">
            <div className="rounded-[10px] hover:translate-y-[-15px] transition duration-300 shadow-[#001427] shadow-lg hover:shadow-xl hover:shadow-[#001427]  overflow-hidden ...">
            <img className='w-full h-auto' src={props.src} alt="" />
            </div>

            <h3 className="text-center font-[700] mt-8 text-[14px] text-[#fff]">{props.title}</h3>
            <div className="text-center font-thin mt-1 text-[10px] text-[#8598ae]">{props.subTitle}</div>
        </div>
    
    
    </>
  )
}

export default DemoItem;
