import { useMemo, useState } from 'react'
import { nalarLevels, nalarLogo, nalarNav, nalarOptions, nalarSequence, nalarSerials, nalarTopics, nalarTypes } from '../nalarData.js'

export default function UploadNalarPage() {
  const [activeNav, setActiveNav] = useState('kelola-materi')
  const [activeSerial, setActiveSerial] = useState('pola')
  const [activeCategory, setActiveCategory] = useState('NALAR')
  const [activeTopic, setActiveTopic] = useState(1)
  const [nalarType, setNalarType] = useState(nalarTypes[0])
  const [level, setLevel] = useState(1)
  const [voiceText, setVoiceText] = useState('Ayo bantu Arkan! Buah apa berikutnya?')
  const [correctKey, setCorrectKey] = useState('A')
  const [guide, setGuide] = useState('Pola AB: Setelah Pisang kembali ke Apel.')
  const [catalogOn, setCatalogOn] = useState(true)
  const [filter, setFilter] = useState('')
  const [saved, setSaved] = useState(0)
  const [kidAnswer, setKidAnswer] = useState(null)
  const topics = useMemo(() => {
    const q = filter.trim().toLowerCase()
    if (!q) return nalarTopics
    return nalarTopics.filter((t) => `${t.title} ${t.level}`.toLowerCase().includes(q))
  }, [filter])
  const activeLevel = nalarLevels.find((l) => l.id === level) ?? nalarLevels[0]
  const activeTitle = (topics.find((t) => t.id === activeTopic) ?? nalarTopics[0]).title
  return (
    <main className="nalar-admin">
      <aside className="nalar-side">
        <div>
          <div className="nalar-brand">
            <img src={nalarLogo} alt="Logo Flashcard Kids" />
            <div className="nalar-brand-text"><b>Flashcard Kids</b><span>Admin Portal</span></div>
          </div>
          <nav className="nalar-nav">
            {nalarNav.map((item, i) => (item.group ? <div key={i} className="nalar-nav-group">{item.group}</div> : (
              <button key={item.id} type="button" onClick={() => setActiveNav(item.id)} className={activeNav === item.id ? 'nalar-nav-item active' : 'nalar-nav-item'}>
                <span className="nalar-nav-main"><span className="material-symbols-outlined">{item.icon}</span><span>{item.label}</span></span>
                {item.badge ? <span className="nalar-nav-badge">{item.badge}</span> : null}
              </button>
            )))}
          </nav>
        </div>
        <div className="nalar-server">
          <div className="nalar-server-row"><span>Status Server</span><span className="nalar-dot" /></div>
          <p>Payment Gateway Sync</p>
          <div className="nalar-server-bar"><div /></div>
        </div>
      </aside>
      <div className="nalar-main">
        <header className="nalar-topbar">
          <div className="nalar-search">
            <span className="nalar-crumb"><span className="material-symbols-outlined">home</span><span>/</span><b>Flashcard Admin</b></span>
            <div className="nalar-search-box"><span className="material-symbols-outlined">search</span><input type="text" placeholder="Cari pelanggan, transaksi ID, kartu..." /></div>
          </div>
          <div className="nalar-user">
            <span className="nalar-online"><span className="nalar-dot" />Sistem QRIS/VA Online</span>
            <button type="button" className="nalar-icon" aria-label="Notifikasi"><span className="material-symbols-outlined">notifications</span></button>
            <div className="nalar-profile"><span className="nalar-avatar"><span className="material-symbols-outlined">person</span></span><span className="nalar-profile-text"><b>Budi Santoso</b><span>Super Admin</span></span><span className="material-symbols-outlined">expand_more</span></div>
          </div>
        </header>
        <div className="nalar-body">
          <div className="nalar-hero">
            <div>
              <span className="nalar-kicker"><span className="material-symbols-outlined">extension</span>Flashcard Content Studio • Nalar Logic Engine</span>
              <h1>Kelola dan Buat Materi Kartu NALAR</h1>
              <p>Studio modul logika, pola visual, dan teka-teki anak. Hierarki: Kategori (<b>NALAR Visual</b>) ke Serial Pola ke Kartu Belajar ke Topik Soal.</p>
            </div>
            <div className="nalar-hero-actions">
              <button type="button" className="nalar-btn ghost"><span className="material-symbols-outlined">add_photo_alternate</span>+ Tambah Topik Pola</button>
              <button type="button" className="nalar-btn orange"><span className="material-symbols-outlined">add_circle</span>+ Buat Kartu Nalar Baru</button>
            </div>
          </div>
          <section className="nalar-card">
            <div className="nalar-cat-row">
              <div className="nalar-cat-switch">
                <button type="button" onClick={() => setActiveCategory('SIMAK')} className={activeCategory === 'SIMAK' ? 'on' : ''}><span className="material-symbols-outlined">headphones</span>SIMAK<span className="nalar-count">12 Serial</span></button>
                <button type="button" onClick={() => setActiveCategory('NALAR')} className={activeCategory === 'NALAR' ? 'on green' : ''}><span className="material-symbols-outlined">psychology</span>NALAR<span className="nalar-count light">8 Serial Aktif</span></button>
              </div>
              <div className="nalar-engine"><span className="nalar-ready"><span className="nalar-dot green" />Engine: Ready</span><span className="nalar-rate"><span className="material-symbols-outlined">star</span><b>4.95/5</b> (1.240 Skor)</span></div>
            </div>
            <div className="nalar-serial-row">
              <span className="nalar-serial-label">Pilih Serial:</span>
              <div className="nalar-serial-list">
                {nalarSerials.map((s) => (<button key={s.id} type="button" onClick={() => setActiveSerial(s.id)} className={activeSerial === s.id ? 'nalar-chip active' : 'nalar-chip'}><span className="material-symbols-outlined">{s.icon}</span>{s.label}<span className="nalar-chip-count">{s.count}</span></button>))}
              </div>
            </div>
          </section>
          <div className="nalar-grid">
            <div className="nalar-left">
              <section className="nalar-card">
                <div className="nalar-deck">
                  <div className="nalar-cover"><span>🍎🍌</span><b>Pola AB</b></div>
                  <div className="nalar-deck-text">
                    <div className="nalar-deck-tags"><span className="nalar-ready-pill"><span className="nalar-dot green" />Siap Rilis</span><span>ID: NLR-POLA-01</span></div>
                    <h2>Pola Bentuk dan Warna Ceria</h2>
                    <p>Observasi, urutan, dan prediksi pola visual usia emas.</p>
                  </div>
                  <div className="nalar-toggle"><span><b>Katalog App</b><span className={catalogOn ? 'on' : ''}>{catalogOn ? 'Aktif' : 'Mati'}</span></span>
                    <button type="button" role="switch" aria-checked={catalogOn} onClick={() => setCatalogOn((v) => !v)} className={catalogOn ? 'switch on' : 'switch'}><span /></button>
                  </div>
                </div>
                <div className="nalar-stats">
                  <div><small>Harga</small><b className="green">Rp 29.000</b><span className="green">Termasuk Audio</span></div>
                  <div><small>Usia</small><b>4 - 7 Th</b><span>PAUD dan TK B</span></div>
                  <div><small>Gameplay</small><b>Pola AB</b><span>Pattern Recognition</span></div>
                  <div><small>Soal</small><b>20 Modul</b><span className="green">Siap Rilis</span></div>
                </div>
              </section>
              <section className="nalar-card">
                <div className="nalar-topics-head">
                  <div><h3>Daftar Topik <span className="nalar-ready-tag">20 dari 20 Siap</span></h3><p>Klik baris untuk membuka editor modul.</p></div>
                  <div className="nalar-filter"><span className="material-symbols-outlined">search</span><input value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter soal..." /></div>
                </div>
                <div className="nalar-topics">
                  {topics.map((t) => (
                    <button key={t.id} type="button" onClick={() => setActiveTopic(t.id)} className={activeTopic === t.id ? 'nalar-topic editing' : 'nalar-topic'}>
                      <span className="nalar-no">{t.no}</span>
                      <span className="nalar-topic-text"><span className="nalar-topic-title"><b>{t.title}</b><span className="nalar-level">{t.level}</span></span><span className="nalar-pattern">{t.pattern}</span></span>
                      <span className="nalar-topic-action">{activeTopic === t.id ? 'Aktif' : 'Edit'}</span>
                    </button>
                  ))}
                </div>
                <div className="nalar-integrity"><span className="nalar-check">✓</span><span><b>Aset Lengkap (20/20)</b><small>SVG/PNG dan kunci tervalidasi.</small></span><span className="nalar-publish-tag">Siap Publikasi</span></div>
              </section>
            </div>
            <div className="nalar-right">
              <section className="nalar-card">
                <div className="nalar-editor-head"><div><span className="nalar-kicker small"><span className="material-symbols-outlined">psychology</span>Editor Modul Nalar</span><h3>Topik {activeTopic}: {activeTitle}</h3></div><span className="nalar-pill">Topik {activeTopic}/20</span></div>
                <div className="nalar-field-grid">
                  <label>Tipe Teka-Teki<select value={nalarType} onChange={(e) => setNalarType(e.target.value)}>{nalarTypes.map((t) => (<option key={t} value={t}>{t}</option>))}</select></label>
                  <div><span className="nalar-label-row">Level<b>{activeLevel.desc}</b></span>
                    <div className="nalar-levels">{nalarLevels.map((l) => (<button key={l.id} type="button" onClick={() => setLevel(l.id)} className={level === l.id ? 'on' : ''}><b>{l.code}</b><span>{l.name}</span></button>))}</div>
                  </div>
                </div>
                <label className="nalar-voice"><span className="nalar-label-row">Instruksi Suara<b>Kak Nia Voice</b></span><span className="nalar-voice-row"><input value={voiceText} onChange={(e) => setVoiceText(e.target.value)} /><button type="button" aria-label="Preview"><span className="material-symbols-outlined">play_arrow</span></button></span></label>
                <div className="nalar-sequence"><b>Sequence Builder: 5 Slot</b><p>Susun kartu bergambar sebelum tanda tanya.</p>
                  <div className="nalar-slots">{nalarSequence.map((s, i) => (<div key={i} className="nalar-slot"><span>{s.emoji}</span><b>{s.label}</b><small>{s.slot}</small></div>))}<div className="nalar-slot target"><span>?</span><b>Target</b><small>Tanya</small></div></div>
                </div>
                <div><span className="nalar-label-row">Jawaban (4 Pilihan)<b>Pilih 1 Kunci</b></span>
                  <div className="nalar-options">{nalarOptions.map((o) => (<label key={o.id} className={correctKey === o.id ? 'nalar-option correct' : 'nalar-option'}><input type="radio" name="nalar_key" checked={correctKey === o.id} onChange={() => setCorrectKey(o.id)} /><span className="nalar-emoji">{o.emoji}</span><span><b>Opsi {o.id}</b><small>{o.title}</small></span>{correctKey === o.id ? <span className="nalar-key">Kunci</span> : null}</label>))}</div>
                </div>
                <label className="nalar-guide">Panduan Orang Tua<textarea value={guide} onChange={(e) => setGuide(e.target.value)} rows={2} /></label>
                <div className="nalar-editor-actions"><button type="button" className="nalar-btn text">Reset</button><button type="button" className="nalar-btn green" onClick={() => setSaved((v) => v + 1)}><span className="material-symbols-outlined">check_circle</span>Simpan{saved > 0 ? ` (${saved})` : ''}</button></div>
              </section>
              <section className="nalar-card">
                <div className="nalar-sim-head"><b><span className="material-symbols-outlined">smartphone</span>Simulasi Layar Anak</b><span>Mode 1:1</span></div>
                <div className="nalar-phone">
                  <div className="nalar-phone-q"><span>🦉</span><p>{voiceText}</p></div>
                  <div className="nalar-phone-seq">{nalarSequence.map((s, i) => (<span key={i}>{s.emoji}</span>))}<span className="target">?</span></div>
                  <small className="nalar-phone-hint">Ketuk Jawaban:</small>
                  <div className="nalar-phone-options">{nalarOptions.map((o) => (<button key={o.id} type="button" onClick={() => setKidAnswer(o.id)} className={kidAnswer === o.id ? (o.id === correctKey ? 'right' : 'wrong') : ''}><span>{o.emoji}</span><b>{o.title.split(' ')[0]}</b></button>))}</div>
                  {kidAnswer === correctKey && kidAnswer !== null ? <p className="nalar-feedback ok">Benar! {guide}</p> : null}
                  {kidAnswer !== null && kidAnswer !== correctKey ? <p className="nalar-feedback bad">Belum tepat. Kunci: Opsi {correctKey}.</p> : null}
                </div>
              </section>
            </div>
          </div>
          <div className="nalar-sticky">
            <div><b>Draf NALAR: Pola Bentuk dan Warna Ceria</b><span className="green">Tersimpan Otomatis{saved > 0 ? ` • ${saved}x` : ''}</span><small>20 Modul • 80 Aset • Kategori NALAR</small></div>
            <div className="nalar-sticky-actions"><button type="button" className="nalar-btn ghost" onClick={() => setSaved((v) => v + 1)}>Simpan Draf</button><button type="button" className="nalar-btn green"><span className="material-symbols-outlined">rocket_launch</span>Publikasikan</button></div>
          </div>
        </div>
      </div>
    </main>
  )
}
