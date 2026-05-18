import TopBreedsPage from "@/components/QurbaniBreeds";


export default async function Pricing() {
    const res = await fetch("https://qurbani-app-five.vercel.app/data.json");
  const data = await res.json();
   
  return (
   <div>
      <TopBreedsPage data={data} />
    </div>
  );
}
