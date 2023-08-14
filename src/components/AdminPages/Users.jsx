import React,{useEffect,useState} from "react";
import UserCard from './AdminCard/UserCard'
import axios from "axios";

const Users = () => {

  const[fetchData,setFetchData]=useState();

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    axios
      .get("")
      .then((res) => {
        const data = res.data.data;
        setFetchData(data.slice(0,3));
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
      });
  };

  return (
    <div className=' p-1'>
    <p className='text-3xl font-semibold mb-6'>Admin Page</p>
    <div className='bg-[#E9FBF8] rounded-md'>
        <div className='flex flex-row justify-between p-4'>
            <p>Today</p>
            <p className='cursor-pointer'>View All</p>
        </div>
        <div className='flex flex-row flex-wrap justify-evenly'>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>            
        </div>
    </div>
    </div>
  )
}

export default Users