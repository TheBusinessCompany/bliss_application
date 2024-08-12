// import React from 'react';
// import { Box, Typography, TextField, Button, Grid } from '@mui/material';
// import { Container } from 'react-bootstrap';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
// import EmailIcon from '@mui/icons-material/Email';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// import '../pages/style/contact.css';

// const Contact = () => {
//   return (
//     <div>
//       <Container className="craftsmanship-container" component="div">
//         <div className="contact-section">
//           <Box className="contactSection-img">
//             <img src={`${process.env.PUBLIC_URL}/main-images/contact-img.jpg`} alt="contact" className="contact-image" />
//           </Box>

//           <Box className="contact-con-img">
//             <img src={`${process.env.PUBLIC_URL}/main-images/contact-img.jpg`} alt="contact" className="contact-image" />

//             <div className="contact-details">
//               <h1 className="contact-title">PURE</h1>
//               <h1 className="contact-title">BLISS</h1>
//               <h1 className="contact-subtitle">INCENSE FRAGRANCE</h1>

//               <div className="con-icons">
//                 <InstagramIcon />
//                 <FacebookIcon />
//                 <TwitterIcon />
//               </div>

//               <Grid container className="address-details" spacing={1} sx={{ fontWeight: 100 }}>
//                 <Grid item xs={12}>
//                   <Typography variant="body2" className="contact-info">
//                     Reach us :
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Typography variant="body2" className="contact-info">
//                     <PhoneInTalkIcon fontSize="small" /> +91 98765 43210
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Typography variant="body2" className="contact-info">
//                     <EmailIcon fontSize="small" /> purebliss@gmail.com
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Typography variant="body2" className="contact-info">
//                     <LocationOnIcon fontSize="small" /> Address
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </div>

//             <Box className="contact-form">
//               <form>
//                 <TextField
//                   label="Name"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   name="name"
//                   size='small'
//                   InputLabelProps={{ style: { color: '#fff' } }}
//                   InputProps={{ style: { color: '#fff' } }}
//                   sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#fff' }, '&:hover fieldset': { borderColor: '#fff' }, '&.Mui-focused fieldset': { borderColor: '#fff' } } }}
//                 />
//                 <TextField
//                   label="Email ID"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   name="email"
//                   type="email"
//                   size='small'
//                   InputLabelProps={{ style: { color: '#fff' } }}
//                   InputProps={{ style: { color: '#fff' } }}
//                   sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#fff' }, '&:hover fieldset': { borderColor: '#fff' }, '&.Mui-focused fieldset': { borderColor: '#fff' } } }}
//                 />
//                 <TextField
//                   label="Phone Number"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   name="phone"
//                   type="tel"
//                   size='small'
//                   InputLabelProps={{ style: { color: '#fff' } }}
//                   InputProps={{ style: { color: '#fff' } }}
//                   sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#fff' }, '&:hover fieldset': { borderColor: '#fff' }, '&.Mui-focused fieldset': { borderColor: '#fff' } } }}
//                 />
//                 <TextField
//                   label="Message"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   name="message"
//                   size='small'
//                   multiline
//                   rows={4}
//                   InputLabelProps={{ style: { color: '#fff' } }}
//                   InputProps={{ style: { color: '#fff' } }}
//                   sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#fff' }, '&:hover fieldset': { borderColor: '#fff' }, '&.Mui-focused fieldset': { borderColor: '#fff' } } }}
//                 />
//                 <Button
//                   variant="contained"
//                   fullWidth
//                   sx={{
//                     mt: 2, backgroundColor: '#8B4513', color: '#fff',
//                     '&:hover': {
//                       backgroundColor: '#543310',
//                     }
//                   }}
//                 >
//                   Send Message
//                 </Button>
//               </form>
//             </Box>

//           </Box>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Contact;


import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { Container } from 'react-bootstrap';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import '../pages/style/contact.css';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Container className="craftsmanship-container" component="div">
        <div className="contact-section">
          <Box className="contactSection-img">
            <img src={`${process.env.PUBLIC_URL}/main-images/contact-img.jpg`} alt="contact" className="contact-image" />
          </Box>

          <Box className="contact-con-img">
            <img src={`${process.env.PUBLIC_URL}/main-images/contact-img.jpg`} alt="contact" className="contact-image" />

            <div className="contact-details">
              <h1 className="contact-title">PURE</h1>
              <h1 className="contact-title">BLISS</h1>
              <h1 className="contact-subtitle">INCENSE FRAGRANCE</h1>

              <div className="con-icons">
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
              </div>

              <Grid container className="address-details" spacing={1} sx={{ fontWeight: 100 }}>
                <Grid item xs={12}>
                  <Typography variant="body2" className="contact-info">
                    Reach us :
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" className="contact-info">
                    <PhoneInTalkIcon fontSize="small" /> +91 98765 43210
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" className="contact-info">
                    <EmailIcon fontSize="small" /> purebliss@gmail.com
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" className="contact-info">
                    <LocationOnIcon fontSize="small" /> Address
                  </Typography>
                </Grid>
              </Grid>
            </div>

            <Box className="contact-form">
              <form>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="name"
                  size="small"
                  InputLabelProps={{ style: { color: '#fff' } }}
                  InputProps={{ style: { color: '#fff' } }}
                  sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#fff' }, '&:hover fieldset': { borderColor: '#fff' }, '&.Mui-focused fieldset': { borderColor: '#fff' } } }}
                />
                <TextField
                  label="Email ID"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="email"
                  type="email"
                  size="small"
                  InputLabelProps={{ style: { color: '#fff' } }}
                  InputProps={{ style: { color: '#fff' } }}
                  sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#fff' }, '&:hover fieldset': { borderColor: '#fff' }, '&.Mui-focused fieldset': { borderColor: '#fff' } } }}
                />
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="phone"
                  type="tel"
                  size="small"
                  InputLabelProps={{ style: { color: '#fff' } }}
                  InputProps={{ style: { color: '#fff' } }}
                  sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#fff' }, '&:hover fieldset': { borderColor: '#fff' }, '&.Mui-focused fieldset': { borderColor: '#fff' } } }}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="message"
                  size="small"
                  multiline
                  rows={4}
                  InputLabelProps={{ style: { color: '#fff' } }}
                  InputProps={{ style: { color: '#fff' } }}
                  sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#fff' }, '&:hover fieldset': { borderColor: '#fff' }, '&.Mui-focused fieldset': { borderColor: '#fff' } } }}
                />
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2, backgroundColor: '#8B4513', color: '#fff',
                    '&:hover': {
                      backgroundColor: '#543310',
                    }
                  }}
                >
                  Send Message
                </Button>
              </form>
            </Box>

          </Box>
        </div>
      </Container>
    </div>
  );
};

export default Contact;



// import React from 'react';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { Box, Typography, TextField, Button, Grid } from '@mui/material';
// import { Container } from 'react-bootstrap';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
// import EmailIcon from '@mui/icons-material/Email';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// import '../pages/style/contact.css';

// const Contact = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <div>
//       <Container className="craftsmanship-container" component="div">
//         <div className="contact-section">
//           <Box className="contactSection-img">
//             <img src={`${process.env.PUBLIC_URL}/main-images/contact-img.jpg`} alt="contact" className="contact-image" />
//           </Box>

//           <Box className="contact-con-img">
//             <img src={`${process.env.PUBLIC_URL}/main-images/contact-img.jpg`} alt="contact" className="contact-image" />

//             <div className="contact-details">
//               <h1 className="contact-title">PURE</h1>
//               <h1 className="contact-title">BLISS</h1>
//               <h1 className="contact-subtitle">INCENSE FRAGRANCE</h1>

//               <div className="con-icons">
//                 <InstagramIcon />
//                 <FacebookIcon />
//                 <TwitterIcon />
//               </div>

//               <Grid container className="address-details" spacing={1} sx={{ fontWeight: 100 }}>
//                 <Grid item xs={12}>
//                   <Typography variant="body2" className="contact-info">
//                     Reach us :
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Typography variant="body2" className="contact-info">
//                     <PhoneInTalkIcon fontSize="small" /> +91 98765 43210
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Typography variant="body2" className="contact-info">
//                     <EmailIcon fontSize="small" /> purebliss@gmail.com
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Typography variant="body2" className="contact-info">
//                     <LocationOnIcon fontSize="small" /> Address
//                   </Typography>
//                 </Grid>
//               </Grid>
//             </div>

//             <Box className="contact-form">
//               <form>
//                 <TextField
//                   label="Name"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   name="name"
//                   size='small'
//                   InputLabelProps={{ style: { color: '#fff' } }}
//                   InputProps={{ style: { color: '#fff' } }}
//                   sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#fff' }, '&:hover fieldset': { borderColor: '#fff' }, '&.Mui-focused fieldset': { borderColor: '#fff' } } }}
//                 />
//                 <TextField
//                   label="Email ID"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   name="email"
//                   type="email"
//                   size='small'
//                   InputLabelProps={{ style: { color: '#fff' } }}
//                   InputProps={{ style: { color: '#fff' } }}
//                   sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#fff' }, '&:hover fieldset': { borderColor: '#fff' }, '&.Mui-focused fieldset': { borderColor: '#fff' } } }}
//                 />
//                 <TextField
//                   label="Phone Number"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   name="phone"
//                   type="tel"
//                   size='small'
//                   InputLabelProps={{ style: { color: '#fff' } }}
//                   InputProps={{ style: { color: '#fff' } }}
//                   sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#fff' }, '&:hover fieldset': { borderColor: '#fff' }, '&.Mui-focused fieldset': { borderColor: '#fff' } } }}
//                 />
//                 <TextField
//                   label="Message"
//                   variant="outlined"
//                   fullWidth
//                   margin="normal"
//                   name="message"
//                   size='small'
//                   multiline
//                   rows={4}
//                   InputLabelProps={{ style: { color: '#fff' } }}
//                   InputProps={{ style: { color: '#fff' } }}
//                   sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#fff' }, '&:hover fieldset': { borderColor: '#fff' }, '&.Mui-focused fieldset': { borderColor: '#fff' } } }}
//                 />
//                 <Button
//                   variant="contained"
//                   fullWidth
//                   sx={{
//                     mt: 2, backgroundColor: '#8B4513', color: '#fff',
//                     '&:hover': {
//                       backgroundColor: '#543310',
//                     }
//                   }}
//                 >
//                   Send Message
//                 </Button>
//               </form>
//             </Box>

//           </Box>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Contact;
