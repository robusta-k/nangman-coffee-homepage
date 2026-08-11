import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="낭만커피연구소 홈">
          <span className="brand-mark" aria-hidden="true">
            <Image className="brand-mark-image" src="/images/nangman-coffee-logo-transparent.png" alt="" width={735} height={405} priority />
          </span>
          <span className="brand-name">낭만커피연구소<small>Nangman Coffee Research Lab</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <details className="mobile-nav">
          <summary aria-label="메뉴 열기"><span /><span /></summary>
          <nav aria-label="모바일 메뉴">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        </details>
      </div>
    </header>
  );
}
