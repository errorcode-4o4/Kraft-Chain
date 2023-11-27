import Navbar from "./Navbar";
import axie from "../tile.jpeg";
import { useLocation, useParams, Link, } from 'react-router-dom';
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useState } from "react";
import { GetIpfsUrlFromPinata } from "../utils";

export default function NFTPage (props) {

const [data, updateData] = useState({});
const [dataFetched, updateDataFetched] = useState(false);
const [message, updateMessage] = useState("");
const [currAddress, updateCurrAddress] = useState("0x");

async function getNFTData(tokenId) {
    const ethers = require("ethers");
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    //Pull the deployed contract instance
    let contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer)
    //create an NFT Token
    var tokenURI = await contract.tokenURI(tokenId);
    const listedToken = await contract.getListedTokenForId(tokenId);
    tokenURI = GetIpfsUrlFromPinata(tokenURI);
    let meta = await axios.get(tokenURI);
    meta = meta.data;
    console.log(listedToken);

    let item = {
        price: meta.price,
        tokenId: tokenId,
        seller: listedToken.seller,
        owner: listedToken.owner,
        image: meta.image,
        name: meta.name,
        artisan: meta.artisan,
        description: meta.description,
    }
    console.log(item);
    updateData(item);
    updateDataFetched(true);
    console.log("address", addr)
    updateCurrAddress(addr);
}

async function buyNFT(tokenId) {
    try {
        const ethers = require("ethers");
        //After adding your Hardhat network to your metamask, this code will get providers and signers
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        //Pull the deployed contract instance
        let contract = new ethers.Contract(MarketplaceJSON.address, MarketplaceJSON.abi, signer);
        const salePrice = ethers.utils.parseUnits(data.price, 'ether')
        updateMessage("Buying the NFT... Please Wait (Upto 5 mins)")
        //run the executeSale function
        let transaction = await contract.executeSale(tokenId, {value:salePrice});
        await transaction.wait();

        alert('You successfully bought the NFT!');
        updateMessage("");
    }
    catch(e) {
        alert("Upload Error"+e)
    }
}


  const handlePayment = async () => {
    window.location.href = '/payment';
  };

    const params = useParams();
    const tokenId = params.tokenId;
    if(!dataFetched)
        getNFTData(tokenId);
    if(typeof data.image == "string")
        data.image = GetIpfsUrlFromPinata(data.image);

    return(
        <div style={{"minheight":"100vh"}}>
            <Navbar></Navbar>
            <div className="flex ml-20 mt-20">
                <img src={data.image} alt="" className="w-2/5" />
                <div className="text-xl ml-20 space-y-8 text-white shadow-2xl rounded-lg border-2 p-5">
                    <div>
                        Name: {data.name}
                    </div>
                    <div>
                        Artisan Name: {data.artisan}
                    </div>
                    <div>
                        Description: {data.description}
                    </div>
                    <div>
                        Price: <span className="">{data.price + " ETH"}</span>
                    </div>
                    <div>
                        Owner Address: <span className="text-sm">{data.owner}</span>
                    </div>
                    <div>
                        Seller Address: <span className="text-sm">{data.seller}</span>
                    </div>
                    <div>
                    { currAddress != data.owner && currAddress != data.seller ?
                    
                        <button className="enableEthereumButton bg-[#296f71] hover:bg-[#2fb1b5] text-white font-bold py-2 px-4 rounded text-sm" onClick={() => buyNFT(tokenId)}>Buy with Crypto</button>
    
                        : <div className="text-[#2fb1b5]">You are the owner of this NFT</div>
                    
                    }
                    <button className="enableButton bg-[#296f71] hover:bg-[#2fb1b5] text-white font-bold py-2 px-4 rounded text-sm" onClick={handlePayment}>Buy with Fiat</button>
                    
                    <div className="text-green text-center mt-3">{message}</div>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto mt-8 p-8 bg-white shadow-lg rounded-md">
      <div className="flex items-center justify-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Receiving Address</h2>
      </div>
      <form>
        <div className="mb-4">
          <label htmlFor="Address" className="block text-gray-600 text-sm font-semibold mb-2">
            Address
          </label>
          <div className="relative">
            <input
              type="text"
              id="cardNumber"
              className="w-full p-3 pl-12 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <label htmlFor="Address" className="block text-gray-600 text-sm font-semibold mb-2">
            Contact No:
          </label>
          <div className="relative">
            <input
              type="text"
              id="Contact Number"
              className="w-full p-3 pl-12 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        
        
      </form>
    </div>
        </div>
    )
}