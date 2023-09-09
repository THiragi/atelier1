import { cache } from 'react';
import { createClient, type MicroCMSQueries } from 'microcms-js-sdk';
import type { PostData } from '@/types';

const client = createClient({
  serviceDomain: process.env.CMS_API_DOMAIN ?? '',
  apiKey: process.env.CMS_API_KEY ?? '',
});

export const getList = cache(async (queries?: MicroCMSQueries) =>
  client.getList<PostData>({
    endpoint: 'post',
    queries,
  })
);

export const getPost = cache(async (contentId?: string) =>
  client.get<PostData>({
    endpoint: 'post',
    contentId,
  })
);
