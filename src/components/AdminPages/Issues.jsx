import React,{useEffect,useState} from "react";
import AddCard from "./AdminCard/AddCard";
import CardDetail from "./AdminCard/CardDetail";
import axios from "axios";

const Issues = () => {
  const ADMIN_TOKEN = sessionStorage.getItem("adminToken");
  const[fetchData,setFetchData]=useState();

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    const adminHeaders = {
      Accept: "application/json",
      Authorization: ADMIN_TOKEN,
    };
    axios
      .get("http://localhost:3000/admin/issues",{ headers: adminHeaders })
      .then((res) => {
        const data = res.data;
        console.log(res)
        setFetchData(data);
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
      });
  };

  // console.log(fetchData)

  return (
    <div className=" p-1">
      <p className="text-3xl font-semibold mb-6">Admin Page</p>
      <div className="bg-[#E9FBF8] rounded-md">
        <div className="flex flex-row justify-between p-4">
          <p>Today</p>
          <p className="cursor-pointer">View All</p>
        </div>
        <div className="flex flex-row flex-wrap justify-evenly">
          <AddCard />
          <CardDetail />
          <CardDetail />
          <CardDetail />
        </div>
        <div className="flex flex-row justify-between p-4">
          <p>Yesterday</p>
          <p className="cursor-pointer">View All</p>
        </div>
        <div className="flex flex-row flex-wrap justify-evenly">
          <AddCard />
          <CardDetail />
          <CardDetail />
          <CardDetail />
        </div>
      </div>
    </div>
  );
};

export default Issues;
