export const nalarNav = [
  { group: 'Overview' },
  { id: 'dashboard-utama', label: 'Dashboard Utama', icon: 'dashboard' },
  { group: 'Pelanggan & Transaksi' },
  { id: 'kelola-pelanggan', label: 'Kelola Pelanggan & Akses', icon: 'group' },
  { id: 'verifikasi', label: 'Verifikasi Pembayaran', icon: 'receipt_long', badge: 3 },
  { group: 'Manajemen Konten' },
  { id: 'kelola-materi', label: 'Kelola Materi & Serial', icon: 'auto_stories', active: true },
  { id: 'bank-soal', label: 'Bank Pertanyaan Kuis', icon: 'quiz' },
  { group: 'Pengaturan' },
  { id: 'pengaturan', label: 'Pengaturan Akun & Staf', icon: 'manage_accounts' },
]

export const nalarSerials = [
  { id: 'pola', label: 'Serial Bentuk & Pola Logika', icon: 'category', count: '6 Kartu', active: true },
  { id: 'sains', label: 'Serial Sains & Observasi', icon: 'science', count: '4 Kartu' },
  { id: 'bayangan', label: 'Serial Mencocokkan Bayangan', icon: 'contrast', count: '5 Kartu' },
]

export const nalarTopics = [
  {
    id: 1,
    no: '01',
    title: 'Pola AB: Apel & Pisang Ceria',
    level: 'Level 1: Pemula',
    levelShort: 'L1',
    pattern: '🍎 ➔ 🍌 ➔ 🍎 ➔ 🍌 ➔ [ ? ]',
    meta: '4 Opsi Gambar Siap',
    metaIcon: 'check_circle',
    editing: true,
  },
  {
    id: 2,
    no: '02',
    title: 'Pola Tiga Warna Balok Susun (A-B-C)',
    level: 'Level 2: Petualang',
    pattern: '🟥 ➔ 🟦 ➔ 🟩 ➔ 🟥 ➔ [ ? ]',
    meta: 'Audio Suara Aktif',
    metaIcon: 'verified',
  },
  {
    id: 3,
    no: '03',
    title: 'Hubungan Sebab-Akibat: Hewan & Makanannya',
    level: 'Level 3: Penjelajah',
    pattern: '🐰 ➔ 🥕 | 🐒 ➔ 🍌 | 🐱 ➔ [ ? ]',
    meta: '4 Opsi Lengkap',
    metaIcon: 'task_alt',
  },
  {
    id: 4,
    no: '04',
    title: 'Mencocokkan Siluet Bayangan Kendaraan',
    level: 'Level 4: Tantangan',
    pattern: '🚗 ➔ Siluet Mobil | ✈️ ➔ Siluet Pesawat',
    meta: 'Siap Rilis',
    metaIcon: 'task_alt',
  },
]

export const nalarTypes = [
  'Pola Berulang (Pola AB-AB)',
  'Pola Tiga Objek (A-B-C)',
  'Temukan Gambar Keanehan (Odd One Out)',
  'Mencocokkan Pasangan & Bayangan',
  'Hitung Benda & Kelompok',
]

export const nalarLevels = [
  { id: 1, code: 'L1', name: 'Pemula', desc: 'Level 1: Pemula (4-5 Th)' },
  { id: 2, code: 'L2', name: 'Petualang', desc: 'Level 2: Petualang (5-6 Th)' },
  { id: 3, code: 'L3', name: 'Jelajah', desc: 'Level 3: Penjelajah (6-7 Th)' },
  { id: 4, code: 'L4', name: 'Tantang', desc: 'Level 4: Tantangan Cilik' },
  { id: 5, code: 'L5', name: 'Master', desc: 'Level 5: Master Juara' },
]

export const nalarSequence = [
  { emoji: '🍎', label: 'Apel', slot: 'Slot 1 (A)' },
  { emoji: '🍌', label: 'Pisang', slot: 'Slot 2 (B)' },
  { emoji: '🍎', label: 'Apel', slot: 'Slot 3 (A)' },
  { emoji: '🍌', label: 'Pisang', slot: 'Slot 4 (B)' },
]

export const nalarOptions = [
  { id: 'A', emoji: '🍎', title: 'Apel Merah' },
  { id: 'B', emoji: '🍌', title: 'Pisang Kuning' },
  { id: 'C', emoji: '🍇', title: 'Anggur Ungu' },
  { id: 'D', emoji: '🍊', title: 'Jeruk Manis' },
]

export const nalarLogo =
  'https://lh3.googleusercontent.com/aida/AEtjO1U8iTfW9QBQf7h1b9TWymhZyGdWJi6PZhDoqCMngPEjVbIwIg__RuUgPUOHWFybiAxRaol1vb2U7RW_UffctJgB0x6Hv1xa31g9DvBIwn9S-HWR-1EfEOs4zaLDAqAatrwmCLu3GDMm-XTBiBzNNP_4tnCJqEAk-KdluIS5DgnFecM3cGsuw5vAoPYeW5jyUbDCIWY9u3DypofFmd22leYKsfLtVekoFM8wv1mYdNHqvwX6cpxbKcRGKPjS'
