"use client";

import React, { useState } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminSettings() {
  const { t } = useLanguage();
  const { settings, setSettings, testimonials, setTestimonials } = useData();
  const [localSettings, setLocalSettings] = useState(settings);
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<any>(null);
  const [testimonialForm, setTestimonialForm] = useState({
    name: '',
    role: '',
    content: '',
    avatar: ''
  });

  const handleSettingsChange = (field: string, value: string) => {
    setLocalSettings(prev => ({ ...prev, [field]: value }));
  };

  const saveSettings = () => {
    setSettings(localSettings);
    alert(t.admin.saveChanges);
  };

  const openTestimonialModal = (testimonial: any = null) => {
    if (testimonial) {
      setEditingTestimonial(testimonial);
      setTestimonialForm({
        name: testimonial.name,
        role: testimonial.role,
        content: testimonial.content,
        avatar: testimonial.avatar
      });
    } else {
      setEditingTestimonial(null);
      setTestimonialForm({
        name: '',
        role: '',
        content: '',
        avatar: ''
      });
    }
    setIsTestimonialModalOpen(true);
  };

  const handleSaveTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTestimonial) {
      setTestimonials(testimonials.map(t => t.id === editingTestimonial.id ? { ...t, ...testimonialForm } : t));
    } else {
      const newTestimonial = {
        id: Math.random().toString(36).substr(2, 9),
        ...testimonialForm
      };
      setTestimonials([...testimonials, newTestimonial]);
    }
    setIsTestimonialModalOpen(false);
  };

  const handleDeleteTestimonial = (id: string) => {
    if (window.confirm(t.admin.confirmDeleteTestimonial)) {
      setTestimonials(testimonials.filter(t => t.id !== id));
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark transition-colors">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
        <div className="container mx-auto max-w-5xl px-4 py-8 md:px-8">
          <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{t.admin.globalSettings}</h1>
              <p className="mt-1 text-slate-500 dark:text-slate-400">{t.admin.settingsDesc}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLocalSettings(settings)}
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm transition-all"
              >
                {t.admin.discard}
              </button>
              <button
                onClick={saveSettings}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm shadow-primary/30 transition-all"
              >
                {t.admin.saveChanges}
              </button>
            </div>
          </header>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Contact Information */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
                <div className="border-b border-slate-100 dark:border-slate-700 px-6 py-4">
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{t.admin.contactInfo}</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.admin.contactInfoDesc}</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.admin.agencyName}</span>
                      <input
                        className="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm"
                        type="text"
                        value={localSettings.agencyName}
                        onChange={(e) => handleSettingsChange('agencyName', e.target.value)}
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.admin.contactEmail}</span>
                      <input
                        className="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm"
                        type="email"
                        value={localSettings.email}
                        onChange={(e) => handleSettingsChange('email', e.target.value)}
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.admin.phoneNumber}</span>
                      <input
                        className="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm"
                        type="tel"
                        value={localSettings.phone}
                        onChange={(e) => handleSettingsChange('phone', e.target.value)}
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.admin.address}</span>
                      <input
                        className="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm"
                        type="text"
                        value={localSettings.address}
                        onChange={(e) => handleSettingsChange('address', e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Founder Profile */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
                <div className="border-b border-slate-100 dark:border-slate-700 px-6 py-4">
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{t.admin.founderProfile}</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.admin.founderDesc}</p>
                </div>
                <div className="p-6">
                  <div className="flex flex-col gap-6 md:flex-row">
                    <div className="flex-shrink-0">
                      <span className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t.admin.avatar}</span>
                      <div className="relative group size-32 overflow-hidden rounded-full border-4 border-slate-100 dark:border-slate-700 shadow-sm cursor-pointer">
                        <img
                          alt="Founder"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          src={localSettings.founderAvatar}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                          <span className="material-symbols-outlined text-white">edit</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <label className="block">
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.admin.fullName}</span>
                          <input
                            className="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm"
                            type="text"
                            value={localSettings.founderName}
                            onChange={(e) => handleSettingsChange('founderName', e.target.value)}
                          />
                        </label>
                        <label className="block">
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.admin.role}</span>
                          <input
                            className="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm"
                            type="text"
                            value={localSettings.founderRole}
                            onChange={(e) => handleSettingsChange('founderRole', e.target.value)}
                          />
                        </label>
                      </div>
                      <label className="block">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.admin.bio}</span>
                        <textarea
                          className="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm"
                          rows={4}
                          value={localSettings.founderBio}
                          onChange={(e) => handleSettingsChange('founderBio', e.target.value)}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">{t.admin.testimonials}</h2>
                    <p className="text-sm text-slate-500">{t.admin.testimonialsDesc}</p>
                  </div>
                  <button
                    onClick={() => openTestimonialModal()}
                    className="flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/20 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    {t.admin.addTestimonial}
                  </button>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-700">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="flex items-start gap-4 p-6 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors group">
                      <img alt={testimonial.name} className="h-10 w-10 rounded-full object-cover ring-2 ring-white dark:ring-slate-800" src={testimonial.avatar || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                            <p className="text-xs text-slate-400 dark:text-slate-500">{testimonial.role}</p>
                          </div>
                          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => openTestimonialModal(testimonial)} className="text-slate-400 hover:text-primary transition-colors" title={t.admin.edit}>
                              <span className="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                            <button onClick={() => handleDeleteTestimonial(testimonial.id)} className="text-slate-400 hover:text-red-500 transition-colors" title={t.admin.delete}>
                              <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                          </div>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">"{testimonial.content}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {/* Social connections */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
                <div className="border-b border-slate-100 dark:border-slate-700 px-6 py-4">
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{t.admin.socialConnections}</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{t.admin.socialDesc}</p>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">LinkedIn</label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-[20px]">work</span>
                      </div>
                      <input
                        className="block w-full rounded-lg border-slate-300 dark:border-slate-700 pl-10 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm"
                        type="text"
                        value={localSettings.linkedin}
                        onChange={(e) => handleSettingsChange('linkedin', e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Instagram</label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-[20px]">photo_camera</span>
                      </div>
                      <input
                        className="block w-full rounded-lg border-slate-300 dark:border-slate-700 pl-10 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm"
                        type="text"
                        value={localSettings.instagram}
                        onChange={(e) => handleSettingsChange('instagram', e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Dribbble</label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 text-[20px]">sports_basketball</span>
                      </div>
                      <input
                        className="block w-full rounded-lg border-slate-300 dark:border-slate-700 pl-10 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm"
                        type="text"
                        value={localSettings.dribbble}
                        onChange={(e) => handleSettingsChange('dribbble', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Status and Actions */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-primary/10 to-transparent p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">{t.admin.siteStatus}</h3>
                    <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/20 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-400">
                      <span className="mr-1.5 h-2 w-2 rounded-full bg-green-500"></span>
                      Live
                    </span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">98%</span>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{t.admin.uptime}</span>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm p-4">
                <h3 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">{t.admin.quickActions}</h3>
                <div className="flex flex-col gap-2">
                  <button className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium transition-colors text-left group">
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 group-hover:text-primary">cached</span>
                      {t.admin.clearCache}
                    </span>
                  </button>
                  <button className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium transition-colors text-left group">
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 group-hover:text-primary">backup</span>
                      {t.admin.backupData}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Testimonial Modal */}
      {isTestimonialModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 dark:bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 border dark:border-slate-800">
            <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-white">{editingTestimonial ? t.admin.editTestimonial : t.admin.addTestimonial}</h3>
              <button onClick={() => setIsTestimonialModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={handleSaveTestimonial} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t.admin.name}</label>
                <input
                  required
                  type="text"
                  value={testimonialForm.name}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t.admin.role}</label>
                <input
                  required
                  type="text"
                  value={testimonialForm.role}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, role: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="e.g. CEO at Techflow"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{t.admin.answer}</label>
                <textarea
                  required
                  value={testimonialForm.content}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, content: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all h-24"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Avatar URL</label>
                <input
                  required
                  type="text"
                  value={testimonialForm.avatar}
                  onChange={(e) => setTestimonialForm({ ...testimonialForm, avatar: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setIsTestimonialModalOpen(false)} className="flex-1 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">{t.admin.cancel}</button>
                <button type="submit" className="flex-1 px-4 py-2 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:bg-blue-600 transition-all">{t.admin.save}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}