import React from 'react';

type featuredCardProps = {
    src : string;
}

const FeaturedCard = (props : featuredCardProps) => {


  return (
    <>
    
        <div className="w-[350px] h-[135px] shadow-lg bg-[#fff]">
            <a href="" className="w-full h-full flex items-center justify-center">
                <img className="h-[70px] w-[160px] object-scale-down" src={props.src} alt="" />
            </a>
        </div>
    
    </>
  )
}

export default FeaturedCard;
