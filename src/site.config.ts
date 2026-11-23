// 사이트 전체에서 쓰는 기본 정보. 여기만 고치면 모든 페이지에 반영돼요.
export const site = {
  name: 'Taebin Choi',
  title: 'Taebin Choi',
  description: 'Taebin Choi Online Archiving site',
  year: 2026,
  // 검색엔진 소유 확인 코드. 구글 Search Console / 네이버 서치어드바이저에서 받은 content 값만 넣으세요.
  verify: {
    google: '',
    naver: '62d3fcf7830d2ded4c49f5a613155b78b2315296',
  },
  links: {
    email: 'mailto:hyperreal721@naver.com',
    instagram: 'https://instagram.com/nonsilentday',
    github: 'https://github.com/taebinchoi',
    // CV 파일을 public/cv.pdf 로 넣은 뒤 '/cv.pdf' 로 바꾸면 Contact에 CV가 나타나요.
    cv: '',
  },
};

export const nav = [
  { href: '/profile', label: 'Profile' },
  { href: '/', label: 'Portfolio' },
  { href: '/notes', label: 'Notes' },
  { href: '/contact', label: 'Contact' },
];
