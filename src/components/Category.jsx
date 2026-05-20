
import Link from "next/link";
import { Button } from "@heroui/react";

const CategoryPage = async () => {
  const res = await fetch(
    "https://qurbani-app-five.vercel.app/category.json"
  );

  const categories = await res.json();

  return (
    <div className="flex flex-wrap gap-3 p-4 justify-center">
      {categories.map((category) => 
      
        
          <Button key={category.id}
            variant="bordered"
            size="sm"
            className="font-medium text-black"
          >
            {category.name}
          </Button>
        
      )}
    </div>
  );
};

export default CategoryPage;