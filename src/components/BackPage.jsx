import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { quizData } from '../quizData.js'
import { readQuizSession, saveQuizSession } from '../quizSession.js'
import ActiveQuestion from './ActiveQuestion.jsx'

const questions = [...quizData.questions, { ...quizData.q4, n: 4 }]

export default function BackPage() {
  const navigate = useNavigate()
  const [completedQuestions, setCompletedQuestions] = useState(() => readQuizSession()?.completedQuestions ?? [])
  const completedCount = completedQuestions.length
  const allAnswered = completedCount === questions.length
  const pct = (completedCount / questions.length) * 100
  const label = allAnswered
    ? '4 dari 4 Terjawab ✨ (Lengkap)'
    : `Pertanyaan Kuis ${completedCount} dari 4 Terjawab ✨`

  const toggleQuestionDone = (questionNumber) => {
    setCompletedQuestions((current) => current.includes(questionNumber)
      ? current.filter((number) => number !== questionNumber)
      : [...current, questionNumber])
  }

  const stopAndContinueLater = () => {
    saveQuizSession({ completedQuestions, paused: true })
    navigate('/depan-kartu')
  }

  return (
    <main className="page" style={{ background: 'var(--surface)', paddingTop: 80 }}>
      <div className="back-wrap">
        <div className="back-status">
          <div className="back-status-top">
            <div className="back-topic">
              <span className="cat-pill"><span className="material-symbols-outlined" style={{ fontSize: 16 }}>hearing</span>Kategori SIMAK</span>
              <span className="back-topic-text">{quizData.topic}</span>
            </div>
            <div className="star-row">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="material-symbols-outlined" style={{ fontSize: 16, color: i < quizData.stars ? 'var(--tertiary-fixed-dim)' : 'var(--outline-variant)' }}>star</span>
              ))}
            </div>
          </div>
          <div className="session-pill">
            <div className="session-left">
              <span className="open-tag"><span className="material-symbols-outlined" style={{ fontSize: 16 }}>lock_open</span>Kartu Terbuka</span>
              <span className="owned-tag"><span className="material-symbols-outlined" style={{ fontSize: 16 }}>verified</span>Milik Kamu</span>
            </div>
            <span className="saved-tag"><span className="material-symbols-outlined" style={{ fontSize: 16, color: 'var(--primary)' }}>cloud_done</span>Topik 8 / 25</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingTop: 4 }}>
            <div className="discuss-head">
              <span className="left"><span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--secondary)' }}>verified</span>Kemajuan Diskusi</span>
              <span className="right">{label}</span>
            </div>
            <div className="discuss-bar"><div className="discuss-fill" style={{ width: `${pct}%` }} /></div>
          </div>
        </div>
        <div className="quiz-card">
          <div className="quiz-banner">
            <div className="quiz-banner-left">
              <span className="quiz-ico"><span className="material-symbols-outlined" style={{ fontSize: 20 }}>quiz</span></span>
              <div style={{ minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span className="quiz-title">Sisi Belakang Kartu</span>
                  <span className="open-mini">Kartu Terbuka</span>
                </div>
                <div className="quiz-sub">{quizData.subtitle}</div>
              </div>
            </div>
            <Link to="/depan-kartu" className="flip-back">
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>flip</span>Lihat Narasi
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {questions.map((q) => (
              <ActiveQuestion
                key={q.n}
                q={q}
                done={completedQuestions.includes(q.n)}
                onToggleDone={() => toggleQuestionDone(q.n)}
              />
            ))}
          </div>
        </div>
        <div className="tips-box">
          <span className="ico"><span className="material-symbols-outlined" style={{ fontSize: 22 }}>lightbulb</span></span>
          <div style={{ minWidth: 0 }}>
            <h4>Tips Diskusi Pendamping</h4>
            <p>{quizData.tips}</p>
          </div>
        </div>
        <div className={allAnswered ? 'celebrate ring' : 'celebrate'}>
          <span className="ico"><span className="material-symbols-outlined" style={{ fontSize: 24 }}>stars</span></span>
          <div style={{ minWidth: 0 }}>
            <b>{allAnswered ? <>Topik 8 Siap Diselesaikan! <span style={{ color: 'var(--tertiary)' }}>+10 Bintang</span></> : 'Topik 8 Belum Selesai'}</b>
            <br /><small>{allAnswered ? 'Progres Kartu Terupdate: 8 / 25 Topik Selesai' : `Pertanyaan Terjawab: ${completedCount} / ${questions.length}`}</small>
          </div>
        </div>
        <button type="button" className="next-btn" disabled={!allAnswered} onClick={() => { if (allAnswered) navigate('/kartu-selesai') }}>
          <span>{allAnswered ? 'Selesaikan Topik 8 & Lanjut ke Topik 9: Nabi Zakariya a.s.' : 'Selesaikan 4 Pertanyaan untuk Lanjut'}</span>
          <span className="material-symbols-outlined" style={{ fontSize: 24 }}>rocket_launch</span>
        </button>
        <button type="button" className="pause-btn" onClick={stopAndContinueLater}>
          <span className="material-symbols-outlined" aria-hidden="true">save</span>
          Hentikan Permainan dan Lanjutkan Nanti
        </button>
      </div>
    </main>
  )
}
