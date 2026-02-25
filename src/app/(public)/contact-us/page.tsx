"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useData } from "@/context/DataContext";

export default function ContactUs() {
  const { t } = useLanguage();
  const { settings } = useData();

  return (
    <>
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="w-full max-w-7xl">
          {/*  Hero Section  */}
          <div className="mb-12 text-center md:text-left md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
              {t.contactPage.title} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">{t.contactPage.titleAccent}</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              {t.contactPage.description}
            </p>
          </div>
          {/*  Split Layout Container  */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/*  Left Column: Contact Form  */}
            <div className="lg:col-span-7 w-full order-2 lg:order-1">
              <div className="glass-panel p-6 sm:p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none">
                <form action="#" className="space-y-6" method="POST">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/*  First Name  */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="first-name">{t.contactPage.form.firstName}</label>
                      <div className="relative">
                        <input className="block w-full h-12 rounded-lg border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-all duration-200" id="first-name" placeholder="Jane" type="text" />
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                          <span className="material-symbols-outlined text-lg">person</span>
                        </div>
                      </div>
                    </div>
                    {/*  Last Name  */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="last-name">{t.contactPage.form.lastName}</label>
                      <div className="relative">
                        <input className="block w-full h-12 rounded-lg border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-all duration-200" id="last-name" placeholder="Doe" type="text" />
                      </div>
                    </div>
                  </div>
                  {/*  Email  */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="email">{t.contactPage.form.email}</label>
                    <div className="relative">
                      <input className="block w-full h-12 rounded-lg border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-all duration-200" id="email" placeholder="jane@company.com" type="email" />
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                        <span className="material-symbols-outlined text-lg">mail</span>
                      </div>
                    </div>
                  </div>
                  {/*  Project Type  */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="project-type">{t.contactPage.form.interest}</label>
                    <div className="relative">
                      <select className="block w-full h-12 rounded-lg border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-4 py-3 text-slate-900 dark:text-white focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-all duration-200 appearance-none" id="project-type">
                        <option disabled defaultValue="" value="">{t.contactPage.form.selectType}</option>
                        <option value="web-design">{t.contactPage.form.webDev}</option>
                        <option value="branding">{t.contactPage.form.branding}</option>
                        <option value="marketing">{t.contactPage.form.marketing}</option>
                        <option value="other">{t.contactPage.form.other}</option>
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                        <span className="material-symbols-outlined">expand_more</span>
                      </div>
                    </div>
                  </div>
                  {/*  Message  */}
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="message">{t.contactPage.form.message}</label>
                    <textarea className="block w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-primary focus:ring-opacity-50 transition-all duration-200 resize-none" id="message" placeholder={t.contactPage.form.placeholder} rows={4}></textarea>
                  </div>
                  {/*  Submit Button  */}
                  <div className="pt-2">
                    <button className="w-full h-12 flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-hover text-white font-bold text-base shadow-lg shadow-primary/30 transition-all duration-200 transform hover:-translate-y-0.5 focus:ring-4 focus:ring-primary/20" type="submit">
                      <span>{t.contactPage.form.send}</span>
                      <span className="material-symbols-outlined text-lg">send</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/*  Right Column: Info & Map  */}
            <div className="lg:col-span-5 w-full flex flex-col gap-6 order-1 lg:order-2">
              {/*  Contact Info Card  */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{t.contactPage.details}</h3>
                <div className="space-y-6">
                  {/*  Address  */}
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{t.contactPage.office}</p>
                      <p className="text-base text-slate-900 dark:text-white font-medium leading-relaxed">
                        {settings.address}
                      </p>
                    </div>
                  </div>
                  {/*  Email  */}
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <span className="material-symbols-outlined">alternate_email</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{t.contactPage.email}</p>
                      <a className="text-base text-slate-900 dark:text-white font-medium hover:text-primary transition-colors" href="mailto:hello@pixup.agency">
                        hello@pixup.agency
                      </a>
                    </div>
                  </div>
                  {/*  Phone  */}
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{t.contactPage.phone}</p>
                      <a className="text-base text-slate-900 dark:text-white font-medium hover:text-primary transition-colors">
                        {settings.phone}
                      </a>
                    </div>
                  </div>
                </div>
                {/*  Socials  */}
                <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">{t.contactPage.followUs}</p>
                  <div className="flex gap-4">
                    <a className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all duration-300" href="#">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </a>
                    <a className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all duration-300" href="#">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                    </a>
                    <a className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all duration-300" href="#">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
              {/*  Map  */}
              <div className="h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 relative group">
                <div className="absolute inset-0 z-10 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors pointer-events-none"></div>
                <img alt="Map Vendee in France" className="w-full h-full object-cover filter contrast-75 saturate-50 hover:contrast-100 hover:saturate-100 transition-all duration-500" data-alt="Map Vendee in France" data-location="Vendée" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArd9O43PkJpoOOIvzAg4_svk_mQgqVnGIP8yVqFz_1JNGIjnVXfGStM-d6l7PPxEI2B6QCHeaDzReIqsMo0KZN-PE4UfL10jX8JDqi2P-3_XaUtVDcNRgeeC5QVRG7E4bvwzbO5TxaWK9MiLV-U0MfGJ7lUkViaXPQ-7YNbRdMwBVV2tUcNxMlPkgTKDH4MRSoy2f2ZP7-Y7vrZltzvQwgIiMASYV12c1CN4ajl_ZQLPDDrjeL9_SYwBOBU1x9-2l2e6u4hhIxTtci" />
                <div className="absolute bottom-4 right-4 z-20">
                  <a className="bg-white text-slate-900 text-xs font-bold px-3 py-2 rounded-lg shadow-lg hover:bg-primary hover:text-white transition-colors flex items-center gap-1" href="#">
                    <span className="material-symbols-outlined text-sm">directions</span>
                    {t.contactPage.getDirections}
                  </a>
                </div>
              </div>
              <div className="h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 relative group">
                {/* Overlay subtil au-dessus de la carte */}
                <div className="absolute inset-0 z-10 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors pointer-events-none"></div>
                {/* Google Maps Iframe */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.12345!2d-1.23456!3d46.12345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDA3JzM0LjUiTiAxwrAxNCcwNC40Ilc!5e0!3m2!1sfr!2sfr!4v123456789" width="600" height="450" style={{ border: 0 }} loading="lazy"></iframe>
                {/* Bouton d'itinéraire */}
                <div className="absolute bottom-4 right-4 z-20">
                  <a
                    className="bg-white text-slate-900 text-xs font-bold px-3 py-2 rounded-lg shadow-lg hover:bg-primary hover:text-white transition-colors flex items-center gap-1"
                    href="https://www.google.com/maps/dir/?api=1&destination=Vendee+France"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-sm">directions</span>
                    {t.contactPage.getDirections}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}