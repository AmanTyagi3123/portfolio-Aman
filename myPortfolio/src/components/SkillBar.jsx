import React from 'react'

function SkillBar({skill, active}) {
  return (
    <div className="progress">
        <span className="skill">
            {skill.name} <i className='val'>{skill.percentage}</i>
        </span>
        <div className="progress-bar-wrap">
            <div
                className='progress-bar'
                role='progressbar'
                aria-valuenow='100'
                aria-valuemin='0'
                aria-valuemax='100'
                style={active ? { width: skill.percentage } : { width: '1px' } } 
            ></div>
        </div>
    </div>
  )
}

export default SkillBar