import React from 'react'
import profile from '../../images/whaley.jpeg'
import './Home.css'

const Home = (props) => {
  return (
    <section className="home">
        <div className="info-wrapper">
          <img className='profile' src={profile} alt='Steve Whaley' />
          <div className="info">
            <h1 className="agent-name">Steve Whaley</h1>
            <p className="agent-title">Real Estate Broker Associate</p>
            <p className="agent-location">Boulder, Colorado</p>
          </div>
        </div>
      <div className="form-wrapper">
        <div className="image-wrapper">
          <h2>Ready to buy?</h2>
          <p>Let's find your dream home...</p>
        </div>
        <form className="form">
          <h3>Let's get started!</h3>
          <input
            type="text"
            placeholder="name"
            value=""
            > 
          </input>
          <input
            type="text"
            placeholder="phone number"
            value=""
            >
          </input>
          <input
            type="text"
            placeholder="email address"
            value=""
            >
          </input>
          <button>
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Home