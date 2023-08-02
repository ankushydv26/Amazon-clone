import React from 'react'
import {useState} from 'react'
import Cover from "../asset/image/cover.jpg"
import "./home.css"
import Product from "./Product"
import WFH  from "../asset/image/chair.jpg"
import Headphone from "../asset/image/headphone.jpg"
import Bluetooth from "../asset/image/Bt.jpg"
import TV from "../asset/image/tv.jpg"
import Alexa from "../asset/image/echo.jpg"


const Home = () => {

  
  
  
    return (
        <>

        <div  className="home">
          <div className="home-container">
              <img
                src={Cover}
                alt="Bg Cover"
                className="home_cover"
              /> 
              <div className="home_row">
                   {/* Product */}
                   <Product 
                   price={299}
                   title="Work From Home Starter Pack" 
                   image={WFH}
                   rating={3}
                   id="Chair2" 
                   />
                   <Product
                    price={99}
                    title="Up to 50% off on Headphones" 
                    image={Headphone}
                    rating={4} 
                    id="earphone"

                   />
                   {/* Product */}

              </div>
              <div className="home_row">
                  {/* Product */}
                  <Product 
                    price={99}
                    title="Up to 30% off | Refurbished speakers" 
                    image={Bluetooth}
                    rating={3} 
                    id="speaker"

                  />
                   <Product 
                    price={1129}
                    title="Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black) | With Data Saver" 
                    image={TV}
                    rating={5}
                    id="TV"
                   />
                   <Product
                    price={299}
                    title="Work From Home Starter Pack" 
                    image={WFH}
                    rating={4}
                    id="Chair" 

                   />
                   
              </div>
              <div className="home_row">
                 <Product
                   price={199}
                   title="All-new Echo Dot (4th Gen) with clock | Next generation smart speaker with improved bass, LED display and Alexa (Blue)" 
                   image={Alexa}
                   rating={4}
                   id="Alexa" 
                 />
              </div>
          </div>
        </div>  
        </>
    )
}

export default Home;
