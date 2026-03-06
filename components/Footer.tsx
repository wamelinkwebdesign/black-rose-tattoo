export default function Footer() {
  return (
    <footer className="border-t border-[#C41E3A]/30 px-6 py-12 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        {/* Logo */}
        <div>
          <div className="font-[family-name:var(--font-playfair)] text-sm tracking-[0.3em] uppercase">
            Black Rose
          </div>
          <div className="mt-0.5 text-[9px] tracking-[0.3em] uppercase text-[#C9A96E]">
            Tattoo & Gallery
          </div>
        </div>

        {/* Info */}
        <div className="text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/30">
          Dirk van Hasseltssteeg 56, Amsterdam
        </div>

        {/* Social + copyright */}
        <div className="flex flex-col items-center gap-2 sm:items-end">
          <a
            href="https://instagram.com/blackrosetattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.2em] uppercase text-[#F5F0E8]/40 transition-colors hover:text-[#F5F0E8]"
          >
            @blackrosetattoo
          </a>
          <span className="text-[9px] tracking-[0.15em] text-[#F5F0E8]/20">
            &copy; 2026 Black Rose Tattoo & Gallery
          </span>
        </div>
      </div>
    </footer>
  );
}
