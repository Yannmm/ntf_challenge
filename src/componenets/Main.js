import React, { useState, useEffect } from "react";
import "./Main.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const Main = (punkListData, selectedPunk) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  console.log(punkListData.punkListData[punkListData.selectedPunk], "🌞");
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHightlight">
          <div className="punkContainer">
            {/* <img
              // activePunk.image_origin_url
              src={activePunk.image_url}
              alt=""
              className="selectedPunk"
            /> */}
          </div>
        </div>
      </div>
      {/* {activePunk.name} */}
      <div className="punkDetails" style={{ color: "#fff" }}>
        <div className="title">最爱的媳妇呀</div>
        <span className="itemNumber">*#3</span>
      </div>

      <div className="owner">
        <div className="onwerImageContainer">
          <img
            src="https://lh3.googleusercontent.com/1A-3djTIzsSuLj5h4yxGo1swkoJtUHnMMJip42iUCdaN1_NNR8FmNDidSlJfJ7DnkJggdRJCfNbwKb6hFytmdGO5RWhGVPMapFpY3Q"
            alt=""
          />
          <div className="ownerDetails">
            <div className="onwerNameAndHandle">
              <div>0xdbc9CcB360105f73446eF8cD87a9b42BaEf80948</div>
              <div className="ownerHandle">@媳妇最爱的萌购</div>
            </div>

            <div className="ownerLink">
              <img src={instagramLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={twitterLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={moreIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
