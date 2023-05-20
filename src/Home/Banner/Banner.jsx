import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 200, once: true });
      }, []);

    return (
        <div className="carousel w-full"  data-aos="flip-right" data-aos-delay="200">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://cdn.shopify.com/s/files/1/1969/6605/files/Website-banner_figures.jpg?v=1657633477&width=1920" className="w-full h-[500px] rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://wallpaperaccess.com/full/200849.jpg" className="w-full h-[500px] rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://s7ap1.scene7.com/is/image/bigw/020323-DCComics(Warner%20Bros)-BrandHeroBanner-Mobile-828x560?$cms-max-image-threshold$&fmt=jpeg&wid=1178&fit=hfit%2C1" className="w-full h-[500px] rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://cdn.shopify.com/s/files/1/2637/6278/files/banner_transformers_1000x.png?v=1677032856" className="w-full h-[500px] rounded-lg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;