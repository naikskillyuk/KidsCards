import { useState } from 'react'

const letters = ['A', 'B', 'C']

export default function DoneQuestion({ q }) {
  const [mode, setMode] = useState(null)
  const [openKey, setOpenKey] = useState(false)

  return (
    <div className="q-item">
      <div className="q-head">
        <div className="q-head-left">
          <span className="q-badge"><span className="material-symbols-outlined" style={{ fontSize: 18 }}>check</span></span>
          <div style={{ minWidth: 0 }}>
            <span className="q-done"><span className="material-symbols-outlined" style={{ fontSize: 14 }}>verified</span>Selesai Terjawab</span>
            <p className="q-text">{q.n}. {q.text}</p>
          </div>
        </div>
        <button type="button" className="q-audio" aria-label={`Putar audio pertanyaan ${q.n}`}>
          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>volume_up</span>
        </button>
      </div>
      <div className="q-body">
        <div className="mode-tab">
          <button type="button" aria-pressed={mode === 'pg'} className={mode === 'pg' ? 'mode-btn on' : 'mode-btn'} onClick={() => setMode(mode === 'pg' ? null : 'pg')}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>checklist</span>Pilihan Ganda
          </button>
          <button type="button" aria-pressed={mode === 'manual'} className={mode === 'manual' ? 'mode-btn on' : 'mode-btn'} onClick={() => setMode(mode === 'manual' ? null : 'manual')}>
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>record_voice_over</span>Manual
          </button>
        </div>
        {mode === 'pg' ? (
          <div className="opt-list">
            {q.options.map((opt, i) => (
              <div key={opt} className={i === q.answer ? 'opt-row right' : 'opt-row'}>
                <span className="left">
                  <span className="opt-letter">{letters[i]}</span>{opt}
                </span>
                {i === q.answer && <span className="material-symbols-outlined" style={{ fontSize: 20, color: 'var(--secondary)' }}>check_circle</span>}
              </div>
            ))}
          </div>
        ) : mode === 'manual' ? (
          <div className="manual-box">
            <p className="manual-hint">Tanggapan lisan anak dinilai langsung oleh pendamping:</p>
            <div className="manual-grid">
              <button type="button" className="manual-ok"><span className="material-symbols-outlined" style={{ fontSize: 18 }}>check_circle</span>Jawaban Benar</button>
              <button type="button" className="manual-retry"><span className="material-symbols-outlined" style={{ fontSize: 18 }}>replay</span>Salah / Coba Lagi</button>
            </div>
          </div>
        ) : null}
        {mode && (
          <>
            <button type="button" className="key-toggle" onClick={() => setOpenKey((v) => !v)}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--primary)' }}>visibility</span>
                {openKey ? 'Sembunyikan Kunci Jawaban' : 'Buka Kunci Jawaban'}
              </span>
              <span className="material-symbols-outlined" style={{ fontSize: 18, transform: openKey ? 'rotate(180deg)' : 'none' }}>expand_more</span>
            </button>
            <div className={openKey ? 'key-body show' : 'key-body'}>
              <div className="key-head">
                <span className="key-label">Kunci Jawaban:</span>
                {q.n === 1 && <span className="q-done"><span className="material-symbols-outlined" style={{ fontSize: 14 }}>star</span>Tepat Sekali!</span>}
              </div>
              <p className="key-text">{q.key}</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
