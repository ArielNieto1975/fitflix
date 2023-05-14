import "./Slider.css"
import React, { Component } from "react";
import Slider from "react-slick";
import VideoCards from "../VideoCards";

export default class CenterMode extends Component {
    render() {
        const settings = {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 3,
          speed: 500
    };
    return (
      <div className="slider">
        <h2>Reggaetón</h2>
        <Slider {...settings}>
            <VideoCards />
            <VideoCards />
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/V-HTqiLZArs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/kJs4D6ylEZs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/nMa8DZDbBcE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dcfLLp4VmOI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/nawFtuTzV0Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/GUmzaJNZrgY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/VGXPyzYoNqU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/V-HTqiLZArs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/shNGEI3r2no" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/TNcnRb7ZErk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6r15MHeIStg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/bCkUAK6m3ZI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/3mYzyuxLiII" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </Slider>
      </div>
    );
  }
}