import WhoGamesTabs from "./WhoGamesTabs";

export const metadata = {
  title: 'Doctor Who Games',
  openGraph: {
    title: 'Doctor Who Games',
    description: 'Help an angel complete its quest.',
  },
}


export default function DrWhoDND() {
  return (
    <div>
      <WhoGamesTabs />
    </div>
  );
}