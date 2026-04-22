import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  CalendarDays, 
  Settings, 
  Plus, 
  Bell, 
  User,
  Search,
  MoreVertical,
  Clock,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Rencana Saya', icon: BookOpen },
    { name: 'Kalender', icon: CalendarDays },
    { name: 'Pengaturan', icon: Settings },
  ];

  // Data dummy untuk mendemonstrasikan sistem grid di Main Content
  const studyPlans = [
    { id: 1, title: 'Persiapan Ujian Akhir', subject: 'Matematika Lanjut', progress: 75, daysLeft: 5 },
    { id: 2, title: 'Proyek Akhir Semester', subject: 'Pemrograman Web', progress: 40, daysLeft: 12 },
    { id: 3, title: 'Sertifikasi AWS', subject: 'Cloud Computing', progress: 10, daysLeft: 30 },
    { id: 4, title: 'Belajar Bahasa Jepang', subject: 'Bahasa Asing', progress: 90, daysLeft: 2 },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-slate-800 antialiased overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-100 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10 hidden md:flex">
        {/* Logo Area */}
        <div className="h-20 flex items-center px-6 border-b border-slate-50">
          <div className="flex items-center gap-3 text-indigo-600 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center shadow-sm shadow-indigo-200">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            SmartStudy
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-2">
            Menu Utama
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                    ? 'bg-indigo-50 text-indigo-700 font-medium' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Storage / Plan Quota Info (Optional UI detail) */}
        <div className="p-6 m-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium text-slate-700">Status Pro</span>
          </div>
          <p className="text-xs text-slate-500 mb-3">Anda memiliki akses tak terbatas ke semua fitur generator.</p>
        </div>
      </aside>

      {/* MAIN LAYOUT (Header + Content) */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* HEADER */}
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] z-0">
          
          {/* Header Left: Search / Title */}
          <div className="flex items-center gap-4 flex-1">
            <h1 className="text-2xl font-bold text-slate-800 hidden lg:block">
              {activeTab}
            </h1>
            <div className="hidden md:flex items-center bg-slate-50 rounded-full px-4 py-2 ml-4 border border-slate-200 w-64 focus-within:ring-2 focus-within:ring-indigo-100 focus-within:border-indigo-300 transition-all">
              <Search className="w-4 h-4 text-slate-400 mr-2" />
              <input 
                type="text" 
                placeholder="Cari rencana..." 
                className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder-slate-400"
              />
            </div>
          </div>

          {/* Header Right: Actions & Profile */}
          <div className="flex items-center gap-4 lg:gap-6">
            <button className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>

            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-sm shadow-indigo-200 active:scale-95">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Buat Rencana Baru</span>
            </button>

            <button className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-slate-100">
              <div className="text-right hidden md:block">
                <p className="text-sm font-medium text-slate-700">Alex Darmawan</p>
                <p className="text-xs text-slate-500">Mahasiswa</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-indigo-100 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
                 <User className="w-5 h-5 text-indigo-600" />
                 {/* Jika ada foto profil, gunakan tag img di sini */}
              </div>
            </button>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Area atas konten (Bisa untuk ringkasan/widget) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8">
              <div>
                <h2 className="text-lg font-semibold text-slate-800">Ringkasan Aktivitas</h2>
                <p className="text-sm text-slate-500">Pantau terus perkembangan belajar Anda minggu ini.</p>
              </div>
            </div>

            {/* SISTEM GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              
              {/* Render Dummy Cards */}
              {studyPlans.map((plan) => (
                <div 
                  key={plan.id} 
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-indigo-100 transition-all duration-300 group cursor-pointer flex flex-col"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <button className="text-slate-400 hover:text-slate-600 p-1">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="mb-6 flex-1">
                    <h3 className="font-semibold text-slate-800 text-lg leading-tight mb-1 group-hover:text-indigo-600 transition-colors">
                      {plan.title}
                    </h3>
                    <p className="text-sm text-slate-500">{plan.subject}</p>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-slate-700">Progres</span>
                      <span className="text-indigo-600 font-semibold">{plan.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 mb-4 overflow-hidden">
                      <div 
                        className="bg-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${plan.progress}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                      <Clock className="w-4 h-4 text-orange-400" />
                      <span>Sisa {plan.daysLeft} Hari</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Card Tambah Baru (Bagian dari Grid) */}
              <div className="bg-transparent border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 text-slate-500 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all cursor-pointer min-h-[280px]">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                  <Plus className="w-6 h-6" />
                </div>
                <p className="font-medium">Buat Rencana Baru</p>
                <p className="text-xs text-center mt-1 opacity-70">Gunakan AI untuk generate jadwal belajar Anda.</p>
              </div>

            </div>
          </div>
          
        </main>
      </div>
      
    </div>
  );
}