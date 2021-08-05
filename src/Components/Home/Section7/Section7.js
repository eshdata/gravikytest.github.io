/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import naomi from "../../../assets/naomicampbell.jpeg"
import play from "../../../assets/Play.png";
import "./Section7.css";

export default class Section7 extends Component {
  render() {
    return (
      <div className="section7-container">
        <div className="section7-left">
          <h1>Pangaia x AIR-INK®</h1>
          <p>
            We partnered with Pangaia to create water-based black ink from air pollution.
          </p>
          <img className="card-img-mobile-version" src={naomi} alt="naomi" />
          <div className="section7-button-container">
            <a className="partner-button" href="/partners">
              Partner with us
            </a>
            <a className="watch-video-button" href="https://www.youtube.com/watch?v=LRZedVsNulk" target= "_blank">
              <img src={play} alt="Play" />
              Watch Video
            </a>
          </div>
        </div>
        <img className="card-img" src={naomi} alt="naomi" />
      </div>
    );
  }
}
