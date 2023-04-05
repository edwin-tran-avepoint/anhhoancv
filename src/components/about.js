import React from "react"

const AboutComponent = () => {
  return (
    <div className='container p-5 flex flex-col'>
      <div className='block w-full p-6 bg-white border border-gray-200 rounded-lg shadow space-y-10'>
        <div>
          <div className='font-extrabold text-xl text-gray-900'>About me</div>
          <div className='text-base text-gray-500'>I'm a self-driven and self-motivated person with
            well communication, quick learner and be
            interested in researching new things and also a
            passionate software engineer with roughly two - year experience in software development that
            mainly focus on React JS.</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(AboutComponent);