import React from 'react'

const UserCard = () => {
  return (
    <div class="shadow-2xl border-2 w-[245px] h-auto rounded-lg m-1 bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="my-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          Name
        </h5>
        <a href="#">
          <img
            class="rounded-t-lg"
            src="https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_fid34274_asset_33951/44c58118d3b5aff32fe8fed5a1ab5eb6/what-is-anxiety-illustration?fm=webp&q=50&w=1200&h=600&fit=thumb"
            alt=""
          />
        </a>
        <div class="p-5">
          <p class="font-semibold text-gray-700 dark:text-gray-400">
            Email: <span className='font-normal '>abc@gmail.com</span>
            </p>
            <p class="font-semibold text-gray-700 dark:text-gray-400">
            Password: <span className='font-normal '>abccdefgh</span>
            </p>
            <p class="font-semibold text-gray-700 dark:text-gray-400">
            No of appointments : <span className='font-normal '>10</span>
            </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <button type="button" class="text-white bg-[#008080] py-2.5 px-8 mr-2 mb-3 text-sm font-medium focus:outline-none rounded-full">Default</button>
        <button type="button" class="py-2.5 px-8 mr-2 mb-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-[#008080] hover:bg-gray-100 ">Update</button>
        <p className='mb-4 cursor-pointer text-[#008080] text-lg'>Disable</p>
        </div>
      </div>
  )
}

export default UserCard