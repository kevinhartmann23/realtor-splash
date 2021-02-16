import React from 'react'
import { Link } from 'react-router-dom'
import './Listings.css'

const ListingDetails = ({props, type}) => {
  return (
    <div>
      <Link to={`/${type}`} className='back-btn'>◀ back</Link>
      <h1>Address:</h1>
      <p>More Details here</p>
    </div>
  )
}

export default ListingDetails