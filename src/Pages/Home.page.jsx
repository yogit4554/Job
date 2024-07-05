import React from 'react'
import Hero from '../components/Hero.components'
import HomeCards from '../components/HomeCards.componets'
import JobsLisitng from '../components/JobsLisitngs.components'
import ViewAllJobs from '../components/ViewAllJobs.components'

const HomePage = () => {
  return <>
  <Hero/>
  <HomeCards/>
  <JobsLisitng isHome={true}/>
  <ViewAllJobs/>
  </>
}

export default HomePage