import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  // 파일 이름이 _ 로 시작하면 사이트에 나오지 않아요 (초안, 템플릿용).
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      order: z.number(), // 작은 숫자가 위에 나와요
      meta: z.array(z.string()).default([]), // 제목 옆 작은 정보 (예: 툴, 연도)
      year: z.string().optional(),
      tools: z.string().optional(),
      type: z.string().optional(),
      role: z.string().optional(),
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
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
  }),
});

export const collections = { projects, notes };
