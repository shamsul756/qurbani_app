const TopBreedsPage = ({ data = [] }) => {
  const breeds = [...new Set(data.map((item) => item.breed))];

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
         Top Breeds
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {breeds.map((breed, i) => (
          <span
            key={i}
            className="px-5 py-2 bg-green-100 text-green-700 rounded-full shadow-sm hover:bg-green-200 transition"
          >
            {breed}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TopBreedsPage;