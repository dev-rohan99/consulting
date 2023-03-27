import React from 'react';

type aboutCardProps = {
    src : string;
    title : string;
}

const AboutCard = (props : aboutCardProps) => {
  return (
    <>
    
        <div className="w-[380px]">
            <img className="w-[240px] mx-auto mb-10 h-auto" src={props.src}/>

            <h2 className="text-[30px] font-bold text-[#fff] text-center w-[300px] mx-auto">{props.title}</h2>
        </div>
    
    </>
  )
}

export default AboutCard;
