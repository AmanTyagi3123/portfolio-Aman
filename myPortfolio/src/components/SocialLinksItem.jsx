import React from 'react'
import './socialLinksItem.css'

function SocialLinksItem({name, link}) {
    return (
        <a href={link}>
            <i className={`bi bi-${name}`}></i>
        </a>
    )
}

export default SocialLinksItem