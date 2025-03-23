'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="https://demo.awaikenthemes.com/landing/wp-content/uploads/2024/10/infine-logo.svg"
            alt="Infine Logo"
            width={150}
            height={50}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#demo" className="text-white hover:text-green-400">
            Demos
          </Link>
          <Link href="#features" className="text-white hover:text-green-400">
            Features
          </Link>
          <Link
            href="https://docs.awaikenthemes.com/infine"
            target="_blank"
            className="text-white hover:text-green-400"
          >
            Documentation
          </Link>
          <Link
            href="https://themeforest.net/user/awaiken#contact"
            target="_blank"
            className="text-white hover:text-green-400"
          >
            Support
          </Link>
          <Link
            href="https://1.envato.market/infine-wp"
            target="_blank"
            className="text-green-500 bg-white px-4 py-2 rounded-full font-medium hover:bg-gray-100"
          >
            Purchase Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/80 text-white flex flex-col space-y-4 p-6 md:hidden">
          <Link href="#demo" onClick={() => setMenuOpen(false)}>
            Demos
          </Link>
          <Link href="#features" onClick={() => setMenuOpen(false)}>
            Features
          </Link>
          <Link
            href="https://docs.awaikenthemes.com/infine"
            target="_blank"
            onClick={() => setMenuOpen(false)}
          >
            Documentation
          </Link>
          <Link
            href="https://themeforest.net/user/awaiken#contact"
            target="_blank"
            onClick={() => setMenuOpen(false)}
          >
            Support
          </Link>
          <Link
            href="https://1.envato.market/infine-wp"
            target="_blank"
            className="text-green-500 bg-white px-4 py-2 rounded-full font-medium hover:bg-gray-100"
          >
            Purchase Now
          </Link>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-white px-6 text-center"
      style={{
        backgroundImage:
          "url('https://demo.awaikenthemes.com/landing/wp-content/uploads/2024/10/infine-hero-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <p className="text-sm font-medium uppercase text-green-300">
          03 Hero Variations &nbsp; • &nbsp; 15+ Inner Pages
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
          Life and Business Coach <br /> WordPress Theme
        </h1>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full text-lg font-medium transition">
            Explore Demos
          </button>
          <button className="bg-white text-green-600 py-3 px-6 rounded-full text-lg font-medium hover:bg-gray-100 transition">
            Purchase Now
          </button>
        </div>

        {/* Image Overlay */}
        <div className="mt-12 flex justify-center">
          <Image
            src="https://demo.awaikenthemes.com/landing/wp-content/uploads/2024/10/infine-banner-1024x576.png"
            alt="Hero Banner"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default function Five() {
  return (
    <div >
      <Navbar />
      <Hero />
    </div>
  );
}
