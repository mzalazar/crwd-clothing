import React from 'react'
import './menu-item.scss'

const MenuItem = ({ title, subtitle, imageUrl, size }) => {
  console.log('title: ', title);
  console.log('subtitle: ', subtitle);
  console.log('imageUrl: ', imageUrl);
  console.log('size: ', size);
  return (
    <div className={`${size} menu-item`}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  )
}

export default MenuItem
