import Image from "next/image";

const ITEMS = [
  {
  href: 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
  src: 'https://nextjs.org/icons/file.svg',
  alt: 'File icon',
  text: 'Learn'
}, 
{
  href: 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
  src: 'https://nextjs.org/icons/window.svg',
  alt: 'Window icon',
  text: 'Examples'
}, 
{
  href: 'https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
  src: 'https://nextjs.org/icons/globe.svg',
  alt: 'Globe icon',
  text: 'Go to nextjs.org →'
}, 
]

export function Footer() {
  return (
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {ITEMS.map(item => {
          return (
            <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={item.src}
            alt={item.alt}
            width={16}
            height={16}
          />
          {item.text}
        </a>
          );
        })}
        
      </footer>
  );
}
