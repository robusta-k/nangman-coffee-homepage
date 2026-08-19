import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { advisors } from "@/content/people";

export const metadata: Metadata = {
  title: "자문위원 안내",
  description: "낭만커피연구소 자문위원을 소개합니다.",
};

export default function AdvisorsPage() {
  return (
    <div className="detail-page people-page advisors-page">
      <div className="people-page-heading">
        <p className="eyebrow">Advisory Board</p>
        <h1>자문위원 안내</h1>
        <p>낭만커피연구소와 함께하는 분야별 자문위원을 소개합니다.</p>
      </div>

      <section className="advisor-grid" aria-label="자문위원 목록">
        {advisors.map((advisor, index) => (
          <article className="advisor-card" key={advisor.name}>
            <div className="advisor-card-top">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div className="advisor-photo">
                {advisor.image ? (
                  <Image src={advisor.image} alt={`${advisor.name} ${advisor.title}`} fill sizes="(max-width: 520px) 88px, 104px" />
                ) : (
                  <span aria-hidden="true">PHOTO</span>
                )}
              </div>
            </div>
            <div className="advisor-card-content">
              <h2>{advisor.name} <small>{advisor.title}</small></h2>
              {advisor.details.map((detail) => <p key={detail}>{detail}</p>)}
            </div>
          </article>
        ))}
      </section>

      <div className="people-page-links">
        <Link className="arrow-link" href="/director">소장 프로필 <span aria-hidden="true">↗</span></Link>
        <Link className="arrow-link" href="/">메인으로 돌아가기 <span aria-hidden="true">↗</span></Link>
      </div>
    </div>
  );
}
