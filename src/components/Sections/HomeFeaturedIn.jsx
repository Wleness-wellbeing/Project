import React from "react";
import { Link } from "react-router-dom";
import { homeFeaturedIn } from "../../assets";

function HomeFeaturedIn() {
  return (
    <section className="container mx-auto grid items-center gap-x-10 py-12 lg:grid-cols-2">
      <div className="mb-6 lg:mb-0">
        <img
          src={homeFeaturedIn}
          alt="Why wleness wellbeing"
          className="rounded-3xl border-2 border-primary-50 shadow-lg shadow-primary-50"
        />
      </div>
      <div>
        <h2 className="subheading">Featured In</h2>
        <p className="my-4 font-semibold text-slate-600">
          Discover the power of life coaching and therapy to overcome challenges
          and achieve your goals. Our top counselors, therapists,and coaches
          provide personalized guidance to help you confidently navigate life's
          ups and downs.
        </p>
        <p className="mb-6 mt-4 font-semibold text-slate-600">
          From stress management to career advancement, unlock your full
          potential with our proven techniques and support. Connect with the
          best psychologists, therapists, counselors, and mental health experts
          now via chat, phone, or video call
        </p>
        <Link to="/services/therapy" className="btn-one inline-block">
          Best Therapies
        </Link>
      </div>
    </section>
  );
}

export default HomeFeaturedIn;
