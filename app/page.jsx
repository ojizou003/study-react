'use client';

import { Header } from './components/header';
import { Headline } from './components/headline';
import { Links } from './components/links';
import { Footer } from './components/footer';
import { useEffect, useState } from 'react';

export default function Home() {

  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    setCount(count => count+1);
  };
  
  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';
  }, []);


  return (
    <body>
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <button onClick={handleClick}>ボタン</button>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Headline page='Home' />
          <Links />
          <h1 >{count}</h1>
        </main>
      <Footer />
      </div>
    </body>
  );
}
