import Logo from "@/components/logo";

export default function Header() {
  return (
    <nav className="w-[90%] sm:w-full flex items-center justify-between container mx-auto py-5 sm:py-10">
      <Logo />
      <button className="bg-purple-600 px-4 py-2 rounded-md font-semibold text-white hover:bg-purple-800 transition-all duration-300">
        Get Started
      </button>
    </nav>
  );
}
