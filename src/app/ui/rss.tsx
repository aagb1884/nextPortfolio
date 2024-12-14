import Link from 'next/link';

export default function RSSFEED() {
  return (
    <div>
      <Link href="/feed.xml/" target="_blank" rel="noopener noreferrer">
      RSS Feed
      </Link>
    </div>
  );
}
