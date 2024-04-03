// pages/index.js

import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Art Centers App!</h1>
      <Link href="/artCenters/1">
        View Art Centers
      </Link>
    </div>
  );
};

export default HomePage;
