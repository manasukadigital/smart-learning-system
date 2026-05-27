import { motion } from 'motion/react';
import { 
  BookOpen, 
  Brain, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  GraduationCap, 
  Lightbulb, 
  LineChart, 
  MessageCircle, 
  NotebookPen, 
  Target,
  Trophy,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Headphones,
  Presentation,
  Map
} from 'lucide-react';

export default function App() {
  return (
    <div className="font-sans text-slate-900 bg-slate-50 min-h-screen selection:bg-amber-100 selection:text-slate-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-white text-slate-900 border-b border-slate-200 pt-20 pb-24 px-6 overflow-hidden shadow-sm">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-md bg-slate-800 text-white font-bold text-xs mb-6 tracking-widest uppercase shadow-sm">
              Smart Learning System
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-black leading-tight mb-8 text-slate-900">
              Les Bukan Sistem Belajar <br className="hidden md:block" />
              <span className="text-amber-600 text-2xl md:text-3xl lg:text-4xl block mt-3 leading-snug">Kesalahan yang Membuat Banyak Anak Terus Belajar… Tapi Tidak Berkembang</span>
            </h1>
            <a href="https://smartbook.myscalev.com/smart-learning-system" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-black py-4 px-10 rounded-xl shadow-lg uppercase tracking-tighter text-sm transition-all active:scale-95 flex items-center justify-center mx-auto mt-10">
              SAYA INGIN MEMAHAMI SISTEM BELAJAR ANAK SAYA
            </a>
            <div className="mt-10 md:mt-16 w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white/50">
              <div className="absolute inset-0 bg-amber-600/10 mix-blend-overlay"></div>
              <img 
                src="https://i.ibb.co.com/0VrFrwQD/Gemini-Generated-Image-rie6wurie6wurie6.png" 
                alt="Siswa SMP belajar" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="py-12 md:py-20 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Anak Sudah Les Bertahun-Tahun… <br/> 
              <span className="text-amber-600">Tapi Kenapa Nilainya Tetap Tidak Stabil?</span>
            </h2>
            <p className="text-lg text-slate-600">Banyak orang tua percaya:</p>
            <blockquote className="text-2xl font-bold text-slate-900 my-6 border-l-8 border-slate-800 pl-6 bg-white py-4 rounded-r-2xl inline-block text-left w-full max-w-lg mx-auto shadow-md">
              "Kalau anak sudah ikut les, harusnya nilainya naik."
            </blockquote>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:p-8 mb-10 md:mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-rose-50 p-6 rounded-2xl border border-rose-100 shadow-sm"
            >
              <h3 className="font-bold text-lg mb-4 text-rose-900 flex items-center gap-2">
                <AlertTriangle className="text-rose-500" />
                Akhirnya yang dilakukan adalah:
              </h3>
              <ul className="space-y-3">
                {['tambah jam les', 'tambah guru privat', 'tambah tugas', 'tambah biaya'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-rose-700 font-medium">
                    <div className="w-2 h-2 bg-rose-500 rounded-full flex-shrink-0" />
                    <span className="capitalize">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-red-200">
                <p className="text-rose-900 font-bold text-[13px] uppercase tracking-wide">Jadwal anak makin padat.<br/>Pulang makin malam.<br/>Weekend habis untuk belajar.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              delay={0.2}
              className="bg-white p-6 rounded-2xl border-l-8 border-slate-800 shadow-md"
            >
              <h3 className="font-bold text-lg mb-4 text-slate-900 flex items-center gap-2">
                <Target className="text-slate-500" />
                Tapi anehnya…
              </h3>
              <ul className="space-y-3">
                {[
                  'Nilai tetap naik turun.',
                  'Anak tetap sulit fokus.',
                  'Belajar hanya kalau disuruh.',
                  'Dan perlahan mulai kehilangan semangat belajar.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 text-sm font-bold">
                    <div className="w-2 h-2 bg-slate-500 rounded-full flex-shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. THE REVELATION */}
      <section className="py-12 md:py-20 px-6 bg-white border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Yang Jarang Disadari Orang Tua Adalah…
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Masalahnya sering kali bukan karena: <span className="font-bold text-slate-900">anak malas</span>, <span className="font-bold text-slate-900">kurang pintar</span>, atau <span className="font-bold text-slate-900">tempat lesnya jelek</span>.
            </p>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-amber-100 p-6 md:p-10 rounded-2xl shadow-lg text-center max-w-3xl mx-auto relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full"></div>
            <Brain className="w-16 h-16 text-slate-900 mx-auto mb-6 relative z-10" />
            <h3 className="text-2xl font-black text-slate-900 mb-4 relative z-10">Masalah sebenarnya adalah:</h3>
            <p className="text-xl text-slate-900 leading-relaxed mb-6 font-medium relative z-10">
              Banyak orang tua menggunakan les sebagai solusi utama… <br className="hidden md:block"/>
              padahal les hanyalah <span className="font-black">alat tambahan</span>.
            </p>
            <div className="inline-block bg-white text-slate-900 font-bold text-2xl py-3 px-8 rounded-xl shadow-sm relative z-10 uppercase tracking-tight">
              Bukan sistem belajar.
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. THE MISTAKE & CONSEQUENCE */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 text-center">
              Dan Inilah <span className="text-amber-600">Kesalahan yang Paling Mahal</span>
            </h2>
            <div className="prose prose-lg text-slate-700 mx-auto w-full">
              <p>Orang tua terus menambah <strong>les baru, metode baru, jadwal baru,</strong> tanpa pernah mengevaluasi:</p>
              <ul className="bg-white p-6 rounded-2xl list-none pl-6 space-y-4 shadow-sm border border-slate-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-900">Apakah anak benar-benar memahami pelajaran?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-900">Apakah sistem belajarnya cocok?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-900">Apakah anak berkembang… atau hanya sibuk?</span>
                </li>
              </ul>
              <div className="mt-8 p-6 bg-rose-50 rounded-2xl border border-rose-100 text-center shadow-sm">
                <p className="font-bold text-lg text-rose-900 mb-2 uppercase tracking-wide">Akibatnya…</p>
                <p className="text-rose-800 font-medium text-sm">Biaya pendidikan terus naik.<br/>Tapi kemampuan belajar anak tidak benar-benar bertumbuh.</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-slate-300 pt-16"
          >
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 text-center">
              Tanpa Sadar, Anak Mulai Bergantung
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:p-8 items-center">
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Mereka mulai:</p>
                <ul className="space-y-4">
                  {[
                    'Hanya bisa belajar kalau ditemani',
                    'Hanya paham kalau dijelaskan tutor',
                    'Kesulitan belajar mandiri'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-900 p-6 md:p-8 rounded-2xl text-white shadow-xl">
                <p className="italic text-slate-300 mb-4 text-sm font-medium">"Secara luar terlihat rajin belajar. Tapi sebenarnya sistem belajarnya rapuh."</p>
                <p className="text-amber-400 font-bold text-sm">Dan ketika tutor berganti, pelajaran makin sulit, atau tekanan sekolah meningkat…</p>
                <p className="mt-4 font-black text-xl tracking-tight">Anak mulai kehilangan arah belajar.</p>
              </div>
            </div>
          </motion.div>

          {/* NEW SECTION: DAMPAK JANGKA PANJANG */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-slate-300 pt-16 mt-10 md:mt-16"
          >
            <div className="bg-rose-50 border border-rose-100 rounded-3xl p-6 md:p-10 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 text-center">
                Dan Yang <span className="text-rose-600">Lebih Bahaya...</span>
              </h2>
              <p className="text-lg text-slate-700 text-center mb-10 max-w-2xl mx-auto font-medium">
                Banyak anak akhirnya terperangkap dalam <strong>"False Productivity Learning"</strong>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 md:p-8 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                    <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                  </div>
                  <h3 className="font-black text-xl text-slate-900 mb-4 tracking-tight">False Productivity Learning</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-3">
                    Dan yang membuat banyak orang tua tidak sadar...<br/><br/>
                    Secara luar anak terlihat:<br/>
                    <strong>rajin, sibuk, dan terus belajar.</strong>
                  </p>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-3">
                    Padahal sebenarnya...<br/>
                    Mereka tidak benar-benar memahami.<br/>
                    <strong>Mereka hanya belajar untuk bertahan.</strong>
                  </p>
                  <ul className="text-sm text-slate-600 font-medium leading-relaxed space-y-1 mt-1 pl-4 border-l-2 border-amber-200">
                    <li className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Akibatnya:</li>
                    <li>• anak cepat lupa,</li>
                    <li>• sulit menjelaskan ulang,</li>
                    <li>• dan panik ketika soal sedikit berubah.</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-6">
                    <div className="w-4 h-4 bg-rose-500 rounded-full"></div>
                  </div>
                  <h3 className="font-black text-xl text-slate-900 mb-4 tracking-tight">Learning Dependency Cycle</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-3">Semakin sering anak hanya belajar ketika ditemani...</p>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-3">Semakin lemah <strong>kemampuan belajar mandirinya</strong>.</p>
                  <ul className="text-sm text-slate-600 font-medium leading-relaxed space-y-1 mt-1 mb-3 pl-4 border-l-2 border-rose-200">
                    <li className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-2">Mereka mulai kehilangan:</li>
                    <li>• insting mencoba,</li>
                    <li>• keberanian berpikir,</li>
                    <li>• dan kemampuan memecahkan masalah sendiri.</li>
                  </ul>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    Semakin lama pola ini terjadi... Semakin besar kemungkinan anak <strong>takut salah, tidak percaya diri berpikir sendiri</strong>, dan selalu menunggu arahan sebelum bertindak.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-8 bg-white p-6 rounded-2xl border border-slate-200">
                <p className="text-sm text-slate-700 mb-2 font-medium">Ini membuat anak belajar <strong>hanya demi mengejar nilai</strong> atau <strong>takut dimarahi</strong>.</p>
                <p className="text-md text-slate-900 font-bold uppercase tracking-wide">Bukan agar mereka mampu berpikir kritis dan memahami.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. INTRODUCING THE SOLUTION */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-slate-900">
              Karena Itulah <br/>
              <span className="text-amber-600">SMART LEARNING SYSTEM</span> Dibuat
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8 md:mb-12">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <XCircle className="w-8 h-8 text-slate-400 mx-auto mb-4" />
                <p className="font-bold text-sm text-slate-900">Bukan untuk menambah les baru.</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <XCircle className="w-8 h-8 text-slate-400 mx-auto mb-4" />
                <p className="font-bold text-sm text-slate-900">Bukan untuk membuat anak belajar lebih lama.</p>
              </div>
              <div className="bg-slate-800 rounded-2xl p-6 shadow-md relative top-[-10px]">
                <CheckCircle2 className="w-8 h-8 text-white mx-auto mb-4" />
                <p className="font-bold text-sm text-white">Tapi untuk membantu orang tua memahami <strong className="text-amber-400">bagaimana sistem belajar anak bekerja.</strong></p>
              </div>
            </div>

            <div className="bg-white border-l-8 border-slate-800 rounded-r-2xl p-6 md:p-10 text-left max-w-3xl mx-auto shadow-md">
              <p className="text-sm uppercase tracking-widest font-bold text-gray-500 mb-6 text-center">Keputusan pendidikan tidak lagi dibuat karena:</p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {['Panik', 'Takut', 'Ikut-ikutan', 'Rasa Bersalah'].map(w => (
                  <span key={w} className="px-4 py-2 bg-gray-100 rounded-lg text-gray-400 font-bold text-xs uppercase line-through">
                    {w}
                  </span>
                ))}
              </div>
              <p className="text-sm uppercase tracking-widest font-bold text-slate-500 mb-6 text-center">Melainkan berdasarkan:</p>
              <div className="flex flex-col items-start md:items-center gap-3 max-w-sm mx-auto">
                {['apa yang benar-benar dibutuhkan anak', 'bagaimana cara anak belajar', 'dan perkembangan nyata yang terjadi'].map(w => (
                  <span key={w} className="px-5 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold shadow-sm flex items-center gap-3 text-sm w-full">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span className="text-left leading-tight">{w}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5B. MOMENT OF HOPE */}
      <section className="py-12 md:py-20 px-6 bg-blue-50 border-b border-blue-100">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block py-1 px-3 bg-green-100 text-green-800 text-[10px] font-bold rounded uppercase tracking-widest mb-4">
            KABAR BAIKNYA...
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-8 tracking-tight">
            Kemampuan belajar anak sebenarnya <span className="text-blue-600">bisa dibangun kembali.</span>
          </h2>
          
          <div className="mb-10 w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-lg border-4 border border-blue-100">
            <img 
              src="https://i.ibb.co.com/RT0CyX3L/Gemini-Generated-Image-mlpkl5mlpkl5mlpk.png" 
              alt="Anak belajar rajin" 
              className="w-full h-auto object-cover opacity-90"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-lg text-blue-800 font-medium mb-8 leading-relaxed">
            Bukan dengan menambah tekanan.<br/>
            Bukan dengan menambah jam belajar tanpa arah.
          </p>
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-blue-100 text-left mb-8">
            <p className="text-blue-900 mb-6 font-bold uppercase tracking-wide text-sm text-center">Tapi dengan memperbaiki:</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <div className="bg-blue-50 px-6 py-4 rounded-xl flex-1 text-center font-bold text-blue-900 border border-blue-100">Sistem</div>
              <div className="bg-blue-50 px-6 py-4 rounded-xl flex-1 text-center font-bold text-blue-900 border border-blue-100">Pola Evaluasi</div>
              <div className="bg-blue-50 px-6 py-4 rounded-xl flex-1 text-center font-bold text-blue-900 border border-blue-100">Cara Proses Belajar</div>
            </div>
          </div>
          <p className="text-lg text-blue-800 font-medium leading-relaxed">
            Karena ketika sistem belajar mulai benar... Anak biasanya menjadi <strong className="text-blue-900">lebih tenang, lebih mandiri, dan lebih mudah memahami pelajaran</strong> tanpa harus dipaksa terus-menerus.
          </p>
        </div>
      </section>

      {/* 6. PRODUCT CONTENTS */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Sistem Evaluasi Belajar yang Membantu Orang Tua Berhenti Menebak
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto font-medium">
              Di dalam <span className="font-bold text-amber-600">SMART LEARNING SYSTEM</span>, Anda akan mendapatkan:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10 md:mb-16">
            {[
              { icon: BookOpen, label: 'Ebook Panduan', desc: 'Materi komprehensif untuk memahami pola belajar anak.' },
              { icon: Headphones, label: 'Deep Dive Podcast Audio', desc: 'Panduan audio praktis untuk didengarkan kapan saja.' },
              { icon: Presentation, label: 'Slide Presentasi', desc: 'Ringkasan visual dari framework Smart Learning System.' },
              { icon: Map, label: 'Infografis', desc: 'Alur visual untuk mengetahui apa yang harus diperbaiki.' },
              { icon: NotebookPen, label: 'Workbook Evaluator Les', desc: 'Lembar tugas & indikator untuk mengaudit efektivitas les anak.' },
              { icon: Brain, label: 'AI Pendamping Berpikir', desc: 'Asisten AI yang siap membantu Anda mengambil keputusan pendidikan dengan lebih tenang & objektif.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-200 text-center flex flex-col items-center justify-center gap-4 group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-amber-600 group-hover:bg-slate-800 group-hover:text-white transition-colors mb-2">
                  <item.icon className="w-7 h-7" />
                </div>
                <span className="font-bold text-slate-900 tracking-tight">{item.label}</span>
                <p className="text-xs text-slate-600 font-medium leading-relaxed mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-amber-100 rounded-2xl p-6 md:p-8 text-center max-w-3xl mx-auto shadow-md relative overflow-hidden">
             <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full"></div>
            <p className="text-lg text-slate-900 font-bold relative z-10 leading-relaxed">
              Seluruh materi dirancang untuk membantu orang tua 
              berpikir lebih jernih, memahami akar masalah belajar, dan mengambil keputusan pendidikan secara lebih objektif.
            </p>
          </div>
        </div>
      </section>

      {/* 7. CHAPTERS */}
      <section className="py-12 md:py-20 px-6 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">
              Materi Disusun Secara Bertahap <br className="hidden md:block"/>
              <span className="text-amber-600">Agar Mudah Dipahami</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <ChapterCard 
              label="PENGANTAR"
              title="Anak Sudah Les, Tapi Kenapa Nilainya Tetap Tidak Naik?"
              desc="Memahami kenapa les tidak otomatis meningkatkan prestasi dan bagaimana ilusi sibuk belajar terjadi."
            />
            <ChapterCard 
              label="MODUL 1"
              title='Ilusi "Sudah Usaha Maksimal"'
              desc="Memahami kenapa banyak usaha belajar tidak menghasilkan perkembangan nyata."
            />
            <ChapterCard 
              label="MODUL 2"
              title="Kenapa Les Tidak Pernah Mengubah Nilai"
              desc="Mengapa masalah utama anak sering kali bukan pada materi, tapi sistem belajar yang tidak sinkron."
            />
            <ChapterCard 
              label="MODUL 3"
              title="Kesalahan Fatal Penggunaan Bimbel"
              desc="Kesalahan umum orang tua yang membuat anak semakin bergantung pada tutor."
            />
            <ChapterCard 
              label="MODUL 4"
              title="Bimbel Itu Alat, Bukan Sistem"
              desc="Mengapa lingkungan belajar di rumah jauh lebih menentukan daripada jumlah jam les."
            />
            <ChapterCard 
              label="MODUL 5"
              title="SOP Rumah Setelah Anak Pulang Les"
              desc="Rutinitas sederhana setelah les untuk memastikan anak benar-benar paham, bukan sekadar menghafal."
            />
            <ChapterCard 
              label="MODUL 6"
              title="Audit 14 Hari: Les Ini Layak atau Tidak"
              desc="Framework observasi khusus untuk mengevaluasi apakah les anak saat ini benar-benar efektif."
            />
            <ChapterCard 
              label="MODUL 7"
              title="Keputusan Akhir: Lanjut, Ganti, atau Stop"
              desc="Panduan langkah demi langkah mengambil keputusan pendidikan secara data dan sangat objektif."
            />
            <ChapterCard 
              label="PENUTUP"
              title="Realita Pendidikan yang Jarang Disadari"
              desc="Mari membantu anak belajar lebih sehat tanpa harus terjebak kompetisi akademik tanpa akhir."
            />
          </div>
          
          <div className="mt-10 md:mt-16">
            <a href="https://smartbook.myscalev.com/smart-learning-system" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-black py-4 px-10 rounded-xl shadow-lg uppercase tracking-tighter text-sm transition-all active:scale-95 flex items-center justify-center mx-auto">
              SAYA INGIN MULAI EVALUASI BELAJAR ANAK SAYA
            </a>
          </div>
        </div>
      </section>

      {/* 8. BONUSES */}
      <section className="py-12 md:py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
              Namun <span className="text-amber-400">SMART LEARNING SYSTEM</span> Tidak Berhenti di Teori
            </h2>
            <p className="text-lg text-slate-300 font-medium">
              Karena memahami masalah saja tidak cukup.<br/>
              Orang tua juga perlu alat evaluasi, sistem audit, dan pendamping.
            </p>
          </div>

          <div className="space-y-8">
            {/* Bonus 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 md:p-10 rounded-2xl border-l-8 border-amber-400 relative overflow-hidden shadow-xl"
            >
              
              <div className="inline-block py-1 px-3 bg-slate-200 text-amber-600 text-[10px] font-bold rounded uppercase tracking-widest mb-4">
                EKSTRA #1
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <NotebookPen className="w-8 h-8 text-amber-600" />
                LES EVALUATOR WORKBOOK
              </h3>
              <p className="text-slate-700 font-medium mb-6">Workbook praktis untuk membantu orang tua:</p>
              
              <div className="grid md:grid-cols-2 gap-6 md:p-8">
                <ul className="space-y-3">
                  {[
                    'Mengevaluasi efektivitas les',
                    'Memahami pola belajar anak',
                    'Melakukan audit belajar',
                    'Keputusan pendidikan berbasis data'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-900 text-sm font-bold">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <p className="font-bold text-[11px] text-slate-500 mb-3 uppercase tracking-widest">Isi Workbook:</p>
                  <ul className="grid grid-cols-1 gap-2 text-sm text-slate-900 font-medium">
                    <li>• Ilusi Usaha Maksimal</li>
                    <li>• Sinkronisasi Pembelajaran</li>
                    <li>• Evaluasi Sistem Rumah</li>
                    <li>• Mental Model & Alat</li>
                    <li>• SOP 15 Menit</li>
                    <li>• Audit 14 Hari</li>
                    <li>• Keputusan Akhir</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Bonus 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 md:p-10 rounded-2xl border-l-8 border-amber-400 relative overflow-hidden shadow-xl"
            >
              
              <div className="inline-block py-1 px-3 bg-slate-200 text-amber-600 text-[10px] font-bold rounded uppercase tracking-widest mb-4">
                EKSTRA #2
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8 text-amber-600" />
                GUIDED INSIGHT AI
              </h3>
              <p className="text-slate-700 font-medium mb-4 max-w-2xl">
                Agar orang tua tidak bingung menjalankannya, Anda mendapatkan AI Assistant pendamping berbasis ebook, podcast, dan framework evaluasi belajar.
              </p>
              
              <p className="text-[11px] uppercase tracking-widest font-bold text-slate-500 mb-4">AI ini akan membantu orang tua:</p>
              <div className="flex flex-wrap gap-4">
                {['Berpikir lebih jernih', 'Menjalankan SOP', 'Melakukan audit belajar', 'Mengambil keputusan rasional'].map((w, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-lg text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-amber-600" />
                    {w}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. PRICING & VALUE */}
      <section className="py-16 md:py-24 px-6 bg-white border-t border-slate-200 relative">
        <div className="max-w-3xl mx-auto">
          {/* COST OF INACTION */}
          <div className="bg-rose-50 border-2 border-rose-100 rounded-3xl p-6 md:p-10 text-center mb-10 md:mb-16 md:mb-24 shadow-md relative overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-black text-rose-900 mb-6 tracking-tight relative z-10">
              Semakin Lama Sistem Belajar yang Salah Dipertahankan…
            </h2>
            <p className="text-rose-800 font-bold mb-6 text-sm uppercase tracking-widest relative z-10">Semakin besar kemungkinan anak:</p>
            
            <div className="flex flex-col gap-3 max-w-sm mx-auto mb-8 text-left relative z-10">
              <div className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl shadow-sm border border-rose-50">
                <div className="w-2 h-2 bg-rose-500 rounded-full flex-shrink-0"></div>
                <span className="text-slate-800 text-sm font-bold">Kehilangan rasa percaya diri secara bertahap</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl shadow-sm border border-rose-50">
                <div className="w-2 h-2 bg-rose-500 rounded-full flex-shrink-0"></div>
                <span className="text-slate-800 text-sm font-bold">Belajar hanya karena menghindari teguran</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl shadow-sm border border-rose-50">
                <div className="w-2 h-2 bg-rose-500 rounded-full flex-shrink-0"></div>
                <span className="text-slate-800 text-sm font-bold">Bergantung selamanya pada bantuan tutor luar</span>
              </div>
            </div>
            
            <p className="text-rose-900 text-sm font-medium relative z-10 bg-white/50 inline-block px-6 py-3 rounded-lg">
              Dan sering kali orang tua baru sadar <strong className="text-rose-900 font-black">setelah nilai hancur, anak burnout, atau motivasinya hilang total.</strong>
            </p>
          </div>

          {/* PRICE TRANSITION IDEA */}
          <div className="bg-white border text-center border-slate-200 rounded-3xl p-6 md:p-10 mb-10 md:mb-16 shadow-sm">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 leading-tight">Jika Orang Tua Harus Mempelajari Semua Ini Sendiri…</h3>
            <p className="text-slate-700 font-medium mb-6">Biasanya mereka harus:</p>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-8 text-left md:text-center max-w-3xl mx-auto">
              <div className="flex-1 flex items-start md:justify-center gap-3">
                <div className="w-2 h-2 bg-rose-500 rounded-full flex-shrink-0 mt-2"></div>
                <span className="font-bold text-slate-800 md:text-lg">pindah les berkali-kali,</span>
              </div>
              <div className="flex-1 flex items-start md:justify-center gap-3">
                <div className="w-2 h-2 bg-rose-500 rounded-full flex-shrink-0 mt-2"></div>
                <span className="font-bold text-slate-800 md:text-lg">menghabiskan biaya jutaan rupiah,</span>
              </div>
              <div className="flex-1 flex items-start md:justify-center gap-3">
                <div className="w-2 h-2 bg-rose-500 rounded-full flex-shrink-0 mt-2"></div>
                <span className="font-bold text-slate-800 md:text-lg">dan kehilangan waktu bertahun-tahun.</span>
              </div>
            </div>
            
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl inline-block mt-4">
              <p className="text-slate-800 font-bold text-lg">
                <span className="text-blue-600 font-black">SMART LEARNING SYSTEM</span> membantu Anda mempersingkat proses itu.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 p-6 md:p-10 rounded-3xl text-left md:text-center max-w-2xl mx-auto shadow-sm mb-10 md:mb-16 relative">
              <h2 className="text-xl md:text-2xl font-black text-blue-900 mb-6 tracking-tight">
                Namun kabar baiknya…
              </h2>
              <p className="text-blue-900 font-medium mb-4 text-lg">Anda tidak perlu menghabiskan:</p>
              <ul className="text-blue-800 font-bold space-y-3 mb-6 text-lg max-w-sm mx-auto">
                <li className="flex items-start md:items-center justify-start md:justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 md:mt-0 flex-shrink-0"></div>
                  <span className="text-left">waktu bertahun-tahun,</span>
                </li>
                <li className="flex items-start md:items-center justify-start md:justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 md:mt-0 flex-shrink-0"></div>
                  <span className="text-left">biaya jutaan rupiah,</span>
                </li>
                <li className="flex items-start md:items-center justify-start md:justify-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 md:mt-0 flex-shrink-0"></div>
                  <span className="text-left flex-1 md:flex-none">dan proses trial-error yang melelahkan...</span>
                </li>
              </ul>
              <p className="text-blue-900 font-medium text-lg leading-relaxed">untuk mulai memahami sistem belajar anak dengan lebih benar.</p>
            </div>
            
            <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight">
              Jika Seluruh Sistem Ini Dipisahkan…
            </h2>
            <p className="text-slate-600 font-medium text-sm uppercase tracking-widest">Maka value yang seharusnya Anda dapatkan adalah:</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 md:p-10 border border-slate-200 mb-8 md:mb-12 shadow-sm">
            <div className="space-y-4 mb-8">
              <ValueRow title="EBOOK PANDUAN LENGKAP" price="Rp149.000" />
              <ValueRow title="WORKBOOK EVALUATOR LES" price="Rp99.000" />
              <ValueRow title="AI PENDAMPING BERPIKIR" price="Rp199.000" />
              <ValueRow title="PODCAST, SLIDE & INFOGRAFIS" price="Rp149.000" />
            </div>
            
            <div className="border-t border-slate-300 pt-6 flex justify-between items-end mb-8">
              <span className="text-sm font-bold text-slate-900 uppercase tracking-widest">Total Value:</span>
              <span className="text-2xl font-black text-slate-400 line-through">Rp 596.000</span>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 text-center relative shadow-xl flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-1 mt-4">Investasi Terbaik</h3>
              <p className="text-blue-300 text-xs uppercase tracking-widest font-bold mb-6">Akses Penuh Selamanya</p>
              
              <div className="flex justify-between items-end mb-8 border-t border-slate-800 pt-6">
                <span className="text-xs text-amber-400 font-bold uppercase tracking-widest">Promo Hari Ini</span>
                <div className="text-5xl md:text-6xl font-black text-amber-500 leading-none">
                  <span className="text-3xl align-top">Rp</span>197K
                </div>
              </div>
              
              <a href="https://smartbook.myscalev.com/smart-learning-system" target="_blank" rel="noopener noreferrer" className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 px-8 rounded-xl shadow-lg uppercase tracking-tighter text-sm transition-all active:scale-95 flex items-center justify-center gap-2 group">
                SAYA INGIN MEMBANTU ANAK BELAJAR DENGAN LEBIH SEHAT
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="text-center bg-blue-50 p-6 md:p-10 rounded-3xl border border-blue-100 relative">
            <div className="text-slate-400 font-serif text-6xl absolute top-4 left-6 opacity-20">"</div>
            <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight relative z-10">Karena keputusan pendidikan yang baik...</h3>
            <p className="text-slate-700 max-w-xl mx-auto font-medium text-lg leading-relaxed relative z-10">
              Tidak dibangun dari <strong className="text-slate-900">kepanikan</strong>.<br/><br/>
              Tapi dari <strong className="text-slate-900">keberanian untuk memahami</strong> apa yang sebenarnya terjadi pada proses belajar anak.
            </p>
            <div className="mt-8 pt-8 border-t border-blue-200">
              <p className="text-slate-700 max-w-xl mx-auto font-medium text-lg leading-relaxed relative z-10 text-left md:text-center">
                Karena pada akhirnya...<br/><br/>
                Yang paling dibutuhkan anak bukan selalu tambahan pelajaran.<br/><br/>
                Tapi lingkungan yang membantu mereka:
              </p>
              <ul className="text-slate-800 font-bold max-w-sm mx-auto text-lg leading-relaxed relative z-10 text-left mt-6 mb-8 space-y-3 md:flex md:flex-col md:items-center [&>li]:md:list-none [&>li]:md:text-center [&>li]:md:pl-0">
                <li className="flex items-start md:items-center gap-3 justify-start md:justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 md:mt-0 flex-shrink-0"></div><span className="text-left">berani berpikir,</span>
                </li>
                <li className="flex items-start md:items-center gap-3 justify-start md:justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 md:mt-0 flex-shrink-0"></div><span className="text-left">memahami proses belajar,</span>
                </li>
                <li className="flex items-start md:items-center gap-3 justify-start md:justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mt-2.5 md:mt-0 flex-shrink-0"></div><span className="text-left">dan tumbuh tanpa terus hidup dalam tekanan.</span>
                </li>
              </ul>
              <p className="text-slate-700 max-w-xl mx-auto font-medium text-lg leading-relaxed relative z-10 text-left md:text-center">
                Dan semuanya dimulai…<br/>
                ketika orang tua berhenti sekadar menambah les.<br/><br/>
                Lalu mulai memahami:<br/>
                <strong className="text-slate-900 font-black text-xl md:text-2xl mt-2 block">bagaimana anak sebenarnya belajar.</strong>
              </p>
              
              <div className="mt-10 flex justify-center w-full">
                <a href="https://smartbook.myscalev.com/smart-learning-system" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-black py-4 px-10 rounded-xl shadow-lg uppercase tracking-tighter text-sm transition-all active:scale-95 flex items-center justify-center mx-auto">
                  SAYA INGIN MEMBANTU ANAK BELAJAR DENGAN LEBIH SEHAT
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER CTA */}
      <footer className="bg-slate-50 border-t border-slate-200 text-slate-900 py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 md:mb-12 w-full mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <img 
              src="https://i.ibb.co.com/YBGsvWjs/Gemini-Generated-Image-qgntcgqgntcgqgnt.png" 
              alt="Mengambil keputusan pendidikan" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-8 tracking-tight">
            Mulai Bangun Sistem Belajar Anak <br className="hidden md:block"/>
            yang Lebih Sehat Hari Ini
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 md:mt-12 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Ebook Panduan</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Deep Dive Podcast Audio</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Slide Presentasi</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Infografis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Workbook Evaluator Les</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">AI Pendamping Berpikir</span>
            </div>
          </div>
          
          <div className="mt-10 md:mt-16 mb-8 flex justify-center">
            {/* NOTE: Silakan unggah logo Anda ke File Explorer (folder 'public') dengan nama 'logo.png' 
                Atau ganti src ini dengan URL image.ibb.co seperti sebelumnya */}
            <img 
              src="/logo.png" 
              alt="Smartbook.id Logo" 
              className="h-20 md:h-24 object-contain"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Tampilkan teks jika gambar belum ada
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class=\"text-2xl font-black text-slate-800 tracking-tighter\">smartbook<span class=\"text-green-600\">.id</span></span>');
              }}
            />
          </div>
          
          <p className="mt-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Smart Learning System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Subcomponents
function ChapterCard({ label, title, desc }: { label: string, title: string, desc: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 items-start"
    >
      <div className="text-[10px] text-slate-500 font-bold block uppercase tracking-widest">
        {label}
      </div>
      <div>
        <h3 className="text-sm font-bold text-slate-900 mb-2 leading-tight">{title}</h3>
        <p className="text-xs text-slate-700 leading-relaxed font-medium">{desc}</p>
      </div>
    </motion.div>
  );
}

function ValueRow({ title, price }: { title: string, price: string }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-slate-200 last:border-0">
      <span className="font-bold text-slate-900 text-sm tracking-tight flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-amber-600" />
        {title}
      </span>
      <span className="font-black text-slate-900">{price}</span>
    </div>
  );
}

