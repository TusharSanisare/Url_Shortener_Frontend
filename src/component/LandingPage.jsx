import { useNavigate } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";

import img2 from "../assets/images/img2.png";
import create_url_shortener from "../assets/images/create-url-shortener.png";
import analysis from "../assets/images/analysis.jpg";
import security from "../assets/images/security.jpg";
import fastspeed from "../assets/images/fastspeed.jpeg";

import Card from "./Card";
import { useStoreContext } from "../contextApi/ContextApi";

let desc =
  "Generate short, memorable links with ease using Linklytics’s intuitive interface. Share URLs effortlessly across platforms. Optimize your sharing strategy with Linklytics. Track clicks and manage your links seamlessly to enhance your online presence. Generate short, memorable links with ease using Linklytics’s intuitive interface. Share URLs effortlessly across platforms.";

const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();
  // console.log("TOKEN FROM LANDING PAGE: " + token);

  const dashBoardNavigateHandler = () => {};
  return (
    <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4 my-main-container">
      <div className="lg:flex-row flex-col    lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
        <div className=" flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl  md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
          >
            <span className="text-blue-700">Ur_Shorty</span> is an AI powered
            Url's shortener, Use AI to get personalized Url.
          </motion.h1>
          <p className="text-slate-700 text-sm my-5 ">
            Ur_Shorty streamlines the process of URL shortening, making sharing
            links effortless and efficient. With its user-friendly interface,
            Linklytics allows you to generate concise, easy-to-share URLs in
            seconds. Simplify your sharing experience with Linklytics today.
          </p>
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={() => navigate("/dashboard")}
              className="bg-custom-gradient  lg:w-55 w-40  lg:font-bold text-white rounded-md py-2 lg:py-4 cursor-pointer"
            >
              Try AI Url Shortener
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={() => navigate("/dashboard")}
              className="border-btnColor w-40 lg:w-55  lg:font-bold border rounded-md  py-2 lg:py-4 cursor-pointer"
            >
              Manage Url's
            </motion.button>
          </div>
        </div>
        <div className="   flex-1 flex   justify-center w-full">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-[480px] w-[400px] object-cover rounded-md"
            // src="/src/assets/images/img2.png"
            src={img2}
            alt=""
          />
        </div>
      </div>
      <div className="sm:pt-12 pt-7">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-slate-800 font-roboto font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
        >
          Trusted by individuals and teams at the world best companies{" "}
        </motion.p>
        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card
            title="Simple URL Shortening"
            desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
            image={create_url_shortener}
          />
          <Card
            title="Powerful Analytics"
            desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
            image={analysis}
          />
          <Card
            title="Enhanced Security"
            desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
            image={security}
          />
          <Card
            title="Fast and Reliable"
            desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available & responsive, ensuring a seamless experience for your users."
            image={fastspeed}
          />
        </div>
        <div className="m-3">
          <p className="text-center font-serif text-red-400">
            Note: It's a personal project we our using free services and
            databases so it take time to load
          </p>
          <p className="text-center font-serif text-red-700">
            Please Referesh and Try Again if not work!!! sorry...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
