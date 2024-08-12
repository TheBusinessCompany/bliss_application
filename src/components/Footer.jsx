import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import './footer.css';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f8f8f8', position: 'relative' }}>
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box sx={{ position: 'relative', height: '200px' }}>
          <img
            src={`${process.env.PUBLIC_URL}/main-images/home-footer.png`}
            alt="Background"
            className='footer-image'
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
          />
          <Grid container spacing={4} sx={{ position: 'relative', zIndex: 2, color: 'white' }}>
            <Grid item xs={12} sm={4} className="alex-brush">
              <Typography class="alex-brush-1" variant="h6" component="div">Pure</Typography>
              <Typography class="alex-brush-2" variant="h6" component="div">Bliss</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box display="flex" flexDirection="column" alignItems="start" >
                <Typography class="footer-text" variant="body2">Terms & Conditions</Typography>
                <Typography class="footer-text" variant="body2">Returns & Cancellation Policy</Typography>
                <Typography class="footer-text" variant="body2">Privacy Policy</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box display="flex" justifyContent="flex-end">
                <div class="social-icons">
                  <Link href="#" color="inherit" sx={{ mx: 1 }}>
                    <XIcon />
                  </Link>
                  <Link href="#" color="inherit" sx={{ mx: 1 }}>
                    <InstagramIcon />
                  </Link>
                  <Link href="#" color="inherit" sx={{ mx: 1 }}>
                    <FacebookIcon />
                  </Link>
                </div>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box class="copyRight">
                <Typography class="footer-text" variant="body2">© All Rights Reserved 2024</Typography>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;


// import React from 'react';
// import { Box, Container, Grid, Typography, Link } from '@mui/material';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';

// const Footer = () => {
//   return (
//     <Box sx={{ backgroundColor: '#f8f8f8', padding: '2rem 0' }}>
//       <Container class='footer-section' maxWidth="lg">
//         <Box>
//           <img
//             src={`${process.env.PUBLIC_URL}/main-images/home-footer.png`}
//             alt="Background"
//             class='footer-image'
//           />
//         </Box>

//         <Grid container spacing={4}>
//           <Grid item xs={12} sm={4} className="alex-brush">
//             <Typography class="alex-brush-1" variant="h6" component="div">Pure</Typography>
//             <Typography class="alex-brush-2" variant="h6" component="div">Bliss</Typography>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Box display="flex" flexDirection="column" alignItems="start">
//               <Typography class="footer-text" variant="body2" component="div">Terms & Conditions</Typography>
//               <Typography class="footer-text" variant="body2" component="div">Returns & Cancellation Policy</Typography>
//               <Typography class="footer-text" variant="body2" component="div">Privacy Policy</Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Box className='social-icons' display="flex" justifyContent="flex-end">
//               <Link href="#" color="inherit" sx={{ mx: 1 }}>
//                 <XIcon />
//               </Link>
//               <Link href="#" color="inherit" sx={{ mx: 1 }}>
//                 <InstagramIcon />
//               </Link>
//               <Link href="#" color="inherit" sx={{ mx: 1 }}>
//                 <FacebookIcon />
//               </Link>
//             </Box>
//           </Grid>
//         </Grid>
//         <Grid container mt={4}>
//           <Grid item xs={12} sm={4}>
//             <Box textAlign={{ xs: 'center', sm: 'left' }}>
//               <Typography variant="body2">
//                 © All Rights Reserved 2024
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;

// // src/components/Footer.js
// import React from 'react';
// import { Box, Container, Grid, Typography, Link } from '@mui/material';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';

// const Footer = () => {
//   return (
//     <Box sx={{ backgroundColor: '#f8f8f8', padding: '2rem 0' }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           <Grid class='alex-brush' item xs={12} sm={4}>
//             <Typography class='alex-brush-1' variant="h6" component='div'>Pure</Typography>
//             <Typography class='alex-brush-2' variant="h6" component='div'>Bliss</Typography>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//           <Typography variant="body2">Terms & Conditions</Typography>
//             <Typography variant="body2">Returns & Cancellation Policy</Typography>
//             <Typography variant="body2">Privacy Policy</Typography>
//           </Grid>
//         </Grid>
//         <Box display="flex" justifyContent="center" mt={4}>
//           <Link href="#" color="inherit" sx={{ mx: 1 }}>
//             <InstagramIcon />
//           </Link>
//           <Link href="#" color="inherit" sx={{ mx: 1 }}>
//             <FacebookIcon />
//           </Link>
//           <Link href="#" color="inherit" sx={{ mx: 1 }}>
//             <TwitterIcon />
//           </Link>
//         </Box>
//         <Box textAlign="center" mt={4}>
//           <Typography variant="body2">
//             © All Rights Reserved 2024
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;
