import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Recents extends React.Component {
    render() {
        return (
            <Carousel showThumbs={false}>
                <div>
                    <img 
                        className="carousel-pic"
                        src="https://i.imgur.com/IkRCb8t.jpg" 
                    />
                </div>
                <div>
                    <img 
                        className="carousel-pic"
                        src="https://i.imgur.com/Lmv5oJP.jpg?1" 
                    />
                </div>
                <div>
                    <img 
                        className="carousel-pic"
                        src="https://i.imgur.com/4xCDDDd.jpg?1" 
                    />
                </div>
            </Carousel>
        )
    }
}

export default Recents;