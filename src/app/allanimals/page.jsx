import FeaturesCardPage from "@/components/FeaturesCard";

const AllAnimals = async () => {
  const res = await fetch("https://qurbani-app-five.vercel.app/data.json");
  const animals = await res.json();

  return (
    <section className="px-6 py-12 bg-gray-50 min-h-screen">

      {/* HEADER */}
    <div className="text-center mb-12 animate__animated animate__fadeInUp">
  <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-wide text-green-700 bg-green-100 rounded-full shadow-sm">
    Premium Collection
  </span>

  <h2 className="text-5xl font-extrabold bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 bg-clip-text text-transparent drop-shadow-sm">
    All Animals
  </h2>

  <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-green-500 to-lime-400"></div>

  <p className="max-w-2xl mx-auto mt-5 text-lg text-gray-600 leading-relaxed">
    Find healthy, verified, and well-cared Qurbani animals from trusted farms
    with complete confidence.
  </p>
</div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {animals.map((animal) => (
          <FeaturesCardPage
            key={animal.id}
            datas={animal}
          />
        ))}
      </div>

    </section>
  );
};

export default AllAnimals;