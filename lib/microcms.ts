import { createClient, type MicroCMSQueries } from 'microcms-js-sdk';
import type { PostData } from '@/types';

const client = createClient({
  serviceDomain: process.env.CMS_API_DOMAIN ?? '',
  apiKey: process.env.CMS_API_KEY ?? '',
});

export async function getList(queries?: MicroCMSQueries) {
  return await client.getList<PostData>({
    endpoint: 'post',
    queries,
  });
}

export async function getPost(contentId?: string) {
  return await client.get<PostData>({
    endpoint: 'post',
    contentId,
  });
}
