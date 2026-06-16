import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | TIMBERMEN TREE SERVICES',
  description: 'Terms of service for TIMBERMEN TREE SERVICES - Professional tree care services in Springfield, Missouri.',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-sm text-gray-600 mb-8">
          Effective Date: June 16, 2026<br />
          Last Updated: June 16, 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing our website or using our tree care services, you agree to be bound by these
              Terms of Service and our Privacy Policy. If you do not agree to these terms, please do
              not use our website or services.
            </p>
            <p className="text-gray-700 mb-4">
              TIMBERMEN TREE SERVICES ("we," "our," or "us") provides professional tree care and
              removal services in Springfield, Missouri. These terms govern your use of our services
              and website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services</h2>
            <p className="text-gray-700 mb-4">
              TIMBERMEN TREE SERVICES offers the following professional tree care services:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Tree Removal</li>
              <li>Pruning & Trimming</li>
              <li>Tree Health Care</li>
              <li>Wood Chipping & Debris Hauling</li>
              <li>Stump Grinding/Removal</li>
              <li>Lot & Brush Clearing</li>
            </ul>
            <p className="text-gray-700 mb-4">
              All services are subject to availability, scheduling, and our professional assessment
              of safety and feasibility.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Estimates and Pricing</h2>
            <p className="text-gray-700 mb-4">
              Service estimates are provided based on our professional assessment of the work required.
              Estimates are not final quotes and may be subject to change based on:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Actual conditions discovered during service</li>
              <li>Additional work requested by the customer</li>
              <li>Unforeseen complications or safety hazards</li>
              <li>Access or equipment limitations</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Final pricing will be confirmed before work begins. We reserve the right to adjust
              pricing if conditions differ materially from the initial assessment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Safety and Professional Standards</h2>
            <p className="text-gray-700 mb-4">
              Safety is our top priority. We reserve the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Refuse or postpone service if conditions are deemed unsafe</li>
              <li>Modify the scope of work to ensure safety compliance</li>
              <li>Stop work if weather conditions or other factors create hazards</li>
              <li>Require property owner cooperation in maintaining safe work areas</li>
            </ul>
            <p className="text-gray-700 mb-4">
              All work is performed in accordance with industry best practices and applicable
              safety regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Customer Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              As a customer, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Provide accurate information about property access and tree conditions</li>
              <li>Obtain necessary permissions from property owners or HOAs</li>
              <li>Clear work areas of personal property, vehicles, and obstacles</li>
              <li>Secure pets and notify us of any property hazards</li>
              <li>Notify utility companies if service lines may be affected</li>
              <li>Make timely payment according to agreed terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms</h2>
            <p className="text-gray-700 mb-4">
              Payment terms will be specified in your service agreement. Generally:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Payment is due upon completion of services unless otherwise agreed</li>
              <li>We accept cash, check, and major credit cards</li>
              <li>Late payments may be subject to finance charges</li>
              <li>We reserve the right to suspend services for non-payment</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cancellation and Rescheduling</h2>
            <p className="text-gray-700 mb-4">
              We understand that schedules change. Please notify us as soon as possible if you need
              to cancel or reschedule services. Cancellations made less than 24 hours before scheduled
              service may be subject to a cancellation fee.
            </p>
            <p className="text-gray-700 mb-4">
              We reserve the right to reschedule services due to weather, equipment issues, or other
              circumstances beyond our control.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the fullest extent permitted by law:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Our liability is limited to the amount paid for services</li>
              <li>We are not liable for indirect, consequential, or incidental damages</li>
              <li>We are not responsible for pre-existing property damage or conditions</li>
              <li>We are not liable for damage caused by acts of nature or third parties</li>
              <li>Claims must be made within 30 days of service completion</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We carry appropriate insurance coverage as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on our website, including text, graphics, logos, images, and software, is
              the property of TIMBERMEN TREE SERVICES or its content suppliers and is protected by
              copyright and trademark laws.
            </p>
            <p className="text-gray-700 mb-4">
              You may not reproduce, distribute, modify, or create derivative works from our website
              content without express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-4">
              Our services and website are provided "as is" and "as available" without warranties of
              any kind, either express or implied. We do not warrant that our services will be
              uninterrupted, error-free, or free from viruses or other harmful components.
            </p>
            <p className="text-gray-700 mb-4">
              While we strive for excellence, tree care involves inherent uncertainties and we cannot
              guarantee specific outcomes for tree health or growth.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms of Service are governed by the laws of the State of Missouri, without
              regard to its conflict of law provisions. Any disputes arising from these terms or
              our services shall be resolved in the courts of Greene County, Missouri.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms of Service at any time. Changes will be
              effective immediately upon posting to our website. Your continued use of our services
              after changes are posted constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Severability</h2>
            <p className="text-gray-700 mb-4">
              If any provision of these terms is found to be invalid or unenforceable, the remaining
              provisions will continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
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
