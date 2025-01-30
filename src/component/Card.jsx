import React from "react";
import { motion } from "framer-motion";
const Card = ({ title, desc, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="shadow-md shadow-slate-400 border flex flex-col p-4  gap-3 rounded-sm"
    >
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="object-cover rounded-md"
        src={`../src/assets/images/${image}`}
        alt=""
      />
      <h1 className="text-slate-900 text-xl font-bold ">{title}</h1>
      <p className="text-slate-700 text-sm"> {desc}</p>
    </motion.div>
  );
};

export default Card;
