import { Link } from "react-router-dom";
import { GetIpfsUrlFromPinata } from "../utils";

function NFTTile(data) {
  const newTo = {
    pathname: "/nftPage/" + data.data.tokenId,
  };

  const IPFSUrl = GetIpfsUrlFromPinata(data.data.image);

  return (
    <Link to={newTo}>
      <div className="border-2 h-80 ml-12 mt-5 mb-12 flex flex-col items-center rounded-lg shadow-2xl">
        <img
          src={IPFSUrl}
          alt=""
          className="h-[19.5rem] rounded-lg object-cover"
          crossOrigin="anonymous"
        />
        <div className="text-white h-80 w-full p-2 bg-gradient-to-t from-[#454545] to-transparent rounded-lg pt-5 -mt-20">
          <strong className="text-xl">{data.data.name}</strong>
          <strong className="text-xl">{data.data.artisan}</strong>
          <p className="display-inline text-center max-w-[16rem]">{data.data.description && data.data.description.length > 22 ? data.data.description.substring(0,22) + "...": data.data.description }</p>
        </div>
      </div>
    </Link>
  );
}

export default NFTTile;
