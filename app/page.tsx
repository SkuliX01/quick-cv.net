import Image from "next/image";
import GradualSpacing from "@/components/magicui/gradual-spacing"
import BlurIn from "@/components/magicui/blur-in"

export default function Home() {
  return (
  <main className="flex min-h-screen flex-col p-24 items-center">
      <div className="flex justify-center items-center flex-col">
        <GradualSpacing text="Quick Cv" className="text-[55px] sm:text-[65px] md:text-[75px] lg:text-[85px] xl:text-[95px] 2xl:text-[135px] tracking-normal font-normal"/>
        <div className="block">
        <p className="text-[25px] leading-relaxed block mb-2">Quick Cv is modern free and open source Cv generator, <br /> Create good looking Cv without spending hours.</p> 
        </div>
      </div>
  </main>
  );
}
