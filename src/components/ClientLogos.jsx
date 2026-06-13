import { useTheme, t } from '../context/ThemeContext';

const logos = [
  { file: 'volkswagen',    name: 'Volkswagen' },
  { file: 'ebay',          name: 'eBay' },
  { file: 'rakuten',       name: 'Rakuten' },
  { file: 'toyota',        name: 'Toyota' },
  { file: 'trendmicro',    name: 'Trend Micro' },
  { file: 'qantas',        name: 'Qantas' },
  { file: 'bestBuy',       name: 'Best Buy' },
  { file: 'saksfifthavenue', name: 'Saks Fifth Avenue' },
  { file: 'motul',         name: 'Motul' },
  { file: 'scootAirlines', name: 'Scoot' },
  { file: 'madbid',        name: 'Madbid' },
  { file: 'socialfix',     name: 'Socialfix' },
];

export default function ClientLogos() {
  const { dark } = useTheme();
  const C = t(dark);
  const list = [...logos, ...logos, ...logos];

  return (
    <section
      style={{ background: C.bg, borderBottom: `1px solid ${C.border}`, transition: 'background 0.3s' }}
      className="py-10 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 mb-10">
        <p className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: C.muted }}>
          — Trusted by the world's boldest brands
        </p>
        <p className="text-[11px] font-medium" style={{ color: C.muted }}>
          14+ years &nbsp;·&nbsp; 500+ clients
        </p>
      </div>

      {/* Single marquee row */}
      <div className="flex w-full overflow-hidden select-none">
        <div className="flex gap-20 items-center whitespace-nowrap animate-marquee-left hover:[animation-play-state:paused]">
          {list.map(({ file, name }, i) => (
            <img
              key={i}
              src={`/clients/${file}.png`}
              alt={name}
              className="flex-shrink-0 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              style={{ height: 'clamp(2.5rem, 4vw, 4rem)', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.06))' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
