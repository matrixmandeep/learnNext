import React from 'react'

const Wrapper = ({children, classname}) => {
  return (
    <div className={`w-full m-auto px-5 md:px-10 max-w-[1280px] ${classname || ''}`}>{children}</div>
  )
}

export default Wrapper