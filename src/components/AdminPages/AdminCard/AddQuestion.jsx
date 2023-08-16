import React from 'react'

const AddQuestion = () => {
  return (
    <div className='bg-white p-4 m-auto border-2 w-[95%] rounded-md mb-4'>
        <p className='mb-2 text-lg font-semibold'>Question</p>
        <textarea name="textarea" className='outline-none p-1 w-full resize-none ' rows="7" 
        placeholder='Write the description of the question'/>
        <div className='text-right'>
        <button type="button" className="text-white bg-[#008080] py-1.5 px-8 mr-2 mb-3 text-lg font-medium focus:outline-none rounded-full">Post</button>
        </div>
    </div>
  )
}

export default AddQuestion