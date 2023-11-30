import React from "react";
import { Chart, ArcElement, Tooltip, Legend, controllers } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useLocation } from "react-router-dom";

import CoachExpertise from "../../components/Coach/CoachExpertise";
import { assessment1, resultAdhd } from "../../assets";
import DoctorsCard from "../../components/DoctorsCard";
import getExperts from "../Experts/getExperts";
import { assessments } from "../../data/mainAssessment";
import getBlogs from "../Blogs/getBlogs";
import BlogCard from "../../components/Cards/BlogCard";

Chart.register(ArcElement, Tooltip, Legend);

// Options for the chart
const options = {
  rotation: -30 * Math.PI, // Rotate the chart to start from the top
  circumference: 60 * Math.PI, // Set the circumference to cover 1.5 times of PI
};

export default function AssessmentResult() {
  const { allBlogPosts } = getBlogs();

  const location = useLocation();
  const result = location.state?.data;

  let chartScore = result.all_scores;

  // Chart data
  const data = {
    labels: ["Normal", "Mild", "Moderate", "Severe"],
    datasets: [
      {
        label: "# of Score",
        data: [
          chartScore["Never"],
          chartScore["Sometimes"],
          chartScore["Often"],
          chartScore["Always"],
        ],
        backgroundColor: [
          "rgba(0, 255, 0, .2)",
          "rgba(255, 255, 0, .2)",
          "rgba(255, 165, 0, .2)",
          "rgba(255, 0, 0, .2)",
        ],
        borderColor: [
          "rgba(0, 255, 0, .2)",
          "rgba(255, 255, 0, .2)",
          "rgba(255, 165, 0, .2)",
          "rgba(255, 0, 0, .2)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Get image and about info
  let result_data = assessments
    .filter((key) => key.slug == result.name)
    .map((value) => [value.about, value.result_image])[0];

  const { status, doctorDetails } = getExperts();

  if (!status) {
    return <div className="mb-5 text-center">Loading...</div>;
  }
  return (
    <>
      <section className="py-8">
        <div className="container mx-auto grid lg:grid-cols-2">
          <div className="relative w-96">
            <Doughnut data={data} options={options} />
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
              <p className="text-center text-xl font-bold">{result.score}/60</p>
              <p className="text-center text-sm font-semibold text-gray-500">
                {result.level}
              </p>
            </div>
          </div>
          <div className="place-self-center">
            <dl>
              <dt className="font-semibold">Mild</dt>
              <dd className="mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                repellat quidem exercitationem, minima obcaecati eius
                repudiandae
              </dd>
              <dt className="font-semibold">Moderate</dt>
              <dd className="mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                repellat quidem exercitationem, minima obcaecati eius
                repudiandae
              </dd>
              <dt className="font-semibold">Severe</dt>
              <dd className="mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                repellat quidem exercitationem, minim rerum quis eos quia?
              </dd>
            </dl>
          </div>
        </div>
      </section>

      {/* <section className="container mx-auto mb-8">About us section</section> */}
      <CoachExpertise
        heading={"About " + result.name}
        image={result_data[1]}
        lists={result_data[0]}
      />

      {/* Specialist Doctors */}
      <section className="container mx-auto">
        <div className="grid-cols-[repeat(4, minmax(280, 1fr))] grid gap-5 p-4 sm:grid-cols-2 lg:py-12 3xl:gap-6">
          {doctorDetails.map((value, i) => {
            return <DoctorsCard key={i} data={value} />;
          })}
        </div>
      </section>

      <section className="bg-primary-10">
        {/* ============== Blogs ============= */}
        <div className="container mx-auto grid gap-4 rounded-xl pb-4 sm:grid-cols-2 lg:mb-8 lg:grid-cols-3 lg:gap-6 lg:py-10">
          {allBlogPosts.map((value, i) => {
            return <BlogCard key={i} data={value} />;
          })}
        </div>
      </section>
    </>
  );
}
