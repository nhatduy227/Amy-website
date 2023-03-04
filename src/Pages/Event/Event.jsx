import React from 'react';
import eventBanner from '../../Assets/event-banner.svg';
import la1 from '../../Assets/la1.png';
import la2 from '../../Assets/la2.png';
import eventImg1 from '../../Assets/event-img01.png';
import eventImg2 from '../../Assets/event-img02.png';
import eventImg3 from '../../Assets/event-img03.png';
import eventImg4 from '../../Assets/event-img04.png';
import eventImg5 from '../../Assets/event-img05.png';
import eventImg6 from '../../Assets/event-img06.png';
import eventImg7 from '../../Assets/event-img07.png';

const Event = () => {
  return (
    <div className="">
      {/* Banner */}
      <div className="bg-background-main  lg:h-[510px] p-36 flex justify-center relative">
        <img src={eventBanner} alt="event-banner" className="w-[800px] border-4 rounded z-10" />
        <img src={la1} alt="" className="w-[300px] absolute bottom-0 left-0" />
        <img src={la2} alt="" className="w-[350px] absolute top-0 right-0" />
      </div>

      {/* Container */}
      <div className="py-8 px-20">
        <div className="flex items-center justify-center gap-8 py-12">
          <img src={eventImg1} alt="" className="w-[400px]" />
          <img src={eventImg2} alt="" className="w-[400px]" />
        </div>

        <div className="flex items-center justify-center gap-8 py-12">
          <img src={eventImg3} alt="" className="w-[840px]" />
        </div>

        <div className="flex items-center justify-center gap-8 py-12">
          <img src={eventImg4} alt="" className="w-[400px]" />
          <img src={eventImg5} alt="" className="w-[400px]" />
        </div>

        <div className="flex items-center justify-center gap-8 py-12">
          <img src={eventImg6} alt="" className="w-[400px]" />
          <img src={eventImg7} alt="" className="w-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Event;
