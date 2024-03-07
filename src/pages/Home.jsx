import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import HighLightText from '../components/core/HomePage/HighLightText'
import CTAButton from '../components/core/HomePage/Button'
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import TimeLineSection from '../components/core/HomePage/TimeLineSection'
import LearningLanguage from '../components/core/HomePage/LearningLanguage'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import ReviewSlider from '../components/core/HomePage/ReviewSlider'

const Home = () => {
  return (
    <div>

    {/* section 1  */}
    <div className=" w-11/12 relative mx-auto flex flex-col max-w-maxContent items-center text-white justify-between">

        <Link to={"/signup"}>
            <div className="text-richblack-200 group mt-16 p-1 mx-auto rounded-full bg-richblue-800 font-bold transition-all duration-200 hover:scale-95 w-fit">

                <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900
                 ">
                    <p>Become an Instructor </p><FaArrowRight/>
                </div>
            </div>
        
        </Link>

        {/* titles */}
        <div className=" font-semibold text-4xl
 leading-10 text-center mt-7

">
            Empower Your Future with <HighLightText text={"CodeMasters."} />
        </div>

        <div className="
         mt-[16px]
         text-base  
         font-medium
         text-center
         leading-6
         tracking-widest
         text-richblack-300
         w-[85%]
        
        ">With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. </div>

        {/* reusable buttons */}
        <div className="flex flex-row gap-7 mt-8">
            <CTAButton linkTo={"/signup"
            } active={true}>Learn More</CTAButton>

            <CTAButton   linkTo={"/login"
            } active={false}>Book a demo </CTAButton>

        </div>
            {/* for video */}
        <div className="mx-3 my-12 shadow-blue-200">
            <video autoPlay loop muted >
                <source src={Banner} type="video/mp4" />
            </video>
        </div>

        {/* code section 1 */}
            <div className="">
                <CodeBlocks 
                position={"lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>
                         Unlock Your
                        <HighLightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading={
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText:"try it yourself",
                        linkto:"/signup",
                        active:true,
                    }
                }
                ctabtn2={
                    {
                        btnText:"learn More",
                        linkto:"/login",
                        active:false,
                    }
                }
                codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                codeColor={"text-yellow-25"}
                />
            </div>




        {/* code section 2 */}

        <div className="">
                <CodeBlocks 
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                         Unlock Your
                        <HighLightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading={
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText:"try it yourself",
                        linkto:"/signup",
                        active:true,
                    }
                }
                ctabtn2={
                    {
                        btnText:"learn More",
                        linkto:"/login",
                        active:false,
                    }
                }
                codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                codeColor={"text-yellow-25"}
                />
            </div>


    </div>


    {/* section 2  */}
    <div className=" bg-pure-greys-5 text-richblue-700">

        <div className="homepage_bg h-[310px]">
            <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
                <div className="h-[150px]"></div>
                <div className="flex flex-row gap-7 text-white">
                    <CTAButton active={true} linkto={"/signup"}>
                        <div className="flex items-center gap-3">Explore Full Catalog <FaArrowRight/></div>
                    </CTAButton>

                    <CTAButton active={false} linkto={"/signup"}>
                        <div className="">Learn More</div>
                    </CTAButton>
                </div>
            </div>
         
        </div>

                {/* skills you need */}
        <div className="flex flex-col w-11/12 mx-auto items-center gap-7 justify-between max-w-maxContent">
                <div className="flex gap-5 mb-10 mt-24">
                    <div className="text-4xl font-semibold leading-10 w-[45%] ">Get the skills you need for <HighLightText text={"Job that is in demand"}/>
                     </div>
                    <div className="flex flex-col gap-6 w-[40%] items-start">
                        <div className="text-base font-medium leading-6 tracking-wide 
                        text-left
                        ">The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</div>
                        <div className="">
                            <CTAButton active={true}>Learn More</CTAButton>
                        </div>
                    </div>

                </div>

                <TimeLineSection/>

                <LearningLanguage/>

            
        </div>
    </div>



    {/* section 3 */}

    <div className="w-11/12 flex flex-col mx-auto max-w-maxContent items-center justify-between gap-8 first-letter bg-richblack-900 text-white">

        <InstructorSection/>


        <h2 className='text-center text-4xl  font-semibold mt-10'>Reviews from Other Learners</h2>

        <ReviewSlider />
    </div>



    {/* Footer  */}
    







    </div>
  )
}

export default Home