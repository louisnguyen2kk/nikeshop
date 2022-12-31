import { Box, TableContainer, Typography, Table, TableHead, TableRow, TableCell, Paper, TableBody } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        my: 5, ml: 10, "& h4": {
          fontWeight: 'bold',
          mb: 2,
        }, '@media (max-width: 600px)': {
          margin:'auto',
          m: 4,
          textAlign:'center'
        }
      }}>
        <Typography variant='h4'>
          Contact My Nike Shop
        </Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
        </p>
      </Box>

      <Box sx={{
        m: 3, width: '600px', ml: 10, '@media (max-width: 600px)': {
          width: '300px',
          margin: 'auto'
        }
      }}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: 'black', color: 'white' }} align='center' >
                  Contact Detail
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> 1800000000 (torollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: 'blue', pt: 1 }} /> ntqitdeveloper@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <PhoneIcon sx={{ color: 'blue', pt: 1 }} /> +8493516884
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>

  )
}

export default Contact