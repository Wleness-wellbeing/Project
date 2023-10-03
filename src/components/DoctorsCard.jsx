import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function DoctorsCard(props) {
  const slug = `/experts/profile/${props.data.slug}`; // slug for profile
  const bookNow = `/experts/booking/${props.data.slug}`; // slug for booking

  return (
    <figure className="rounded-2xl rounded-br-[5rem] border-2 border-primary-300 bg-white p-3 transition-all hover:shadow-lg hover:shadow-primary-50">
      <div className="mb-1 flex">
        <div className="relative flex w-[35%] items-center justify-center lg:w-2/5">
          <Link to={slug}>
            <img
              src={props.data.image}
              alt=""
              className="mb-2 block w-full rounded-2xl object-cover lg:w-40 lg:rounded-l-2xl"
            />
          </Link>
        </div>
        <figcaption className="w-[65%] px-4 lg:w-3/5 3xl:px-6">
          <hgroup>
            <h3 className="text-xl font-semibold lg:text-2xl">
              <span>{props.data.name}</span>
            </h3>
            <h5 className="font-semibold text-primary-400">
              {props.data.profession}
            </h5>
            <h4 className="text-sm font-semibold text-slate-500 lg:text-lg">
              {props.data.experience}
            </h4>
          </hgroup>
          <div className="text-xs font-medium lg:my-3 lg:text-base">
            <p className="leading-5 text-slate-600 lg:mb-2">
              Expertise: {props.data.expertise}
            </p>
            <p className="leading-5 text-slate-600">
              Speaks: {props.data.languages}
            </p>
            <h5 className="my-1 text-sm font-semibold text-primary-400 lg:text-lg">
              Session Starts
              <FontAwesomeIcon icon={faIndianRupee} className="mx-1 text-sm" />
              {props.data.price}
            </h5>
          </div>
        </figcaption>
      </div>
      <div className="flex">
        <div className="w-[35%] lg:w-2/5">
          <Link
            to={slug}
            className="mx-auto block w-fit rounded-full border-2 border-primary-400 px-3 py-2 text-center text-xs font-semibold text-primary-400 transition-all hover:bg-primary-400 hover:text-white lg:px-6 lg:text-sm"
          >
            View Profile
          </Link>
        </div>
        <div className="w-[65%] px-4 lg:w-3/5 3xl:px-6">
          <Link
            to="https://deba-shree.dayschedule.com/talk-with-debashree-das-gupta"
            className="block w-fit rounded-full bg-primary-400 px-4 py-2.5 text-center text-xs font-semibold text-white transition-all hover:bg-primary-300 lg:px-6 lg:py-2.5 lg:text-sm"
          >
            Book Now
          </Link>
        </div>
      </div>
    </figure>
  );
}

// export default function DoctorsCard(props) {
//   const slug = `/experts/profile/${props.data.slug}`;
//   return (
//     <figure className="rounded-2xl rounded-br-[7rem] border-2 border-primary-300 bg-white transition-all hover:shadow-lg hover:shadow-primary-50">
//       <div className="relative">
//         <Link to={slug}>
//           <img
//             src={props.data.image}
//             alt=""
//             className="block w-full rounded-t-2xl object-cover"
//           />
//         </Link>
//         <span className="absolute bottom-0 left-5 bg-white px-2 text-lg font-bold text-primary-300">
//           {props.data.profession}
//         </span>
//       </div>
//       <figcaption className="px-4 py-2 pb-6 3xl:px-6">
//         <hgroup>
//           <h3 className="flex items-center justify-between text-2xl font-semibold">
//             <span>{props.data.name}</span>
//             {/* <HeartIcon /> */}
//           </h3>
//           <h4 className="mb-2 text-lg font-semibold text-slate-500 xs:text-xl">
//             {props.data.experience}
//           </h4>
//         </hgroup>
//         <div className="font-medium">
//           <p className="leading-5 text-slate-600">
//             Expertise: {props.data.expertise}
//           </p>
//           <p className="leading-5 text-slate-600">
//             Speaks: {props.data.languages}
//           </p>
//           <h5 className="my-2 mb-5 text-lg font-semibold text-primary-400">
//             Session Starts
//             <FontAwesomeIcon icon={faIndianRupee} className="mx-1 text-sm" />
//             {props.data.price}
//           </h5>
//           <div className="space-x-2 space-y-2">
//             <Link
//               to="/appointment/checkout"
//               className="btn-one inline-block !text-sm"
//             >
//               Book Now
//             </Link>
//             <Link
//               to={slug}
//               className="btn-one inline-block border-2 border-primary-400 !bg-transparent !py-2 !text-sm !text-primary-400"
//             >
//               View Profile
//             </Link>
//           </div>
//         </div>
//       </figcaption>
//     </figure>
//   );
// }
