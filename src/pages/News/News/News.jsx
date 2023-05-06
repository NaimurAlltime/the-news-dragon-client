import React from "react";
import { Button, Card } from "react-bootstrap";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsaight from "../EditorsInsight/EditorsInsaight";
import useTitle from "./../../../hooks/useTitle";

const News = () => {
  const news = useLoaderData();

  useTitle("Details");

  const { category_id, title, image_url, details } = news;
  // console.log(news);
  return (
    <div>
      <Card>
        <Card.Img className="p-2" variant="top" src={image_url} />
        <Card.Body>
          <Card.Title className="fw-bold">{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            {" "}
            <Button className="btn btn-danger">
              <BiLeftArrowAlt className="fs-4" /> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsaight></EditorsInsaight>
    </div>
  );
};

export default News;
