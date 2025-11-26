import React from 'react';

export const Privacy = () => {
  return (
    <div className="pt-20 pb-24 bg-light dark:bg-dark min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold mb-8 text-dark dark:text-white">Privacy Policy</h1>
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-300 space-y-6">
          <p className="text-sm text-gray-500">Last updated: October 26, 2023</p>
          
          <section>
            <h2 className="text-2xl font-bold text-dark dark:text-white mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, and payment information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark dark:text-white mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">
              We use the information we collect to provide, maintain, and improve our services, to process your transactions, to send you related information including confirmations and invoices, and to communicate with you about promotions and events.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark dark:text-white mb-4">3. Data Security</h2>
            <p className="leading-relaxed mb-4">
              We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. However, no internet transmission is completely secure.
            </p>
          </section>
          
           <section>
            <h2 className="text-2xl font-bold text-dark dark:text-white mb-4">4. Cookies</h2>
            <p className="leading-relaxed mb-4">
              We use cookies to improve your experience on our site. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};