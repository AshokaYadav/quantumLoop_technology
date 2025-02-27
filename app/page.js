import Image from 'next/image';

const HomePage = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://demo.awaikenthemes.com/landing/wp-content/uploads/2024/10/infine-banner-1024x576.png" // Replace with your logo path
            alt="Logo"
            width={134}
            height={51}
            className="w-32 h-auto"
          />
        </div>

        {/* Navigation Menu */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-6">
            <li>
              <a href="#demo" className="text-gray-700 hover:text-blue-500">
                Demos
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-700 hover:text-blue-500">
                Features
              </a>
            </li>
            <li>
              <a
                href="https://docs.awaikenthemes.com/infine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="https://themeforest.net/user/awaiken#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500"
              >
                Support
              </a>
            </li>
            <li className="md:hidden">
              <a
                href="https://1.envato.market/infine-wp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500"
              >
                Purchase Now
              </a>
            </li>
          </ul>
        </nav>

        {/* Purchase Button (Visible on Desktop) */}
        <div className="hidden md:block">
          <a
            href="https://1.envato.market/infine-wp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Purchase Now
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-12">
        <div className="container mx-auto px-4">
          {/* Hero Content */}
          <div className="text-center">
            <div className="flex justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
                <span className="text-gray-700">03 Hero Variations</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
                <span className="text-gray-700">15+ Inner Pages</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Life and Business Coach WordPress Theme
            </h1>

            <div className="flex justify-center space-x-4">
              <a
                href="#demo"
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
              >
                Explore Demos
              </a>
              <a
                href="https://1.envato.market/infine-wp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600"
              >
                Purchase Now
              </a>
            </div>
          </div>

          {/* Banner Image */}
          <div className="mt-12">
            <img
              src="https://demo.awaikenthemes.com/landing/wp-content/uploads/2024/10/infine-banner-1024x576.png" // Replace with your banner image path
              alt="Banner"
              width={800}
              height={450}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Why Choose Infine Theme
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-center">
                <svg
                  className="w-12 h-12 text-blue-500 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
                <h3 className="text-xl font-semibold mt-4">Elementor Builder</h3>
                <p className="text-gray-600 mt-2">
                  The drag-and-drop page builder for creating beautiful websites easily.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-center">
                <svg
                  className="w-12 h-12 text-blue-500 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
                <h3 className="text-xl font-semibold mt-4">Contact Form 7</h3>
                <p className="text-gray-600 mt-2">
                  A simple and flexible contact form plugin for WordPress.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-center">
                <svg
                  className="w-12 h-12 text-blue-500 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                </svg>
                <h3 className="text-xl font-semibold mt-4">Theme Typography</h3>
                <p className="text-gray-600 mt-2">
                  The creative use of fonts to convey emotions and enhance design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            Copyright © Infine All Rights Reserved. Powered by Awaiken
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;