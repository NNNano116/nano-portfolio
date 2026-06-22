# 문서 인덱스 (docs/)

React + Vite 기반 정적 사이트(GitHub Pages) 프로젝트의 상세 문서.
전체 개요·대분류 진입은 루트 [`CLAUDE.md`](../CLAUDE.md) 를 보세요.

> 🟡 도구/런타임 **버전**과 일부 명령은 추후 "MCP 설정 + 최신 가이드" 단계에서 확정됩니다.
> 현재 문서는 **절차·규약 중심**입니다.

## 가이드 허브 (작업 진입점)

[`CLAUDE.md §3`](../CLAUDE.md) 대분류 인덱스 → 허브 → 정본의 3단 체계 중 **2단**.

| 가이드 허브 | 대분류 |
|------------|--------|
| [guide/_hub_dev.md](./guide/_hub_dev.md) | A. 로컬 개발·React·Vibe 코딩 |
| [guide/_hub_deploy.md](./guide/_hub_deploy.md) | B. 빌드·GitHub Pages 정적 배포 |
| [guide/_hub_git.md](./guide/_hub_git.md) | C. Git 연계·`.env` 자격정보 |
| [guide/_hub_mcp.md](./guide/_hub_mcp.md) | D. MCP·도구 설정·버전 고정 🟡 |
| [guide/trigger_index.md](./guide/trigger_index.md) | 대분류 ↔ 허브 ↔ 정본 라우팅 맵 |

## 정본 문서

| 문서 | 내용 |
|------|------|
| [dev-stack.md](./dev-stack.md) | React·Vite 스택, 로컬 환경, 프로젝트 구조, **Vibe 코딩** 워크플로 |
| [deploy.md](./deploy.md) | Vite 빌드, base/SPA 404, **Actions 자동 배포 + 정적 빌드본 수동 업로드** |
| [git-setup.md](./git-setup.md) | git 초기화·원격·브랜치, **`.env` 자격정보 관리**, 인증·보안 |
| [mcp-setup.md](./mcp-setup.md) | MCP 설정(✅ **context7** 연결)·🟡 버전 고정(추후) |
