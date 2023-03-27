import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';

type reviewItemProps = {
  title : string;
  paragraph : string;
}

const ReviewItem = (props : reviewItemProps) => {


  return (
    <>
    
        <div className="w-[930px] mx-auto text-center">
            <h3 className="text-[#002E5B] font-bold text-[19px] mb-3">{props.title}</h3>

            <ul className="list-none mb-5">
              <li className="inline-block"><StarIcon className="h-6 text-[#EBA90D]"/></li>
              <li className="inline-block"><StarIcon className="h-6 text-[#EBA90D]"/></li>
              <li className="inline-block"><StarIcon className="h-6 text-[#EBA90D]"/></li>
              <li className="inline-block"><StarIcon className="h-6 text-[#EBA90D]"/></li>
              <li className="inline-block"><StarIcon className="h-6 text-[#EBA90D]"/></li>
            </ul>

            <p className="font-Serif italic text-[24px] leading-[36px] mb-8 text-[#595959]">{props.paragraph}</p>
        </div>
    
    </>
  )
}

export default ReviewItem;
