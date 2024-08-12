// Excellent code structure start

import React, { useState } from 'react';
import { Box, Typography, Container, Grid, IconButton, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import './shop.css';
import CardSlider from '../components/productSlider/CardSliderList';
import ProductList from '../features/products/ProductList';
import ProductPage from '../features/products/ProductPage';

const Shop = () => {

  // const additionalSections = [
  //   {
  //     image: '/main-images/home-img1.png',
  //     title: 'Corporate Gifting Options',
  //     description: 'Say thanks with our corporate gifting options.'
  //   },
  //   {
  //     image: '/main-images/home-img1.png',
  //     title: 'Free Shipping',
  //     description: 'We are offering free shipping on orders above Rs. 500.'
  //   },
  //   {
  //     image: '/main-images/home-img1.png',
  //     title: 'Free Shipping',
  //     description: 'We are offering free shipping on orders above Rs. 500.'
  //   },
  // ];

  return (
    <div class="shop-section">
      <Container sx={{ position: 'relative', textAlign: 'center' }} class="shopContainer">
        <Box className="shopSecImg">
          <img src={`${process.env.PUBLIC_URL}/main-images/Shop-1.png`} alt="Shop" className="background-image" />
        </Box>
      </Container>

      <div className="prod-section">
        <Container >
          <CardSlider />
        </Container>
        <div className="prod-label">
        </div>
      </div>

      <div className="shop-page">
        {/* <h1 className="shop-title">Products</h1>
        <ProductList /> */}
        <ProductPage />
      </div>

      {/* <div className="additonal-section">
        <Container >
          <Grid container spacing={2} justifyContent="center">

            {additionalSections.map((section, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ maxWidth: 400, margin: '0 auto' }}>
                  <CardMedia
                    sx={{ height: 250 }}
                    image={section.image}
                    title={section.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {section.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {section.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}

          </Grid>
        </Container>
      </div> */}
    </div>
  );
}

export default Shop;

// end


// import React, { useState } from 'react';
// import { Box, Typography, Grid, Container, IconButton, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
// import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
// import './shop.css';

// const Shop = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const products = [
//     {
//       image: "/main-images/home-img1.png",
//       title: "Bliss",
//       description: "Blisss are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
//     },
//     {
//       image: "/main-images/home-img1.png",
//       title: "Bliss",
//       description: "Blisss are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
//     },
//     {
//       image: "/main-images/home-img1.png",
//       title: "Bliss",
//       description: "Blisss are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
//     },
//     {
//       image: "/main-images/home-img1.png",
//       title: "Bliss",
//       description: "Blisss are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
//     }
//   ];

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div>
//       <Container sx={{ position: 'relative' }} class="shopContainer" component="div">
//         <Box className="shopSecImg">
//           <img src={`${process.env.PUBLIC_URL}/main-images/shop.png`} alt="craftmanship" className="shopImage" />
//         </Box>
//         <Container className="shopSection" component="div">
//           <Typography className="shopHead" component="div" sx={{ fontSize: 30 }}>
//             Best in selling
//           </Typography>
//           <Container className="ProductSlider" component="div">
//             <Grid container spacing={8} className="sliderWrapper" sx={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//               {products.map((product, index) => (
//                 <Grid item xs={12} sm={3} key={index}>
//                   <Card sx={{ maxWidth: 200 }}>
//                     <CardMedia
//                       sx={{ height: 150 }}
//                       image={product.image}
//                       title={product.title}
//                     />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         {product.title}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {product.description}
//                       </Typography>
//                     </CardContent>
//                     <CardActions>
//                       <Button size="small">Share</Button>
//                       <Button size="small">Learn More</Button>
//                     </CardActions>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//             <IconButton className="sliderArrow left" onClick={handlePrev}>
//               <KeyboardArrowLeft />
//             </IconButton>
//             <IconButton className="sliderArrow right" onClick={handleNext}>
//               <KeyboardArrowRight />
//             </IconButton>
//           </Container>
//         </Container>
//       </Container>
//     </div>
//   )
// }

// export default Shop;



// good code
// import React, { useState } from 'react';
// import { Box, Typography, Container, Grid, IconButton, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
// import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import './shop.css';

// const Shop = () => {
//   const [activeStep, setActiveStep] = useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const maxSteps = 4; // Number of items in your carousel

//   return (
//     <div>
//       <Container sx={{ position: 'relative', textAlign: 'center' }} class="shopContainer">
//         <Box class="shopSecImg">
//           <img src={`${process.env.PUBLIC_URL}/main-images/shop.png`} alt="craftmanship" class="shopImage" />
//         </Box>
//       </Container>

//       <Container sx={{ textAlign: 'center', marginTop: '5em' }}>
//         <Box className="ProductSliderSection" >
//           <Typography variant="h4" component="div">
//             Best in selling
//           </Typography>
//           <Box className="ProductSlider">
//             <Grid container spacing={2} justifyContent="center">
//               {Array.from({ length: 4 }).map((_, index) => (
//                 <Grid item xs={12} sm={3} key={index}>
//                   <Card sx={{ maxWidth: 220, margin: '0 auto' }}>
//                     <CardMedia
//                       sx={{ height: 150 }}
//                       image={`/main-images/home-img${index + 1}.png`}
//                       title="Product"
//                     />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         Product {index + 1}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         Product description goes here.
//                       </Typography>
//                     </CardContent>
//                     <CardActions>
//                       <Button size="small">Add to Cart</Button>
//                     </CardActions>
//                   </Card>
//                 </Grid>
//               ))}
//             </Grid>
//             <IconButton onClick={handleBack} disabled={activeStep === 0} class="sliderArrowLeft">
//               <ArrowCircleLeftIcon />
//             </IconButton>
//             <IconButton onClick={handleNext} disabled={activeStep === maxSteps - 1} class="sliderArrowRight">
//               <ArrowCircleRightIcon />
//             </IconButton>
//           </Box>
//         </Box>

//         <Typography variant="h4" component="div">
//           Products
//         </Typography>
//         <Grid container spacing={2} justifyContent="center">
//           {Array.from({ length: 12 }).map((_, index) => (
//             <Grid item xs={12} sm={3} key={index}>
//               <Card sx={{ maxWidth: 250, margin: '0 auto' }}>
//                 <CardMedia
//                   sx={{ height: 150 }}
//                   image={`/main-images/home-img${index % 4 + 1}.png`}
//                   title="Product"
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     Product {index + 1}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Product description goes here.
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button size="small">Add to Cart</Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       <Container sx={{ textAlign: 'center', marginTop: '5em' }}>
//         <Typography variant="h4" component="div">
//           Additional Sections
//         </Typography>
//         <Grid container spacing={2} justifyContent="center">
//           <Grid item xs={12} sm={6}>
//             <Card sx={{ maxWidth: 500, margin: '0 auto' }}>
//               <CardMedia
//                 sx={{ height: 250 }}
//                 image={`/main-images/additional1.png`}
//                 title="Corporate Gifting"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   Corporate Gifting Options
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Say thanks with our corporate gifting options.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Card sx={{ maxWidth: 500, margin: '0 auto' }}>
//               <CardMedia
//                 sx={{ height: 250 }}
//                 image={`/main-images/additional2.png`}
//                 title="Free Shipping"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   Free Shipping
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   We are offering free shipping on orders above Rs. 500.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// }

// export default Shop;



// import React from 'react'
// import { Box, Typography, Grid, Container, IconButton, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
// import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
// import './shop.css';


// const Shop = () => {
//   return (
//     <div>
//       <Container sx={{ position: 'relative' }} class="shopContainer" component="div">
//         <Box className="shopSecImg">
//           <img src={`${process.env.PUBLIC_URL}/main-images/shop.png`} alt="craftmanship" class="shopImage" />
//         </Box>
//         <Container className="shopSection" component="div">
//           <Typography className="shopHead" component="div"
//             sx={{ fontSize: 30 }}>
//             Best in selling
//           </Typography>

//           <Container className="ProductSlider" component="div">
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={3}>
//                 <Card sx={{ maxWidth: 250 }}>
//                   <CardMedia
//                     sx={{ height: 150 }}
//                     image="/main-images/home-img1.png"
//                     title="green iguana"
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                       Bliss
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       Blisss are a widespread group of squamate reptiles, with over 6,000
//                       species, ranging across all continents except Antarctica
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small">Share</Button>
//                     <Button size="small">Learn More</Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//               <Grid item xs={12} sm={3}>
//                 <Card sx={{ maxWidth: 250 }}>
//                   <CardMedia
//                     sx={{ height: 150 }}
//                     image="/main-images/home-img1.png"
//                     title="green iguana"
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                       Bliss
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       Blisss are a widespread group of squamate reptiles, with over 6,000
//                       species, ranging across all continents except Antarctica
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small">Share</Button>
//                     <Button size="small">Learn More</Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//               <Grid item xs={12} sm={3}>
//                 <Card sx={{ maxWidth: 250 }}>
//                   <CardMedia
//                     sx={{ height: 150 }}
//                     image="/main-images/home-img1.png"
//                     title="green iguana"
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                       Bliss
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       Blisss are a widespread group of squamate reptiles, with over 6,000
//                       species, ranging across all continents except Antarctica
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small">Share</Button>
//                     <Button size="small">Learn More</Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//               <Grid item xs={12} sm={3}>
//                 <Card sx={{ maxWidth: 250 }}>
//                   <CardMedia
//                     sx={{ height: 150 }}
//                     image="/main-images/home-img1.png"
//                     title="green iguana"
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                       Bliss
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       Blisss are a widespread group of squamate reptiles, with over 6,000
//                       species, ranging across all continents except Antarctica
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button size="small">Share</Button>
//                     <Button size="small">Learn More</Button>
//                   </CardActions>
//                 </Card>
//               </Grid>

//             </Grid>

//             {/* <IconButton className="sliderArrow left">
//               <KeyboardArrowLeft />
//             </IconButton>
//             <IconButton className="sliderArrow right">
//               <KeyboardArrowRight />
//             </IconButton> */}

//           </Container>

//           {/* <Container className="ProductSlider" component="div">
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={3}>
//                 <Box className='ProductSection'>
//                   <Box class='ProductImg'>
//                     <img src={`${process.env.PUBLIC_URL}/main-images/home-img1.png`} alt="craftsmanship" class="sliderImage" />
//                   </Box>
//                 </Box>
//               </Grid>
//               <Grid item xs={12} sm={3}>
//                 <Box class='ProductSection'>
//                   <Box class='ProductImg'>
//                     <img src={`${process.env.PUBLIC_URL}/main-images/home-img2.png`} alt="craftsmanship" class="sliderImage" />
//                   </Box>
//                 </Box>
//               </Grid>
//               <Grid item xs={12} sm={3}>
//                 <Box className='ProductSection'>
//                   <Box className='ProductImg'>
//                     <img src={`${process.env.PUBLIC_URL}/main-images/home-img3.png`} alt="craftsmanship" class="sliderImage" />
//                   </Box>
//                 </Box>
//               </Grid>
//               <Grid item xs={12} sm={3}>
//                 <Box className='ProductSection'>
//                   <Box className='ProductImg'>
//                     <img src={`${process.env.PUBLIC_URL}/main-images/home-img4.png`} alt="craftsmanship" className="sliderImage" />
//                   </Box>
//                 </Box>
//               </Grid>

//             </Grid>

//             <IconButton className="sliderArrow left">
//               <KeyboardArrowLeft />
//             </IconButton>
//             <IconButton className="sliderArrow right">
//               <KeyboardArrowRight />
//             </IconButton>

//           </Container> */}
//         </Container>
//       </Container>
//     </div>
//   )
// }

// export default Shop;