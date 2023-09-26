import React from "react";
import { anjuBottom, anjuHeader, anjuMid, leaf } from "../../assets";
import CertificateList from "./Certificate";

const certificatesData = [
  {
    certificate: "Personal Certified Coach (PCC, ICF US)",
  },
  {
    certificate: "Certified NLP Master Practitioner & NLP",
  },
  {
    certificate:
      "Certified on EI Assessment & DISC Profiling from Thomas Assessment Pvt Ltd.",
  },
  {
    certificate:
      "Coach & trainer from NLP Coaching Academy (ABNLP) & MEPSC (NSDC)",
  },
  {
    certificate: "Certified Counsellor by IAPCCT",
  },
  {
    certificate: "TTT by Dale Carnegie Inc.",
  },
  {
    certificate: "Licensed EI Trainer IAPCCT",
  },
  {
    certificate: "T&D Diploma from ISTD",
  },
];

export default function Anju() {
  return (
    <main>
      <header className=" relative overflow-x-clip bg-secondary/10  lg:py-28 ">
        <div class="container mx-auto my-8 flex flex-col md:flex-row">
          <div class="flex items-center justify-center md:w-2/5 md:justify-start">
            <img src={anjuHeader} alt="Saloni Header" class="" />
          </div>
          <div class="w-full md:w-3/5">
            <h2 class="subheading py-4">Dr. Anju Chawla</h2>
            <h3 class="py-4 text-lg font-bold">
              Coach | Speaker | Trainer | Assessor
            </h3>
            <p class="para text-justify">
              Dr. Anju Chawla is a dedicated advocate for harnessing the power
              of Emotional Intelligence (EI) to transform lives and achieve
              personal and professional goals. With over two decades of
              experience in coaching and mentoring, Dr. Chawla firmly believes
              that every individual possesses the incredible potential of EI,
              which she endeavours to unlock through her work. As a seasoned
              coach, she understands the invaluable role that an external
              perspective plays in personal growth and development.
            </p>
          </div>
        </div>{" "}
      </header>

      <div class="container mx-auto text-center">
        <h2 class="subheading my-4">
          About <span className="heading-primary">Anju Chawla</span>
        </h2>
        <p class="para text-justify">
          Dr. Chawla's extensive clientele reflects her wide-reaching impact.
          She has worked with professionals and students from diverse
          backgrounds, from SAARC civil servants and corporate directors to
          engineers, doctors, and management faculties.
        </p>{" "}
        <br></br>
        <p class="para text-justify">
          Her expertise has benefited renowned organizations such as Accenture
          India, Maruti Suzuki, and Central Bank of India, among many others.
        </p>{" "}
        <br></br>
        <p class="para text text-justify">
          With a track record of empowering over 60,000 individuals and earning
          the trust of more than 70 organizations, Dr. Anju Chawla's legacy is
          defined by her unwavering commitment to helping people realize their
          true potential and become exceptional performers in their respective
          fields.
        </p>
        <p class="para text text-justify">
          As a catalyst for positive change and growth, her passion for
          Emotional Intelligence and extensive experience make her a trusted and
          influential figure in coaching and personal development.
        </p>
      </div>
      <div class="my-4 text-center">
        <h2 class="subheading">
          Why work with <span class="heading-primary">Coach Anju?</span>
        </h2>
      </div>

      <div class="container mx-auto flex flex-col md:flex-row">
        <div class="w-full md:w-2/5">
          <img src={anjuMid} alt="anju Mid" class="w-full" />
        </div>
        <div class="my-9 w-full md:ml-8 md:w-3/5">
          <div class="mb-8 rounded-xl border-2 border-teal-400 bg-white p-4 shadow-md hover:bg-teal-400 hover:text-white md:p-8">
            Dr. Anju Chawla specializes in enhancing emotional well-being
            through EI profiles, coaching, and training. Her focus areas include
            leadership, emotional wellness, conflict resolution, and
            relationship management.
          </div>
          <div class=" rounded-xl border-2 border-teal-400 bg-white p-4 shadow-md hover:bg-teal-400 hover:text-white md:p-8">
            Dr. Chawla, renowned for her unwavering commitment to ethical
            practice, delivers bespoke solutions encompassing Neuro Linguistic
            Programming, Emotional Intelligence, and other specialized
            disciplines. Her profound expertise, cultivated through a diverse
            clientele, empowers organizations and individuals alike, elevating
            their emotional intelligence and overall professional well-being.
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
                <img src={leaf} alt="Icon 1" class=" mr-1 h-4 w-4" />
                Executive and Life Coaching
              </li>
              <li class="flex items-center py-2">
                <img src={leaf} alt="Icon 2" class="mr-1 h-4 w-4" />
                Transition Experts with speciality in technology sector
              </li>
              <li class="flex items-center py-2">
                <img src={leaf} alt="Icon 3" class="mr-1 h-4 w-4" />
                Leadership Coaching
              </li>
              <li class="flex items-center py-2">
                <img src={leaf} alt="Icon 4" class="mr-1 h-4 w-4" /> Emotional
                Intelligence
              </li>
              <li class="flex items-center py-2">
                <img src={leaf} alt="Icon 5" class="mr-1 h-4 w-4" />{" "}
                Communication Trainings
              </li>
              <li class="flex items-center py-2">
                <img src={leaf} alt="Icon 6" class="mr-1 h-4 w-4" />
                Mentorship To professionals Engineers, CAs, MBAs
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto my-auto transform md:mt-0 md:translate-x-0 lg:my-auto lg:-translate-x-60 lg:text-center">
          <img
            src={anjuBottom} // Replace with your image URL
            alt="Description of the image"
            className=""
          />
        </div>
      </div>

      <div class="container mx-auto my-8 text-center">
        <h2 class="subheading my-4 text-center">Certifications</h2>
        <div class="my-10 text-center">
          <CertificateList certificatesData={certificatesData} />
        </div>
      </div>
    </main>
  );
}
