import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sitemap | TIMBERMEN TREE SERVICES',
  description: 'Sitemap for TIMBERMEN TREE SERVICES - Find all pages and services on our website.',
}

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
        <p className="text-gray-600 mb-12">
          Browse all pages and sections of the TIMBERMEN TREE SERVICES website.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Main Pages</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-green-700 hover:text-green-800 font-medium text-lg flex items-center gap-2">
                  <span className="text-gray-400">→</span> Home
                </Link>
                <p className="text-gray-600 ml-6 mt-1">Welcome to TIMBERMEN TREE SERVICES</p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services</h2>
            <p className="text-gray-600 mb-4">Professional tree care services we offer:</p>
            <ul className="space-y-3">
              <li>
                <Link href="/#services" className="text-green-700 hover:text-green-800 font-medium text-lg flex items-center gap-2">
                  <span className="text-gray-400">→</span> All Services
                </Link>
              </li>
              <li className="ml-6">
                <div className="text-gray-700">
                  <p className="font-medium">• Tree Removal</p>
                  <p className="text-sm text-gray-600 ml-4">Safe and efficient tree removal services</p>
                </div>
              </li>
              <li className="ml-6">
                <div className="text-gray-700">
                  <p className="font-medium">• Pruning & Trimming</p>
                  <p className="text-sm text-gray-600 ml-4">Expert tree pruning and trimming</p>
                </div>
              </li>
              <li className="ml-6">
                <div className="text-gray-700">
                  <p className="font-medium">• Tree Health Care</p>
                  <p className="text-sm text-gray-600 ml-4">Comprehensive tree health services</p>
                </div>
              </li>
              <li className="ml-6">
                <div className="text-gray-700">
                  <p className="font-medium">• Wood Chipping & Debris Hauling</p>
                  <p className="text-sm text-gray-600 ml-4">Complete debris removal and cleanup</p>
                </div>
              </li>
              <li className="ml-6">
                <div className="text-gray-700">
                  <p className="font-medium">• Stump Grinding/Removal</p>
                  <p className="text-sm text-gray-600 ml-4">Professional stump removal services</p>
                </div>
              </li>
              <li className="ml-6">
                <div className="text-gray-700">
                  <p className="font-medium">• Lot & Brush Clearing</p>
                  <p className="text-sm text-gray-600 ml-4">Land and brush clearing services</p>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Company Information</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/#about" className="text-green-700 hover:text-green-800 font-medium text-lg flex items-center gap-2">
                  <span className="text-gray-400">→</span> About Us
                </Link>
                <p className="text-gray-600 ml-6 mt-1">Learn about our company and expertise</p>
              </li>
              <li>
                <Link href="/#projects" className="text-green-700 hover:text-green-800 font-medium text-lg flex items-center gap-2">
                  <span className="text-gray-400">→</span> Projects
                </Link>
                <p className="text-gray-600 ml-6 mt-1">View our completed tree service projects</p>
              </li>
              <li>
                <Link href="/#testimonials" className="text-green-700 hover:text-green-800 font-medium text-lg flex items-center gap-2">
                  <span className="text-gray-400">→</span> Testimonials
                </Link>
                <p className="text-gray-600 ml-6 mt-1">Read what our customers say about us</p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact & Support</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/#contact" className="text-green-700 hover:text-green-800 font-medium text-lg flex items-center gap-2">
                  <span className="text-gray-400">→</span> Contact Us
                </Link>
                <p className="text-gray-600 ml-6 mt-1">Get in touch for a free quote</p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal & Policies</h2>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-green-700 hover:text-green-800 font-medium text-lg flex items-center gap-2">
                  <span className="text-gray-400">→</span> Privacy Policy
                </Link>
                <p className="text-gray-600 ml-6 mt-1">How we handle your personal information</p>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-green-700 hover:text-green-800 font-medium text-lg flex items-center gap-2">
                  <span className="text-gray-400">→</span> Terms of Service
                </Link>
                <p className="text-gray-600 ml-6 mt-1">Our service terms and conditions</p>
              </li>
            </ul>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-gray-700 mb-4">
                Can't find what you're looking for? Contact us and we'll be happy to help.
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-md transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
