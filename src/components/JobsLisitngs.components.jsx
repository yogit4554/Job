import React from 'react'
import {useState,useEffect} from 'react'
import JobListing from './JobListing.components'

function JobsLisitng({isHome}) {
  const[jobs,setJobs]=useState([]);
  const [loding,setLoading] = useState(true);

  useEffect(()=>{
    const fetchJobs = async()=>{
      try {
        const res = await fetch('http://localhost:8000/jobs')  //fetching data from backend 
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log(`error message :${error.message}`)
      }finally{
        setLoading(false);
      }
    } 
    fetchJobs();
  },[])

  return (
    <section class="bg-blue-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs':'Browse Jobs'}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/*<!-- Job Listing  --> by map function */ }
          {loding? (<h2>Loading.....</h2>):(
            <>
            {jobs.map((job)=>(
            <JobListing key={job.id} job={job}></JobListing>
          ))}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default JobsLisitng