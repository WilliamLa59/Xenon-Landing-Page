import React from 'react'

export const Walkthrough = () => {
  return (
    <div className='wlkthru-container'>
        <div className='wlkthru-header'>
            <h1>How it works</h1>
        </div>
        <div className='wlkthru-implementation'>
            <h2>Quick implementation</h2>
            <p>
                We want to have thing up and running for you and your employees as fas as possible. 
                Implementing our services requires zero integration. We can have your organization up and running within a week.
            </p>
        </div>
        <div className='wlkthru-reporting'>
            <h2>Robust reporting</h2>
            <p>
                Respecting the confidentiality of your members doesn't mean that you need to be kept in the dark over how they're doing on Xenon.
                Monitor utilization rates, assess mutual stressors, review satisfaction scores, and track outcomes and overall effectiveness.
            </p>
        </div>
        <div className='wlkthru-mangement'>
            <h2>Dynamic member management</h2>
            <p>
               As an organization, you need a program that is flexible and allows you to do things the way you want to. 
               Xenon provides you with full control over your plan. You'll be able to add/remove members as needed and see utilization rates just to name a few features.
            </p>
        </div>
    </div>
  )
}
