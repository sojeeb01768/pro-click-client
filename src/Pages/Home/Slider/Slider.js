import React from 'react';
import img1 from '../../../assets/images/slider/1.jpg';
import img2 from '../../../assets/images/slider/2.jpg';
import img3 from '../../../assets/images/slider/3.jpg';
import img4 from '../../../assets/images/slider/4.jpg';
import img5 from '../../../assets/images/slider/5.jpg';
import img6 from '../../../assets/images/slider/6.jpg';

const Slider = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-5/6 ">
                    <img src={img1} alt='' className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img2} alt='' className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img3} alt='' className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={img4} alt='' className="w-full" />
                </div>
                <div id="item5" className="carousel-item w-full">
                    <img src={img5} alt='' className="w-full" />
                </div>
                <div id="item6" className="carousel-item w-full">
                    <img src={img6} alt='' className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
                <a href="#item6" className="btn btn-xs">6</a>
            </div>
        </div>
    );
};

export default Slider;