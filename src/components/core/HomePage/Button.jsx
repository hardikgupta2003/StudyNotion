import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div className={`
 gap-2 rounded-lg
 px-6 py-3 text-[13px] font-bold ${active ? "bg-yellow-50 text-black" : "bg-richblack-800"} hover:scale-95 transition-all duration-200

`}>
        {children}
      </div>

    </Link>
  )
}

export default Button