import React from "react";
import { Link } from "react-router-dom";
const Coin = ({ coin, deleteCoin }) => {
  return (
    <Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin">
      <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
          
         {/* <span className="mx-3">{coin.name}</span> */} 
        
        <div>
        <img className="coinlist-image" src={coin.image} alt="pic" />
        </div>
        <div>
        <span className="text-decoration-none">${coin.current_price}</span>
        </div>
        <div>
        <span
          className={
            coin.price_change_percentage_24h < 0
              ? "text-danger me-2"
              : "text-success me-2"
          }
        >
          {" "}
          {coin.price_change_percentage_24h < 0 ? (
            <i className="fas fa-sort-down align-middle me-1"></i>
          ) : (
            <i className="fas fa-sort-up align-middle me-1"></i>
          )}
          {coin.price_change_percentage_24h}%
        </span>
        <i
          onClick={(e) => {
            e.preventDefault();
            deleteCoin(coin.id);
          }}
          className="delete-icon far fa-times-circle text-danger"
        ></i>
        </div>
        
        
      </li>
    </Link>
  );
};

export default Coin;
