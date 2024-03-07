import React from 'react'

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"

const timeline = [
  {
      Logo: Logo1,
      heading: "Leadership",
      Description:"Fully committed to the success company",
  },
  {
      Logo: Logo2,
      heading: "Flexibility",
      Description:"Fully committed to the success company",
  },
  {
      Logo: Logo3,
      heading: "Responsiblity",
      Description:"Fully committed to the success company",
  },
  {
      Logo: Logo4,
      heading: "Solve the Problem",
      Description:"Fully committed to the success company",
  },
];
const TimeLineSection = () => {
  return (
    <div>
      <div className="flex flex-row gap-20  items-center ">
        <div className="w-[45%] flex flex-col gap-11 ">
          {
            timeline.map( (element,index)=> {
              return (
                <div className="flex flex-row gap-6 items-center" key={index}>
                  <div className="w-[50px] flex gap-5 bg-white items-center">
                    <img src={ element.Logo } alt="" />
                  </div>

                  <div>
                    <h2  className=" font-semibold text-lg leading-6">{element.heading}</h2>
                    <p className=" text-sm font-normal leading-5">{element.Description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="relative shadow-blue-200 ">

          <img src={timelineImage} alt="timeline image" className="shadow-white object-cover h-fit" />

          {/* green card */}
          <div className=" absolute bg-caribbeangreen-700 flex text-white uppercase py-5 left-[50%] translate-x-[-50%] translate-y-[-50%] h-[88px] w-[511px]">

          <div className="flex gap-5 items-center border-r border-caribbeangreen-300 px-7">
            <div className="text-3xl font-bold">10</div>
            <div className="text-caribbeangreen-300 text-sm">Years of Experience</div>
          </div>

          <div className="flex gap-5 items-center  px-7">
          <div className="text-3xl font-bold">250</div>
            <div className="text-caribbeangreen-300 text-sm">Types of Courses</div>
          </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeLineSection