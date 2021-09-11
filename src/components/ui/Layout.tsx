import React, { FC } from 'react';
import Link from 'next/link';

export const Layout: FC = ({ children }) => {
  return (
    <div
      className="App min-h-screen antialiased"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <h1
        className="pt-10 text-starwars text-uppercase text-4xl"
        style={{ fontFamily: 'Star Wars' }}
      >
        <Link href="/">SpaceBook</Link>
      </h1>
      {children}
    </div>
  );
};

export default Layout;
