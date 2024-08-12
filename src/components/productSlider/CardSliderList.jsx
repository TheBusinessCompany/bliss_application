import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../productSlider/cardSlider.css'; // Ensure this matches the actual file name

import { Navigation, Pagination } from 'swiper/modules'; // Correct import path for modules

const CardSlider = () => {

  // Array of product objects
  const products = [
    {
      image: "/main-images/AgarbathiInscence.png",
      description: "Agarbathi Insense Sticks ",
      price: "Rs.999.00"
    },
    {
      image: "/main-images/DasangamPowder.png",
      description: "Dasangam Powder",
      price: "Rs.199.00"
    },
    {
      image: "/main-images/Divinebathi.png",
      description: "Divine Premium Bathi",
      price: "Rs.259.00"
    },
    {
      image: "/main-images/PoojaOil.png",
      description: "Pooja Deep Oil",
      price: "Rs.99.00"
    },
    {
      image: "/main-images/SambhraniDhoopCups.png",
      description: "Sambrani Dhoop Cups",
      price: "Rs.99.00"
    }
  ];

  return (
    <div className="shop-container">
      <h2 className="shop-title">Best in selling</h2>
      <div className="swiper-container">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={4}
          spaceBetween={25}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            520: {
              slidesPerView: 2,
            },
            950: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >

          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <img src={product.image} alt={`Product ${index + 1}`} className="card-image" />
                <p className="card-description">{product.description}</p>
                <p className="card-price">{product.price}</p>
                <button className="card-button">Add to Cart</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-next swiper-navBtn"></div>
        <div className="swiper-button-prev swiper-navBtn"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default CardSlider;


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import '../productSlider/cardSlider.css'; // Ensure this matches the actual file name

// import { Navigation, Pagination } from 'swiper/modules'; // Correct import path for modules

// const CardSlider = () => {
  
//   // Array of product objects
//   const products = [
//     {
//       image: "/main-images/home-img1.png",
//       description: "The Lorem ipsum filling text is used by graphic designers.",
//       price: "Rs.999.00"
//     },
//     {
//       image: "/main-images/home-img1.png",
//       description: "Lorem ipsum dolor sit amet. Ea saepe reprehenderit et exercitationem 40 in 1 pack.",
//       price: "Rs.199.00"
//     },
//     {
//       image: "/main-images/home-img1.png",
//       description: "The Lorem ipsum filling text is used by graphic designers.",
//       price: "Rs.259.00"
//     },
//     {
//       image: "/main-images/home-img1.png",
//       description: "Lorem ipsum dolor sit amet. Ea saepe reprehenderit et exercitationem 40 in 1 pack.",
//       price: "Rs.99.00"
//     },
//     {
//       image: "/main-images/home-img1.png",
//       description: "Lorem ipsum dolor sit amet. Ea saepe reprehenderit et exercitationem 40 in 1 pack.",
//       price: "Rs.99.00"
//     }
//   ];

//   return (
//     <div className="shop-container">
//       <h2 className="shop-title">Best in selling</h2>
//       <div className="swiper-container">
//         <Swiper
//           modules={[Navigation, Pagination]}
//           slidesPerView={3}
//           spaceBetween={25}
//           loop={true}
//           pagination={{
//             clickable: true,
//             dynamicBullets: true,
//           }}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//             },
//             520: {
//               slidesPerView: 2,
//             },
//             950: {
//               slidesPerView: 3,
//             },
//           }}
//         >

//           {products.map((product, index) => (
//             <SwiperSlide key={index}>
//               <div className="card">
//                 <img src={product.image} alt={`Product ${index + 1}`} className="card-image" />
//                 <p className="card-description">{product.description}</p>
//                 <p className="card-price">{product.price}</p>
//                 <button className="card-button">Add to Cart</button>
//               </div>
//             </SwiperSlide>
//           ))}

//           {/* <SwiperSlide>
//             <div className="card">
//               <img src="/main-images/home-img1.png" alt="Product 1" className="card-image" />
//               <p className="card-description">The Lorem ipsum filling text is used by graphic designers,</p>
//               <p className="card-price">Rs.999.00</p>
//               <button className="card-button">Add to Cart</button>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="card">
//               <img src="/main-images/home-img1.png" alt="Product 2" className="card-image" />
//               <p className="card-description">Lorem ipsum dolor sit amet. Ea saepe reprehenderit et exercitationem 40 in 1 pack</p>
//               <p className="card-price">Rs.199.00</p>
//               <button className="card-button">Add to Cart</button>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="card">
//               <img src="/main-images/home-img1.png" alt="Product 3" className="card-image" />
//               <p className="card-description">The Lorem ipsum filling text is used by graphic designers,</p>
//               <p className="card-price">Rs.259.00</p>
//               <button className="card-button">Add to Cart</button>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="card">
//               <img src="/main-images/home-img1.png" alt="Product 4" className="card-image" />
//               <p className="card-description">Lorem ipsum dolor sit amet. Ea saepe reprehenderit et exercitationem 40 in 1 pack</p>
//               <p className="card-price">Rs.99.00</p>
//               <button className="card-button">Add to Cart</button>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="card">
//               <img src="/main-images/home-img1.png" alt="Product 4" className="card-image" />
//               <p className="card-description">Lorem ipsum dolor sit amet. Ea saepe reprehenderit et exercitationem 40 in 1 pack</p>
//               <p className="card-price">Rs.99.00</p>
//               <button className="card-button">Add to Cart</button>
//             </div>
//           </SwiperSlide>
//           Repeat <SwiperSlide> for more cards */}

//         </Swiper>

//         <div className="swiper-button-next swiper-navBtn"></div>
//         <div className="swiper-button-prev swiper-navBtn"></div>
//         <div className="swiper-pagination"></div>
//       </div>
//     </div>
//   );
// };

// export default CardSlider;