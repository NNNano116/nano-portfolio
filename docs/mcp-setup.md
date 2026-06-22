# MCP · 도구 설정 (정본) — 🟡 작성 중

> **상태: 진행 중.** MCP 서버(D-1) 일부 확정. **버전 고정표(D-2)·스캐폴드(D-3)는 아직 미확정** —
> 아래 Context7 로 최신 버전을 조회한 뒤 확정한다. 그 전까지 버전·명령을 임의로 박지 않는다.

---

## 설정된 MCP 서버 (D-1) ✅

| 서버 | 용도 | 전송 | 범위 | 인증 | 상태 |
|------|------|------|------|------|------|
| **context7** | 라이브러리 **최신 문서·버전** 조회 (버전 고정 D-2 의 근거 소스) | HTTP (원격) | user (전 프로젝트) | API 키 없음(무료/저 rate limit) | ✔ Connected |

**설치 명령** (재현용):
```sh
claude mcp add --scope user --transport http context7 https://mcp.context7.com/mcp
```
- 원격 URL: `https://mcp.context7.com/mcp` · 패키지(로컬 대안): `@upstash/context7-mcp`
- 설정 파일: `~/.claude.json` (user config). `.env`/git 와 무관(로컬 도구 인증).
- **API 키 추가 시**(rate limit 상향, `context7.com/dashboard` 무료 발급):
  ```sh
  claude mcp remove context7 -s user
  claude mcp add --scope user --header "CONTEXT7_API_KEY: <KEY>" --transport http context7 https://mcp.context7.com/mcp
  ```
- 사용법: 프롬프트에 `use context7` 또는 라이브러리 ID 지정 시 최신 공식 문서를 가져온다.

### 사용 환경 (참고, 미고정)
- Node `v22.20.0` · npm `10.9.3` (현재 로컬 환경 — D-2 에서 **고정 여부** 결정).

## 남은 항목 (예정)

- [ ] 추가 MCP 서버 필요 시 (GitHub 등) 위 표에 추가
- [ ] 도구/런타임 **버전 고정표** — Node·Vite·React·패키지매니저 등 (Context7 로 최신 조회 후 확정)
- [ ] 프로젝트 스캐폴드 명령 확정 (`npm create vite@latest …` 등 최신 플래그)
- [ ] 로컬 ↔ MCP ↔ git/배포 연동 흐름

## 확정 시 반영할 곳

이 문서가 채워지면 아래도 함께 갱신한다(단일 출처 유지):

- [`dev-stack.md`](./dev-stack.md) 의 "🟡 버전 추후 고정" 항목 → 실제 버전.
- [`deploy.md`](./deploy.md) §5 의 Actions YAML → 최신 액션 버전.
- 루트 [`../CLAUDE.md`](../CLAUDE.md) §1·§3 의 관련 표기.

> 그 전까지는 **버전·명령을 임의 확정하지 않는다.** 절차·규약 수준에서만 진행.
