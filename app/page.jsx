'use client';

import { Header } from './components/header';
import { Headline } from './components/headline';
import { Links } from './components/links';
import { Footer } from './components/footer';
import { useCallback, useEffect, useState } from 'react';

export default function Home() {

  const [count, setCount] = useState(1);
  const [text, setText] = useState('');
  const [array, setArray] = useState([]);

  const handleClick = useCallback(() => {
    if (count < 10){
    setCount((prevCount) => prevCount+1);
  }
  }, [count]);
  
  
  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5){
      alert('5文字以内にしてください');
      return;
    }
    setText(e.target.value.trim());
  }, []);
  
  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some(item => item === text)){
        alert('同じ要素がすでに存在します');
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);
  
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
