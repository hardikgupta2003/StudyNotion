import React from 'react'
import CTAButton from '../HomePage/Button'
import Instructor from '../../../assets/Images/Instructor.png'
import HighLightText from './HighLightText'

const InstructorSection = () => {
  return (
    <div className="mt-16">

      <div className="flex gap-20 items-center">
        <div className=" w-[50%]">
          <img src={Instructor} className="shadow-white" />
        </div>

      </div>

      <div className="w-[50%] flex flex-col gap-10">
          <div className="text-4xl font-semibold w-[50%]">Become an <HighLightText text={"Instructor"}/></div>
          <div className=""></div>
          <div className="">
            <CTAButton active={true}>Start Teaching Today</CTAButton>

          </div>
      </div>

    </div>
  )
}

export default InstructorSection