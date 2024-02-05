import React from "react"
import Slider from "react-slick"
import { ppost } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"
import "./ppost.css"


// ... (your other imports)

const Ppost = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <section className='popularPost'>
        <Heading title='Popular Posts' />
        <div className='content'>
          <Slider {...settings}>
            {ppost.map((val, index) => {  // Added index parameter for a unique key
              return (
                <div key={index} className='items'> {/* Use index as a unique key */}
                  <div className='box shadow'>
                    <div className='images'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                      <div className='category category1'>
                        <span>{val.catgeory}</span>
                      </div>
                    </div>
                    <div className='text'>
                      <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                      <div className='date'>
                        <i className='fas fa-calendar-days'></i> {/* Fixed 'class' to 'className' */}
                        <label>{val.date}</label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Ppost;
