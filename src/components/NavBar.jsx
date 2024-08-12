// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import { Toolbar, Typography, Button, IconButton, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../fonts.css';
import AnchorTemporaryDrawer from '../components/AnchorTemporaryDrawer';

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const isMobile = useMediaQuery('(max-width:768px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <Box className={`nav-bar-main ${isSticky ? 'sticky' : ''}`}>
        <Toolbar>
          <Container class="nav-bar-head">
            {isMobile ? (
              <IconButton color="inherit" onClick={toggleDrawer(true)}
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  border: '1px solid #BBBBBB',
                  borderRadius: '10px',
                  p: 1,
                }}>
                <DragHandleIcon sx={{ color: '#3F4441' }} />
              </IconButton>
            ) : (
              <>
                <Box class="left-group" component="div">
                  <Button color="inherit" component={Link} to="/">
                    <Typography class="nav-head">Home</Typography></Button>
                  <Button color="inherit" component={Link} to="/shop">
                    <Typography class="nav-head">Shop</Typography></Button>
                  <Button color="inherit" component={Link} to="/craftsmanship">
                    <Typography class="nav-head">Craftsmanship</Typography></Button>
                  <Button color="inherit" component={Link} to="/collection">
                    <Typography class="nav-head">Collection</Typography></Button>
                  <Button color="inherit" component={Link} to="/contact">
                    <Typography class="nav-head">Contact</Typography></Button>
                </Box>

                <Box class="right-group" component="div">
                  <IconButton color="inherit" component={Link} to="/login">
                    <AccountCircle />
                    <Typography class="nav-head">
                      Login
                    </Typography>
                  </IconButton>
                  <IconButton color="inherit" component={Link} to="/cart">
                    <ShoppingCartIcon />
                    <Typography class="nav-head">
                      Cart
                    </Typography>
                  </IconButton>
                </Box>
              </>
            )}
          </Container>
        </Toolbar>
      </Box>
      <AnchorTemporaryDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default NavBar;


// good code start
// src/components/NavBar.js
// import React, { useState, useEffect } from 'react';
// import { Toolbar, Typography, Button, IconButton, Container, Box } from '@mui/material';
// import { Link } from 'react-router-dom';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import DragHandleIcon from '@mui/icons-material/DragHandle';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import '../fonts.css';
// import AnchorTemporaryDrawer from '../components/AnchorTemporaryDrawer';

// const NavBar = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const isMobile = useMediaQuery('(max-width:768px)');
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   return (
//     <>
//       {/* <Box className={`nav-bar-main ${isSticky ? 'sticky' : ''}`} > */}
//       <Box className='nav-bar-main'>
//         <Toolbar>
//           <Container class="nav-bar-head">
//             {isMobile ? (
//               <IconButton color="inherit" onClick={toggleDrawer(true)}
//                 sx={{
//                   display: 'flex',
//                   justifyContent: 'flex-start',
//                   border: '1px solid #BBBBBB',
//                   borderRadius: '10px',
//                   p: 1,
//                   // transform: {
//                   //   xs: 'translateX(-20px)', // Mobile view
//                   //   sm: 'translateX(-50px)', // Small view
//                   //   md: 'translateX(-80px)', // Medium view
//                   //   lg: 'translateX(-130px)', // Large view
//                   // },
//                 }}>
//                 <DragHandleIcon sx={{ color: '#3F4441'}}/>
//               </IconButton>
//             ) : (
//               <>
//                 <Box class="left-group" component="div">
//                   <Button color="inherit" component={Link} to="/">
//                     <Typography class="nav-head">Home</Typography></Button>
//                   <Button color="inherit" component={Link} to="/shop">
//                     <Typography class="nav-head">Shop</Typography></Button>
//                   <Button color="inherit" component={Link} to="/craftsmanship">
//                     <Typography class="nav-head">Craftsmanship</Typography></Button>
//                   <Button color="inherit" component={Link} to="/collection">
//                     <Typography class="nav-head">Collection</Typography></Button>
//                   <Button color="inherit" component={Link} to="/contact">
//                     <Typography class="nav-head">Contact</Typography></Button>
//                 </Box>

//                 <Box class="right-group" component="div">
//                   <IconButton color="inherit" component={Link} to="/login">
//                     <AccountCircle />
//                     <Typography class="nav-head">
//                       Login
//                     </Typography>
//                   </IconButton>
//                   <IconButton color="inherit" component={Link} to="/cart">
//                     <ShoppingCartIcon />
//                     <Typography class="nav-head">
//                       Cart
//                     </Typography>
//                   </IconButton>
//                 </Box>
//               </>
//             )}
//           </Container>
//         </Toolbar>
//       </Box>
//       <AnchorTemporaryDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
//     </>
//   );
// };

// export default NavBar;

// good code end


// // src/components/NavBar.js
// import React, { useState, useEffect } from 'react';
// import { AppBar, Toolbar, Typography, Button, IconButton, Container, Box } from '@mui/material';
// import { Link } from 'react-router-dom';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const NavBar = () => {
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 0);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <Box className={`nav-bar-main ${isSticky ? 'sticky' : ''}`} position="fixed">
//     {/* <AppBar class="nav-bar-main" position="static" color="transparent"> */}
//       <Toolbar>
//         {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Pure Bliss
//         </Typography> */}
//         <Container class="nav-bar-head">
//           <div class="left-group">
//             <Button color="inherit" component={Link} to="/">
//             <Typography class="nav-head">Home</Typography></Button>
//             <Button color="inherit" component={Link} to="/shop">
//             <Typography class="nav-head">Shop</Typography></Button>
//             <Button color="inherit" component={Link} to="/craftsmanship">
//             <Typography class="nav-head">Craftsmanship</Typography></Button>
//             <Button color="inherit" component={Link} to="/collection">
//             <Typography class="nav-head">Collection</Typography></Button>
//             <Button color="inherit" component={Link} to="/contact">
//             <Typography class="nav-head">Contact</Typography></Button>
//           </div>

//           <div class="right-group">
//             <IconButton color="inherit" component={Link} to="/login">
//               <AccountCircle />
//               <Typography class="nav-head">
//                 Login
//               </Typography>
//             </IconButton>
//             <IconButton color="inherit" component={Link} to="/cart">
//               <ShoppingCartIcon />
//               <Typography class="nav-head">
//                 Cart
//               </Typography>
//             </IconButton>
//           </div>
//         </Container>
//       </Toolbar>
//     </Box>
//   );
// };

// export default NavBar;
