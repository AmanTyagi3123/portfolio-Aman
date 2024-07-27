import React from 'react'

function InterestItem({interest}) {
  return (
    <div className="col-lg-3 col-md-4 mt-4">
        <div className="icon-box">
            <i className={interest.icon} style={{color: interest.color}}></i>
            <h3>{interest.name}</h3>
        </div>
    </div>
  )
}

export default InterestItem