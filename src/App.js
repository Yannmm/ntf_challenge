import "./App.css";
import Main from "./componenets/Main";
import Header from "./componenets/Header";
import PunkList from "./componenets/PunkList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(1);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xad6c0ECC40C5c043C6e8b720fCB78E5Bb94988c7"
      );
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
