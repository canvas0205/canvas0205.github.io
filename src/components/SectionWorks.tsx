import WorkItem from "./SectionWorksItem";

const Works = () => {
  return (
    <div id="works">
      <h1 className="text-3xl font-bold mb-4">Works</h1>
      <WorkItem
        title="【Android】HTML5/CSS3学習アプリ（2016/12～2024/04）"
        logo="/html5css3/logo.png"
        description={[
          "HTML5プロフェッショナル認定試験レベル1対策を目的とした、HTML5/CSS3の学習アプリです。",
          "現在はサービス終了しており非公開となっています。",
        ]}
        images={[
          "/html5css3/top.png",
          "/html5css3/quiz_list.png",
          "/html5css3/quiz.png",
          "/html5css3/quiz_answer.png",
        ]}
      />
      <WorkItem
        title="【Android】ドイツ語単語学習アプリ（2018/09～2022/03）"
        logo="/bunny/logo.png"
        description={[
          "独検（ドイツ語技能検定試験）対策を目的とした、ドイツ語単語の学習アプリです。",
          "現在はサービス終了しており非公開となっています。",
        ]}
        images={[
          "/bunny/top.png",
          "/bunny/quiz_card.png",
          "/bunny/quiz_choice.png",
          "/bunny/ranking.png",
          "/bunny/record.png",
        ]}
      />
    </div>
  );
}

export default Works;