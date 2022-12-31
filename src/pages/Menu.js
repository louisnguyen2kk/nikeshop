import React from 'react'
import Layout from '../components/Layout/Layout'
import { MenuList } from '../data/data'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import '../styles/Menu.css'
// import { hover } from '@testing-library/user-event/dist/hover'
const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {MenuList.map(menu => (
          <Card sx={{ maxWidth: '390px', m: 2 }}>
            <CardActionArea>
              <CardMedia className='img-menu'
                sx={{ minHeight: '400px' }}
                component={'img'}
                src={menu.Image}
                alt={menu.name}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography className='h1' variant='h5' gutterBottom component={'div'}>
                  {menu.name}
                </Typography>
                <Typography className='p' variant='body2'>
                  {menu.description}
                </Typography>
                <Typography variant='h2' >
                 <Button  className='hover' sx={{bgcolor:'lightskyblue', color:'black', }} >Price : ${menu.price}</Button> 
 
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  )
}

export default Menu