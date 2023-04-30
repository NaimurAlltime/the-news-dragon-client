import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopNews from "../../News/TopNews/TopNews";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h4>All Category</h4>
      <div className="mt-4">
        {categories.map((category) => (
          <p key={category.id}>
            {" "}
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none color-secondary fs-5 fw-semibold py-3"
            >
              {category.name}
            </Link>{" "}
          </p>
        ))}
      </div>
      <TopNews></TopNews>
    </div>
  );
};

export default LeftNav;
