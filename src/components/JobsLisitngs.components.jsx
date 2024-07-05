import React from 'react'
import {useState,useEffect} from 'react'
import JobListing from './JobListing.components'
import Spinner from './Spinner.component';

function JobsLisitng({isHome}) {
  const[jobs,setJobs]=useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const fetchJobs = async()=>{
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
      try {
        const res = await fetch(apiUrl)  //fetching data from backend 
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
        
          {/*<!-- Job Listing  --> by map function */ }
          {loading? (<Spinner/>):(
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job)=>(
            <JobListing key={job.id} job={job}></JobListing>
          ))}
            </div>
          )}
      </div>
    </section>
  )
}

export default JobsLisitng