import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const pages = {
  about: { title: "연구소 소개", eyebrow: "About the Lab", description: "커피를 중심으로 자연과학·공학·인문학·사회과학 및 산업 현장의 지식을 연결하는 융합연구공간입니다." },
  research: { title: "커피 연구", eyebrow: "Coffee Research", description: "환경과 생명에서 감각과 인간, 역사와 문화, 산업과 경영까지 커피를 폭넓게 연구합니다." },
  education: { title: "교육·콘텐츠개발", eyebrow: "Education & Curriculum", description: "연구 지식과 산업 현장의 경험을 전문교육과 맞춤형 교육과정으로 체계화합니다." },
  solutions: { title: "카페 솔루션", eyebrow: "Cafe Solutions", description: "카페의 기확과 운영, 메뉴 개발, 장비 설치와 유지관리를 하나의 시스템으로 지원합니다." },
  archive: { title: "커피아카이브", eyebrow: "Coffee Archive", description: "커피의 지식과 기술, 역사와 산업기록을 수집·분류·보존하는 전문자료실입니다." },
  collaboration: { title: "프로젝트·협력", eyebrow: "Projects & Collaboration", description: "대학·기업·기관 및 분야별 전문가들과 연구·교육·기술·제품 프로젝트를 함께합니다." },
  news: { title: "소식과 인사이트", eyebrow: "News & Insights", description: "연구와 교육, 기술, 산업과 문화에 관한 연구소의 기록을 전합니다." },
  contact: { title: "문의", eyebrow: "Contact", description: "연구, 교육, 카페 솔루션, 제품개발 및 협력사업에 관한 문의를 남겨주세요." },
} as const;

type Slug = keyof typeof pages;

export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; return pages[slug as Slug] ? { title: pages[slug as Slug].title } : {}; }

export default async function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as Slug];
  if (!page) notFound();
  return <div className="detail-page"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.description}</p><div className="detail-notice"><span>Preparing the next chapter</span><p>상세 콘텐츠는 명세의 확정 정보를 바탕으로 다음 단계에서 순차적으로 구성합니다.</p></div><Link className="arrow-link" href="/">메인으로 돌아가기 <span aria-hidden="true">↗</span></Link></div>;
}
