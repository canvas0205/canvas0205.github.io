import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import About from "@/components/SectionAbout";
import Career from "@/components/SectionCareer";
import Skills from "@/components/SectionSkills";
import Works from "@/components/SectionWorks";

export default function Home() {
  useEffect(() => {
    // ページがリロードされた後にスクロール位置をトップに設定
    window.scrollTo(0, 0);
  }, []); // コンポーネントがマウントされた時のみ実行
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-[1] border-r-2 border-gray-700 h-full left-0 top-0">
        <Sidebar />
      </div>

      <div className="flex-[3] overflow-y-auto h-full p-10">
        <div id="top" /> {/* コンテンツのTOPにスクロールさせるためのID */}
        <About />
        <Career />
        <Skills />
        <Works />
      </div>
    </div>
  );
}
