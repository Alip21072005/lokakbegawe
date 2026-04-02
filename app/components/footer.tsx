export default function Footer() {
  return (
    <footer className="w-full h-16 flex items-center justify-center px-4 border-t border-gray-300">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} Lokak Begawe. All rights reserved.
      </p>
    </footer>
  );
}
