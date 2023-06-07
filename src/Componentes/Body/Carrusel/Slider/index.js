import "./Slider.css"
import React, { Component, lazy, Suspense } from "react";
import Slider from "react-slick";
// import VideoCards from "../VideoCards";
const LazyYouTube = lazy(() => import('../VideoCards'));
export default class CenterMode extends Component {
    
    render() {
        const {categoria, videos } = this.props;
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
                                    videos.map((video)=> <Suspense fallback={<div>Loading...</div>}>
                                                            <LazyYouTube  datos= {video} key={video.link} />
                                                        </Suspense>
                                    
                                    
                                                        // <VideoCards 
                                                        //     datos= {video} 
                                                        //     key={video.link} 
                                                        //  />
                                    )
                                }

                            </Slider>
                        </div>
                    
                    } 
                </div>
        );
    }
}