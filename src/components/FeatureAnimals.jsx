import FeaturesCardPage from "./FeaturesCard";

const FeatureAnimalsPage = async () => {
  const res = await fetch("https://qurbani-app-five.vercel.app/data.json");

  const data = await res.json();
  const sixDatas = data.slice(0, 6);

  return (
    <section className="px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-green-700">
        Featured Animals 
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sixDatas.map((animal) => (
          <FeaturesCardPage key={animal.id} datas={animal} />
        ))}
      </div>
    </section>
  );
};

export default FeatureAnimalsPage;