import React, { useState } from "react";
import Calendar from "./Calendar";

const AppointmentComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

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

  const startDate = "2023-09-10";
  const endDate = "2023-09-30";
  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "3:00 PM",
    "4:00 PM",
    "2:00 AM",
    "3:00 AM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
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
    <div className="flex gap-8">
      {/* Calendar Section */}
      <div className="w-1/2 ">
        <Calendar
          appointmentData={appointmentData}
          onDateSelect={handleDateSelect}
        />
      </div>

      {/* Time Slot Section */}
      <div className="w-1/2  ">
        <h2 className="mb-4 text-center text-2xl font-medium ">
          {selectedDate ? (
            <>
              Available time slots for{" "}
              <span className="font-bold">{selectedDate}</span>
            </>
          ) : (
            "Select a date"
          )}
        </h2>

        {selectedDate && (
          <div>
            {areTimeSlotsAvailable() ? (
              appointmentData.map((appointment) => {
                if (appointment.date === selectedDate) {
                  return (
                    <div key={appointment.date}>
                      {appointment.timeSlots.map((timeSlot) => (
                        <button
                          key={timeSlot}
                          onClick={() => handleTimeSelect(timeSlot)}
                          className={`mr-2 mt-2 cursor-pointer rounded-full border-2 border-primary-300 px-4 py-2.5 text-center font-medium text-primary-300 transition-all hover:bg-primary-300 hover:text-white ${
                            selectedTime === timeSlot
                              ? "bg-primary-500 text-white"
                              : "bg-white"
                          }`}
                        >
                          {timeSlot}
                        </button>
                      ))}
                    </div>
                  );
                }
                return null;
              })
            ) : (
              <p className="my-auto text-center text-red-600">
                Slot is not available! Please try another day..
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentComponent;
