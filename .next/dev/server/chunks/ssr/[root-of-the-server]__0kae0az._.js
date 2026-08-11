module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DetailPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
const pages = {
    about: {
        title: "연구소 소개",
        eyebrow: "About the Lab",
        description: "커피를 중심으로 자연과학·공학·인문학·사회과학 및 산업 현장의 지식을 연결하는 융합연구공간입니다."
    },
    research: {
        title: "커피 연구",
        eyebrow: "Coffee Research",
        description: "환경과 생명에서 감각과 인간, 역사와 문화, 산업과 경영까지 커피를 폭넓게 연구합니다."
    },
    education: {
        title: "교육·콘텐츠개발",
        eyebrow: "Education & Curriculum",
        description: "연구 지식과 산업 현장의 경험을 전문교육과 맞춤형 교육과정으로 체계화합니다."
    },
    solutions: {
        title: "카페 솔루션",
        eyebrow: "Cafe Solutions",
        description: "카페의 기확과 운영, 메뉴 개발, 장비 설치와 유지관리를 하나의 시스템으로 지원합니다."
    },
    archive: {
        title: "커피아카이브",
        eyebrow: "Coffee Archive",
        description: "커피의 지식과 기술, 역사와 산업기록을 수집·분류·보존하는 전문자료실입니다."
    },
    collaboration: {
        title: "프로젝트·협력",
        eyebrow: "Projects & Collaboration",
        description: "대학·기업·기관 및 분야별 전문가들과 연구·교육·기술·제품 프로젝트를 함께합니다."
    },
    news: {
        title: "소식과 인사이트",
        eyebrow: "News & Insights",
        description: "연구와 교육, 기술, 산업과 문화에 관한 연구소의 기록을 전합니다."
    },
    contact: {
        title: "문의",
        eyebrow: "Contact",
        description: "연구, 교육, 카페 솔루션, 제품개발 및 협력사업에 관한 문의를 남겨주세요."
    }
};
function generateStaticParams() {
    return Object.keys(pages).map((slug)=>({
            slug
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    return pages[slug] ? {
        title: pages[slug].title
    } : {};
}
async function DetailPage({ params }) {
    const { slug } = await params;
    const page = pages[slug];
    if (!page) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "detail-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: page.eyebrow
            }, void 0, false, {
                fileName: "[project]/app/[slug]/page.tsx",
                lineNumber: 25,
                columnNumber: 39
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: page.title
            }, void 0, false, {
                fileName: "[project]/app/[slug]/page.tsx",
                lineNumber: 25,
                columnNumber: 80
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: page.description
            }, void 0, false, {
                fileName: "[project]/app/[slug]/page.tsx",
                lineNumber: 25,
                columnNumber: 101
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "detail-notice",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Preparing the next chapter"
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 25,
                        columnNumber: 157
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "상세 콘텐츠는 명세의 확정 정보를 바탕으로 다음 단계에서 순차적으로 구성합니다."
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 25,
                        columnNumber: 196
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[slug]/page.tsx",
                lineNumber: 25,
                columnNumber: 126
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                className: "arrow-link",
                href: "/",
                children: [
                    "메인으로 돌아가기 ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "↗"
                    }, void 0, false, {
                        fileName: "[project]/app/[slug]/page.tsx",
                        lineNumber: 25,
                        columnNumber: 301
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/[slug]/page.tsx",
                lineNumber: 25,
                columnNumber: 253
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/[slug]/page.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0kae0az._.js.map