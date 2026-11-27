import Link from "next/link";
import Image from "next/image";
import { directorProfile } from "@/content/people";
import { ArrowLink } from "@/components/arrow-link";
import { HeroCarousel } from "@/components/hero-carousel";
import { SectionHeading } from "@/components/section-heading";
import { activityAreas, coffeeJourney, researchAreas } from "@/content/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <HeroCarousel />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">Nangman Coffee Research Lab</p>
          <h1>커피를 통해<br />자연과 인간을<br />이해합니다.</h1>
          <p className="hero-copy">커피를 둘러싼 환경과 생명, 과학과 기술, 인간과 문화, 산업과 사회의 관계를 통합적으로 탐구합니다.</p>
          <div className="hero-actions"><Link className="button button-light" href="/about">연구소 소개</Link><ArrowLink href="/collaboration" light>프로젝트·협력 문의</ArrowLink></div>
        </div>
      </section>

      <section className="perspective section-pad">
        <p className="side-label">Our Perspective</p>
        <div className="perspective-content">
          <p className="display-quote">한 잔의 커피에는<br /><em>자연과 인간의 이야기</em>가<br />유기적으로 연결되어 있습니다.</p>
          <p className="body-lead">낭만커피연구소는 자연과학·공학·인문학·사회과학과 산업 현장의 관점을 연결하여 커피를 탐구하고, 축적한 지식과 경험을 교육·기술·제품·서비스로 발전시킵니다.</p>
        </div>
        <ol className="journey-list">{coffeeJourney.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
      </section>

      <section className="activity-section section-pad">
        <SectionHeading eyebrow="What We Do" title="연구에서 시작해, 현장의 가치로 이어집니다." description="서로 다른 전문성과 경험을 연결하여 지식을 만들고, 교육과 기술, 산업의 변화로 확장합니다." />
        <div className="activity-list">{activityAreas.map((area) => <Link href={area.href} className="activity-card" key={area.number}><span>{area.number}</span><h3>{area.title}</h3><p>{area.description}</p><b aria-hidden="true">↗</b></Link>)}</div>
      </section>

      <section className="research-section section-pad">
        <div className="research-intro"><SectionHeading eyebrow="Coffee Research" title="커피를 이해하는 다양한 시선" light /><ArrowLink href="/research" light>연구분야 전체 보기</ArrowLink></div>
        <div className="research-grid">{researchAreas.map(([number, title, description]) => <article className="research-card" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
      </section>

      <section className="solutions-section section-pad">
        <div className="solutions-copy"><SectionHeading eyebrow="Cafe Solutions" title="연구의 정확함을 현장의 언어로" description="커피 품질 전문가와 카페장비 엔지니어, 산업 현장 전문가가 협력하여 카페의 기획부터 운영, 장비 유지관리까지 지원합니다." /><ArrowLink href="/solutions">카페 솔루션 살펴보기</ArrowLink></div>
        <div className="solutions-panel"><p>One connected system</p><ol><li><span>01</span>창업·운영 컨설팅</li><li><span>02</span>메뉴·원두·품질개발</li><li><span>03</span>장비·설비 구축</li><li><span>04</span>머신 엔지니어링·A/S</li></ol></div>
        <div className="process"><span>상담</span><i /><span>현장 진단</span><i /><span>방향 설정</span><i /><span>실행</span><i /><span>교육</span><i /><span>사후관리</span></div>
      </section>

      <section className="split-section education-section section-pad">
        <div><SectionHeading eyebrow="Education & Curriculum" title="지식을 체계화하고, 전문성을 확산합니다." description="SCA 교육체계를 기반으로 전문교육을 운영하며, 커피과학과 산업 현장의 지식을 반영한 자체·맞춤형 교육과정을 개발합니다." /><ArrowLink href="/education">교육·콘텐츠개발 알아보기</ArrowLink></div>
        <div className="numbered-list"><p><span>01</span>SCA 기반 전문교육</p><p><span>02</span>연구소 자체 교육과정</p><p><span>03</span>대학·기업·기관 맞춤과정</p></div>
      </section>

      <section className="collaboration-section section-pad">
        <SectionHeading eyebrow="Projects & Collaboration" title="전문성을 연결하면 새로운 질문과 해답이 만들어집니다." />
        <div className="collaboration-grid"><p>대학·기업·공공기관·협회 및 분야별 전문가들과 커피산업의 연구·교육·기술·제품 프로젝트를 기획하고 수행합니다.</p><ul><li>공동연구와 산학협력</li><li>제품·기술·플랫폼 개발</li><li>감각평가와 소비자 조사</li><li>세미나·포럼·전문가 교류</li></ul></div>
        <ArrowLink href="/collaboration">함께할 수 있는 분야 보기</ArrowLink>
      </section>

      <section className="archive-section section-pad">
        <div className="archive-card"><p className="eyebrow light">Coffee Archive</p><h2>지식과 기술,<br />시간의 기록을 보존합니다.</h2><p>전문도서와 논문, 교육·기술자료, 사진과 산업기록을 축적하여 연구와 교육, 새로운 콘텐츠의 기반으로 활용합니다.</p><ArrowLink href="/archive" light>커피아카이브 둘러보기</ArrowLink></div>
        <div className="archive-visual" aria-hidden="true"><span>ARCHIVE</span><div className="book book-one" /><div className="book book-two" /><div className="book book-three" /></div>
      </section>

      <section className="director-section section-pad">
        <div className="director-monogram">
          <Image src={directorProfile.image} alt="장지혜 낭만커피연구소 소장" fill sizes="(max-width: 1023px) 100vw, 50vw" />
        </div><div><p className="eyebrow">People</p><h2>장지혜</h2><p className="role">낭만커피연구소 소장</p><p>커피를 둘러싼 환경과 생명, 가공과 기술, 감각과 인간, 산업과 사회의 관계에 관심을 두고 연구합니다. 연구소의 연구 방향을 수립하고 분야별 전문가들과 함께 교육·기술·제품·산업 프로젝트를 기획합니다.</p><div className="director-links"><ArrowLink href="/about">연구소 이야기 더보기</ArrowLink><ArrowLink href="/director">소장 프로필 보기</ArrowLink><ArrowLink href="/advisors">자문위원 안내</ArrowLink></div></div>
      </section>

      <section className="contact-section section-pad"><p className="eyebrow light">Start a Conversation</p><h2>커피에 관한 질문에서<br />새로운 연구와 협력이 시작됩니다.</h2><p>연구, 교육, 카페 솔루션, 제품개발 및 협력사업에 관한 문의를 남겨주세요.</p><Link className="button button-light" href="/contact">문의하기 <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}
