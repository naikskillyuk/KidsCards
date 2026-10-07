import { useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { rewardData } from '../rewardData.js'

const burstColors = ['#4d96ff', '#93f59c', '#ffba20', '#ffdea8']

function makeBurst(id) {
  return Array.from({ length: 12 }, (_, i) => ({
    id: `${id}-${i}`,
    color: burstColors[(id + i) % burstColors.length],
    left: 50 + (Math.random() * 20 - 10),
    top: 22 + (Math.random() * 10 - 5),
  }))
}

export default function RewardPage() {
  const navigate = useNavigate()
  const [bursts, setBursts] = useState([])
  const [cheering, setCheering] = useState(false)

  const cheer = useCallback(() => {
    const id = Date.now()
    setBursts((current) => [...current, ...makeBurst(id)])
    setCheering(true)
    window.setTimeout(() => setCheering(false), 320)
    window.setTimeout(() => {
      setBursts((current) => current.filter((p) => !String(p.id).startsWith(String(id))))
    }, 900)
  }, [])

  return (
    <main className="page reward-page">
      <div className="reward-wrap">
        <div className="reward-confetti" aria-hidden="true">
          <svg viewBox="0 0 360 320" preserveAspectRatio="xMidYMin slice" className="reward-confetti-svg">
            <defs>
              <radialGradient cx="50%" cy="30%" r="50%" id="reward-sunburst">
                <stop offset="0%" stopColor="#ffdea8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect fill="url(#reward-sunburst)" height="320" width="360" />
            <circle cx="54" cy="38" r="8" fill="#4d96ff" opacity="0.6" />
            <circle cx="306" cy="58" r="6" fill="#93f59c" opacity="0.7" />
            <circle cx="281" cy="122" r="10" fill="#ffba20" opacity="0.5" />
            <circle cx="79" cy="134" r="5" fill="#4d96ff" opacity="0.4" />
          </svg>
          {bursts.map((p) => (
            <span key={p.id} className="reward-particle" style={{ left: `${p.left}%`, top: `${p.top}%`, backgroundColor: p.color }} />
          ))}
        </div>
        <div className="reward-body">
          <div className="reward-crumb">
            <span className="reward-crumb-left">
              <span className="material-symbols-outlined">menu_book</span>
              <span className="reward-crumb-text">{rewardData.breadcrumbCategory}</span>
            </span>
            <span className="reward-crumb-done">{rewardData.topicDoneLabel}</span>
          </div>
          <section className="reward-hero">
            <div className="reward-mascot">
              <div className="reward-glow" aria-hidden="true" />
              <div className="reward-mascot-frame">
                <img src={rewardData.heroImage} alt={rewardData.mascotAlt} />
              </div>
              <div className="reward-perfect">
                <span className="material-symbols-outlined">verified</span>
                <span>100% Benar!</span>
              </div>
              <button type="button" aria-label="Putar Suara Tepuk Tangan" onClick={cheer} className={cheering ? 'reward-cheer tilted' : 'reward-cheer'}>
                <span className="material-symbols-outlined">celebration</span>
              </button>
            </div>
            <div className="reward-topic-pill">
              <span className="material-symbols-outlined">stars</span>
              <span>{rewardData.topicTag}</span>
            </div>
            <h1 className="reward-title">Luar Biasa, <span>{rewardData.childName}!</span> 🎉</h1>
            <p className="reward-sub">Kamu telah tuntas menyimak narasi &amp; menjawab 4/4 kuis di <strong>{rewardData.topicShort}</strong></p>
          </section>
          <section className="reward-stars">
            <div className="reward-stars-left">
              <span className="reward-stars-ico"><span className="material-symbols-outlined">hotel_class</span></span>
              <span className="reward-stars-text"><small>Bintang Terkumpul</small>
                <b>{rewardData.starsBefore} <em>→ {rewardData.starsAfter} Bintang</em></b>
              </span>
            </div>
            <span className="reward-stars-new"><span className="material-symbols-outlined">star</span>+{rewardData.starsNew} Baru!</span>
          </section>
          <section className="reward-card">
            <div className="reward-card-head">
              <span className="reward-card-title"><span className="material-symbols-outlined">military_tech</span>Hasil Belajar Kartu</span>
              <span className="reward-card-tag">Sempurna</span>
            </div>
            <div className="reward-grid">
              <div className="reward-badge">
                <span className="reward-badge-ico"><span className="material-symbols-outlined">water_drop</span></span>
                <span className="reward-badge-text"><small>Lencana Baru Terbuka</small><b>{rewardData.badgeTitle}</b><span>{rewardData.badgeSub}</span></span>
              </div>
              <div className="reward-metric">
                <span className="reward-metric-head green"><span className="material-symbols-outlined">task_alt</span>Kuis Selesai</span>
                <b>{rewardData.quizDone}</b><span className="reward-metric-green">{rewardData.quizAccuracy}</span>
              </div>
              <div className="reward-metric">
                <span className="reward-metric-head gold"><span className="material-symbols-outlined">bolt</span>Energi Pintar</span>
                <b>{rewardData.xp}</b><span className="reward-metric-muted">{rewardData.xpLevel}</span>
              </div>
              <div className="reward-duration">
                <span className="reward-duration-left"><span className="material-symbols-outlined">schedule</span>Waktu Menyimak &amp; Menjawab</span>
                <b>{rewardData.duration}</b>
              </div>
            </div>
          </section>
          <section className="reward-hikmah">
            <span className="reward-hikmah-ico"><span className="material-symbols-outlined">favorite</span></span>
            <span className="reward-hikmah-text"><b>Hikmah Kisah Hari Ini</b><span>{rewardData.hikmah}</span></span>
          </section>
          <section className="reward-actions">
            <button type="button" className="reward-next" onClick={() => navigate('/depan-kartu')}>
              <span>{rewardData.nextTopic}</span><span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <div className="reward-row">
              <button type="button" className="reward-secondary" onClick={() => navigate('/belakang-kartu')}>
                <span className="material-symbols-outlined">replay</span><span>Ulangi Topik Ini</span>
              </button>
              <Link to="/depan-kartu" className="reward-secondary as-link">
                <span className="material-symbols-outlined">view_list</span><span>Daftar Topik Kartu</span>
              </Link>
            </div>
            <p className="reward-note"><span className="material-symbols-outlined">verified_user</span>Progres tersimpan otomatis di Dashboard Orang Tua</p>
          </section>
        </div>
      </div>
    </main>
  )
}
