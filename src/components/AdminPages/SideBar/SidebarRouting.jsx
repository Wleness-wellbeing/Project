import React from "react";
import SideBar from "./SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Queries from "../Queries";
import Issue from "../Issues";
import IssueCategory from "../IssueCategory";
import Users from "../Users";
import Questions from "../Questions";
import Blog from "../Blogs";
import Doctors from "../Doctors";
import DoctorDetailPage from "../DoctorDetailPage";

const SidebarRouting = () => {
  return (
        <SideBar>
        <Routes>
        <Route exact path="doctordetailpage" element={<DoctorDetailPage/>}/>
          <Route exact path="doctors" element={<Doctors/>}/>
          <Route exact path="queries" element={<Queries/>}/>
          <Route exact path="issues" element={<Issue/>}/>
          <Route exact path="issuecategory" element={<IssueCategory/>}/>
          <Route exact path="users" element={<Users/>}/>
          <Route exact path="questions" element={<Questions/>}/>
          <Route exact path="blogs" element={<Blog/>}/>
        </Routes>
      </SideBar>
  );
};

export default SidebarRouting;
