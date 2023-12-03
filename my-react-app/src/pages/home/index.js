import React from "react";
import Hero from "../../components/hero";
import FeatureInfo from "../../features/featureInfo";
import Chat from "../../assets/img/icon-chat.png";
import Money from "../../assets/img/icon-money.png";
import Security from "../../assets/img/icon-security.png";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="features">
        <FeatureInfo
          image={Chat}
          title={"You are our #1 priority"}
          description={
            "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          }
        />
        <FeatureInfo
          image={Money}
          title={"More savings means higher rates"}
          description={
            "The more you save with us, the higher your interest rate will be!"
          }
        />
        <FeatureInfo
          image={Security}
          title={"Security you can trust"}
          description={
            "We use top of the line encryption to make sure your data and money is always safe."
          }
        />
      </section>
    </div>
  );
};

export default Home;
