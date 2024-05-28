import Link from 'next/link';

export default function StudentInfo() {

  const linkStyles = "hover:underline"

  return (
    <div>
      <p>Sehajdeep Singh Sandhu</p>
      <Link className={linkStyles} href="https://github.com/Sehaj1012/cprg306-assignments">https://github.com/Sehaj1012/cprg306-assignments</Link>
    </div>
  );
}