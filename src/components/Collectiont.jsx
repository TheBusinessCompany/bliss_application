import React from 'react'
import { Box, Grid, Typography } from '@mui/material';
import { Container } from 'react-bootstrap';

function Collectiont() {
  return (
    <Container className='bg-Craftsmanship' component="div">
    <Box className='craftBackground' sx={{ marginTop: 15 }}>
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <img
                    src={`${process.env.PUBLIC_URL}/main-images/collectionPage-1.png`}
                    alt="craftmanship"
                    className="craft-img"
                />
            </Grid>
            <Grid className='craftContent' item xs={12} md={6}>
                <Box className='craftConText'>
                    <Typography variant="h6" component="div" gutterBottom className='craft-text'
                        sx={{ fontWeight: 600, fontFamily: 'pureblissPoppinsLight' }}>
                        Why Choose Charcoal-Free Agarbattis?
                    </Typography>
                    <Typography variant="body1" gutterBottom className='craft-text-2'>
                    Choosing charcoal-free agarbattis offers a cleaner, healthier, and more sustainable way to enjoy 
                    the benefits of incense sticks. By minimizing their environmental impact, 
                    these incense sticks provide a superior aromatic experience while promoting better air quality and overall well-being.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    </Box>

    <Box sx={{ marginTop: 15}}>
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Box className='craftConText-2'>

                    <Typography variant="h6" component="div" gutterBottom className='craft-text'
                        sx={{ fontWeight: 600, fontFamily: 'pureblissPoppinsLight' }}>
                        Cup Sambrani - Dhoop:
                    </Typography>
                    <Typography variant="body1" gutterBottom className='craft-text-2'>
                    Experience the traditional and medicinal value of Cup Sambrani, also known as Sambrani or loban. 
                    Sourced from the Styrax tree, our Cup Sambrani is known for its purifying and fragrant properties.
                    Commonly used in Hindu and Buddhist ceremonies, Cup Sambrani purifies the air, drives out negative energies, 
                    and creates a peaceful atmosphere. It is also believed to have medicinal properties, such as relieving stress and anxiety. 
                    Use Cup Sambrani to create a calming and spiritual ambience, making it perfect for meditation, yoga, 
                    and other mindfulness practices.
                    </Typography>
                </Box>

            </Grid>
            <Grid item xs={12} md={6}>
                <img
                    src={`${process.env.PUBLIC_URL}/main-images/collectionPage-2.png`}
                    alt="craftmanship"
                    className="craft-img"
                />
            </Grid>
        </Grid>
    </Box>

    <Box sx={{ marginTop: 15 }}>
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <img
                    src={`${process.env.PUBLIC_URL}/main-images/collectionPage-3.png`}
                    alt="craftmanship"
                    className="craft-img"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Box className='craftConText'>
                    <Typography variant="h6" component="div" gutterBottom className='craft-text'
                        sx={{ fontWeight: 600, fontFamily: 'pureblissPoppinsLight' }}>
                        Masala Bathi - Charcoal-Free:
                    </Typography>
                    <Typography variant="body1" gutterBottom className='craft-text-2'>
                    Our Masala Bathi incense sticks are crafted from a blend of natural ingredients, offering a pure 
                    and premium aromatic experience without the use of charcoal.
                    This makes them a healthier option for your home, ensuring a cleaner burn that lasts between 45 minutes to 1 hour. 
                    Available in thicker and thinner sticks, as well as cones, our Masala Bathi provides a versatile and premium aromatic experience. 
                    Perfect for creating a serene and tranquil environment, Masala Bathi incense sticks are ideal for daily rituals, meditation, and relaxation.
                    </Typography>
                </Box>

            </Grid>
        </Grid>
    </Box>

    {/* <Box sx={{ marginTop: 15 }}>
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Box className='craftConText-2'>
                    <Typography variant="h6" component="div" gutterBottom className='craft-text'
                        sx={{ fontWeight: 600, fontFamily: 'pureblissPoppinsLight' }}>
                        Creating an Exquisite Experience
                    </Typography>
                    <Typography variant="body1" gutterBottom className='craft-text-2'>
                        As a brand, we draw upon ancient Indian wisdom, reviving its powerful
                        knowledge passed down through the ages.
                        We trust and embrace Ayurvedic traditions, using them to create therapeutic
                        incense sticks that offer a blissful experience.
                    </Typography>
                </Box>

            </Grid>
            <Grid item xs={12} md={6}>
                <img
                    src={`${process.env.PUBLIC_URL}/main-images/craftmanship.png`}
                    alt="craftmanship"
                    className="craft-img"
                />
            </Grid>
        </Grid>
    </Box> */}
    <Box sx={{ marginTop: 15 }}>
        <Grid container spacing={4}>

        </Grid>
    </Box>
</Container>
  )
}

export default Collectiont
