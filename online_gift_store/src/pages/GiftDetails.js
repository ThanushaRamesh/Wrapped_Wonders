import React from "react";
import { useHistory } from "react-router-dom";
import "./GiftDetails.css";
import Popup from "reactjs-popup";

export default function GiftDetails() {
  const history = useHistory();

  return (
    <section className='single-product'>
      <img
        src={require("../assets/Categories/Birthday.jpg")}
        alt={"sample"}
        className='single-product-image'
      />
      <article>
        <h1 className='gift-title'>{"Special Black Forest Cake"}</h1>
        <h3>{"15 Euros"}</h3>
        <p>
          Life is full of varied experiences and experiences count. They help us
          stride through tough times and make our lives meaningful. We at
          Wrapped Wonders are committed to giving you and loved one's
          experiences that are sure to be cherished for a very long time. We are
          India's best online gift store wherein you will find amazing gift
          ideas for all your special relationships. With an experience of over
          15 years in the gifting industry, we at Wrapped Wonders (Indian Gifts
          Portal) exactly know what impact a thoughtful gift can have on the
          mind of the receiver. Picking a perfect gift is an art. Making the
          right gift selection takes planning, research, and personal attention.
          While selecting the best gifts for loved ones, you need to take into
          consideration the recipients likes and dislikes, their personality,
          and preferences. Also, the gift needs to be thoughtful and
          user-friendly at the same time. When choosing a gift for someone
          special, you need to put in that extra effort to ensure a "wow" moment
          for the receiver when the wrapping paper comes off.
        </p>
        {/* <button
          className='btn btn-primary btn-block'
          onClick={() => {
            history.push("/cart");
          }}>
          Add to Cart
        </button> */}
        <Popup modal trigger={<button className="btn-primary btn-contact"> Add to cart</button>}>
        msg={"Hello!! Please tell us something about yourself!!"}/>}
        </Popup>
        {/* <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup> */}
      </article>
    </section>
  );
}
