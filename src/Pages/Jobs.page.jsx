import React from 'react'
import JobsLisitng from '../components/JobsLisitngs.components'

const JobsPage = () => {
  return (
    <section className="bg-blue-50 px-4 py-6">
      <JobsLisitng isHome={false}></JobsLisitng>
    </section>
  )
}

export default JobsPage