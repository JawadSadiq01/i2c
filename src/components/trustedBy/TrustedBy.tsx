import { IntroUnderline } from "../../assets/images";
import Slider from "../slider/Slider";
import "./TrustedBy.css";

const TrustedBy = () => {
  return (
    <div className="trustedBy">

      <div className="trustedHeadings">
        <span className="formattedHeading">
          Trusted by
          <img src={IntroUnderline} alt="" />
        </span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
          tristique senectus dui pharetra sit.
        </p>
      </div>
      
      <Slider/>
    </div>
  );
};

export default TrustedBy;
