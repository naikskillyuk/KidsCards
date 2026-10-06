import { useState } from 'react'

const letters = ['A', 'B', 'C']

export default function ActiveQuestion({ q, done, onToggleDone }) {
  const [mode, setMode] = useState(null)
  const [picked, setPicked] = useState(null)
  const [manualOk, setManualOk] = useState(false)
  const [openKey, setOpenKey] = useState(false)

  return (
    <div className="q-item" style={{ background: 'rgba(214,227,255,.6)', boxShadow: '0 1px 4px rgba(0,0,0,.08)' }}>
      <div className="q-head">
        <div className="q-head-left">
          <span className={done ? 'q-badge' : 'q-badge active'}>
            {done ? <span className="material-symbols-outlined" style={{ fontSize: 18 }}>check</span> : q.n}
          </span>
          <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span className="q-live">{done ? 'Selesai ✅' : 'Belum Terjawab'}</span>
            <p className="q-text">{q.text}</p>
          </div>
        </div>
        <button type="button" className="q-audio" aria-label={`Dengarkan pertanyaan ke-${q.n}`}>
          <span className="material-symbols-outlined" style={{ fontSize: 26 }}>volume_up</span>
        </button>
      </div>
      <div className="q-body">
        <div className="mode-tab">
          <button type="button" aria-pressed={mode === 'pg'} className={mode === 'pg' ? 'mode-btn on' : 'mode-btn'} onClick={() => setMode(mode === 'pg' ? null : 'pg')}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>checklist</span>Pilihan Ganda
          </button>
          <button type="button" aria-pressed={mode === 'manual'} className={mode === 'manual' ? 'mode-btn on' : 'mode-btn'} onClick={() => setMode(mode === 'manual' ? null : 'manual')}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>record_voice_over</span>Manual
          </button>
        </div>
        {mode === 'pg' ? (
          <div className="opt-list">
            <p className="manual-hint">Pilih salah satu jawaban bersama si kecil:</p>
            {q.options.map((opt, i) => (
              <button key={opt} type="button" onClick={() => setPicked(i)} className={picked === i ? 'opt-btn' : 'opt-btn'} style={picked === i ? { borderColor: 'var(--secondary)', background: 'rgba(147,245,156,.25)' } : undefined}>
                <span className="left">
                  <span className="opt-letter">{letters[i]}</span>
                  <span style={{ fontSize: '1rem', color: 'var(--on-surface)' }}>{opt}</span>
                </span>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: picked === i ? 'var(--secondary)' : 'var(--outline-variant)' }}>
                  {picked === i ? 'check_circle' : 'radio_button_unchecked'}
                </span>
              </button>
            ))}
          </div>
        ) : mode === 'manual' ? (
          <div className="manual-box">
            <p className="manual-hint">Ajak anak menjawab langsung dengan kata-katanya sendiri, lalu pendamping menilai:</p>
            <div className="manual-grid">
              <button type="button" className="manual-ok" onClick={() => setManualOk(true)}><span className="material-symbols-outlined" style={{ fontSize: 20 }}>check_circle</span>Jawaban Benar</button>
              <button type="button" className="manual-retry" onClick={() => setManualOk(false)}><span className="material-symbols-outlined" style={{ fontSize: 20 }}>cancel</span>Perlu Ulang</button>
            </div>
            <p className={manualOk ? 'manual-feedback show' : 'manual-feedback'}>Jawaban dinilai Benar! Siap lanjut ke tahap akhir.</p>
          </div>
        ) : null}
        {mode && (
          <>
            <button type="button" className="key-toggle" style={{ padding: 12, fontSize: '.875rem' }} onClick={() => setOpenKey((v) => !v)}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: 'var(--primary)' }}>{openKey ? 'visibility_off' : 'visibility'}</span>
                {openKey ? 'Sembunyikan Kunci Jawaban' : 'Buka Kunci Jawaban Pendamping'}
              </span>
              <span className="material-symbols-outlined" style={{ fontSize: 20, transform: openKey ? 'rotate(180deg)' : 'none' }}>expand_more</span>
            </button>
            <div className={openKey ? 'key-body guide show' : 'key-body guide'}>
              <div className="key-head">
                <span style={{ fontWeight: 700, color: 'var(--primary)' }}>Panduan Acuan Jawaban:</span>
                <span className="guide-tag">Untuk Orang Tua/Guru</span>
              </div>
              <p className="key-text" style={{ fontSize: '1rem', lineHeight: 1.6 }}>&ldquo;{q.guide || q.key}&rdquo;</p>
            </div>
            <button type="button" onClick={onToggleDone} className={done ? 'complete-btn done' : 'complete-btn'}>
              <span className="material-symbols-outlined" style={{ fontSize: 22 }}>check_circle</span>
              {done ? 'Sudah Selesai Didiskusikan ✅' : 'Tandai Sudah Terjawab (Centang)'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
