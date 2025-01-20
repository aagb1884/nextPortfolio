export const metadata = {
  title: 'Doctor Who Games',
  openGraph: {
    title: 'Doctor Who Games',
    description: 'Help an angel complete its quest.',
  },
}

import StoryList from "./components/StoryList";

export default function DrWhoDND() {
  return (
    <div>
      <StoryList />
    </div>
  );
}