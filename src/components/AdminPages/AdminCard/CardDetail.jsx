import React from "react";

const CardDetail = () => {
  return (
    
      <div class="shadow-2xl border-2 w-[225px] h-[354px] rounded-lg m-4 bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          Category
        </h5>
        <a href="#">
          <img
            class="rounded-t-lg"
            src="https://images.ctfassets.net/zkw0qlnf0vqv/psycom_page_fid34274_asset_33951/44c58118d3b5aff32fe8fed5a1ab5eb6/what-is-anxiety-illustration?fm=webp&q=50&w=1200&h=600&fit=thumb"
            alt=""
          />
        </a>
        <div class="p-5">
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    
  );
};

export default CardDetail;
