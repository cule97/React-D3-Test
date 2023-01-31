import ContributionChart from '../components/ContributionChart';
import HomerunChart from '../components/HomerunChart';
import StrikeRateChart from '../components/StrikeRateChart';
import styles from './ChoiJeong.module.css';
const ChoiJeong = () => {
  const data = [
    { date: 0, value: 20.5, text: '루킹' },
    { date: 1, value: 22, text: '헛스윙' },
    { date: 2, value: 31, text: '파울' },
    { date: 3, value: 26.5, text: '타격' },
  ];
  return (
    <div className={styles.container}>
      <div>
        <header className={styles.profile}>
          <img
            className={styles.profileImg}
            alt="최정프로필사진"
            src="http://ssglanders.com/Common/Attach/WyvernsPlayer/image/2022/02/23/3aa46b49-e237-41c7-8df2-9b16f2cae838.jpg"
          />
          <div className={styles.profileText}>
            <p className={styles.profileName}>최정</p>
            <p>1987년 2월 28일</p>
            <p>대일초 - 평촌중 - 유신고</p>
            <p>180cm 90kg</p>
            <p>3루수 우투우타</p>
            <p>2005년 1차 지명</p>
            <p className={styles.teamColor}>SK 와이번스-SSG 랜더스</p>
          </div>
          <div className={styles.profileStroy}>
            SSG 랜더스 소속 내야수. 포지션은 3루수이다. SK 와이번스에서 데뷔해
            한 팀에서만 활약하고 있는 원클럽맨이며 SSG 랜더스 소속 프랜차이즈
            스타로 한국시리즈 5회 우승을 이끌었고 골든글러브 8회, 홈런왕 3회를
            기록한 우타자이다. 이승엽에 이어 두번째로 KBO에서만 400홈런을 기록한
            거포이며, 김광현과 더불어 2000년대 이후 인천야구의 상징과도 같은
            선수로 랜더스 시대 최초의 영구결번이 유력한 선수이다.
          </div>
        </header>
        <section className={styles.section}>
          <HomerunChart />
        </section>
        <section className={styles.section}>
          <StrikeRateChart
            data={data}
            width={400}
            height={400}
            innerRadius={100}
            outerRadius={200}
          />
          <ContributionChart />
        </section>
      </div>
    </div>
  );
};
export default ChoiJeong;
