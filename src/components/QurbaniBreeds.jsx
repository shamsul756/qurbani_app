"use client"
import { useTrail, animated } from '@react-spring/web'

const TopBreedsPage = ({ data = [] }) => {
  const breeds = [...new Set(data.map((item) => item.breed))];

  const trail = useTrail(breeds.length, {
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    config: {
      tension: 200,
      friction: 18,
    },
  });

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
        Top Breeds
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {trail.map((style, i) => (
          <animated.span
            key={i}
            style={style}
            className="px-5 py-2 bg-green-100 text-green-700 rounded-full shadow-sm hover:bg-green-200 transition"
          >
            {breeds[i]}
          </animated.span>
        ))}
      </div>
    </section>
  );
};

export default TopBreedsPage;