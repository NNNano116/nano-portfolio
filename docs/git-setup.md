# Git 연계 · `.env` 자격정보 관리 (정본)

> GitHub 업로드·배포를 위한 git 설정과, **`.env` 로 계정/토큰을 관리**하는 규약.
> ⚠️ **비밀값은 절대 커밋하지 않는다.** `.env` 는 `.gitignore` 로 추적 제외, 템플릿은 `.env.example` 로 공유.

---

## 1. 저장소 모델

| 목적 | 저장소 이름 | 배포 URL | `base` |
|------|-------------|----------|--------|
| 사용자 페이지 | `<user>.github.io` | `https://<user>.github.io/` | `'/'` |
| 프로젝트 페이지 | 임의(예: `ppp`) | `https://<user>.github.io/ppp/` | `'/ppp/'` |

> 어느 쪽이든 배포는 [`deploy.md`](./deploy.md) 의 방식 A(권장)/B 를 따른다.

## 2. 초기 git 설정 (절차)

1. `git init` → 기본 브랜치 `main`.
2. 사용자 정보: `git config user.name` / `user.email` (전역 or 로컬). 값은 `.env` 에서 참조해 설정 가능(§4).
3. `.gitignore` 준비(이미 생성됨 — §5).
4. 원격 연결: `git remote add origin <URL>`.
5. 첫 푸시: `git push -u origin main`.

> 구체 명령 흐름은 안정적이라 그대로 사용 가능. 단 인증 방식만 §3·§4 참고.

## 3. 인증 방식 (택1) — 보안 권장 순

1. **`gh` CLI 인증 (가장 권장)**: `gh auth login` → OS 자격증명 저장소에 안전 보관. 토큰을 파일에 두지 않음.
2. **Git Credential Manager**: HTTPS 푸시 시 OS 자격증명 관리자에 저장.
3. **`.env` 의 PAT(요청하신 방식)**: 로컬 `.env` 에 토큰 보관 후 도구가 참조. 편리하나 **파일에 비밀이 남으므로** 반드시 gitignore + 최소 권한 토큰.

> 셋 다 가능. 본 프로젝트는 **`.env` 방식**을 채택하되(아래), 가능하면 `gh auth login` 을 병행해 푸시 인증을 위임하는 것을 권장.

## 4. `.env` 자격정보 관리 규약 ⭐

**원칙**
- `.env` = **로컬 전용**. 커밋 금지(`.gitignore` 에 포함). 공유는 키 이름만 담은 `.env.example` 로.
- **GitHub Actions 에는 `.env` 를 쓰지 않는다** — CI 비밀은 저장소 **Settings → Secrets and variables → Actions** 에 등록(배포 토큰은 Actions 의 `GITHUB_TOKEN` 자동 제공이라 대개 불필요).
- **빌드 산출(`dist/`)에 비밀을 넣지 않는다** — 정적 사이트는 클라이언트에 그대로 노출됨. `.env` 의 토큰은 *빌드 입력*이 아니라 *로컬 git/도구 인증용*으로만 사용.

**`.env` 키 (템플릿: `.env.example`)**

| 키 | 용도 | 비고 |
|----|------|------|
| `GIT_USER_NAME` | `git config user.name` 값 | 공개 정보 |
| `GIT_USER_EMAIL` | `git config user.email` 값 | 공개 정보(노출 주의) |
| `GITHUB_USERNAME` | GitHub 계정명 | — |
| `GITHUB_TOKEN` | PAT(푸시/`gh` 인증) | **비밀** — fine-grained·최소 권한·만료일 설정 |
| `GIT_REMOTE_URL` | `origin` 원격 주소 | 선택 |

**토큰 사용 팁(안전)**
- PAT 는 **fine-grained**, 대상 저장소 한정, **contents: write** 정도 최소 권한, 만료일 지정.
- `gh` CLI 가 `GH_TOKEN`/`GITHUB_TOKEN` 환경변수를 인식하므로, `.env` 로드 후 `gh`/`git` 인증에 활용 가능.
- 토큰을 **원격 URL 에 직접 박지 말 것**(`https://<token>@github.com/...`) — 히스토리·로그에 남는다. credential helper/`gh` 경유 권장.

## 5. `.gitignore` (생성됨)

핵심 항목: `.env`(및 변형), `node_modules/`, `dist/`, 빌드 캐시, OS/에디터 부산물.
→ 실제 파일: 루트 [`../.gitignore`](../.gitignore). `.env.example` 은 **추적 대상**(공유용).

## 6. 커밋·푸시 워크플로

1. 로컬 `dev` 에서 동작 확인(Vibe 코딩) → 의미 단위로 커밋.
2. `main` 에 푸시 → (방식 A) Actions 자동 빌드·배포 / (방식 B) `dist/` 를 `gh-pages` 로 푸시.
3. 배포 후 실제 URL 에서 새로고침·라우팅·에셋 로드 확인([`deploy.md`](./deploy.md) §7).

## 7. 체크리스트

- [ ] `.env` 가 `.gitignore` 에 있고 **추적되지 않는가**(`git status` 에 안 뜸).
- [ ] 비밀(PAT)이 코드·원격 URL·`dist/` 에 박히지 않았는가.
- [ ] PAT 는 최소 권한·만료일·대상 한정인가.
- [ ] CI 비밀은 `.env` 가 아니라 **Actions Secrets** 에 있는가.
- [ ] `.env.example` 은 **키 이름만**(값 없음) 담아 커밋되었는가.

## 8. 정본 / 연계

- 빌드·배포 방식: [`deploy.md`](./deploy.md) (허브 **B**)
- 개발·로컬: [`dev-stack.md`](./dev-stack.md) (허브 **A**)
