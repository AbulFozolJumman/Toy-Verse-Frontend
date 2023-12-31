import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// This is Banner Section
// AOS implementing to Banner
const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 200, once: true });
      }, []);

    return (
        <div className="carousel w-full"  data-aos="flip-right" data-aos-delay="200">
            <div id="slide1" className="carousel-item relative w-full rounded-none">
                <img src="https://i.ibb.co/P54CJZq/Web-Banner-1.png" className="w-full h-[500px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/3Wjdgky/5a3f7b09.webp" className="w-full h-[500px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/275GDS3/DSCN1173-1.jpg" className="w-full h-[500px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/9HR5M88/banner-transformers-1000x.png" className="w-full h-[500px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;