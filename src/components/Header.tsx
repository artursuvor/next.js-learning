import Link from "next/link";

const Header = () => {
  return (
    <header style={{ backgroundColor: '#c8c6b9', padding: '15px' }}>
      <Link href="/" style={{ backgroundColor: '#3B82F6', color: 'white', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '0.25rem', display: 'inline-block', textAlign: 'center' }}>
        Main
      </Link>
      <h1>Header</h1>
    </header>
  );
};

export default Header;
