import {Header} from './components/header';
import {Headline} from './components/headline';
import {Links} from './components/links';
import {Footer} from './components/footer';

export default function Home() {
  return (
    <body>
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Headline page='Home' />
          <Links />
        </main>
        <Footer />
      </div>
    </body>
  );
}
