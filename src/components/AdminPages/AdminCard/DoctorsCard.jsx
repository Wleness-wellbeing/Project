import React from "react";
import DoctorImg from "../../../assets/doctor.png";
import {Link} from 'react-router-dom'

const DoctorsCard = () => {
  return (
    <div className="shadow-2xl h-[380px] w-[250px] ">
    <figure class="bg-white p-4 rounded-2xl">
      <div class="mb-2">
        <img src={DoctorImg} alt="" class="w-full object-cover block" />
      </div>
      <figcaption>
        <h3 class="text-2xl font-semibold">Dr. Christina</h3>
        <h5 class="text-lg font-medium">Consultant</h5>
        <p class="text-slate-500 leading-5 mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          fugiat veniam facilis!
        </p>
        <Link to="/admin/doctordetailpage">
  <button type="button" className="text-white bg-[#008080] py-1.5 px-8 mr-2 mb-3 text-lg font-medium focus:outline-none rounded-full">View Profile</button>
</Link>

      </figcaption>
    </figure>
    </div>
  );
};

export default DoctorsCard;
