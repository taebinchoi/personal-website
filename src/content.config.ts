import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 작업(Portfolio)과 주제(Notes)가 같은 모양으로 펼쳐지도록 항목을 함께 써요.
const itemFields = ({ image }: { image: () => any }) =>
    z.object({
      title: z.string(),
      order: z.number(), // 작은 숫자가 위에 나와요
      meta: z.array(z.string()).default([]), // 제목 옆 작은 정보 (예: 툴, 연도)
      year: z.string().optional(),
      tools: z.string().optional(),
      type: z.string().optional(),
      role: z.string().optional(),
      // 기술 스택처럼 묶어서 보여 줄 항목 (굵은 제목 + 내용)
      stack: z.array(z.object({ label: z.string(), items: z.string() })).default([]),
      // 영어 설명 (본문 마크다운이 한국어). 있으면 한국어/영어 토글이 생겨요. 빈 줄로 문단을 나눠요.
      en: z.string().optional(),
      // 본문 아래 따로 두는 한 줄 (예: 확장 계획)
      note: z.object({ ko: z.string(), en: z.string().optional() }).optional(),
      credits: z.string().optional(), // 데이터 출처 등
      site: z.object({ label: z.string(), href: z.string() }).optional(), // 정보 목록에 Site 항목으로 나와요
      // 대표 미디어: 영상 또는 이미지. 원래 비율 그대로 보여요.
      video: z
        .object({
          src: z.string(), // public 폴더 기준 경로 (예: /media/a.mp4)
          srcMobile: z.string().optional(), // 폰용 작은 버전
          poster: z.string().optional(),
          width: z.number(),
          height: z.number(),
          label: z.string(),
        })
        .optional(),
      cover: z.object({ src: image(), alt: z.string() }).optional(),
      // wide: true 이면 한 줄 전체를 차지해요
      gallery: z.array(z.object({ src: image(), alt: z.string(), wide: z.boolean().default(false) })).default([]),
      links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    });

const projects = defineCollection({
  // 파일 이름이 _ 로 시작하면 사이트에 나오지 않아요 (초안, 템플릿용).
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: itemFields,
});

// Notes의 큰 주제. 제목은 한국어/영어가 번갈아 나오고, 누르면 Portfolio와 같은 모양으로 펼쳐져요.
const topics = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/topics' }),
  schema: (ctx) =>
    itemFields(ctx).extend({
      titleEn: z.string(), // 영어 제목
      keywords: z.string().optional(),
    }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    // 이 노트가 들어갈 주제 (src/content/topics 의 파일 이름, 예: hci-foundations)
    topic: z.string().optional(),
  }),
});

export const collections = { projects, topics, notes };
