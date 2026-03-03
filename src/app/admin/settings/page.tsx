"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";
import AdminSidebar from "@/components/AdminSidebar";
import ImageUpload from "@/components/ImageUpload";
import AdminSection from "@/components/AdminSection";
import AdminInput from "@/components/AdminInput";
import AdminToggle from "@/components/AdminToggle";

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
    avatar: '',
    active: true
  });

  useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  const handleSettingsChange = (field: string, value: any) => {
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
        avatar: testimonial.avatar,
        active: testimonial.active !== undefined ? testimonial.active : true
      });
    } else {
      setEditingTestimonial(null);
      setTestimonialForm({
        name: '',
        role: '',
        content: '',
        avatar: '',
        active: true
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
              <AdminSection title={t.admin.contactInfo} description={t.admin.contactInfoDesc}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <AdminInput
                    label={t.admin.agencyName}
                    value={localSettings.agencyName}
                    onChange={(val) => handleSettingsChange('agencyName', val)}
                  />
                  <AdminInput
                    label={t.admin.contactEmail}
                    type="email"
                    value={localSettings.email}
                    onChange={(val) => handleSettingsChange('email', val)}
                  />
                  <AdminInput
                    label={t.admin.phoneNumber}
                    type="tel"
                    value={localSettings.phone}
                    onChange={(val) => handleSettingsChange('phone', val)}
                  />
                  <AdminInput
                    label={t.admin.address}
                    value={localSettings.address}
                    onChange={(val) => handleSettingsChange('address', val)}
                  />
                  <AdminInput
                    label={t.admin.adminPassword}
                    type="password"
                    value={localSettings.adminPassword || ''}
                    onChange={(val) => handleSettingsChange('adminPassword', val)}
                    placeholder="••••••••"
                  />
                </div>
              </AdminSection>

              {/* Founder Profile */}
              <AdminSection title={t.admin.founderProfile} description={t.admin.founderDesc}>
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="flex-shrink-0">
                    <ImageUpload
                      label={t.admin.avatar}
                      value={localSettings.founderAvatar}
                      onChange={(val) => handleSettingsChange('founderAvatar', val)}
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <AdminInput
                        label={t.admin.fullName}
                        value={localSettings.founderName}
                        onChange={(val) => handleSettingsChange('founderName', val)}
                      />
                      <AdminInput
                        label={t.admin.role}
                        value={localSettings.founderRole}
                        onChange={(val) => handleSettingsChange('founderRole', val)}
                      />
                    </div>
                    <label className="block">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.admin.bio}</span>
                      <textarea
                        className="mt-1 block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:border-primary focus:ring-primary sm:text-sm px-4 py-2.5 transition-all"
                        rows={4}
                        value={localSettings.founderBio}
                        onChange={(e) => handleSettingsChange('founderBio', e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              </AdminSection>

              {/* Testimonials */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 px-6 py-4">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{t.admin.testimonials}</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{t.admin.testimonialsDesc}</p>
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
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                              <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${testimonial.active ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                                {testimonial.active ? t.admin.active : t.admin.inactive}
                              </span>
                            </div>
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
              <AdminSection title={t.admin.socialConnections} description={t.admin.socialDesc}>
                <div className="space-y-4">
                  <AdminInput
                    label="LinkedIn"
                    icon="work"
                    value={localSettings.linkedin}
                    onChange={(val) => handleSettingsChange('linkedin', val)}
                  />
                  <AdminInput
                    label="Instagram"
                    icon="photo_camera"
                    value={localSettings.instagram}
                    onChange={(val) => handleSettingsChange('instagram', val)}
                  />
                  <AdminInput
                    label="Dribbble"
                    icon="sports_basketball"
                    value={localSettings.dribbble}
                    onChange={(val) => handleSettingsChange('dribbble', val)}
                  />
                </div>
              </AdminSection>

              <AdminSection title={t.admin.visibilitySettings} description={t.admin.visibilityDesc}>
                <div className="space-y-4">
                  <AdminToggle
                    label={t.admin.showPricing}
                    checked={localSettings.showPricing ?? true}
                    onChange={(val) => handleSettingsChange('showPricing', val)}
                  />
                  <AdminToggle
                    label={t.admin.showTestimonials}
                    checked={localSettings.showTestimonials ?? true}
                    onChange={(val) => handleSettingsChange('showTestimonials', val)}
                  />
                  <AdminToggle
                    label={t.admin.showBlog}
                    checked={localSettings.showBlog ?? true}
                    onChange={(val) => handleSettingsChange('showBlog', val)}
                  />
                </div>
              </AdminSection>

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
      </main >

      {/* Testimonial Modal */}
      {
        isTestimonialModalOpen && (
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
                <ImageUpload
                  label={t.admin.avatar}
                  value={testimonialForm.avatar}
                  onChange={(val) => setTestimonialForm({ ...testimonialForm, avatar: val })}
                />
                <div className="flex items-center gap-2 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={testimonialForm.active}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, active: e.target.checked })}
                      className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
                    />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{t.admin.active}</span>
                  </label>
                </div>
                <div className="flex gap-3 pt-4">
                  <button type="button" onClick={() => setIsTestimonialModalOpen(false)} className="flex-1 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">{t.admin.cancel}</button>
                  <button type="submit" className="flex-1 px-4 py-2 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:bg-blue-600 transition-all">{t.admin.save}</button>
                </div>
              </form>
            </div>
          </div>
        )
      }
    </div >
  );
}