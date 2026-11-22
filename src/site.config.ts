// 사이트 전체에서 쓰는 기본 정보. 여기만 고치면 모든 페이지에 반영돼요.
export const site = {
  name: 'Taebin Choi',
  title: 'Taebin Choi',
  description: 'Taebin Choi Online Archiving site',
  year: 2026,
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
