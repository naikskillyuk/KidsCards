# KidsCards — Kisah Nabi Yunus (React + Vite)

Replika 1:1 dari `Design/permainan_kartu_sisi_depan_narasi_cerita/code.html`
sebagai aplikasi React + Vite. Tidak memakai Tailwind CDN; semua gaya
ditulis di `src/index.css` + `src/card.css` (tanpa ruleset kosong,
sehingga warning CSS `Do not use empty rulesets` hilang).

## Struktur
- `index.html` — fonts (Plus Jakarta Sans, Be Vietnam Pro, Material Symbols), root React
- `src/main.jsx` — entry React
- `src/App.jsx` — rakitan halaman
- `src/data.js` — konten kartu (judul, cerita, doa, narator, tips)
- `src/components/Header.jsx` — topbar Flashcard Arena
- `src/components/StoryCard.jsx` — status bar, kartu depan, audio player
- `src/index.css` + `src/card.css` — design tokens & layout

## Cara jalan
```bash
npm install
npm run dev
```
Buka `http://localhost:5173`.

## Interaksi
- Tombol DENGARKAN/JEDA toggle state audio (hijau/biru).
- Tombol "Buka 4 Pertanyaan Cerita" memberi efek press pada kartu.
- Ikon volume toggle volume_up/volume_off.
