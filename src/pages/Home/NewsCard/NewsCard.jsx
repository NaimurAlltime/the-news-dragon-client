import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import {
  BsBookmark,
  BsEyeFill,
  BsShare,
  BsStar,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";
import Rating from "react-rating";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  const { _id, title, image_url, details, rating, total_view, author } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex mt-3">
            <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
            <div className="ms-3">
              <h6 className="mb-0">{author?.name}</h6>
              <p>
                <small>
                  {moment(author?.published_date).format("yyyy-MM-D")}
                </small>
              </p>
            </div>
          </div>
          <div>
            <BsBookmark className="me-2 fs-4" />
            <BsShare className="me-2 fs-4" />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className="fw-bold fs-5">{title}</Card.Title>
          <Card.Img className="img-fluid" src={image_url} alt="Card image" />
          <Card.Text>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>{details.slice(0, 250)}</>
            )}{" "}
            ...{" "}
            <Link
              style={{
                color: "#fd1d1d",
              }}
              className="text-decoration-none fw-medium"
              to={`/news/${_id}`}
            >
              Read More
            </Link>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex">
          <div className="flex-grow-1">
            <Rating
              placeholderRating={3.5}
              emptySymbol={<BsStar />}
              placeholderSymbol={<BsStarFill style={{ color: "#FF8C47" }} />}
              fullSymbol={<BsStarHalf />}
            />
            <span className="ms-1"> {rating.number} </span>
          </div>
          <div>
            <BsEyeFill /> <span>{total_view}</span>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
