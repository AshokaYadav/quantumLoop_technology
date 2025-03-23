import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="https://demo.awaikenthemes.com/landing/wp-content/uploads/2024/10/infine-banner-1024x576.png"
          alt="Logo"
          width={134}
          height={51}
          className="w-32 h-auto"
        />
      </div>

      {/* Navigation Menu */}
      <nav className="mt-4 md:mt-0">
        <ul className="flex space-x-6">
          <li><Link href="#demo" className="text-gray-700 hover:text-blue-500">Demos</Link></li>
          <li><Link href="#features" className="text-gray-700 hover:text-blue-500">Features</Link></li>
          <li><Link href="https://docs.awaikenthemes.com/infine" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">Documentation</Link></li>
          <li><Link href="https://themeforest.net/user/awaiken#contact" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">Support</Link></li>
          <li className="md:hidden">
            <Link href="https://1.envato.market/infine-wp" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">Purchase Now</Link>
          </li>
        </ul>
      </nav>

      {/* Purchase Button (Visible on Desktop) */}
      <div className="hidden md:block">
        <Link href="https://1.envato.market/infine-wp" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Purchase Now</Link>
      </div>
    </div>
  );
};

export default Header;
