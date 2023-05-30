import "./Slider.css"
import React, { Component } from "react";
import Slider from "react-slick";
import VideoCards from "../VideoCards";

export default class CenterMode extends Component {
    
    render() {
        const {categoria, videos } = this.props;
        // console.log(videos.length > 0)
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
                    { videos.length > 0 &&
                        <div key={categoria.catColor} >                    
                            <h2 style={{borderColor: categoria.catColor}}>{categoria.categoria}</h2>
                            
                            <Slider {...settings } >
                                {
                                    videos.map((video)=> <VideoCards 
                                                            datos= {video} 
                                                            key={video.link} 
                                                         />
                                    )
                                }

                            </Slider>
                        </div>
                    
                    } 
                </div>
        );
    }
}