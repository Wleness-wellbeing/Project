import React from "react";
import {
  saloniBottom,
  saloniHeader,
  saloniMid,
  anjuBottom,
  anjuHeader,
  anjuMid,
  leaf,
  andreaBottom,
  andreaHeader,
  andreaMid,
} from "../../assets";
import CertificateList from "./Certificate";

const certificatesData = [
  {
    certificate:
      "Professional Certified Coach (PCC) of the International Coach Federation (ICF)",
  },
  {
    certificate: "Hogan Certified Coach",
  },
  {
    certificate:
      "Six Seconds Certified EQ Assessor from The Emotional Intelligence Network",
  },
  {
    certificate:
      "Certified Facilitator of LEGO® SERIOUS PLAY® Methodology (LSP).",
  },
];

export default function Andrea() {
  return (
    <main>
      <header className=" relative overflow-x-clip bg-secondary/10  lg:py-28 ">
        <div class="container mx-auto my-8 flex flex-col  md:flex-row">
          <div class="flex items-center justify-center md:w-2/5 md:justify-start">
            <img src={andreaHeader} alt="Saloni Header" class="" />
          </div>
          <div class="w-full md:w-3/5">
            <h2 class="subheading py-4">Andrea Bianchi</h2>
            <h3 class="py-4 text-lg font-bold">
              Executive Coach | Professional Coach PCC ICF | HOGAN & EQ Assessor
              | Brain Profiler | Speaker
            </h3>
            <p class="para text-justify">
              Andrea Bianchi is a highly accomplished professional with a
              diverse range of skills and expertise. A PCC ICF-level Coach and
              Senior Trainer, offers over a decade of Project Management
              experience in Learning and development. With a Master's degree
              from the University of Milan, he provides coaching, consultancy,
              and training to corporations on leadership development, managing
              transitions, change management, and time management.
            </p>
          </div>
        </div>{" "}
      </header>

      <div class="container mx-auto py-16 pb-16 text-center">
        <h2 class="subheading py-12">
          About <span className="heading-primary">Andrea Bianchi</span>
        </h2>
        <p class="para py-6 text-justify">
          Andrea's commitment to personal and professional growth is evident
          through his involvement in various coaching and assessment
          methodologies, including Hogan®, DISC, and EQ Six Seconds.
        </p>{" "}
        <br></br>
        <p class="para text-justify">
          Furthermore, his role as a professor at the Catholic University of the
          Sacred Heart of Milan and his founding of Brand Better Learning
          showcase his dedication to sharing knowledge and fostering innovation.
        </p>{" "}
        <br></br>
        <p class="para text text-justify">
          Beyond his professional endeavors, Andrea's role as a father of three
          underscores his value of growth and empowerment, as he actively
          promotes Talent Orientation and Career Coaching courses in educational
          and social sectors during his free time.
        </p>
      </div>
      <div class="my-4 text-center">
        <h2 class="subheading">
          Why work with <span class="heading-primary">Coach Andrea?</span>
        </h2>
      </div>

      <div class="container mx-auto flex flex-col md:flex-row">
        <div class="w-full md:w-2/5">
          <img src={andreaMid} alt="Saloni Mid" class="w-full" />
        </div>
        <div class="my-9 w-full md:ml-8 md:w-3/5">
          <div class="mb-8 rounded-xl border-2 border-teal-400 bg-white p-4 shadow-md hover:bg-teal-400 hover:text-white md:p-8">
            Andrea Bianchi offers a wealth of expertise in coaching, training,
            and leadership development. With a strong foundation in Project
            Management and a commitment to professional excellence as a PCC
            ICF-level Coach and Senior Trainer, he provides practical,
            results-oriented guidance. Andrea customizes programs using
            assessment methodologies like Hogan®, DISC, and EQ Six Seconds to
            meet unique needs and goals
          </div>
          <div class=" rounded-xl border-2 border-teal-400 bg-white p-4 shadow-md hover:bg-teal-400 hover:text-white md:p-8">
            As a professor at the Catholic University of the Sacred Heart of
            Milan, Andrea Bianchi stays at the forefront of innovative practices
            and research. His commitment to continuous learning benefits clients
            seeking leadership development, change management, and more.
            Partnering with Andrea means tapping into a seasoned professional
            deeply invested in your success and growth.
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
                Certified LEGO Facilitator
              </li>
              <li class="flex items-center py-2">
                <img src={leaf} alt="Icon 2" class="mr-1 h-4 w-4" />
                Executive Coaching
              </li>
              <li class="flex items-center py-2">
                <img src={leaf} alt="Icon 3" class="mr-1 h-4 w-4" /> Workshops
                for Leaders
              </li>
              <li class="flex items-center py-2">
                <img src={leaf} alt="Icon 4" class="mr-1 h-4 w-4" /> Certified
                Assessor of Emotional Quotient
              </li>
              <li class="flex items-center py-2">
                <img src={leaf} alt="Icon 5" class="mr-1 h-4 w-4" /> Transition
                Expert
              </li>
              <li class="flex items-center py-2">
                <img src={leaf} alt="Icon 6" class="mr-1 h-4 w-4" /> Designing
                Innovative & Engaging Assignments
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto my-auto transform md:mt-0 md:translate-x-0 lg:my-auto lg:-translate-x-60 lg:text-center">
          <img
            src={andreaBottom} // Replace with your image URL
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
