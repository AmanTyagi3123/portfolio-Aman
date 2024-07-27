import React, { useState } from 'react'
import './interests.css'
import InterestsData from '../data/InterestsData'
import InterestItem from './InterestItem'

function Interests() {
  
    const [interests, setInterests] = useState(InterestsData)

    return (
    <div className="container interests">
        <div className='section-title'>
        <h2>Interests</h2>
        <div className="row">
            {
                interests.map(interest=>(
                    <InterestItem key={interest._id} interest={interest} />
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default Interests