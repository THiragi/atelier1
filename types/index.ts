import type { MicroCMSListContent, MicroCMSImage } from 'microcms-js-sdk';

type Category = 'blog' | 'illust' | 'comic' | 'novel';

export type Image = {
  image: MicroCMSImage;
  altText: string;
};

export type Source = {
  breakpoint: number;
  width: number;
  height?: number;
};

export type Post = {
  title: string;
  preface: string;
  body: string;
  category: Category[];
  tag: TagData;
  images: Image[];
  number?: number;
  pinned: boolean;
};

export type PostData = MicroCMSListContent & Post;

export type Tag = {
  name: string;
  description: string;
};

export type TagData = MicroCMSListContent & Tag;

export type ScrapingResult = {
  siteOgps: SiteOgp[];
};

export type SiteOgp = {
  url: string;
  domain: string | null;
  title: string;
  description: string | null;
  image: string | null;
};
