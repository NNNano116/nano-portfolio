# 가이드 허브 — D. MCP·도구 설정·버전 고정 🟡

> MCP 서버 설정과 도구/런타임 **버전 고정**을 다루는 허브.
> 🟡 **상태: 진행 중.** D-1(MCP 서버): **context7 연결됨**(최신 문서·버전 조회용).
> D-2·D-3(버전 고정·스캐폴드): **미확정** — context7 로 최신 버전 조회 후 확정.

---

## 1. 트리거 키워드

MCP 서버·설정 · 도구 인증 · Node·Vite·React **버전 고정** · 패키지매니저 선택 ·
스캐폴드 명령(`npm create vite@latest …`) · 최신 액션 버전 · 버전 호환성

## 2. 세부 도메인 목차 (예정)

| # | 도메인 | 무엇 | 정본 |
|---|--------|------|------|
| D-1 | MCP 서버 | 사용할 서버·용도·인증 | [mcp-setup](../mcp-setup.md) ✅ context7 |
| D-2 | 버전 고정표 | Node·Vite·React·매니저 확정 | [mcp-setup](../mcp-setup.md) 🟡 |
| D-3 | 스캐폴드 | 최신 플래그로 프로젝트 초기화 | [mcp-setup](../mcp-setup.md) 🟡 |

## 3. 실제 확인사항 (작업 전 체크리스트)

- [x] **D-1: context7 MCP 연결됨** (user scope, HTTP). 라이브러리 최신 문서·버전 조회용. → [mcp-setup](../mcp-setup.md)
- [ ] 🟡 **D-2·D-3 확정 전엔 버전·명령을 임의로 박지 않는다.** 다른 허브의 "버전 추후 고정"과 일관.
- [ ] 확정 시 [`dev-stack.md`](../dev-stack.md)·[`deploy.md`](../deploy.md)·[CLAUDE.md](../../CLAUDE.md) 의 버전 표기를 함께 갱신(SSOT).

## 4. 정본 / 소스

- 정본: [`mcp-setup.md`](../mcp-setup.md) (🟡 placeholder)

## 5. 자주 함께 걸리는 대분류

- **A·B 전부**: 버전·스캐폴드가 확정되면 개발·배포 절차의 "추후" 항목이 채워진다.
