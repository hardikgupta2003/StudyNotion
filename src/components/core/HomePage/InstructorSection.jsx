import React from 'react'
import CTAButton from '../HomePage/Button'
import Instructor from '../../../assets/Images/Instructor.png'
import HighLightText from './HighLightText'
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
  return (
    <div className="mt-16">

      <div className="flex gap-20 items-center">
        <div className=" w-[50%]">
          <img src={Instructor} className="shadow-white" />
        </div>


      <div className="w-[50%] flex flex-col gap-10">
          <div className="text-4xl font-semibold w-[50%]">Become an <HighLightText text={"Instructor"}/></div>
          <div className="font-medium text-[16px] w-[80%] text-richblack-300">Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</div>
          <div className=" w-fit">
            <CTAButton active={true} linkto={"/signup"} >
              <div className="flex flex-row gap-2 items-center">
              Start Teaching Today
              <FaArrowRight />
              </div>
              </CTAButton>

          </div>
      </div>

      </div>
    </div>
  )
}

export default InstructorSection