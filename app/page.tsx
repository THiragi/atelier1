import { getList } from '@/lib/microcms';

export default async function Home() {
  const { contents } = await getList({ limit: 10 });
  return (
    <div>
      <h1>me basta con saber</h1>
      <ul>
        {contents.map((content) => (
          <li key={content.id}>{content.title}</li>
        ))}
      </ul>
    </div>
  );
}
