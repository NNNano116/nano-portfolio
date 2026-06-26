# 사이트 헤더·메타데이터·파비콘 (site-meta) ✅

> `index.html` `<head>` 의 페이지명·메타 설명·OG/Twitter 카드·테마컬러와
> `public/favicon.svg`(J·Y 글라스 원형)를 다루는 정본. (2026-06-26 확정)
> 대분류 **A. 로컬 개발** 진입: [`_hub_dev.md`](./guide/_hub_dev.md). 배포 경로 함정은 **B** 연계(§5).

---

## 1. 확정 값 (SSOT)

| 항목 | 값 |
|------|-----|
| 페이지명 `<title>` | `J·Young portfolio` |
| `<html lang>` | `ko` |
| 메타 설명 / OG / Twitter description | `안녕하세요, 4년차 백엔드 개발자 김준영입니다. 잘부탁드립니다.` |
| author | `김준영 (J·Young)` |
| 파비콘 | **불투명 네이비 베이스 위 J·Y 글라스 코인** — `favicon.svg`(데스크탑) + `favicon-32.png`/`apple-touch-icon.png`(180)/`icon-192·512.png` + `manifest.webmanifest`. 모두 불투명이라 흰 배경 모바일 탭에서도 선명(§5 참고) |
| OG 이미지 | `public/og-image.png` — **1200×630 메인 히어로 스크린샷**(한글 타이틀, `summary_large_image`) |
| theme-color (light) | `#e9eff7` (글라스 블루) |
| theme-color (dark) | `#0d181f` (히어로 네이비) |
| 배포 URL(OG `og:url`) | `https://nnnano116.github.io/` (사용자 페이지) |

> 위 문구·값을 바꾸려면 **이 표를 먼저 갱신**한 뒤 `index.html` 을 수정한다(SSOT 원칙, CLAUDE.md §4-4).

---

## 2. 파비콘 — 네이비 베이스 + J·Y 글라스 코인 (`public/favicon.svg`)

⚠️ **불투명 네이비 베이스 필수**: 이전엔 반투명 글라스 원형만 있어(투명 배경) 흰 배경 모바일 탭에서 **거의 안 보였음**(§5). 히어로 톤 네이비 라운드 스퀘어 베이스 위에 글라스 코인을 올려 어떤 배경에서도 선명하게 함. 구성 레이어:

0. **불투명 베이스** — `linearGradient #base`(`#1a2e35`→`#122027`→`#0d181f`) 라운드 스퀘어(`rx 15`) + 컬러 글로우(`#tintA`/`#tintB`). 풀블리드 불투명.
1. **글라스 본체** — `radialGradient #glass`: 흰색(0.98) → 연블루 `#eaf0fb`(0.9) → `#cfdaee`(0.82). 베이스 위라 불투명도 상향(`r=23` 코인).
2. **컬러 글로우** — `#tintA`(블루 `#4a86de`, 좌상) + `#tintB`(퍼플 `#9676e0`, 우하). 본문 배경의 블루↔퍼플 그라데이션/레이저 반사 느낌.
3. **유리 림(이중)** — 외곽 `#ring`(흰↔연회색 그라데이션 1.5px) + 내부 흰색 0.35 하이라이트 림.
4. **상단 반사 하이라이트** — 흰색 0.5 타원(반사광).
5. **워드마크 `J·Y`** — `#text` 그라데이션(블루 `#3f6fd1` → 퍼플 `#7d54d6`), `font-weight:700`, system-ui. 16px 탭 아이콘에서도 읽히게 굵게.

- 뷰박스 `0 0 64 64`. `xml.dom.minidom` 유효성 검증 통과.
- 색 토큰은 본문 라이트 글라스(`Main1.css` `--bg--light` 의 `rgba(74,134,222)`·`rgba(150,118,224)`)와 맞춤 → 톤 변경 시 함께 점검.

---

## 3. `<head>` 메타 구성

| 그룹 | 태그 | 비고 |
|------|------|------|
| 파비콘 | `icon`(svg) · `icon`(png 32) · `apple-touch-icon`(png 180) · `manifest` | SVG=데스크탑, PNG 폴백=SVG 미지원/iOS, manifest=안드로이드/PWA. `mask-icon` 제거(컬러 아이콘이라 부적합) |
| 기본 | `title` · `description` · `author` · `keywords` | §1 값 |
| 테마 | `theme-color`×2(light/dark `media`) · `color-scheme` | 1P 다크 ↔ 3P 라이트 분기와 정합 |
| Open Graph | `og:type/site_name/title/description/url/image(+width/height/type/alt)/locale(ko_KR)` | 카카오톡·슬랙·페북 미리보기 |
| Twitter | `twitter:card(summary_large_image)/title/description/image` | 큰 이미지 카드 |

### 3-1. OG 이미지 (`public/og-image.png`)

- **1200×630 PNG** = **메인 히어로(`#/main-1`) 실화면 스크린샷**. 3D 구체 클러스터 + **한글 타이틀**("개발자 김준영입니다。/ 잘부탁드립니다。") + 레이저 배경 + `J·Young` 로고.
- **한글 타이틀 고정**: 히어로 타이틀은 11개 언어를 3.4s 간격 순환(`TITLES`, 한글=인덱스 0). `prefers-reduced-motion: reduce` 면 순환이 멈춰 **인덱스 0(한글)에 고정**됨(`Main1.tsx` line 227) → 캡처 시 reduced-motion 강제.
- **제작 방식(재현용)** — ⚠️ **실시간 GPU 렌더 필수**:
  1. dev 서버 기동(`npm run dev`).
  2. chromium 을 `--headless=new --use-angle=d3d11 --force-prefers-reduced-motion --window-size=1200,630 --remote-debugging-port=9222` 로 띄워 `http://localhost:<port>/#/main-1` 로드.
  3. **CDP 로 ~6s 실대기 후** `Page.captureScreenshot`(scratchpad `capture.mjs`, Node 24 글로벌 `WebSocket`).
  - ❌ `--virtual-time-budget`(가상시간) 으로 캡처하면 물리·조명이 어두운 상태로 굳어 구체가 칙칙하게 나옴 → **반드시 실시간 rAF 가 도는 상태로 실대기**.
- 톤/구도 변경이 필요하면 위 절차로 재캡처 후 교체.

---

## 4. 배포 경로 주의 (base 연계)

- `vite.config.ts` `base:'/'`(사용자 페이지) 이므로 **빌드 시 `index.html` 내 `/favicon.svg` 가 그대로 루트 절대경로로 서빙**된다(`base` 재작성 없음). → `<link>` 의 루트 절대경로는 그대로 두면 됨(CLAUDE.md §1-4 정합). (이전 프로젝트 페이지 시절엔 `/nano-portfolio/favicon.svg` 로 재작성됐음)
- 단, **OG/Twitter 의 `og:image`·`og:url` 은 절대 URL 직접 기입**(`https://nnnano116.github.io/...`) — 크롤러는 base 재작성을 못 받으므로 풀 URL 필수.
- 개발 서버 확인 시 `http://localhost:<port>/favicon.svg` (base `'/'`).

---

## 5. 확인사항 / 한계

- [x] 페이지명·메타 문구·파비콘 반영, dev 서버 파비콘 200 응답·SVG 유효성 확인.
- [x] **`og:image` 1200×630 PNG 교체 완료**(`summary_large_image`) — 카카오톡·슬랙·페북 큰 카드 미리보기 지원.
- [x] **모바일 '빈 파비콘' 수정**(2026-06-26): 원인=반투명·밝은 SVG-only(투명 배경)라 흰 배경 모바일 탭에서 안 보임 + iOS apple-touch-icon 은 SVG 미지원. 해결=불투명 네이비 베이스 + PNG 폴백(32/180/192/512) + `manifest.webmanifest`.
- [ ] **PNG 아이콘 재생성 방법**(톤 변경 시): `favicon.svg` 수정 → `public/_raster.html`(임시: `<img src=/favicon.svg>` + `?s=크기&bg=1`) 띄워 Playwright 로 32·180·192·512 뷰포트 스크린샷 → `public/` 에 저장. 추가 의존성 없음.
- [ ] 문구·톤 변경 시 §1 표 → `index.html` → (톤이면) `favicon.svg`·PNG 재렌더·`og.html` 순으로 갱신.

---

## 6. 정본 / 소스

- 소스: `index.html`, `public/favicon.svg`, `public/favicon-32.png`·`apple-touch-icon.png`·`icon-192.png`·`icon-512.png`, `public/manifest.webmanifest`, `public/og-image.png`, `vite.config.ts`(base)
- 연계: 배포 base/404 → [`deploy.md`](./deploy.md) · 본문 글라스 톤 → [`main1-scroll-interactions.md`](./main1-scroll-interactions.md)
