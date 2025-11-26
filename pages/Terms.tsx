import React from 'react';

export const Terms = () => {
  return (
    <div className="pt-20 pb-24 bg-light dark:bg-dark min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold mb-8 text-dark dark:text-white">Terms & Conditions</h1>
         <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 space-y-6">
          <p className="text-sm text-gray-500">Last updated: October 26, 2023</p>
          
          <section>
            <h2 className="text-2xl font-bold text-dark dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed mb-4">
              By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark dark:text-white mb-4">2. Use License</h2>
            <p className="leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on NovaCorp's website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark dark:text-white mb-4">3. Limitations</h2>
            <p className="leading-relaxed mb-4">
              In no event shall NovaCorp or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on NovaCorp's website.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-bold text-dark dark:text-white mb-4">4. Governing Law</h2>
            <p className="leading-relaxed mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of California and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};