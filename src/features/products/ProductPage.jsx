import React from 'react';
import '../products/style/ProductPage.css';

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
  },
  {
    image: "/main-images/SambraniPowder.png",
    description: "Premium Sambrani Powder",
    price: "Rs.199.00"
  },
  {
    image: "/main-images/SandalCone.png",
    description: "Premium Sandal Cone",
    price: "Rs.999.00"
  },
  {
    image: "/main-images/ThickStick.png",
    description: "Premium Thick Stick",
    price: "Rs.199.00"
  },
  {
    image: "/main-images/ThinStick.png",
    description: "Premium Thin Stick",
    price: "Rs.199.00"
  },
  {
    image: "/main-images/UpComing.png",
    description: "The Lorem ipsum filling text is used by graphic designers.",
    price: "Rs.999.00"
  },
  {
    image: "/main-images/UpComing.png",
    description: "Lorem ipsum dolor sit amet. Ea saepe reprehenderit et exercitationem 40 in 1 pack.",
    price: "Rs.199.00"
  },
  {
    image: "/main-images/UpComing.png",
    description: "Lorem ipsum dolor sit amet. Ea saepe reprehenderit et exercitationem 40 in 1 pack.",
    price: "Rs.199.00"
  },
  {
    image: "/main-images/UpComing.png",
    description: "The Lorem ipsum filling text is used by graphic designers.",
    price: "Rs.999.00"
  },
  {
    image: "/main-images/UpComing.png",
    description: "Lorem ipsum dolor sit amet. Ea saepe reprehenderit et exercitationem 40 in 1 pack.",
    price: "Rs.199.00"
  },
  {
    image: "/main-images/UpComing.png",
    description: "Lorem ipsum dolor sit amet. Ea saepe reprehenderit et exercitationem 40 in 1 pack.",
    price: "Rs.199.00"
  },
];

const ProductPage = () => {
  return (
    <div className="product-page">
      <h1 className="title">Products</h1>
      <div className="filter-sort">
        <span>FILTER BY: <select><option>All Products</option></select></span>
        <span>SORT BY: <select><option>Default</option></select></span>
      </div>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={`Product ${index + 1}`} />
            <p className="description">{product.description}</p>
            <p className="price">{product.price}</p>
            <button className="add-to-cart">ADD TO CART</button>
          </div>
        ))}
      </div>
      <button className="view-all">View all</button>
      <div className="promotions">
        <div className="promo-card bg-color-pink">
          <h5>Motivate Your Crew
            & Clients with our</h5>
          <h2>Corporate Gifting Options</h2>
          <p>Say thanks Lorem ipsum dolor sit amet. Ea saepe reprehenderit et exercitationem.</p>
        </div>
        <div className="promo-card-img">
          <img src="./main-images/AllProducts.png" alt="Promo 1" />
        </div>
        <div className="promo-card bg-color-green">
          <h5> Order Boxes worth
            INR 500/- & Avail</h5>
          <h2>Free Shipping</h2>
          <p>We are making orem ipsum dolor sit amet. Ea saepe reprehenderit et exercitationem.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
