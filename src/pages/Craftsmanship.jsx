import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Container } from 'react-bootstrap';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import './Craftsmanship.css';
import CraftShipt from '../components/CraftShipt';
import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player';

const Craftsmanship = () => {
  const [open, setOpen] = useState();

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Container className="craftsmanship-container" component="div">
      <Box className="craftsmanship-img">
        <img src={`${process.env.PUBLIC_URL}/main-images/Crafts.png`} alt="craftmanship" className="background-image" />

        {/* <PlayCircleOutlineOutlinedIcon sx={{ fontSize: '5rem' }} className='playIcon' onClick={handleOpen} /> */}

      </Box>
      <Box className="textContent">
        <Typography class="Heading" component="div">
        At Pure Bliss, we believe in the power of pure, natural aromas to transform your environment and uplift your spirit. 
        Our journey began with a simple mission: to bring the highest quality incense to those who seek better health, spirituality, and peace in their daily lives
        </Typography>

        {/* <Typography class="Paragraph" component="p">
          At Pure Bliss, we believe in the power of pure, natural aromas to transform your environment and uplift your spirit. Our journey began with a simple mission: to bring the highest quality incense to those who seek better health, spirituality, and peace in their daily lives.
        </Typography>
        <Typography class="Paragraph" component="p">
          Amidst the vast array of incense stick brands, Bliss stands out as a beacon of spiritual tradition and exceptional craftsmanship. With a legacy spanning over five decades, Bliss has become synonymous with purity and quality. Our journey begins with the finest natural ingredients, ensuring each agarbatti is a conduit of the purest essences.
        </Typography>
        <Typography class="Paragraph" component="p">
          From the enchanting aroma of Himalayan Cedarwood to the delicate notes of French Lavender, we offer a diverse range of fragrances that cater to every spiritual need. Each Bliss incense stick is a tribute to the ancient art of creating sacred spaces, designed to elevate your spiritual practices and daily rituals.
        </Typography> */}

        <CraftShipt />

      </Box>

      <Modal open={open} onClose={handleClose} aria-labelledby="video-modal" aria-describedby="video-modal-description">
        <Box className="modalStyle">
          <ReactPlayer src="path/to/your/video.mp4" width="720" height="420" controls />
        </Box>
      </Modal>
    </Container>
  );
};

export default Craftsmanship;

