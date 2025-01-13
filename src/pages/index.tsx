import Sidebar from "@/components/sidebar";
import { useEffect } from "react";
import Image from 'next/image'

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
        <div id="about">
          <h1 className="text-3xl font-bold mb-4">About</h1>
        </div>
        <div id="career">
          <h1 className="text-3xl font-bold mb-4">Career</h1>
        </div>
        <div id="skills">
          <h1 className="text-3xl font-bold mb-4">Skills</h1>
        </div>
        <div id="works">
          <h1 className="text-3xl font-bold mb-4">Works</h1>
          <div className= "mb-16">
            <h2 className="text-2xl font-bold mb-4">【Android】HTML5/CSS3学習アプリ（2016/12～2024/04）</h2>
            <figure  className="flex mb-4">
              <Image src="/html5css3/logo.png" alt="htmlcss3sample" width={100} height={100} />
              <figcaption className="ml-4">
                <p>HTML5プロフェッショナル認定試験レベル1対策を目的とした、HTML5/CSS3の学習アプリです。</p>
                <p>現在はサービス終了しており非公開となっています。</p>
              </figcaption>
            </figure >
            <figure  className="flex mb-4 space-x-4">
              <Image src="/html5css3/top.png" alt="htmlcss3sample" width={200} height={200} />
              <Image src="/html5css3/quiz_list.png" alt="htmlcss3sample" width={200} height={200} />
              <Image src="/html5css3/quiz.png" alt="htmlcss3sample" width={200} height={200} />
              <Image src="/html5css3/quiz_answer.png" alt="htmlcss3sample" width={200} height={200} />
            </figure>
          </div>

          <div className= "mb-4">
            <h2 className="text-2xl font-bold mb-4">【Android】ドイツ語単語学習アプリ（2018/09～2022/03）</h2>
            <figure  className="flex mb-4">
            <Image src="/bunny/logo.png" alt="htmlcss3sample" width={100} height={100} />
              <figcaption className="ml-4">
                <p>独検（ドイツ語技能検定試験）対策を目的とした、ドイツ語単語の学習アプリです。</p>
                <p>現在はサービス終了しており非公開となっています。</p>
              </figcaption>
            </figure >
            <figure  className="flex mb-4 space-x-4">
              <Image src="/bunny/top.png" alt="bunnysample" width={200} height={200} />
              <Image src="/bunny/quiz_card.png" alt="bunnysample" width={200} height={200} />
              <Image src="/bunny/quiz_choice.png" alt="bunnysample" width={200} height={200} />
              <Image src="/bunny/ranking.png" alt="bunnysample" width={200} height={200} />
              <Image src="/bunny/record.png" alt="bunnysample" width={200} height={200} />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
