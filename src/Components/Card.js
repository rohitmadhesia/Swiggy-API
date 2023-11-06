
import { COLUD_URL } from "../Utilites/Constant";
const Card = (props) => {
  const { apiData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    feeDetails,
    areaName,
    avgRating,
    id
  } = apiData.info;
  return (
    <>
      <div className="m-2 p-4 w-[250px] rounded-md bg-pink-200">
        <div className="card-img">
          <img
            className="rounded-md "
            alt="biryani"
            src={COLUD_URL + cloudinaryImageId}
          />

          <div>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{}</h4>
            <h4>{areaName}</h4>
            <h4>{avgRating} star</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
