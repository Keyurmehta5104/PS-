import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ORANGE = '#FF8048';

const BOT_GREETING = {
  id: 1,
  from: 'bot',
  sender: 'PS SUPPORT',
  time: (() => { const d = new Date(); return `${d.getHours()}:${String(d.getMinutes()).padStart(2,'0')}`; })(),
  text: '👋 Hey there! I\'m the PS Support assistant. Tell me about your project and our team will get back to you shortly.',
};

const AUTO_REPLY = '✅ Thanks for reaching out! Our team will respond within a few hours. You can also reach us at enquiry@professionalsofttech.com';

function Avatar({ initials, size = 32, bg = '#1a1816', color = '#fff', fontSize = 11 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: bg, color, fontSize,
      fontWeight: 800, display: 'flex', alignItems: 'center',
      justifyContent: 'center', flexShrink: 0, letterSpacing: '-0.02em',
    }}>
      {initials}
    </div>
  );
}

export default function ChatWidget() {
  const [state, setState] = useState('hidden'); // 'hidden' | 'widget' | 'open'
  const [messages, setMessages] = useState([BOT_GREETING]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setState('widget'), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (state === 'open') bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, state]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    setMessages(prev => [...prev, { id: Date.now(), from: 'user', text, time }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        from: 'bot',
        sender: 'PS SUPPORT',
        time,
        text: AUTO_REPLY,
      }]);
    }, 1800);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <>
      {/* ── Floating widget card (closed state) ── */}
      <AnimatePresence>
        {state === 'widget' && (
          <motion.div
            key="widget"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'fixed', bottom: 92, right: 24, zIndex: 997, display: 'flex', alignItems: 'center' }}
          >
            {/* Pill card */}
            <motion.div
              onClick={() => setState('open')}
              whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(0,0,0,0.18)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: '#fff', borderRadius: 50,
                padding: '10px 16px 10px 10px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                cursor: 'pointer', border: '1px solid rgba(0,0,0,0.06)',
              }}
            >
              {/* Left icon circle */}
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: '#111', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img src="/ps-logo.png" alt="PS" style={{ width: 28, height: 28, objectFit: 'contain' }} />
              </div>

              {/* Text */}
              <div>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#111', whiteSpace: 'nowrap' }}>
                  Have a project to discuss?
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 3 }}>
                  <span style={{ position: 'relative', display: 'inline-flex', width: 7, height: 7, flexShrink: 0 }}>
                    <span style={{
                      position: 'absolute', inset: 0, borderRadius: '50%',
                      background: '#22c55e', opacity: 0.45,
                      animation: 'chatPing 1.5s cubic-bezier(0,0,0.2,1) infinite',
                    }} />
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'block', position: 'relative' }} />
                  </span>
                  <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3a5a3a' }}>
                    Live Support Available
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: avatar with arrow badge */}
            <div style={{ position: 'relative', marginLeft: -10, flexShrink: 0 }}>
              <div
                onClick={() => setState('open')}
                style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: ORANGE, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer',
                  border: '3px solid #fff',
                  boxShadow: '0 4px 16px rgba(255,128,72,0.35)',
                  fontSize: 14, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em',
                }}
              >
                PS
              </div>
              {/* Arrow badge */}
              <div
                onClick={() => setState('open')}
                style={{
                  position: 'absolute', top: -2, right: -2,
                  width: 18, height: 18, borderRadius: '50%',
                  background: '#111', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', cursor: 'pointer',
                  border: '2px solid #fff',
                }}
              >
                <i className="fa-solid fa-arrow-up-right" style={{ fontSize: 7, color: '#fff' }} />
              </div>
            </div>

            {/* Dismiss X */}
            <button
              onClick={(e) => { e.stopPropagation(); setState('hidden'); }}
              aria-label="Close"
              style={{
                position: 'absolute', top: -8, left: 4,
                width: 20, height: 20, borderRadius: '50%',
                background: '#555', border: '2px solid #fff',
                color: '#fff', fontSize: 9, display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', lineHeight: 1,
              }}
            >✕</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Full chat panel (open state) ── */}
      <AnimatePresence>
        {state === 'open' && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed', bottom: 92, right: 24, zIndex: 997,
              width: 360, borderRadius: 16, overflow: 'hidden',
              boxShadow: '0 16px 60px rgba(0,0,0,0.18)',
              display: 'flex', flexDirection: 'column',
              background: '#f5f2ec',
              border: '1px solid rgba(0,0,0,0.08)',
              maxHeight: '75vh',
            }}
          >
            {/* Header */}
            <div style={{ background: '#fff', padding: '16px 16px 14px', borderBottom: '1px solid #eae6df' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ margin: 0, fontSize: 9.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', marginBottom: 4 }}>
                    Chat · With a Human
                  </p>
                  <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: '#111', letterSpacing: '-0.03em' }}>
                    About your Project
                  </h3>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 2 }}>
                  <button
                    onClick={() => setState('widget')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#888', fontSize: 14, padding: 4 }}
                    aria-label="Minimise"
                  >
                    <i className="fa-solid fa-down-left-and-up-right-to-center" style={{ fontSize: 13 }} />
                  </button>
                  <button
                    onClick={() => setState('widget')}
                    style={{
                      width: 32, height: 32, borderRadius: 8, background: ORANGE,
                      border: 'none', cursor: 'pointer', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                    aria-label="Close"
                  >
                    <i className="fa-solid fa-xmark" style={{ fontSize: 14 }} />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: 12 }}>

              {/* Date label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ flex: 1, height: 1, background: '#ddd' }} />
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa' }}>Today</span>
                <div style={{ flex: 1, height: 1, background: '#ddd' }} />
              </div>

              {messages.map((msg) => (
                <div key={msg.id}>
                  {msg.from === 'bot' ? (
                    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <Avatar initials="PS" size={30} bg="#111" fontSize={9} />
                      <div>
                        <p style={{ margin: 0, fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', color: '#888', marginBottom: 5 }}>
                          {msg.sender} &nbsp;{msg.time}
                        </p>
                        <div style={{
                          background: '#fff', borderRadius: '4px 14px 14px 14px',
                          padding: '10px 13px', fontSize: 13, color: '#222',
                          lineHeight: 1.5, maxWidth: 260,
                          boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                          borderLeft: `3px solid ${ORANGE}`,
                        }}>
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <div style={{ maxWidth: 240 }}>
                        <p style={{ margin: 0, fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', color: '#888', marginBottom: 5, textAlign: 'right' }}>
                          YOU &nbsp;{msg.time}
                        </p>
                        <div style={{
                          background: '#111', borderRadius: '14px 4px 14px 14px',
                          padding: '10px 13px', fontSize: 13, color: '#fff', lineHeight: 1.5,
                        }}>
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <Avatar initials="PS" size={30} bg="#111" fontSize={9} />
                  <div style={{
                    background: '#fff', borderRadius: '4px 14px 14px 14px',
                    padding: '12px 16px', display: 'flex', gap: 4, alignItems: 'center',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                  }}>
                    {[0, 1, 2].map(i => (
                      <span key={i} style={{
                        width: 6, height: 6, borderRadius: '50%', background: '#aaa',
                        display: 'block',
                        animation: `chatDot 1.2s ease-in-out ${i * 0.2}s infinite`,
                      }} />
                    ))}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input area */}
            <div style={{ background: '#fff', borderTop: '1px solid #eae6df', padding: '10px 12px' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: '#f5f2ec', borderRadius: 30,
                padding: '8px 8px 8px 14px', border: '1px solid #e5e0d8',
              }}>
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Write a message..."
                  style={{
                    flex: 1, border: 'none', background: 'none', outline: 'none',
                    fontSize: 13, color: '#222',
                  }}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim()}
                  style={{
                    width: 34, height: 34, borderRadius: '50%',
                    background: input.trim() ? '#111' : '#ddd',
                    border: 'none', cursor: input.trim() ? 'pointer' : 'default',
                    color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.2s',
                    flexShrink: 0,
                  }}
                  aria-label="Send"
                >
                  <i className="fa-solid fa-paper-plane" style={{ fontSize: 12 }} />
                </button>
              </div>
            </div>

            {/* Footer bar */}
            <div style={{
              background: '#fff', borderTop: '1px solid #eae6df',
              padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <span style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#aaa' }}>
                100% Secure · NDA Ready
              </span>
              <i className="fa-solid fa-lock" style={{ fontSize: 11, color: '#bbb' }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes chatPing {
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes chatDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
      `}</style>
    </>
  );
}
