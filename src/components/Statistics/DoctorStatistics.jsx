import React from "react";
import StatisticsBlock from "../StatisticsBlock";

export default function DoctorStatistics() {
  return (
    <section className="container mx-auto grid grid-cols-2 items-center justify-between gap-4 pb-14 lg:grid-cols-4 lg:gap-x-20">
      <StatisticsBlock number="5/5" suffix="" subtitle="User Rating" />
      <StatisticsBlock number={160} suffix="+" subtitle="Users Recommend" />
      <StatisticsBlock number={2} suffix=" Hr" subtitle="Last Booked" />
      <StatisticsBlock number={22} suffix="" subtitle="Ongoing Sessions" />
    </section>
  );
}
