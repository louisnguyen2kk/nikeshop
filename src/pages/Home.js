import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import Background from '../images/background.png'
import '../styles/Home.css'

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage: `url(${Background})`}} >
        <div className='headerContainer'>
          <h1>Nike Shop</h1>
          <p>Best Shop In Can Tho</p>
          <Link to={'/menu'}>
            <button>
              Order Now
            </button>
          </Link>

        </div>
      </div>
    </Layout>
  )
}

export default Home