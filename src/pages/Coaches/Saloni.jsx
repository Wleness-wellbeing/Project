import React from "react";
import {
  saloniBottom,
  saloniHeader,
  saloniMid,
  anjuBottom,
  anjuHeader,
  anjuMid,
  leaf,
} from "../../assets";
import CertificateList from "./Certificate";

const certificatesData = [
  {
    certificate:
      "Professional Certified Coach (PCC), International Coaching Federation",
  },
  {
    certificate: "Hogan Personality Assessments(Level 1 and Level 2)",
  },
  {
    certificate: "MBE (mindset, beliefs, emotions) Reprogramming",
  },
  {
    certificate:
      "Coaching for Performance(GROW Model & Situational Leadership)",
  },
  {
    certificate: "NLP Licensed Practitioner, Richard Bandler",
  },
  {
    certificate: "InnerMostShift Change & Transformation Coach",
  },
  {
    certificate: "InnerMostShift Value Conscious Leadership Coach",
  },
  {
    certificate: "InnerMostShift Vision & Motivation Coach",
  },
  {
    certificate: "InnetMostShift Resilience & Relationship Coach",
  },
  {
    certificate: "Operational Personality Questionnaire Assessment",
  },
  {
    certificate: "Situational Leadership  II, Blanchard",
  },
  {
    certificate: "Team Management System",
  },
];

export default function Saloni() {
  return (
    <main>
      <header className=" relative overflow-x-clip bg-secondary/10  lg:py-28 ">
        <div class="container mx-auto my-8 flex flex-col  md:flex-row">
          <div class="flex items-center justify-center md:w-2/5 md:justify-start">
            <img src={saloniHeader} alt="Saloni Header" class="" />
          </div>
          <div class="w-full md:w-3/5">
            <h2 class="subheading py-4">Saloni Gupta</h2>
            <h3 class="py-4 text-lg font-bold">Executive Coach | Speaker</h3>
            <p class="para text-justify">
              Saloni is a certified international executive coach with a strong
              passion for assisting leaders and organizations in navigating
              change and achieving success in a disruptive world. Her corporate
              career spans over 20 years, during which she held innovative HR
              leadership roles and served as a coach in various multinational
              companies across North America, Europe, and Asia.
            </p>
          </div>
        </div>{" "}
      </header>

      <div class="container mx-auto py-16 pb-16 text-center">
        <h2 class="subheading py-12">
          About <span className="heading-primary">Saloni Gupta</span>
        </h2>
        <p class="para py-6 text-justify">
          Throughout her career, she successfully led numerous high-profile
          projects to accelerate leadership development, foster talent growth,
          and drive cultural change in organizations such as Siemens, Nokia, and
          Grainger.
        </p>{" "}
        <br></br>
        <p class="para text-justify">
          In her most recent corporate role, she launched a groundbreaking
          global executive coaching program tailored for senior operations
          leaders at Amazon. This program incorporated a unique blend of
          in-person and online coaching sessions, both in group settings and on
          a one-on-one basis.
        </p>{" "}
        <br></br>
        <p class="para text text-justify">
          Her expertise in coaching has been recognized by the International
          Coaching Federation, which awarded her with the prestigious
          Professional Certified Coach (PCC) credentials. She has dedicated
          substantial time to her professional development, completing over 250
          hours of coach training and accumulating a wealth of experience
          through more than 800 hours of client coaching.
        </p>
      </div>
      <div class="my-4 text-center">
        <h2 class="subheading">
          Why work with <span class="heading-primary">Coach Saloni?</span>
        </h2>
      </div>

      <div class="container mx-auto flex flex-col md:flex-row">
        <div class="w-full md:w-2/5">
          <img src={saloniMid} alt="Saloni Mid" class="w-full" />
        </div>
        <div class="my-9 w-full md:ml-8 md:w-3/5">
          <div class="mb-8 rounded-xl border-2 border-teal-400 bg-white p-4 shadow-md hover:bg-teal-400 hover:text-white md:p-8">
            She is passionate about enabling leaders to lead with clarity by
            harnessing the power of self-awareness and motivation. Her solutions
            help leaders to understand their strengths and values, define
            purpose-driven goals, maximize their impact.
          </div>
          <div class=" rounded-xl border-2 border-teal-400 bg-white p-4 shadow-md hover:bg-teal-400 hover:text-white md:p-8">
            She begins by understanding desired leadership behaviors in your
            organization and aligning her process to your culture. Her
            data-driven needs analysis, culture alignment, and key stakeholder
            involvement ensure a successful engagement.
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col-reverse border-4 border-secondary/10 md:flex-row">
        <div className="w-full bg-secondary/10 md:w-3/4">
          <div className="my-16 w-full text-center md:ml-60 md:mr-0 md:w-2/4 md:text-justify">
            <div className="text-center">
              {" "}
              <h2 className="subheading ">Expertise</h2>
            </div>

            <ul class="list-disc">
              <li class="flex items-center py-2 ">
                <img src={leaf} alt="Icon 1" class=" mr-1 h-4 w-4" /> Expertise
                in working in Diversified industry with Global perspective
              </li>
              <li class="flex items-center py-2">
                <img src={leaf} alt="Icon 2" class="mr-1 h-4 w-4" /> Expert in
                aligning coaching processes with organizational culture
              </li>
              <li class="flex items-center py-2">
                <img src={leaf} alt="Icon 3" class="mr-1 h-4 w-4" /> Specializes
                in both individual and corporate executive coaching
              </li>
              <li class="flex items-center py-2">
                <img src={leaf} alt="Icon 4" class="mr-1 h-4 w-4" /> Proficient
                in mindset, beliefs, and emotions (MBE) reprogramming
              </li>
              <li class="flex items-center py-2">
                <img src={leaf} alt="Icon 5" class="mr-1 h-4 w-4" /> Expertise
                in Executive Assessment
              </li>
              <li class="flex items-center py-2">
                <img src={leaf} alt="Icon 6" class="mr-1 h-4 w-4" /> Talent
                Consulting for high potential leaders
              </li>
              <li class="flex items-center py-2">
                <img src={leaf} alt="Icon 7" class="mr-2 h-4 w-4" /> Training
                Design and Facilitations
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto my-auto transform md:mt-0 md:translate-x-0 lg:my-auto lg:-translate-x-60 lg:text-center">
          <img
            src={saloniBottom} // Replace with your image URL
            alt="Description of the image"
            className=""
          />
        </div>
      </div>

      <div class="container mx-auto my-8 text-center">
        <h2 class="subheading my-4 text-center">Certificates</h2>
        <div class="text-center">
          <CertificateList certificatesData={certificatesData} />
        </div>
      </div>
    </main>
  );
}
