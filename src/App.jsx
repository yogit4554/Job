import React from 'react'
import 
{
  Route,
  createBrowserRouter,
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom'
import HomePage from './Pages/Home.page';
import NavbarLayout from './layouts/Navbar.layout'; // layout is one elemtn which have to show in all pages 
import JobsPage from './Pages/Jobs.page';
import NotfoundPage from "./Pages/Notfound.page"
import JobPage,{jobLoader} from './Pages/JobPage.page';
import { AddJob } from './Pages/AddJob.page';
import EditJob from './Pages/EditJob.page';

const App = () => {
  /// add New Job
  const addJob= async  (newJob)=>{
    const res =await fetch('api/jobs',{
      method:'POST',
      headers:{
        'content-Type':'application/json',
      },
      body:JSON.stringify(newJob),
    });
    return;
  }

  //Delete
  const deleteJob = async(id)=>{
    const res = await fetch(`/api/jobs/${id}`,{
      method:'DELETE'
    });
    return;
  }

  // upadte
  const updateJob= async  (job)=>{
    const res =await fetch(`/api/jobs/${job.id}`,{
      method:'PUT',
      headers:{
        'content-Type':'application/json',
      },
      body:JSON.stringify(job),
    });
    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<NavbarLayout/>}>
    <Route index element={<HomePage/>} />
    <Route path='/jobs' element={<JobsPage/>} />
    <Route path='/add-job' element={<AddJob  addJobSubmit={addJob}/>}/>
    <Route path='/job/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
    <Route path='/edit-job/:id' element={<EditJob updateJobSubmit={updateJob}/>} loader={jobLoader} />
    <Route path='*' element={<NotfoundPage/>}/>
    </Route>
  ));
  return <RouterProvider router={router}/>
}

export default App;