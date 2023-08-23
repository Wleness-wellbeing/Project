// import React from "react";

// export default function AdminDoctors() {
//   return (
//     <div className="w-[824px] rounded-lg bg-primary-50/50 p-6 xl:w-[900px]">
//       <article className="mb-6">
//         <div className="mb-4 flex justify-between">
//           <span className="text-sm text-slate-400">Today</span>
//           <a href="#" className="text-sm text-slate-400 hover:text-blue-600">
//             View All
//           </a>
//         </div>
//       </article>
//     </div>
//   );
// }
import React from "react";
import { doctor } from "../../assets";
import { Link } from "react-router-dom";

const AdminDoctors = () => {
  return (
    <div className="h-[380px] w-[250px] shadow-2xl ">
      <figure class="rounded-2xl bg-white p-4">
        <div class="mb-2">
          <img src={doctor} alt="" class="block w-full object-cover" />
        </div>
        <figcaption>
          <h3 class="text-2xl font-semibold">Dr. Christina</h3>
          <h5 class="text-lg font-medium">Consultant</h5>
          <p class="mb-4 leading-5 text-slate-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            fugiat veniam facilis!
          </p>
          <Link to="/admin/doctordetailpage">
            <button
              type="button"
              className="mb-3 mr-2 rounded-full bg-[#008080] px-8 py-1.5 text-lg font-medium text-white focus:outline-none"
            >
              View Profile
            </button>
          </Link>
        </figcaption>
      </figure>
    </div>
  );
};

export default AdminDoctors;
