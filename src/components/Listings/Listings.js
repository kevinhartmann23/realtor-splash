import React from 'react';
import { Link } from 'react-router-dom'
import './Listings.css'

function formatCurrency(amount) {
  if (amount === 0) {
    return 'Not Reported'
  }

  return amount.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'USD'
  })
}

const Listings = ({ data, type }) => {
  let listingInfo;
  const typeToFormat = type.charAt(0).toUpperCase() + type.slice(1)
  console.log(type)
  if(type === 'rent'){
    listingInfo = data.map(listing => {
      const { listing_id, photos, community } = listing
        return (
            <div className='listing-wrapper'>
              <img className='listing-img' src={photos[0].href} key={listing_id} id={listing_id} alt={`Listing ${listing_id} for ${type}`} />
              <div className="details-wrapper">
                  <p className='price'>{`Listing Price: ${formatCurrency(community.price_max)}`}</p>
                <Link to={`/${type}/${listing_id}`} key={listing_id}>
                  <button className="details-button">Details</button>
                </Link>
              </div>
            </div>
        )
      })
    } else {
      listingInfo = data.map(listing => {
        const { listing_id, thumbnail, price } = listing
          return (
              <div className='listing-wrapper'>
                <img className='listing-img' src={thumbnail} key={listing_id} id={listing_id} alt={`Listing ${listing_id} for ${type}`} />
                <div className="details-wrapper">
                  <p className="price">{`Listing Price: ${formatCurrency(price)}`}</p>
                  <Link to={`/${type}/${listing_id}`} key={listing_id}>
                    <button className="details-button">Details</button>
                  </Link>
                </div>
              </div>
          )  
      })  
    }
  
    return (
      <section className='listings'>
        <h2 className="results">{`Listings For ${typeToFormat}...`}</h2>
        <div className="listing-grid">
           {listingInfo}
        </div>
      </section>
    )
}

export default Listings