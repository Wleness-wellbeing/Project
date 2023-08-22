// import React from "react";

// export default function AppointmentScheduler() {
//   return (
//     <div>
//       <button
//         type="button"
//         onClick="daySchedule.initPopupWidget({ url: 'https://meet.dayschedule.com' });"
//       >
//         Book an appointment
//       </button>
//     </div>
//   );
// }

import React, { useEffect } from "react";

const AppointmentScheduler = () => {
  useEffect(() => {
    const initPopupWidget = () => {
      // Assuming you have the script loaded for daySchedule
      if (typeof daySchedule !== "undefined") {
        daySchedule.initPopupWidget({
          url: "https://meet.dayschedule.com",
        });
      }
    };

    initPopupWidget();
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  return <div>{/* Your component's JSX */}</div>;
};

export default AppointmentScheduler;
