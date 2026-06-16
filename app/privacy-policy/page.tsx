import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | TIMBERMEN TREE SERVICES',
  description: 'Privacy policy for TIMBERMEN TREE SERVICES - How we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">
          Effective Date: June 16, 2026<br />
          Last Updated: June 16, 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              TIMBERMEN TREE SERVICES ("we," "our," or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website or use our tree care services in Springfield, Missouri.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect personal information that you provide to us, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Property location and service details</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we may automatically collect certain information:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>IP address and device information</li>
              <li>Browser type and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
              <li>Analytics data through Google Tag Manager (GTM)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Provide, operate, and maintain our tree care services</li>
              <li>Process service requests and schedule appointments</li>
              <li>Send service updates, quotes, and invoices</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website and services</li>
              <li>Analyze website usage and user behavior</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to track activity on our website and
              store certain information. We use Google Tag Manager to manage analytics and marketing tags.
            </p>
            <p className="text-gray-700 mb-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Share Your Information</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share
              your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li><strong>Service Providers:</strong> We may share information with third-party service
              providers who perform services on our behalf (e.g., payment processing, analytics)</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by
              law or in response to valid legal processes</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or
              sale of assets, your information may be transferred</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your
              personal information against unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Objection to processing of your information</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p className="text-gray-700 mb-4">
              To exercise these rights, please contact us using the information below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices or content of these external sites. We encourage you to review the
              privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If you believe we have collected information
              from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-900 font-semibold mb-2">TIMBERMEN TREE SERVICES</p>
              <p className="text-gray-700">Springfield, Missouri</p>
              <p className="text-gray-700">Website: <a href="https://timbermentrees.com" className="text-green-700 hover:text-green-800">timbermentrees.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
