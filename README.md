# KidsCards — Kisah Nabi Yunus (React + Vite)

Replika dari:
- `Design/permainan_kartu_sisi_depan_narasi_cerita/code.html` → `/`
- `Design/permainan_kartu_sisi_belakang_4_pertanyaan_kunci_jawaban/code.html` → `/belakang-kartu`

Tanpa Tailwind CDN; gaya di `src/index.css` + `src/card.css` + `src/back.css` + `src/back2.css` + `src/reward.css`
(tanpa ruleset kosong, tanpa `const c/isH` ganda — accordion & tab pakai state React).

## Rute
- `/` — sisi depan: narasi Kisah Nabi Yunus, audio player, tombol flip → `/belakang-kartu`
- `/belakang-kartu` — sisi belakang: status SIMAK Topik 8/25, 3 pertanyaan selesai + 1 aktif,
  tab Pilihan Ganda/Manual, kunci jawaban, progress 75%→100%, tips, celebration, lanjut Topik 9
- `/kartu-selesai` — reward Topik 8 tuntas: maskot + badge 100%, bintang 54→57,
  lencana, kuis 4/4, +100 XP, durasi, hikmah, tombol Topik 9 / ulangi / daftar topik

## Cara jalan (PENTING: jangan pakai `yarn dev`)
`yarn` v1 crash di Node 24 (`kill ENOSYS`) sehingga server mati dan browser
menampilkan "failed to load page". Jalankan Vite langsung via node:

```bash
# install (cukup sekali, atau saat tambah dependency)
cmd /c "yarn install"

# jalankan dev server (langsung via node, stabil)
cmd /c "node node_modules\vite\bin\vite.js --port 5173 --strictPort"

# build produksi
cmd /c "node node_modules\vite\bin\vite.js build"
```
Buka `http://localhost:5173/` dan `http://localhost:5173/belakang-kartu`.
