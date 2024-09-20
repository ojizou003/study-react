'use client';

import { Header } from './components/header';
import { Headline } from './components/headline';
import { Links } from './components/links';
import { Footer } from './components/footer';
import { useCounter } from '@/app/hooks/useCounter';
import { useInputArray } from '@/app/hooks/useInputArray';
import { useBgLightBlue } from '@/app/hooks/useBgLightBlue';

export default function Home() {
  const {count, handleClick} = useCounter()
  const {text, array, handleChange, handleAdd} = useInputArray()
  useBgLightBlue();
  
  return (
    <body>
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Headline page='Home' />
          <Links />

          <button onClick={handleClick}>ボタン</button>
          <h1 >{count}</h1>

          <input type="text" value={text} onChange={handleChange}/>
          <button onClick={handleAdd}> 追加</button>
          <ul>
            {array.map(item => {
              return (
                <li key={item}>{item}</li>
              )
            })}
          </ul>
        </main>
      <Footer />
      </div>
    </body>
  );
}
