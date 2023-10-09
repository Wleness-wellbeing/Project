import React, { useState } from "react";
import ExpertsCalendar from "./ExpertsCalendar";

const UpdateExpertSlots = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [slots, setSlots] = useState([]);

  // Sample appointment data (Replace this with a backend API call)
  function generateAppointmentData(startDate, endDate, timeSlots) {
    const appointmentData = [];

    const currentDate = new Date(startDate);
    const endDateObj = new Date(endDate);

    while (currentDate <= endDateObj) {
      const formattedDate = currentDate.toISOString().slice(0, 10);
      // You can generate different time slots for different days here
      const slotsForThisDay =
        currentDate.getDay() === 0 ? ["10:00 AM", "2:00 PM"] : [...timeSlots]; // Example logic
      appointmentData.push({
        date: formattedDate,
        timeSlots: [...slotsForThisDay],
      });

      // Increment the current date by one day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return appointmentData;
  }

  const startDate = "2023-10-01";
  const endDate = "2023-10-30";
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 PM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 AM",
    "04:00 AM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
  ];

  const appointmentData = generateAppointmentData(
    startDate,
    endDate,
    timeSlots,
  );

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  // Function to check if time slots are available for the selected date
  const areTimeSlotsAvailable = () => {
    const selectedAppointment = appointmentData.find(
      (appointment) => appointment.date === selectedDate,
    );
    return selectedAppointment && selectedAppointment.timeSlots.length > 0;
  };

  return (
    <form action="" method="post">
      <div className="gap-2 lg:flex lg:gap-8">
        {/* Calendar Section */}
        <div className="mb-6 lg:mb-0 lg:w-1/2">
          <ExpertsCalendar
            appointmentData={appointmentData}
            onDateSelect={handleDateSelect}
            updateslots={setSelectedSlots}
            updatedslots={selectedSlots}
          />
        </div>

        {/* Time Slot Section */}
        <div className="lg:w-1/2">
          <h2 className="mb-4 text-center text-xl font-medium ">
            {selectedDate ? (
              <>
                <span>Select Time Slots for </span>
                <span className="font-bold">{selectedDate}</span>
              </>
            ) : (
              "Select a date"
            )}
          </h2>

          <div className="flex flex-wrap justify-center">
            {timeSlots.map((slot, i) => {
              return (
                <span
                  key={i}
                  onClick={() => setSelectedSlots(slot)}
                  className={`mr-2 mt-2 inline-block cursor-pointer rounded-full border-2 border-primary-300 px-4 py-2.5 text-center text-sm font-medium text-primary-300 transition-all hover:bg-primary-300 hover:text-white ${
                    false ? "bg-primary-300 text-white" : "bg-white"
                  }`}
                >
                  {slot}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="btn-one">Update</button>
      </div>
    </form>
  );
};

export default UpdateExpertSlots;
