"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/coffee-research-hero.png",
    alt: "커피식물과 생두, 연구 노트, 감각평가 도구가 놓인 커피 연구 공간",
  },
  {
    src: "/images/hero-coffee-terroir.png",
    alt: "커피 재배지에서 커피나무와 체리의 생육 상태를 관찰하는 연구 장면",
  },
  {
    src: "/images/hero-roasting-science.png",
    alt: "샘플 로스터와 측정 장비를 이용해 로스팅 데이터를 기록하는 연구 장면",
  },
  {
    src: "/images/hero-sensory-evaluation.png",
    alt: "여러 커피 시료의 향미를 비교하고 기록하는 감각평가 장면",
  },
  {
    src: "/images/hero-equipment-engineering.png",
    alt: "카페장비 엔지니어가 커피머신 내부 부품을 측정하고 점검하는 장면",
  },
] as const;

const SLIDE_INTERVAL = 5500;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reducedMotion) return;

    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div
      className={`hero-carousel${paused ? " is-paused" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div className={`hero-slide${current === index ? " is-active" : ""}`} aria-hidden={current !== index} key={slide.src}>
            <Image className="hero-image" src={slide.src} alt={current === index ? slide.alt : ""} fill priority={index === 0} sizes="100vw" />
          </div>
        ))}
      </div>

      <div className="hero-index" aria-label="Hero 이미지 선택">
        <span aria-live="polite">{String(current + 1).padStart(2, "0")}</span>
        <div className="hero-progress" aria-hidden="true"><i style={{ width: `${((current + 1) / slides.length) * 100}%` }} /></div>
        <span>{String(slides.length).padStart(2, "0")}</span>
        <div className="hero-dots">
          {slides.map((slide, index) => (
            <button
              type="button"
              className={current === index ? "is-active" : ""}
              aria-label={`${index + 1}번 이미지 보기`}
              aria-pressed={current === index}
              onClick={() => setCurrent(index)}
              key={slide.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
