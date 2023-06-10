import React, { Component, lazy, Suspense } from "react";
import "./Slider.css"
import Slider from "react-slick";

const LazyYouTube = lazy(() => import('../VideoCards'));
export default class CenterMode extends Component {
    
    render() {
        const {categoria, videos } = this.props;
        const settings = {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 4,
          speed: 500,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        };
        
        return (
                <div className="slider">
                    { videos.length > 0 &&
                        <div key={categoria.catColor} >                    
                            <h2 style={{borderColor: categoria.catColor}}>{categoria.categoria}</h2>
                            
                            <Slider {...settings } >
                                {
                                    videos.map((video)=> <Suspense fallback={<div>Loading...</div>}>
                                                            <LazyYouTube  datos= {video} key={video.link} width="100%"/>
                                                        </Suspense>                                   
                                    )
                                }

                            </Slider>
                        </div>
                    
                    } 
                </div>
        );
    }
}