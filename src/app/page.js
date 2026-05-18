import Banner from "@/components/Banner";
import FeatureAnimalsPage from "@/components/FeatureAnimals";
import TopBreedsPage from "@/components/QurbaniBreeds";
import QurbaniTipsPage from "@/components/QurbaniTips";
import Image from "next/image";

export default async function Home() {
    const res = await fetch("https://qurbani-app-five.vercel.app/data.json");
  const data = await res.json();
  return (
   <div>
<Banner/>
<FeatureAnimalsPage/>
<QurbaniTipsPage/>
  <div>
      <TopBreedsPage data={data} />
    </div>


   </div>
  );
}
