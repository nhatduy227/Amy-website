import React from 'react';
import eventBanner from '../../Assets/event-banner.png';
import eventImg1 from '../../Assets/cooking-contest-1.jpg';
import eventImg2 from '../../Assets/cooking-contest-2.jpg';
import eventImg3 from '../../Assets/cooking-contest-3.jpg';
import eventImg4 from '../../Assets/cooking-contest-4.jpg';
import eventImg5 from '../../Assets/cooking-contest-5.jpg';
import eventImg6 from '../../Assets/cooking-contest-6.jpg';
import eventImg7 from '../../Assets/cooking-contest-7.jpg';

const Event = () => {
  return (
    <div className="bg-background-main">
      {/* Banner */}
      <div className="">
        <img src={eventBanner} alt="event-banner" className="w-full" />
      </div>

      {/* Container */}
      <div className="py-8 px-36">
        <h1 className="text-primary-default text-3xl text-center font-semibold">Thi nấu ăn - 08/03 </h1>
        <div className="flex flex-wrap items-center justify-center gap-8 py-6">
          <img src={eventImg2} alt="" className="lg:w-[400px]" />
          <img src={eventImg1} alt="" className="lg:w-[400px]" />
        </div>

        <div className="flex items-center justify-center py-4">
          <img src={eventImg3} alt="" className="lg:w-[840px]" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 py-4">
          <img src={eventImg4} alt="" className="lg:w-[400px]" />
          <img src={eventImg5} alt="" className="lg:w-[400px]" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 py-4">
          <img src={eventImg6} alt="" className="lg:w-[400px]" />
          <img src={eventImg7} alt="" className="lg:w-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Event;
