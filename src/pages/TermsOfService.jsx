import { Link } from "react-router-dom";

function Terms() {
  return (
    <section className="pt-32 pb-16 bg-linear-to-b from-blue-100 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>

          <p className="text-gray-600  mb-6">Last Updated: July 2025</p>

          <p className="text-gray-600 max-w-3xl leading-relaxed">
            These Terms of Service govern your access to and use of Glowave's
            website, products, and services. By accessing or using our services,
            you agree to be bound by these terms and conditions.
          </p>
        </div>

        {/* Layout */}

        <div className="grid md:grid-cols-[260px_1fr] gap-16">
          {/* Sidebar */}

          <aside className="hidden md:block sticky top-32 h-fit">
            <h3 className="font-bold mb-4">Contents</h3>

            <ul className="space-y-3  text-gray-700">
              <li>
                <a href="#acceptance">Acceptance of Terms</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#accounts">User Responsibilities</a>
              </li>
              <li>
                <a href="#payments">Payments & Billing</a>
              </li>
              <li>
                <a href="#intellectual">Intellectual Property</a>
              </li>
              <li>
                <a href="#termination">Termination</a>
              </li>
              <li>
                <a href="#liability">Limitation of Liability</a>
              </li>
              <li>
                <a href="#changes">Changes to Terms</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </aside>

          {/* Content */}

          <div className="space-y-12 text-gray-700 leading-relaxed">
            <section id="acceptance">
              <h2 className="text-2xl font-bold mb-3">
                Acceptance of Terms
              </h2>

              <p>
                By accessing or using the Glowave website and services, you
                confirm that you have read, understood, and agreed to these
                Terms of Service.
              </p>

              <p>
                If you do not agree with any part of these terms, you must
                discontinue use of the website and services.
              </p>
            </section>

            <section id="services">
              <h2 className="text-2xl font-bold mb-3">Services</h2>

              <p>
                Glowave provides digital services including web development, SEO
                optimization, online marketing strategies, and digital
                consulting services.
              </p>

              <p>
                We reserve the right to modify, suspend, or discontinue any part
                of our services at any time without prior notice.
              </p>
            </section>

            <section id="accounts">
              <h2 className="text-2xl font-bold mb-3">
                User Responsibilities
              </h2>

              <p>
                Users agree to provide accurate information when interacting
                with Glowave services including contact forms or service
                requests.
              </p>

              <p>
                You are responsible for ensuring that your use of the website
                complies with applicable laws and regulations.
              </p>
            </section>

            <section id="payments">
              <h2 className="text-2xl font-bold mb-3">
                Payments & Billing
              </h2>

              <p>
                Certain services offered by Glowave may require payment. Pricing
                details will be clearly communicated before the service begins.
              </p>

              <p>
                Clients agree to complete payments according to the agreed
                payment schedule for project-based services.
              </p>
            </section>

            <section id="intellectual">
              <h2 className="text-2xl font-bold mb-3">
                Intellectual Property
              </h2>

              <p>
                All content, designs, code, and materials created by Glowave
                remain our intellectual property unless otherwise stated in a
                project agreement.
              </p>

              <p>
                Users may not reproduce, distribute, or modify any materials
                without permission.
              </p>
            </section>

            <section id="termination">
              <h2 className="text-2xl font-bold mb-3">Termination</h2>

              <p>
                Glowave reserves the right to terminate or suspend access to
                services if a user violates these Terms of Service.
              </p>

              <p>
                Termination may also occur if payment obligations are not
                fulfilled or services are misused.
              </p>
            </section>

            <section id="liability">
              <h2 className="text-2xl font-bold mb-3">
                Limitation of Liability
              </h2>

              <p>
                Glowave shall not be held liable for any indirect, incidental,
                or consequential damages arising from the use of our website or
                services.
              </p>

              <p>
                Our liability is limited to the maximum extent permitted by law.
              </p>
            </section>

            <section id="changes">
              <h2 className="text-2xl font-bold mb-3">Changes to Terms</h2>

              <p>
                Glowave may update these Terms of Service at any time. Updated
                versions will be posted on this page with the revised date.
              </p>

              <p>
                Continued use of the website after updates indicates acceptance
                of the revised terms.
              </p>
            </section>

            <section id="contact">
              <h2 className="text-2xl font-bold mb-3">Contact Us</h2>

              <p>
                If you have any questions regarding these Terms of Service,
                please contact us:
              </p>

              <p className="font-medium mt-2">Email: contact@glowave.com</p>
            </section>

            {/* Footer link */}

            <div className="pt-10 border-t">
              <Link
                to="/contact"
                className="text-blue-600 font-semibold hover:underline"
              >
                Need help? Contact our support →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Terms;
