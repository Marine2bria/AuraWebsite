"use client";

import Image from "next/image";
import {Bienvenue} from "@/app/ui/header";
import { ArrowDown } from "lucide-react";

export default function Home() {
  return (
      <>
      <div
          className="h-screen bg-conver bg-center relative"
          style={{ backgroundImage: "url('/corse-bastia-hd.jpg')" }}
      >
          <div className="pt-20">
              <Bienvenue />
          </div>
        <div
            onClick={() => {
              document.getElementById("next-section")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="cursor-pointer absolute bottom-5 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="w-8 h-8 mt-10 animate-bounce"/>
        </div>
      </div>
      <div
          id="next-section"
          className="min-h-screen bg-white items-center justify-center px-6 py-20"
      >
        <h1 className="pt-20 text-4xl font-bold text-gray-900">
          À propos de nous
        </h1>
        <div className="text-lg text-gray-600 leading-relaxed">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed non risus. Suspendisse lectus tortor, dignissim sit
                amet, adipiscing nec, ultricies sed, dolor. Cras elementum
                ultrices diam. Maecenas ligula massa, varius a, semper
                congue, euismod non, mi. Proin porttitor, orci nec
            </p>
        </div>
      </div>
      </>
  );
}
