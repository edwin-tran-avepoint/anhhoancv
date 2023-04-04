import React from "react"

const ProfileComponent = () => {
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

        <div className='block'>
          <div className='font-extrabold text-xl text-gray-900'>Contact</div>
          <div className='grid grid-rows-2 grid-flow-col gap-4'>
            <div>
              <div className='text-base text-gray-500'>ADDRESS</div>
              <div className='text-base text-gray-900'>Da Nang</div>
            </div>
            <div>
              <div className='text-base text-gray-500'>PHONE</div>
              <div className='text-base text-gray-900'>0393 999 682</div>
            </div>
            <div>
              <div className='text-base text-gray-500'>BIRTHDAY</div>
              <div className='text-base text-gray-900'>01/08/1997</div>
            </div>
            <div>
              <div className='text-base text-gray-500'>EMAIL</div>
              <div className='text-base text-gray-900'>anhhoan1897@gmail.com</div>
            </div>
            {/* <table>
        <tr>
          <td>ADDRESS</td>
          <td>Da Nang</td>
        </tr>
        <tr>
          <td>PHONE</td>
          <td>0393 999 682</td>
        </tr>
        <tr>
          <td>BIRTHDAY</td>
          <td>01/08/1997</td>
        </tr>
        <tr>
          <td>EMAIL</td>
          <td>anhhoan1897@gmail.com</td>
        </tr>
      </table> */}
          </div>
        </div>
        <div className='block'>
          <div className='font-extrabold text-xl text-gray-900'>Skill</div>
          <div className='grid grid-rows-3 grid-flow-col gap-1'>
            <div>HTML, CSS</div>
            <div>REACT JS</div>
            <div>AWS SERVICES</div>
          </div>

        </div>
        <div className='block'>
          <div className='font-extrabold text-xl text-gray-900'>Certificate</div>
          <div className='text-base xl-gray-500'>IELTS 6.</div>
        </div>
        <div className='block'>
          <div className='font-extrabold text-xl text-gray-900'>Interest</div>
          <div className='grid grid-rows-3 grid-flow-col gap-1'>
            <div>FOOTBALL</div>
            <div>VIDEO GAME</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(ProfileComponent);