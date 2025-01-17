// src/pages/Dashboard.tsx
import React from "react";
import "./Dashboard.css";
import {
  Header,
  HeroCard,
  MoreDetails,
  TrustedBy,
  Footer,
  RegForm,
} from "../../components";
import {
  CardImg1,
  CardImg2,
  CardImg3,
  HeroImage,
  IntroUnderline,
  PadLoack,
  Statistics,
  Trophy,
  RegImage,
  Background,
} from "../../assets/images";
import { HeroCardData, MoreDetailData } from "../../types";

const heroCardData: HeroCardData[] = [
  {
    image: CardImg1,
    name: "Andrew Schultz",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
  },
  {
    image: CardImg2,
    name: "Andrew Schultz",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
  },
  {
    image: CardImg3,
    name: "Andrew Schultz",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
  },
];
const moreDetailData: MoreDetailData[] = [
  {
    image: PadLoack,
    name: "24/7 Support",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: Statistics,
    name: "1000+ reviews",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: Trophy,
    name: "And more!",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="bg">
        <img src={Background} alt="" />
      </div>

      <div className="content">
        <Header />

        <div className="heroSection">
          <div className="heroLeft">
            <p className="heroHeading">
              Lorem ipsum{" "}
              <span className="formatted">
                dolor
                <img src={IntroUnderline} alt="" />
              </span>{" "}
              sit amet yo 👋
            </p>

            <HeroCard data={heroCardData} />
          </div>

          <div className="heroRight">
            <img src={HeroImage} alt="" />
          </div>
        </div>

        <MoreDetails data={moreDetailData} />

        <TrustedBy />

        <div className="regSection">
          <div className="regLeft">
            <img src={RegImage} alt="" />
          </div>
          <div className="regRight">
            <RegForm />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
