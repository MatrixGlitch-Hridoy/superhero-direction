import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Youtuber = (props) => {
  const { name, channelName, subscriber, image, Salary } = props.youtuber;
  return (
    <>
      <div className="card h-100">
        <img src={image} alt="" className="w-25" />
        <div className="card-body">
          <h4>{name}</h4>
          <p>Channel Name: {channelName}</p>
          <p>Subscribers: {subscriber}</p>
          <p>Salary: {Salary}</p>
          <button
            className="btn-regular"
            onClick={() => props.handleAddToCart(props.youtuber)}
          >
            Hire Now
          </button>
        </div>
      </div>
        
    </>
  );
};

export default Youtuber;
