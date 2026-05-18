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

  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
         Qurbani Tips
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((item, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QurbaniTipsPage;