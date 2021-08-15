import { Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader;

function Banner() {
    return (
        <div className="relative">

            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>


            <Carousel 
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={4000}
            >
                <div>
                    <img loading="lazy" src="/images/slide1.jpg" alt="" />
                </div>

                <div>
                    <img loading="lazy" src="/images/slide2.jpg" alt="" />
                </div>

                <div>
                    <img loading="lazy" src="/images/slide3.jpg" alt="" />
                </div>
                
                <div>
                    <img loading="lazy" src="/images/slide4.jpg" alt="" />
                </div>
                
                <div>
                    <img loading="lazy" src="/images/slide5.jpg" alt="" />
                </div>
                
                <div>
                    <img loading="lazy" src="/images/slide6.jpg" alt="" />
                </div>
                
                <div>
                    <img loading="lazy" src="/images/slide7.jpg" alt="" />
                </div>

            </Carousel>
        </div>
    )
}

export default Banner
