import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout.js";
import "../pages/Catt.css"
const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
        <div className="row justify-content-center">
          {categories.map((c) => (
            <div className="col-md-6 mt-4" key={c._id}>
              <div className="category-card">
                <Link to={`/category/${c.slug}`} className="btn btn-primary">
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
