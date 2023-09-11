import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import Searchbar from "@/components/Searchbar";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mt-12 w-full px-9">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Car Catalogue</h1>
          <p className="text-xs text-gray-600">Explore the cars you might like</p>
        </div>
        <div className="md:flex md:justify-between md:flex-row flex-col mt-10">
          <Searchbar />
          <div className="mt-5 md:mt-0 md:flex flex-col md:flex-row ">
            <CustomFilter title="fuel"></CustomFilter>
            <CustomFilter title="year"></CustomFilter>
          </div>
        </div>
      </div>
    </>
  );
}
