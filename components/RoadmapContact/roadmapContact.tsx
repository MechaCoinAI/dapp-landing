import Image from "next/image";
import Contact from "./Contact";
import Roadmap from "./Roadmap";
import Background from '@/images/roadmap/background-desktop.png'

const RoadmapContact = () => {
  return (
    <main className="w-full bg-[#0A0905] ">
      <div className="max-w-[1440px] relative mx-auto ">
        <div className="absolute inset-0 max-sm:hidden">
          <Image src={Background} alt="background" fill />
        </div>

        <Roadmap />
        
        <Contact />
      </div>
    </main>
  );
}

export default RoadmapContact;