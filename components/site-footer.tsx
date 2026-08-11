import Link from "next/link";
import { navigation } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <p className="eyebrow light">Nangman Coffee Research Lab</p>
        <h2>커피를 통해<br />자연과 인간을 이해합니다.</h2>
      </div>
      <div className="footer-grid">
        <div><strong>낭만커피연구소</strong><p>커피 연구 · 교육·콘텐츠개발 · 카페 솔루션<br />커피아카이브 · 프로젝트·산학협력</p><p>01811 서울특별시 노원구 공릉로232<br />(공릉동, 서울과학기술대학교 내) 802호</p></div>
        <nav aria-label="하단 메뉴">{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      </div>
      <div className="footer-bottom"><span>© Nangman Coffee Research Lab.</span><span>서울과학기술대학교 서울테크노파크 입주기업</span></div>
    </footer>
  );
}
