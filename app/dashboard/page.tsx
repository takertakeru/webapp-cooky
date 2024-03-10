import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Recipe from "../components/recipe/Recipe";

const Dashboard = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="h-[calc(100%-4rem)] w-full flex justify-center">
        <div className="max-w-[1200px] w-full h-full px-6 py-1.5 md:py-1 z-10">
          <Hero />
          <Recipe />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
