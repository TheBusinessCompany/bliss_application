// src/pages/Home.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import { Box, Typography, Button } from '@mui/material';
import '../fonts.css';
import ImageSlider from '../components/ImageSlider';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.products);
  const navigate = useNavigate()
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  const images = [
    { src: `${process.env.PUBLIC_URL}/main-images/HomePage.png`, alt: 'Image 1' },
    { src: `${process.env.PUBLIC_URL}/main-images/home-img2.png`, alt: 'Image 2' },
    { src: `${process.env.PUBLIC_URL}/main-images/home-img3.png`, alt: 'Image 3' },
  ];

  return (
    <>
      <Box className="home-container">
        <Box className="home-content">

          {/* <ImageSlider images={images} /> */}
          <img
          src={`${process.env.PUBLIC_URL}/main-images/HomePage.png`}
          alt="Background"
          className="second-image"
        />

          <Box className="text-overlay" display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h2" class="bliss" component="div">PURE <br /> BLISS      
            </Typography>
            <Typography variant="subtitle1" class="home-subtitle" component="div">INCENSE FRAGRANCE</Typography>
          </Box>
        </Box>
      </Box>

      <Box className='second-section'>
        <img
          src={`${process.env.PUBLIC_URL}/main-images/HomePage-2.png`}
          alt="Background"
          className="second-image"
        />
      </Box>

      <Box className='third-section'>
        <img
          src={`${process.env.PUBLIC_URL}/main-images/HomePage-3.png`}
          alt="Background"
          className="second-image"
          onClick={()=>navigate('/collection')}
        />
      </Box>
     
    </>
  );
};

export default Home;


// // src/pages/Home.js
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import ProductList from '../features/products/ProductList';
// import { fetchProducts } from '../features/products/productsSlice';
// import { Box, Typography } from '@mui/material';

// const Home = () => {
//   const dispatch = useDispatch();
//   const { products, status } = useSelector((state) => state.products);
//   // const { products, status, error } = useSelector((state) => state.products);

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchProducts());
//     }
//   }, [status, dispatch]);

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }


//   // if (status === 'failed') {
//   //   return <div>Error: {error}</div>;
//   // }

//   return (
//     <Box className="home-container">
//       <Box className="home-content">
//         <img
//           src={`${process.env.PUBLIC_URL}/main-images/home-img1.png`}
//           alt="Background"
//           className="background-image"
//         />
//         <Box className="text-overlay">
//           <Typography variant="h2" className="title">PURE</Typography>
//           <Typography variant="h2" className="title">BLISS</Typography>
//           <Typography variant="subtitle1" className="subtitle">INCENSE FRAGRANCE</Typography>
//         </Box>
//       </Box>
//     </Box>

//     // <div>
//     //   <ProductList products={products} />
//     // </div>
//   );
// };

// export default Home;