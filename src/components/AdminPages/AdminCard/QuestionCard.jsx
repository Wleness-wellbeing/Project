import React from 'react'

const QuestionCard = () => {
  return (
    <div className='bg-white p-4 m-auto border-2 w-[95%] rounded-md mb-4'>
    <p className='text-lg font-semibold'>Question</p>
   <p className='text-justify my-3'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis consequatur sed maiores, rem tempora repellendus enim rerum architecto placeat facilis ducimus? Voluptatum repudiandae, nam, ducimus earum impedit eos optio iusto, qui placeat cumque facilis natus molestias maiores maxime ipsum quisquam tenetur velit saepe blanditiis consequatur non et similique harum? Repellat!
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis consequatur sed maiores, rem tempora repellendus enim rerum architecto placeat facilis ducimus? Voluptatum repudiandae, nam, ducimus earum impedit eos optio iusto, qui placeat cumque facilis natus molestias maiores maxime ipsum quisquam tenetur velit saepe blanditiis consequatur non et similique harum? Repellat!
   </p>
    <div className='text-right'>
    <button type="button" class="py-1.5 px-8 mr-2 mb-3 text-sm font-semibold text-gray-900 focus:outline-none bg-white rounded-full border border-[#008080] hover:bg-gray-100 ">Disable</button>
    <button type="button" className="text-white bg-[#008080] py-1.5 px-8 mr-2 mb-3 text-lg font-medium focus:outline-none rounded-full">Update</button>
    </div>
</div>
  )
}

export default QuestionCard