import React from 'react'
import HighLightText from './HighLightText'
import CTAButton from '../HomePage/Button'
import Compare_with_others from '../../../assets/Images/Compare_with_others.png'
import know_your_progress from '../../../assets/Images/Know_your_progress.png'
import plan_your_lesson from '../../../assets/Images/Plan_your_lessons.png'

const LearningLanguage = () => {
  return (
    <div  className="flex flex-col items-center w-11/12 mt-[130px] mb-32 gap-5">
      {/* heading  */}
      <div className="text-4xl font-semibold text-center">
        Your swiss knife for
           <HighLightText text={"Learning Any Language"}/> 
        </div>
        <div className="text-center text-richblack-600 mx-auto text-base font-medium w-[70%]">Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</div>

      
      {/* cards  */}
      <div className="">

        {/* images  */}
        <div className="flex flex-row items-center justify-center mt-5  transition-all duration-200">
         <img src={know_your_progress} alt="" className=' object-contain -mr-32' />
         <img src={Compare_with_others} alt="" className=' object-contain' />
         <img src={plan_your_lesson} alt="" className=' object-contain -ml-36' />
        </div>


      </div>
      {/* button */}
      <div className="w-fit">
        <CTAButton active={true} linkto={"/signup"}>
          <div className="">Learn More</div>
        </CTAButton>
      </div>
    </div>
  )
}

export default LearningLanguage