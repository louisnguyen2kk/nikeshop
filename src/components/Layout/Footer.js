import React from 'react'
import { Box, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
// import { Link } from 'react-router-dom';
import '../../styles/Footer.css'
const Footer = () => {
    return (
        <>
            <Box sx={{ textAlign: 'center', bgcolor: '#1A1A19', color: 'white', p: 3 }}>
                <Box sx={{my:3, '& svg':{
                    fontSize: '60px',
                    cursor:'pointer',
                    mr:2
                }, '& svg:hover': {
                    color:'#319197',
                    transform:'translateX(5px)',
                    transition:'all 400ms'
                }
                
                
                }}>
                    {/* icons */}
                    <a className='svg' href='https://www.facebook.com/thanhqui.00/'><FacebookIcon/></a>
                    <InstagramIcon/>
                    <GitHubIcon/>
                </Box>

                <Typography variant='h5' sx={{ "@media (max-width:600px)": { fontSize: '1rem' } }}>
                    All Rights Reserved &copy; Shynzz
                </Typography>
            </Box>
        </>
    )
}

export default Footer