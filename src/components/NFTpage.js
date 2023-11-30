import Navbar from "./Navbar";
import { useParams, Link } from "react-router-dom";
import MarketplaceJSON from "../Marketplace.json";
import axios from "axios";
import { useState } from "react";
import { GetIpfsUrlFromPinata } from "../utils";

export default function NFTPage() {
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
    let contract = new ethers.Contract(
      MarketplaceJSON.address,
      MarketplaceJSON.abi,
      signer
    );
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
    };
    console.log(item);
    updateData(item);
    updateDataFetched(true);
    console.log("address", addr);
    updateCurrAddress(addr);
  }

  async function buyNFT(tokenId) {
    try {
      const ethers = require("ethers");
      //After adding your Hardhat network to your metamask, this code will get providers and signers
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      //Pull the deployed contract instance
      let contract = new ethers.Contract(
        MarketplaceJSON.address,
        MarketplaceJSON.abi,
        signer
      );
      const salePrice = ethers.utils.parseUnits(data.price, "ether");
      updateMessage("Buying the NFT... Please Wait (Upto 5 mins)");
      //run the executeSale function
      let transaction = await contract.executeSale(tokenId, {
        value: salePrice,
      });
      await transaction.wait();

      alert("You successfully bought the NFT!");
      updateMessage("");
    } catch (e) {
      alert("Upload Error" + e);
    }
  }

  // const ship = async () => {
  //   window.location.href = '/InformationPage';
  // };
  const handlePayment = async () => {
    window.location.href = "/payment";
  };

  const params = useParams();
  const tokenId = params.tokenId;
  if (!dataFetched) getNFTData(tokenId);
  if (typeof data.image === "string")
    data.image = GetIpfsUrlFromPinata(data.image);

  return (
    <div style={{ minheight: "100vh" }}>
      <Navbar/>
      <div className="flex ml-20 my-20">
        <img src={data.image ?? "https://4.bp.blogspot.com/-h6bUufkX-N8/VKhNJBrkJqI/AAAAAAAADXM/sL5thjiOOHc/s1600/FullSizeRender_1.jpg"} alt="" className="w-2/5 rounded-2xl" />
        <div className="text-xl ml-20 space-y-8 text-white shadow-2xl rounded-2xl border-2 p-5 max-w-[45rem]">
          <div>Name: {data.name ?? "Savitar"}</div>
          <div>Artisan Name: {data.artisan ?? "Sudhir Choudhary"}</div>
          <div>Description: {data.description ?? "A great NFT."}</div>
          <div>
            Price: <span className="">{data.price ?? "0.1" + " ETH"}</span>
          </div>
          {/* <div>
            Owner Address: <span className="text-sm">{data.owner}</span>
          </div> */}
          <div>
            Seller Address:{" "}
            <span className="text-sm">
              {data.seller
                ?? "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326"}
            </span>
          </div>
          <div className="flex gap-4">
            {currAddress != data.owner && currAddress != data.seller ? (
              // <button className="enableEthereumButton bg-[#296f71] hover:bg-[#2fb1b5] text-white font-bold py-2 px-4 rounded text-sm" onClick={() => ship()}>Buy this craft</button>
              <button
                className="enableEthereumButton bg-[#296f71] hover:bg-[#2fb1b5] text-white font-bold py-3 px-4 rounded text-sm"
                onClick={() => buyNFT(tokenId)}
              >
                Buy with crypto
              </button>
            ) : (
              <div className="text-[#2fb1b5]">
                You are the owner of this NFT
              </div>
            )}
            <Link to="/info"><button
              className="enableButton bg-[#296f71] hover:bg-[#2fb1b5] text-white font-bold py-3 px-4 rounded text-sm"
            >
              Buy with fiat
            </button></Link>

            <div className="text-green text-center mt-3">{message}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
