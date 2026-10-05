import '../card.css'

export default function Header({ muted, onToggleMute }) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="topbar-left">
          <button className="icon-btn" aria-label="Kembali ke Serial Kartu" type="button">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="brand-pill">
            <span className="material-symbols-outlined">school</span>
            <span>Flashcard Arena</span>
          </div>
        </div>
        <div className="topbar-right">
          <div className="star-pill">
            <span className="material-symbols-outlined">star</span>
            <span>12</span>
          </div>
          <button className="icon-btn" aria-label="Toggle Audio Volume" type="button" onClick={onToggleMute}>
            <span className="material-symbols-outlined">{muted ? 'volume_off' : 'volume_up'}</span>
          </button>
          <div className="avatar">
            <span className="material-symbols-outlined">person</span>
          </div>
        </div>
      </div>
    </header>
  )
}
