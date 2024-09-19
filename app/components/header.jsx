import Link from 'next/link'

export function Header() {
  return (
      <header>
        <Link href="/">
            <span className='menu'>Home</span>
        </Link>
        <Link href="/about">
            <span className='menu'>About</span>
        </Link>
      </header>
  );
}
