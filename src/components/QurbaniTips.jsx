"use client"
import React, { useState } from "react";
import { useTrail, useSpring, animated, config } from "@react-spring/web";

const QurbaniTipsPage = () => {
  const tips = [
    {
      title: "Check Health First",
      desc: "Always choose animals that are healthy, active, and disease-free."
    },
    {
      title: "Proper Weight Matters",
      desc: "Make sure the animal has proper weight according to its age."
    },
    {
      title: "Age Requirement",
      desc: "Cow must be at least 2 years old for valid Qurbani."
    },
    {
      title: "Clean Environment",
      desc: "Buy animals from clean and trusted farms or sellers."
    },
    {
      title: "Healthy Habitat",
      desc: "Ensure animals are raised in safe and well-maintained environments."
    },
    {
      title: "Trusted Source",
      desc: "Choose verified breeders or sellers with good hygiene standards."
    }
  ];

  // Trail animation for cards - stagger effect
  const trail = useTrail(tips.length, {
    from: { opacity: 0, x: -40, rotateZ: -10 },
    to: { opacity: 1, x: 0, rotateZ: 0 },
    config: config.gentle
  });

  // Title animation
  const titleSpring = useSpring({
    from: { opacity: 0, y: -30 },
    to: { opacity: 1, y: 0 },
    config: config.molasses
  });

  // Hover state for individual cards
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getCardSpring = (index) =>
    useSpring({
      transform:
        hoveredIndex === index
          ? "translateY(-8px) scale(1.02)"
          : "translateY(0px) scale(1)",
      boxShadow:
        hoveredIndex === index
          ? "0 20px 40px rgba(0, 0, 0, 0.15)"
          : "0 4px 12px rgba(0, 0, 0, 0.08)",
      config: config.wobbly
    });

  return (
    <section className="py-12 px-6 bg-gray-50">
      <animated.h2
        style={titleSpring}
        className="text-3xl font-bold text-center mb-8 text-green-700"
      >
        Qurbani Tips
      </animated.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trail.map((style, index) => (
          <AnimatedCard
            key={index}
            style={style}
            item={tips[index]}
            index={index}
            onHover={setHoveredIndex}
            hoverSpring={getCardSpring(index)}
          />
        ))}
      </div>
    </section>
  );
};

const AnimatedCard = ({ style, item, index, onHover, hoverSpring }) => {
  return (
    <animated.div
      style={{
        ...style,
        ...hoverSpring
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="bg-white p-5 rounded-xl transition-all cursor-pointer"
    >
      <h3 className="font-semibold text-lg mb-2 text-gray-800">
        {item.title}
      </h3>
      <p className="text-sm text-gray-600">{item.desc}</p>
    </animated.div>
  );
};

export default QurbaniTipsPage;