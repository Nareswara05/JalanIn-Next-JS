import Image from "next/image";
import CardTravel from "./components/CardTravel";
import Navbar from "./global_components/navbar";

export default function Home() {
  return (
    <div className="bg-white h-screen w-screen">
      <Navbar/>
      <CardTravel/>
    </div>
  );
}
