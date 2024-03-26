import Image from "next/image";
import bg from "../../public/background/about-background.png";
import model from "../../public/background/model1.png";
// import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

// import dynamic from "next/dynamic";
// const Wizard = dynamic(() => import("@/components/models/Wizard"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="flex justify-center items-center h-screen">
        <Navigation />
       
         <Image
         className="max-w-full max-h-full animate-pulse"
         src={model}/>
        
      </div>
    </main>
  );
}

// <RenderModel>
// </RenderModel>
 // <Wizard />