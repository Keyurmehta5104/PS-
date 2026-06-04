import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

/* ── Cycling words — only the last word changes ─────────────────── */
const CYCLE_WORDS = [
  'Reality.',
  'Products.',
  'Platforms.',
  'Businesses.',
  'Solutions.',
];

/* ── Typewriter hook — cycles through an array of phrases ───────── */
const TYPEWRITER_PHRASES = [
  'Web apps,',
  'Mobile ecosystems,',
  'Production AI systems.',
];

function useCyclingTypewriter(phrases, speed = 55, pauseMs = 1600) {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase]         = useState('typing');

  const currentPhrase = phrases[phraseIdx];

  useEffect(() => {
    let timeout;
    if (phase === 'typing') {
      if (displayed.length < currentPhrase.length) {
        timeout = setTimeout(() => setDisplayed(currentPhrase.slice(0, displayed.length + 1)), speed);
      } else {
        timeout = setTimeout(() => setPhase('pause'), pauseMs);
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('erasing'), 200);
    } else {
      // erasing
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(d => d.slice(0, -1)), speed / 2);
      } else {
        setPhraseIdx(i => (i + 1) % phrases.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, currentPhrase, speed, pauseMs, phrases]);

  return displayed;
}

/* ── Scattered bg dots ──────────────────────────────────────────── */
const BG_DOTS = [
  { top: '12%', left: '8%',  size: 4, dur: 3   },
  { top: '25%', left: '55%', size: 3, dur: 4   },
  { top: '70%', left: '20%', size: 5, dur: 3.5 },
  { top: '60%', left: '72%', size: 3, dur: 5   },
  { top: '40%', left: '90%', size: 4, dur: 4   },
  { top: '85%', left: '45%', size: 3, dur: 3   },
  { top: '15%', left: '38%', size: 3, dur: 4.5 },
];

/* ── Card 01: E-Commerce Featured ──────────────────────────────── */
function Card01() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.015 }}
      style={{
        background: 'linear-gradient(135deg,#FF7A2F 0%,#FF5C1A 55%,#e84f12 100%)',
        borderRadius: 20, padding: '28px 28px 24px',
        position: 'relative', overflow: 'hidden',
        cursor: 'pointer', minHeight: 260, height: '100%', width: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}
    >
      <div style={{ position:'absolute', top:-40, right:-40, width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,0.1)', filter:'blur(40px)', pointerEvents:'none' }} />
      {/* Animated product cards flying into cart */}
      <div style={{ position:'absolute', right:24, top:'50%', transform:'translateY(-50%)', width:140, height:140 }}>
        {/* Cart circle */}
        <div style={{ width:105, height:105, borderRadius:'50%', background:'rgba(255,255,255,0.18)', display:'flex', alignItems:'center', justifyContent:'center', position:'absolute', right:0, top:'50%', transform:'translateY(-50%)' }}>
          <span style={{ fontSize:38 }}>🛒</span>
        </div>
        {/* Animated product pills flying in */}
        {[
          { label:'👟', delay:0,   fromX:-30, fromY:-20 },
          { label:'👜', delay:1.2, fromX:-20, fromY:10  },
          { label:'⌚', delay:2.4, fromX:-35, fromY:-5  },
        ].map((p,i) => (
          <motion.div key={i}
            animate={{ x:[p.fromX,0], y:[p.fromY,0], opacity:[0,1,0], scale:[0.6,1,0.5] }}
            transition={{ duration:1, delay:p.delay, repeat:Infinity, repeatDelay:2.6, ease:[0.16,1,0.3,1] }}
            style={{ position:'absolute', top:'50%', right:24, transform:'translateY(-50%)', fontSize:14, pointerEvents:'none' }}
          >
            {p.label}
          </motion.div>
        ))}
        {/* Bounce badge — item count */}
        <motion.div
          animate={{ scale:[1,1.3,1] }}
          transition={{ duration:0.4, delay:0.9, repeat:Infinity, repeatDelay:1.2 }}
          style={{ position:'absolute', top:8, right:2, width:18, height:18, borderRadius:'50%', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center' }}
        >
          <span style={{ fontSize:9, fontWeight:800, color:'#FF5C1A' }}>3</span>
        </motion.div>
      </div>

      <div>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14 }}>
          <span style={{ fontSize:10, fontWeight:700, letterSpacing:'0.12em', color:'rgba(255,255,255,0.75)', textTransform:'uppercase' }}>• 01 · FEATURED</span>
          <div style={{ width:30, height:30, borderRadius:'50%', background:'rgba(255,255,255,0.2)', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <ArrowRight size={14} color="#fff" />
          </div>
        </div>
        <h3 style={{ fontSize:26, fontWeight:800, color:'#fff', margin:'0 0 10px', lineHeight:1.2, maxWidth:'60%', letterSpacing:'-0.02em' }}>E-Commerce Platforms</h3>
        <p style={{ fontSize:13, color:'rgba(255,255,255,0.78)', margin:0, lineHeight:1.6, maxWidth:'58%' }}>
          From Shopify to Magento. High-conversion, scalable commerce.
        </p>
      </div>

      <div style={{ display:'flex', gap:28, marginTop:20 }}>
        {[['12+','PROJECTS'],['Shopify','PARTNER'],['Magento','CERTIFIED']].map(([v,l]) => (
          <div key={l}>
            <p style={{ fontSize:20, fontWeight:800, color:'#fff', margin:0 }}>{v}</p>
            <p style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,0.6)', margin:'3px 0 0', letterSpacing:'0.1em' }}>{l}</p>
          </div>
        ))}
      </div>

      {/* Animated dots on card */}
      {[{top:'28%',left:'47%'},{top:'52%',left:'51%'}].map((d,i) => (
        <motion.div key={i}
          animate={{ opacity:[0.3,0.9,0.3] }}
          transition={{ duration:2, repeat:Infinity, delay:i*0.9 }}
          style={{ position:'absolute', top:d.top, left:d.left, width:5, height:5, borderRadius:'50%', background:'rgba(255,255,255,0.7)' }}
        />
      ))}
    </motion.div>
  );
}

/* ── Card 02: Mobile Apps ────────────────────────────────────────── */
function Card02({ dark }) {
  return (
    <motion.div
      initial={{ opacity:0, y:20 }}
      animate={{ opacity:1, y:0 }}
      transition={{ delay:0.5, duration:0.6, ease:[0.16,1,0.3,1] }}
      whileHover={{ scale:1.02 }}
      style={{ background: dark ? '#1c1c1c' : '#fff', borderRadius:18, padding:'18px 18px', border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #ebebeb', cursor:'pointer', display:'flex', flexDirection:'column', overflow:'hidden', transition:'background 0.3s', height:'100%', width:'100%' }}
    >
      {/* Tag + Arrow */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10 }}>
        <span style={{ fontSize:9, fontWeight:700, letterSpacing:'0.12em', color: dark ? 'rgba(255,255,255,0.4)' : '#999', textTransform:'uppercase' }}>02 · INFRA</span>
        <div style={{ width:28, height:28, borderRadius:'50%', border: dark ? '1px solid rgba(255,255,255,0.15)' : '1px solid #ddd', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <ArrowRight size={12} color={dark ? 'rgba(255,255,255,0.7)' : '#555'} />
        </div>
      </div>
      {/* Big title */}
      <p style={{ fontSize:22, fontWeight:800, color: dark ? '#fff' : '#0a0a0a', margin:'0 0 2px', lineHeight:1.15, transition:'color 0.3s' }}>Mobile Apps</p>
      {/* Visual fills space */}
      <div style={{ flex:1, display:'flex', justifyContent:'center', alignItems:'center', padding:'10px 0' }}>
        <div style={{ width:88, height:'100%', maxHeight:190, borderRadius:22, background:'#1a1a1a', border:'3px solid #2a2a2a', overflow:'hidden', display:'flex', flexDirection:'column', padding:'10px 8px', boxShadow:'0 12px 40px rgba(0,0,0,0.35)' }}>
          <div style={{ width:26, height:5, borderRadius:999, background:'#2e2e2e', margin:'0 auto 8px' }} />
          <div style={{ flex:1, overflow:'hidden', borderRadius:8, background:'#0f0f0f' }}>
            <motion.div
              animate={{ y:[0,-120] }}
              transition={{ duration:3, repeat:Infinity, ease:'linear', repeatDelay:0.5 }}
              style={{ display:'flex', flexDirection:'column', gap:7, padding:'7px 7px' }}
            >
              {[['#FF5C1A','70%'],['#2a2a2a','88%'],['#2a2a2a','60%'],['#FF5C1A','50%'],['#2a2a2a','78%'],['#2a2a2a','65%'],['#FF5C1A','72%'],['#2a2a2a','84%'],['#FF5C1A','58%']].map(([c,w],i) => (
                <div key={i} style={{ height:7, borderRadius:99, background:c, width:w, opacity: c==='#2a2a2a' ? 0.5 : 1 }} />
              ))}
            </motion.div>
          </div>
          <div style={{ width:30, height:4, borderRadius:999, background:'#2a2a2a', margin:'8px auto 0' }} />
        </div>
      </div>
      {/* Tech tags at bottom */}
      <p style={{ fontSize:11, color: dark ? 'rgba(255,255,255,0.4)' : '#999', margin:0, letterSpacing:'0.02em' }}>iOS · Android · Flutter</p>
    </motion.div>
  );
}

/* ── Card 03: Custom Web Dev ─────────────────────────────────────── */
function Card03({ dark }) {
  return (
    <motion.div
      initial={{ opacity:0, y:20 }}
      animate={{ opacity:1, y:0 }}
      transition={{ delay:0.55, duration:0.6, ease:[0.16,1,0.3,1] }}
      whileHover={{ scale:1.02 }}
      style={{ background: dark ? '#1c1c1c' : '#fff', borderRadius:18, padding:'18px 18px', border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #ebebeb', cursor:'pointer', display:'flex', flexDirection:'column', overflow:'hidden', transition:'background 0.3s', height:'100%', width:'100%' }}
    >
      {/* Tag + Arrow */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10 }}>
        <span style={{ fontSize:9, fontWeight:700, letterSpacing:'0.12em', color: dark ? 'rgba(255,255,255,0.4)' : '#999', textTransform:'uppercase' }}>03 · APPS</span>
        <div style={{ width:28, height:28, borderRadius:'50%', border: dark ? '1px solid rgba(255,255,255,0.15)' : '1px solid #ddd', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <ArrowRight size={12} color={dark ? 'rgba(255,255,255,0.7)' : '#555'} />
        </div>
      </div>
      {/* Big title */}
      <p style={{ fontSize:22, fontWeight:800, color: dark ? '#fff' : '#0a0a0a', margin:'0 0 2px', lineHeight:1.15, transition:'color 0.3s' }}>Custom Web Dev</p>
      {/* Visual fills space */}
      <div style={{ flex:1, background: dark ? '#111' : '#f7f7f7', borderRadius:12, overflow:'hidden', border: dark ? 'none' : '1px solid #eee', display:'flex', flexDirection:'column', margin:'10px 0' }}>
        <div style={{ background: dark ? '#1a1a1a' : '#efefef', padding:'6px 10px', display:'flex', alignItems:'center', gap:5, borderBottom: dark ? '1px solid #222' : '1px solid #e0e0e0', flexShrink:0 }}>
          {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width:7, height:7, borderRadius:'50%', background:c }} />)}
          <div style={{ flex:1, background: dark ? '#2a2a2a' : '#fff', borderRadius:4, height:9, marginLeft:6 }} />
        </div>
        <div style={{ padding:'10px 10px', display:'flex', flexDirection:'column', gap:7, flex:1 }}>
          <motion.div animate={{ opacity:[0,1,1,1] }} transition={{ duration:3, repeat:Infinity, repeatDelay:1, times:[0,0.1,0.9,1] }} style={{ display:'flex', gap:5, alignItems:'center' }}>
            <div style={{ width:22, height:7, borderRadius:4, background:'#FF5C1A' }} />
            {[30,22,26].map((w,i) => <div key={i} style={{ width:w, height:6, borderRadius:4, background: dark ? '#333' : '#ddd' }} />)}
          </motion.div>
          <motion.div initial={{ width:0 }} animate={{ width:'100%' }} transition={{ duration:1.2, delay:0.3, repeat:Infinity, repeatDelay:2.8, ease:[0.16,1,0.3,1] }} style={{ height:28, borderRadius:6, background:'linear-gradient(90deg,#FF5C1A,#ff8c5a)' }} />
          {[[0.5,'80%'],[0.7,'60%'],[0.9,'70%'],[1.1,'52%']].map(([d,w],i) => (
            <motion.div key={i} initial={{ width:0 }} animate={{ width:w }} transition={{ duration:0.8, delay:d, repeat:Infinity, repeatDelay:3.2, ease:[0.16,1,0.3,1] }} style={{ height:6, borderRadius:4, background: dark ? '#333' : '#e0e0e0' }} />
          ))}
          <div style={{ display:'flex', gap:6 }}>
            {['#FF5C1A22','#ddd','#ddd'].map((bg,i) => (
              <motion.div key={i} initial={{ opacity:0, y:5 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.2+i*0.15, repeat:Infinity, repeatDelay:3, duration:0.5 }} style={{ flex:1, height:20, borderRadius:5, background: dark ? '#2a2a2a' : bg, border: dark ? 'none' : '1px solid #e8e8e8' }} />
            ))}
          </div>
        </div>
      </div>
      {/* Tech tags at bottom */}
      <p style={{ fontSize:11, color: dark ? 'rgba(255,255,255,0.4)' : '#999', margin:0, letterSpacing:'0.02em' }}>Laravel · React · WordPress</p>
    </motion.div>
  );
}

/* ── Card 04: UI/UX Design ───────────────────────────────────────── */
function Card04() {
  const COLORS = ['#FF5C1A','#6366f1','#10b981','#f59e0b','#ec4899'];
  return (
    <motion.div
      initial={{ opacity:0, y:20 }}
      animate={{ opacity:1, y:0 }}
      transition={{ delay:0.6, duration:0.6, ease:[0.16,1,0.3,1] }}
      whileHover={{ scale:1.02 }}
      style={{ background:'#111', borderRadius:18, padding:'18px 18px', cursor:'pointer', display:'flex', flexDirection:'column', overflow:'hidden', height:'100%', width:'100%' }}
    >
      {/* Tag + Arrow */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10 }}>
        <span style={{ fontSize:9, fontWeight:700, letterSpacing:'0.12em', color:'rgba(255,255,255,0.4)', textTransform:'uppercase' }}>04 · INSIGHTS</span>
        <div style={{ width:28, height:28, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.15)', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <ArrowRight size={12} color="rgba(255,255,255,0.6)" />
        </div>
      </div>
      {/* Big title */}
      <p style={{ fontSize:22, fontWeight:800, color:'#fff', margin:'0 0 2px', lineHeight:1.15 }}>UI/UX Design</p>
      {/* Visual grid fills space */}
      <div style={{ flex:1, position:'relative', display:'flex', flexDirection:'column', gap:6, margin:'10px 0' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:6, flex:1 }}>
          {[
            { delay:0,   bg:'rgba(255,92,26,0.9)'  },
            { delay:0.2, bg:'rgba(99,102,241,0.8)' },
            { delay:0.4, bg:'rgba(16,185,129,0.8)' },
            { delay:0.6, bg:'rgba(245,158,11,0.8)' },
          ].map((b,i) => (
            <motion.div key={i} animate={{ opacity:[0.4,1,0.4], scale:[0.93,1,0.93] }} transition={{ duration:2.5, repeat:Infinity, delay:b.delay, ease:'easeInOut' }} style={{ borderRadius:10, background:b.bg, minHeight:50 }} />
          ))}
        </div>
        <motion.div animate={{ x:[0,80,80,20,20,0], y:[0,0,50,50,100,0] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }} style={{ position:'absolute', top:6, left:6, width:12, height:14, pointerEvents:'none' }}>
          <svg width="12" height="14" viewBox="0 0 10 12" fill="none"><path d="M1 1L9 5.5L5.5 6.5L4 11L1 1Z" fill="white" stroke="rgba(0,0,0,0.4)" strokeWidth="0.5"/></svg>
        </motion.div>
      </div>
      {/* Colour swatches + tech tags at bottom */}
      <div style={{ display:'flex', gap:5, marginBottom:8 }}>
        {COLORS.map((c,i) => (
          <motion.div key={c} animate={{ scale:[1,1.2,1] }} transition={{ duration:1.5, repeat:Infinity, delay:i*0.25 }} style={{ width:18, height:18, borderRadius:5, background:c }} />
        ))}
      </div>
      <p style={{ fontSize:11, color:'rgba(255,255,255,0.35)', margin:0, letterSpacing:'0.02em' }}>Figma · Prototyping · Systems</p>
    </motion.div>
  );
}

/* ── Card 05: Dedicated Teams — static code + blinking cursor ────── */
const CODE_LINES = [
  { color:'#6a9955', text:'// hire experts' },
  { color:'#9cdcfe', text:'const team =' },
  { color:'#ce9178', text:" build('next');" },
  { color:'#dcdcaa', text:'await team.start();' },
  { color:'#9cdcfe', text:'team.scale(10);' },
  { color:'#4ec9b0', text:'team.deploy(); ✓' },
];

function Card05({ dark }) {
  return (
    <motion.div
      initial={{ opacity:0, y:20 }}
      animate={{ opacity:1, y:0 }}
      transition={{ delay:0.65, duration:0.6, ease:[0.16,1,0.3,1] }}
      whileHover={{ scale:1.02 }}
      style={{ background: dark ? '#1c1c1c' : '#fff', borderRadius:18, padding:'18px 18px', border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #ebebeb', cursor:'pointer', display:'flex', flexDirection:'column', overflow:'hidden', transition:'background 0.3s', height:'100%', width:'100%' }}
    >
      {/* Tag + Arrow */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10 }}>
        <span style={{ fontSize:9, fontWeight:700, letterSpacing:'0.12em', color: dark ? 'rgba(255,255,255,0.4)' : '#999', textTransform:'uppercase' }}>05 · PLATFORMS</span>
        <div style={{ width:28, height:28, borderRadius:'50%', border: dark ? '1px solid rgba(255,255,255,0.15)' : '1px solid #ddd', display:'flex', alignItems:'center', justifyContent:'center' }}>
          <ArrowRight size={12} color={dark ? 'rgba(255,255,255,0.7)' : '#555'} />
        </div>
      </div>
      {/* Big title */}
      <p style={{ fontSize:22, fontWeight:800, color: dark ? '#fff' : '#0a0a0a', margin:'0 0 2px', lineHeight:1.15, transition:'color 0.3s' }}>Dedicated Dev Teams</p>
      {/* Code editor fills space */}
      <div style={{ flex:1, background:'#1e1e1e', borderRadius:12, padding:'11px 13px', margin:'10px 0', display:'flex', flexDirection:'column' }}>
        <div style={{ display:'flex', gap:5, marginBottom:8 }}>
          {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width:8, height:8, borderRadius:'50%', background:c }} />)}
        </div>
        <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
          {CODE_LINES.map((line, i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap:9 }}>
              <span style={{ fontSize:10, color:'rgba(255,255,255,0.2)', fontFamily:'monospace', minWidth:10, textAlign:'right' }}>{i+1}</span>
              <p style={{ fontSize:11, color:line.color, margin:0, fontFamily:'monospace', display:'flex', alignItems:'center' }}>
                {line.text}
                {i === CODE_LINES.length - 1 && (
                  <motion.span animate={{ opacity:[1,0,1] }} transition={{ duration:1, repeat:Infinity, ease:'steps(1)' }} style={{ display:'inline-block', width:6, height:12, background:'#4ec9b0', marginLeft:2, borderRadius:1, verticalAlign:'middle' }} />
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Tech tags at bottom */}
      <p style={{ fontSize:11, color: dark ? 'rgba(255,255,255,0.4)' : '#999', margin:0, letterSpacing:'0.02em' }}>Full-time · Part-time · Augmentation</p>
    </motion.div>
  );
}

/* ── Main Hero ───────────────────────────────────────────────────── */
export default function Hero() {
  const { dark } = useTheme();

  /* Cycling orange word */
  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % CYCLE_WORDS.length), 2800);
    return () => clearInterval(t);
  }, []);

  /* Cycling typewriter for description */
  const typedPhrase = useCyclingTypewriter(TYPEWRITER_PHRASES, 50, 1600);

  return (
    <>
    <section style={{
      position:'relative', height:'100vh', width:'100%',
      background: dark
        ? 'radial-gradient(ellipse 80% 60% at 10% 100%, rgba(255,92,26,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 90% 0%, rgba(255,92,26,0.08) 0%, transparent 50%), #0a0a0a'
        : '#F5F2EE',
      paddingTop:70,
      overflow:'hidden', display:'flex', flexDirection:'column',
      boxSizing:'border-box',
      transition:'background 0.4s ease',
    }}>

      {/* BG dots */}
      {BG_DOTS.map((d,i) => (
        <motion.div key={i}
          animate={{ opacity:[0.2,0.6,0.2] }}
          transition={{ duration:d.dur, repeat:Infinity, delay:i*0.5 }}
          style={{ position:'absolute', top:d.top, left:d.left, width:d.size, height:d.size, borderRadius:'50%', background:'#FF5C1A', pointerEvents:'none' }}
        />
      ))}

      {/* ── Main grid ── */}
      <div className="hero-inner" style={{
        maxWidth:'100%', margin:'0 auto',
        padding:'32px 4% 32px 5%', width:'100%',
        display:'grid', gridTemplateColumns:'1fr 1.3fr',
        gap:36, alignItems:'stretch', flex:1, boxSizing:'border-box',
        overflow:'hidden',
      }}>

        {/* Inject dark class into cards via CSS data attrs */}
        {/* LEFT */}
        <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'space-between', height:'100%' }}>

          {/* TOP — Badge (aligns with bento top edge) */}
          <motion.div
            initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
            transition={{ delay:0.1, duration:0.6 }}
            style={{ display:'flex', alignItems:'center', gap:10 }}
          >
            <div style={{ width:32, height:2, background:'#FF5C1A', borderRadius:2 }} />
            <span style={{ fontSize:10, fontWeight:700, letterSpacing:'0.16em', color:'#888', textTransform:'uppercase' }}>
              EST. 2010 &nbsp;·&nbsp; 30+ EXPERTS &nbsp;·&nbsp; USA · SINGAPORE · INDIA
            </span>
          </motion.div>

          {/* BOTTOM BLOCK — heading + desc + CTAs + trust all together */}
          <div style={{ display:'flex', flexDirection:'column', gap:0 }}>

            {/* Heading */}
            <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.18, duration:0.7, ease:[0.16,1,0.3,1] }}>
              <h1 style={{ fontSize:'clamp(46px,5.4vw,76px)', fontWeight:900, lineHeight:1.04, letterSpacing:'-0.04em', color: dark ? '#fff' : '#0a0a0a', margin:0, whiteSpace:'nowrap', transition:'color 0.3s' }}>Turning</h1>
              <h1 style={{ fontSize:'clamp(46px,5.4vw,76px)', fontWeight:900, lineHeight:1.04, letterSpacing:'-0.04em', color: dark ? '#fff' : '#0a0a0a', margin:'0 0 2px', whiteSpace:'nowrap', transition:'color 0.3s' }}>Ideas into</h1>
              <div style={{ height:'clamp(50px,5.8vw,82px)', overflow:'hidden', marginBottom:20 }}>
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={wordIdx}
                    initial={{ y:'100%' }} animate={{ y:'0%' }} exit={{ y:'-100%' }}
                    transition={{ duration:0.42, ease:[0.16,1,0.3,1] }}
                    style={{ fontSize:'clamp(46px,5.4vw,76px)', fontWeight:900, lineHeight:1.04, letterSpacing:'-0.04em', color:'#FF5C1A', margin:0, whiteSpace:'nowrap' }}
                  >{CYCLE_WORDS[wordIdx]}</motion.h1>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.32, duration:0.6 }}
              style={{ fontSize:14.5, color: dark ? 'rgba(255,255,255,0.6)' : '#666', lineHeight:1.6, maxWidth:460, margin:'0 0 24px', transition:'color 0.3s' }}
            >
              The software partner to{' '}
              <strong style={{ color: dark ? '#fff' : '#1a1a1a', fontWeight:700 }}>500+ enterprises</strong>{' '}
              across <strong style={{ color: dark ? '#fff' : '#1a1a1a', fontWeight:700 }}>17+ countries</strong>{' '}
              and every industry — since 2010. Today we ship
              <br />
              <span style={{ color:'#FF5C1A', fontWeight:600, minHeight:'1.5em', display:'inline-block' }}>
                {typedPhrase}
                <motion.span animate={{ opacity:[1,0] }} transition={{ duration:0.5, repeat:Infinity }}
                  style={{ display:'inline-block', width:2, height:15, background:'#FF5C1A', marginLeft:1, verticalAlign:'middle' }}
                />
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.42, duration:0.6 }}
              style={{ display:'flex', alignItems:'center', gap:20, flexWrap:'wrap', marginBottom:14 }}
            >
              <motion.a href="#contact" whileHover={{ scale:1.03, background:'#e84f12' }} whileTap={{ scale:0.97 }}
                style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#FF5C1A', color:'#fff', fontSize:14, fontWeight:600, padding:'12px 26px', borderRadius:999, textDecoration:'none', transition:'background 0.2s' }}
              >Get a Free AI Consultation <ArrowRight size={15} /></motion.a>
              <motion.a href="#work" whileHover={{ x:4 }}
                style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:14, fontWeight:600, color: dark ? 'rgba(255,255,255,0.85)' : '#1a1a1a', textDecoration:'none', transition:'color 0.3s' }}
              >View our work <ArrowRight size={15} /></motion.a>
            </motion.div>

            {/* Trust */}
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.55 }}
              style={{ display:'flex', flexWrap:'wrap', gap:'4px 14px' }}
            >
              {['✓ Clutch Top Developer','✓ Google Partner','✓ AWS Partner','✓ Shopify Plus Partner','✓ ISO 9001:2015'].map(b => (
                <span key={b} style={{ fontSize:10, fontWeight:700, color: dark ? 'rgba(255,255,255,0.35)' : '#aaa', letterSpacing:'0.1em', textTransform:'uppercase', transition:'color 0.3s' }}>{b}</span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* RIGHT — Bento grid */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }}
          transition={{ duration:0.5, delay:0.25 }}
          style={{
            display:'grid',
            gridTemplateColumns:'1fr 1fr 1fr',
            gridTemplateRows:'1fr 1fr',
            gap:12,
            height:'calc(100vh - 134px)',
            maxHeight:720,
            paddingBottom:10,
            boxSizing:'border-box',
          }}
        >
          {/* 01 — spans 2 cols */}
          <div style={{ gridColumn:'1/3', display:'flex' }}><Card01 /></div>
          {/* 02 — top right */}
          <div style={{ gridColumn:'3', display:'flex' }}><Card02 dark={dark} /></div>
          {/* 03, 04, 05 — bottom row */}
          <div style={{ display:'flex' }}><Card03 dark={dark} /></div>
          <div style={{ display:'flex' }}><Card04 /></div>
          <div style={{ display:'flex' }}><Card05 dark={dark} /></div>
        </motion.div>

      </div>

    </section>

    {/* Stats strip — separate section, shows on first scroll */}
    <div style={{ borderTop:`1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}`, background: dark ? '#0d0d0d' : '#fff', transition:'all 0.3s' }}>
      <div style={{ maxWidth:'100%', margin:'0 auto', padding:'28px 5%', display:'grid', gridTemplateColumns:'repeat(4,1fr)' }}>
        {[
          { num:'500+', label:'01 / PROJECTS COMPLETED' },
          { num:'15+',  label:'02 / YEARS ACTIVE' },
          { num:'30+',  label:'03 / EXPERT ENGINEERS' },
          { num:'17+',  label:'04 / COUNTRIES SERVED' },
        ].map((s,i) => (
          <motion.div key={s.label}
            initial={{ opacity:0, y:10 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ delay:i*0.1 }}
            style={{
              borderLeft: i>0 ? `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}` : 'none',
              paddingLeft: i>0 ? 32 : 0
            }}
          >
            <p style={{ fontSize:36, fontWeight:900, color: dark ? '#fff' : '#0a0a0a', margin:0, letterSpacing:'-0.03em', transition:'color 0.3s' }}>{s.num}</p>
            <p style={{ fontSize:9, fontWeight:800, color: dark ? 'rgba(255,255,255,0.35)' : '#aaa', letterSpacing:'0.13em', textTransform:'uppercase', margin:'4px 0 0', transition:'color 0.3s' }}>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
}
