import React,{useState,useEffect} from 'react'
import DoctorsCard from './AdminCard/DoctorsCard'

const Doctors = () => {

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
            <p>Newly Registered</p>
            <p className='cursor-pointer'>View All</p>
        </div>
        <div className='flex flex-row flex-wrap justify-evenly mb-4'>
            <DoctorsCard/>
            <DoctorsCard/>
            <DoctorsCard/>
            <DoctorsCard/>
        </div>
        <div className='flex flex-row justify-between p-4'>
            <p>Approved</p>
            <p className='cursor-pointer'>View All</p>
        </div>
        <div className='flex flex-row flex-wrap justify-evenly pb-12'>
            <DoctorsCard/>
            <DoctorsCard/>
            <DoctorsCard/>
            <DoctorsCard/>
            
        </div>
    </div>

    </div>
  )
}

export default Doctors