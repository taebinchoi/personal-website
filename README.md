# Taebin Choi 포트폴리오

Astro로 만든 정적 사이트예요.

## 실행

```bash
npm install
npm run dev      # 개발 서버: http://localhost:4321
npm run build    # dist 폴더에 배포용 파일 생성
```

## 내용 고치는 곳

| 무엇 | 파일 |
|---|---|
| 이름, 이메일, SNS, CV 링크 | `src/site.config.ts` |
| 작업 (Portfolio) | `src/content/projects/*.md` |
| 노트 (Notes) | `src/content/notes/*.md` |
| 프로필 문장, 학력, 툴 | `src/pages/profile.astro` 맨 위 |
| 색, 글자 크기 5단계 | `src/styles/global.css` 맨 위 |
| CV 파일 | `public/cv.pdf` 로 넣기 |

### 작업 추가
`src/content/projects/_template.md`를 복사해 이름 앞 `_`를 빼고 채우면 돼요.
이미지는 같은 폴더에 넣고 경로를 적으면 원래 비율 그대로, 화면 크기별로 자동 최적화돼요.
`order` 숫자가 작을수록 위에 나와요.

### 영상 추가
`public/media/`에 넣고 `video:` 항목에 원래 가로·세로 크기를 적어요.
웹용으로는 1080p(약 3Mbps)와 폰용 720p 두 개를 만드는 걸 추천해요. 예:

```bash
ffmpeg -ss 6.5 -i 원본.mp4 -an -vf fps=30 -c:v libx264 -b:v 3000k -movflags +faststart 작업-1080.mp4
ffmpeg -i 작업-1080.mp4 -an -vf scale=1280:-2 -c:v libx264 -b:v 1400k -movflags +faststart 작업-720.mp4
```

### 노트 추가
`src/content/notes/_template.md`를 복사해 이름 앞 `_`를 빼고 써요.

## 배포 (Cloudflare Pages)
GitHub 저장소에 올린 뒤 Cloudflare Pages에서 연결하고
빌드 명령 `npm run build`, 출력 폴더 `dist`로 설정하면 돼요.
도메인: taebinchoi.com (Cloudflare Registrar)
