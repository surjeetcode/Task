import React from "react";
import './TextData.css'
import img from '../../assests/images/image.png'



const TextData = () => {
  return (
    <div className="main-text">
      <div className="container-fluid">
        <div
          class="d-flex justify-content-around align-items-center average-header"
          
        >
          <div class="text-center">
            <div class="average-header-maintext color-green">0.95 %</div>
            <div class="average-header-subHeading">5 Mins</div>
          </div>
          <div class="text-center">
            <div class="average-header-maintext color-green">1.94 %</div>
            <div class="average-header-subHeading">1 Hour</div>
          </div>
          <div >
            <div class="text-center font-32 average-block">
              <div class="average-subText">
                <span class="subText-heading">Best Price to Trade</span>
              </div>
              <div class="average-heading" >
                ₹ 40,20,468
              </div>
              <div class="average-subText">
                Average BTC/INR net price including commission
              </div>
            </div>
          </div>
          <div class="text-center">
            <div class="average-header-maintext color-green">9.02 %</div>
            <div class="average-header-subHeading">1 Day</div>
          </div>
          <div class="text-center">

            <div class="average-header-maintext color-green">9.35 %</div>
            <div class="average-header-subHeading">7 Days</div>
          </div>

        </div>
          <a href="">

              <img class="advir" src={img} alt=""/>
          </a>
      </div>
    </div>
  );
};

export default TextData;
