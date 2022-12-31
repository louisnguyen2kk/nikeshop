import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
import '../styles/About.css'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 17, textAlign: 'center', p: 2, '& h4': {
          fontWeight: 'bold',
          my: 2,
          fontSize: '2rem', '@media (max-width: 600px)': {
            mt: 0,
            fontSize: '1rem'
          }
        }
      }}>
        <Typography variant='h4'>
          Welcome To  Nike Shop
        </Typography>
        <p className='pp'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.

          Contact Detail
          1800000000 (torollfree)
          ntqitdeveloper@gmail.com
          +8493516884

        </p>
        <br />
        <p className='pp'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.

          Contact Detail
          1800000000 (torollfree)
          ntqitdeveloper@gmail.com
          +8493516884

        </p>
      </Box>
    </Layout>
  )
}

export default About