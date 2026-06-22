# 가이드 허브 — A. 로컬 개발·React 스택·Vibe 코딩

> React + Vite 로컬 개발 환경과 컴포넌트 작성, Vibe 코딩(즉시 미리보기 반복) 워크플로를 다루는 작업의 진입 허브.
> 🟡 도구 버전은 추후 최신 가이드에서 고정.

---

## 1. 트리거 키워드

React · Vite · `dev` 서버 · HMR · `src/` · `components/` · `pages`/`routes` ·
`main.(jsx|tsx)` · `App` · 컴포넌트 작성 · 상태(`useState`/`useEffect`) · 라우팅(해시) ·
TypeScript 여부 · 에셋 `import`/상대경로 · `public/` · Vibe 코딩 · `preview`(프로덕션 미리보기) ·
Node LTS · npm/pnpm

## 2. 세부 도메인 목차

| # | 도메인 | 무엇 | 정본 |
|---|--------|------|------|
| A-1 | 스택 구성 | React·Vite·TS 여부·패키지매니저·Node | [dev-stack §1](../dev-stack.md) |
| A-2 | 로컬 환경 준비 | 설치·스캐폴드·dev 기동 | [dev-stack §2](../dev-stack.md) |
| A-3 | 프로젝트 구조 | `src/`·`components/`·`public/`·에셋 규약 | [dev-stack §3](../dev-stack.md) |
| A-4 | Vibe 코딩 루프 | HMR 반복·AI 보조 즉시 검증·작은 단위 | [dev-stack §4](../dev-stack.md) |

## 3. 실제 확인사항 (작업 전 체크리스트)

- [ ] 🟡 버전을 새로 박지 말 것 — 고정은 "MCP 설정 + 최신 가이드" 단계 → [`mcp-setup.md`](../mcp-setup.md).
- [ ] 에셋은 `import` 또는 상대경로로. **절대경로(`/img.png`) 금지**(배포 base 와 충돌) → 허브 **B**.
- [ ] 라우팅을 추가하면 **새로고침/직접진입**을 로컬에서 테스트(배포 404 함정과 직결) → 허브 **B**.
- [ ] 정적 전제를 깨는 변경(서버 호출·런타임 비밀 등)은 운영 모델([CLAUDE.md §1](../../CLAUDE.md))과 충돌 → 먼저 점검.
- [ ] AI 생성 코드도 **HMR 화면에서 실제 렌더 확인** 후 커밋.
- [ ] 빌드 시점 차이를 보려면 `build` → `preview` 로 프로덕션 모드 점검 → 허브 **B**.

## 4. 정본 / 소스

- 정본: [`dev-stack.md`](../dev-stack.md)
- 소스(추후 생성): `src/**`, `index.html`, `vite.config.*`

## 5. 자주 함께 걸리는 대분류

- **B** (빌드·배포): base·라우팅·에셋 경로
- **C** (Git): 커밋·`.env`·푸시
- **D** (MCP/버전): 스캐폴드 명령·버전 고정
