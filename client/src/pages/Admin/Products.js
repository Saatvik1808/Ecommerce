import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "../../components/Layout";
import AdminMenu from "../../components/AdminMenu";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  // Get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("http://localhost:8081/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  // Lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/4">
          <AdminMenu />
        </div>
        <div className="w-full md:w-3/4">
          <h1 className="text-center text-2xl font-bold my-4">All Products List</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card shadow-md bg-white rounded-lg">
                  <img
                    src={`http://localhost:8081/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top h-40 w-full object-cover rounded-t-lg"
                    alt={p.name}
                  />
                  <div className="p-4">
                    <h5 className="text-lg font-semibold">{p.name}</h5>
                    <p className="text-gray-600 mt-2">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
