import { readFileSync, writeFileSync } from 'fs';

let content = readFileSync('src/App.tsx', 'utf8');

// 1. OPENING
content = content.replace(
  `Jadwal anak makin padat.<br/>
                    Pulang makin malam.`,
  `Jadwal anak semakin padat.<br/>
                    Pulang dalam keadaan lelah.<br/>
                    Malam dihabiskan mengerjakan tugas.<br/>
                    Weekend dipenuhi tambahan belajar.`
);

// 2. FALSE PRODUCTIVITY
const anchorFalse = `<h3 className="font-black text-xl text-slate-900 mb-4 tracking-tight">False Productivity Learning</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-3">
                    Anak terlihat sibuk setiap hari.<br/>
                    Belajar. Mengerjakan tugas. Datang les. Membaca buku.
                  </p>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-3">
                    Tapi sebenarnya... Mereka <strong>hanya menghafal permukaan.</strong> Bukan memahami.
                  </p>`;
const newFalse = `<h3 className="font-black text-xl text-slate-900 mb-4 tracking-tight">False Productivity Learning</h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-3">
                    Dan yang membuat banyak orang tua tidak sadar...<br/><br/>
                    Secara luar anak terlihat:<br/>
                    <strong>rajin, sibuk, dan terus belajar.</strong>
                  </p>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-3">
                    Padahal sebenarnya...<br/>
                    Mereka tidak benar-benar memahami.<br/>
                    <strong>Mereka hanya belajar untuk bertahan.</strong>
                  </p>`;
content = content.replace(anchorFalse, newFalse);

// 3. KEPUTUSAN PENDIDIKAN
const anchorMelainkan = `<p className="text-sm uppercase tracking-widest font-bold text-slate-500 mb-6 text-center">Melainkan berdasarkan:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Evaluasi', 'Pola Belajar', 'Perkembangan Nyata Anak'].map(w => (
                  <span key={w} className="px-5 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold shadow-sm flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-amber-600" />
                    {w}
                  </span>
                ))}
              </div>`;

const newMelainkan = `<p className="text-sm uppercase tracking-widest font-bold text-slate-500 mb-6 text-center">Melainkan berdasarkan:</p>
              <div className="flex flex-col items-start md:items-center gap-3 max-w-sm mx-auto">
                {['apa yang benar-benar dibutuhkan anak', 'bagaimana cara anak belajar', 'dan perkembangan nyata yang terjadi'].map(w => (
                  <span key={w} className="px-5 py-3 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-bold shadow-sm flex items-center gap-3 text-sm w-full">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span className="text-left leading-tight">{w}</span>
                  </span>
                ))}
              </div>`;
content = content.replace(anchorMelainkan, newMelainkan);

// 4. VALUE STACK
const anchorStack = `{[
              { icon: BookOpen, label: 'Sistem Evaluasi', desc: 'Cara baru memahami pola belajar anak, dan langkah praktis merombak kebiasaan buruknya.' },
              { icon: MessageCircle, label: 'Audio Guidance', desc: 'Panduan audio yang membantu orang tua memahami pola belajar anak tanpa harus membaca panjang setiap hari.' },
              { icon: Brain, label: 'Pendamping Berpikir', desc: 'Membantu Anda mengambil keputusan pendidikan tanpa panik & emosional.' },
              { icon: NotebookPen, label: 'Les Evaluator Workbook', desc: 'SOP & Indikator untuk mengaudit efektivitas les anak minggu per minggu.' },
              { icon: LineChart, label: 'Visual Roadmap', desc: 'Alur visual sederhana untuk membantu orang tua mengetahui apa yang harus diperbaiki terlebih dahulu.' },
              { icon: Lightbulb, label: 'Cheat Sheet Audit', desc: 'Pertanyaan evaluasi yang membantu Anda mengetahui apakah anak benar-benar memahami pelajaran atau hanya menghafal.' }
            ]`;

const newStack = `{[
              { icon: BookOpen, label: 'Sistem Evaluasi', desc: 'Cara sederhana memahami pola belajar anak dan mengetahui apa yang sebenarnya perlu diperbaiki.' },
              { icon: MessageCircle, label: 'Audio Guidance', desc: 'Panduan audio praktis yang membantu orang tua memahami proses belajar anak tanpa harus membaca panjang setiap hari.' },
              { icon: Brain, label: 'Pendamping Berpikir', desc: 'Membantu Anda mengambil keputusan pendidikan tanpa panik & emosional.' },
              { icon: NotebookPen, label: 'Les Evaluator Workbook', desc: 'SOP & Indikator untuk mengaudit efektivitas les anak minggu per minggu.' },
              { icon: LineChart, label: 'Visual Roadmap', desc: 'Alur visual sederhana untuk membantu orang tua mengetahui apa yang harus diperbaiki terlebih dahulu.' },
              { icon: Lightbulb, label: 'Cheat Sheet Audit', desc: 'Pertanyaan evaluasi yang membantu Anda mengetahui apakah anak benar-benar memahami pelajaran atau hanya menghafal.' }
            ]`;
content = content.replace(anchorStack, newStack);

// 5. PRICE TRANSITION 
const anchorPrice = `<div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight">
              Jika Seluruh Sistem Ini Dipisahkan…
            </h2>`;

const newPrice = `<div className="bg-blue-50 border border-blue-100 p-8 md:p-12 rounded-3xl text-left md:text-center max-w-2xl mx-auto shadow-sm mb-16 relative">
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
            
            <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight">
              Jika Seluruh Sistem Ini Dipisahkan…
            </h2>`;

content = content.replace(anchorPrice, newPrice);


// 6. FINAL CLOSING
const anchorClosing = `<div className="mt-8 pt-8 border-t border-blue-200">
              <p className="text-slate-700 max-w-xl mx-auto font-medium text-lg leading-relaxed relative z-10 text-left md:text-center">
                Karena pada akhirnya...<br/><br/>
                Yang paling dibutuhkan anak bukan selalu tambahan les baru.<br/>
                Tapi orang tua yang mampu memahami:
              </p>
              <ul className="text-slate-700 max-w-sm mx-auto font-medium text-lg leading-relaxed relative z-10 text-left list-disc pl-6 md:pl-0 mt-4 md:flex md:flex-col md:items-center [&>li]:md:list-none [&>li]:md:text-center">
                <li>bagaimana cara anak belajar,</li>
                <li>berkembang,</li>
                <li>dan bertumbuh dengan sehat.</li>
              </ul>
            </div>`;

const newClosing = `<div className="mt-8 pt-8 border-t border-blue-200">
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
            </div>`;
content = content.replace(anchorClosing, newClosing);

writeFileSync('src/App.tsx', content);
