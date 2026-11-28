import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { directorProfile } from "@/content/people";

export const metadata: Metadata = {
  title: "소장 프로필",
  description: "장지혜 낭만커피연구소 소장의 프로필과 주요 약력입니다.",
};

export default function DirectorPage() {
  return (
    <div className="detail-page people-page">
      <div className="people-page-heading">
        <p className="eyebrow">Director Profile</p>
        <h1>소장 프로필</h1>
        <p>낭만커피연구소의 연구 방향을 수립하고 분야별 전문가들과 함께 연구와 프로젝트를 기획합니다.</p>
      </div>

      <section className="profile-layout" aria-labelledby="director-name">
        <div className="profile-monogram">
          <Image src={directorProfile.image} alt="장지혜 낭만커피연구소 소장" fill sizes="(max-width: 1023px) 100vw, 530px" />
        </div>
        <div className="profile-content">
          <p className="profile-label">Director</p>
          <h2 id="director-name">{directorProfile.name}</h2>
          <p className="profile-role">{directorProfile.role}</p>

          <div className="profile-group">
            <h3>학력</h3>
            <ul>
              {directorProfile.education.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="profile-group">
            <h3>자격 및 활동</h3>
            <ul>
              {directorProfile.credentials.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="director-publications" aria-labelledby="publications-heading">
        <h2 id="publications-heading">연구실적</h2>
        <ol className="publication-list">
          {[...directorProfile.publications].sort((a, b) => b.date.localeCompare(a.date)).map((publication) => (
            <li key={publication.url}>
              <h3>
                <span className="publication-badge">KCI 등재</span>{" "}
                <a href={publication.url} target="_blank" rel="noopener noreferrer">
                  {publication.title}
                  <span className="publication-external">KCI 논문 보기 ↗ (새 창)</span>
                </a>
              </h3>
              <p>{publication.authors} · {publication.journal} {publication.volume} · pp. {publication.pages} · {publication.date}</p>
              <p>{publication.publisher} · {publication.field}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="people-page-links">
        <Link className="arrow-link" href="/advisors">자문위원 안내 <span aria-hidden="true">↗</span></Link>
        <Link className="arrow-link" href="/">메인으로 돌아가기 <span aria-hidden="true">↗</span></Link>
      </div>
    </div>
  );
}
