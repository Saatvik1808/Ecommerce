import React, { useState, useEffect } from "react";
import Layout from '../components/Layout.js'
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8081/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8081/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto mt-2" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
        <div className="flex flex-wrap items-center justify-center md:justify-start">
          <img
            src={`http://localhost:8081/api/v1/product/product-photo/${product._id}`}
            alt={product.name}
            className="rounded-md shadow-md w-64 md:w-96 h-auto my-4"
          />
          <div className="md:ml-8">
            <h1 className="text-2xl md:text-4xl font-bold">{product.name}</h1>
            <h6 className="text-lg md:text-xl font-medium">Description: {product.description}</h6>
            <h6 className="text-lg md:text-xl font-medium">Price: ₹ {product.price}</h6>
            <h6 className="text-lg md:text-xl font-medium">Category: {product?.category?.name}</h6>
            <button className="btn btn-secondary mt-4 md:mt-6 text-lg md:text-xl">ADD TO CART</button>
          </div>
        </div>
      </div>
      <hr className="my-8" />
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Similar Products</h2>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="flex flex-wrap justify-center md:justify-start">
          {relatedProducts?.map((p) => (
            <div className="card m-2" style={{ width: "18rem" }}>
              <img
                src={`http://localhost:8081/api/v1/product/product-photo/${p?._id}`}
                alt={p.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0, 30)}...</p>
                <p className="card-text">₹ {p.price}</p>
                <button
                  className="btn btn-primary mt-2 md:mt-4"
                  onClick={() => navigate(`/product/${p.slug}`)}
                >
                  More Details
                </button>
                <button className="btn btn-secondary mt-2 md:mt-4">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
