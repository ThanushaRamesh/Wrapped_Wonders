import React, { Component } from "react";
import { FaGift,FaHeart, FaGifts } from "react-icons/fa";
import Title from "./Title"

export default class About extends Component {
  state = {
    services: [
      {
        icon: <FaGift />,
        info:
          "We at Wrapped Wonders are committed to giving you and loved one's experiences that are sure to be cherished for a very long time.Help us stride through tough times and make our lives meaningful."
          
      },
      {
        icon: <FaHeart />,
        info:
          "Making the right gift selection takes planning. While selecting the best gifts for loved ones, you need to take into consideration the recipients likes and dislikes, their personality,and preferences."
      },
      {
        icon: <FaGifts/>,
        info:
          "When choosing a gift for someone special, you need to put in that extra effort to ensure a wow moment for the receiver when the wrapping paper comes off."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="How it works!!" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}