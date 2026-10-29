# Pretty Portfolio

Jalankan `npm install` bila dependencies belum ada, lalu `npm run dev`.
Build produksi: `npm run build` (Windows PowerShell: `npm.cmd run build`).

## Kustomisasi
- Palet: edit variables di `src/styles/portfolio.css`, bagian `:root`.
- Nama, email, LinkedIn: edit `profile` di `src/app/App.tsx`. Ubah juga nama pada hero, cerita About, metadata `index.html`, dan foto di `public/images/profile/`.
- Proyek: edit `src/app/projects.ts`; daftar `featured` di App.tsx memilih tiga proyek awal.
- Skills: edit array `tools` di App.tsx.
- Background lebih kalem: `--blob-opacity: .25; --motion-speed: 40s;`.
- Background lebih ramai: `--blob-opacity: .65; --motion-speed: 18s;`; tambah dekorasi seperlunya.
- Teks gelap dan tombol ungu tua dipilih agar kontras AA. Cek kembali kontras jika palet diubah.

Form menggunakan mailto dan memerlukan aplikasi email. Tidak menyimpan atau mengirim pesan melalui server.
Preview proyek berupa ilustrasi CSS, bukan screenshot produk asli. Foto menggunakan aset lokal yang sudah tersedia. Font Google memiliki fallback sans-serif jika offline.
Animasi dimatikan otomatis dengan prefers-reduced-motion. Detail proyek menggunakan dialog native yang mendukung Escape dan fokus keyboard.
