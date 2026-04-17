import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <section className="pt-32 pb-18 bg-linear-to-b from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>

          <p className="text-gray-600 mb-6">Last Updated: July 2025</p>

          <p className="text-gray-600 max-w-4xl leading-relaxed">
            At Glowave, we value your privacy and are committed to protecting
            your personal data. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our
            website or use our services.
          </p>
        </div>

        {/* Layout */}

        <div className="grid md:grid-cols-[260px_1fr] gap-16">
          {/* Table of Contents */}

          <aside className="hidden md:block sticky top-32 h-fit">
            <h3 className="font-bold mb-4">Contents</h3>

            <ul className="space-y-3 text-sm text-gray-700">
              <li>
                <a href="#information">Information We Collect</a>
              </li>
              <li>
                <a href="#usage">How We Use Information</a>
              </li>
              <li>
                <a href="#cookies">Cookies & Tracking</a>
              </li>
              <li>
                <a href="#sharing">Information Sharing</a>
              </li>
              <li>
                <a href="#security">Data Security</a>
              </li>
              <li>
                <a href="#retention">Data Retention</a>
              </li>
              <li>
                <a href="#rights">Your Privacy Rights</a>
              </li>
              <li>
                <a href="#thirdparty">Third-Party Services</a>
              </li>
              <li>
                <a href="#updates">Policy Updates</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </aside>

          {/* Content */}

          <div className="space-y-12 text-gray-700 leading-relaxed">
            {/* Section */}

            <section id="information">
              <h2 className="text-2xl font-bold mb-3">
                Information We Collect
              </h2>

              <p>
                We may collect personal information that you voluntarily provide
                when interacting with our website or services. This may include
                your name, email address, company name, phone number, and other
                contact details submitted through forms.
              </p>

              <p>
                We may also collect non-personal information such as browser
                type, operating system, IP address, and usage patterns to
                improve our services and enhance user experience.
              </p>
            </section>

            <section id="usage">
              <h2 className="text-2xl font-bold mb-3">
                How We Use Your Information
              </h2>

              <p>
                Glowave uses collected information to provide and improve our
                services, respond to inquiries, deliver customer support, and
                personalize user experiences.
              </p>

              <p>
                We may also use your information to send updates, newsletters,
                marketing communications, or service announcements related to
                our products and services.
              </p>
            </section>

            <section id="cookies">
              <h2 className="text-2xl font-bold mb-3">
                Cookies & Tracking Technologies
              </h2>

              <p>
                Our website may use cookies and similar tracking technologies to
                analyze user behavior, remember preferences, and improve overall
                website performance.
              </p>

              <p>
                Users can modify browser settings to disable cookies, however
                certain features of the website may not function properly if
                cookies are disabled.
              </p>
            </section>

            <section id="sharing">
              <h2 className="text-2xl font-bold mb-3">
                Information Sharing
              </h2>

              <p>
                We do not sell, rent, or trade personal information to third
                parties. However, we may share information with trusted service
                providers who assist in operating our website, conducting
                business, or delivering services.
              </p>
            </section>

            <section id="security">
              <h2 className="text-2xl font-bold mb-3">Data Security</h2>

              <p>
                Glowave implements industry-standard security practices to
                protect personal data from unauthorized access, disclosure,
                alteration, or destruction.
              </p>

              <p>
                While we strive to use commercially acceptable means to protect
                your information, no method of transmission over the internet is
                completely secure.
              </p>
            </section>

            <section id="retention">
              <h2 className="text-2xl font-bold mb-3">Data Retention</h2>

              <p>
                We retain personal information only as long as necessary to
                fulfill the purposes outlined in this policy, unless a longer
                retention period is required by law.
              </p>
            </section>

            <section id="rights">
              <h2 className="text-2xl font-bold mb-3">
                Your Privacy Rights
              </h2>

              <p>
                Depending on your location, you may have rights regarding your
                personal data including access, correction, deletion, or
                restriction of processing.
              </p>

              <p>
                If you wish to exercise any of these rights, please contact us.
              </p>
            </section>

            <section id="thirdparty">
              <h2 className="text-2xl font-bold mb-3">
                Third-Party Services
              </h2>

              <p>
                Our website may include integrations with third-party services
                such as analytics providers, marketing platforms, or social
                media tools.
              </p>

              <p>
                These services operate independently and have their own privacy
                policies.
              </p>
            </section>

            <section id="updates">
              <h2 className="text-2xl font-bold mb-3">Policy Updates</h2>

              <p>
                We may update this Privacy Policy periodically to reflect
                changes in our practices or legal requirements. Updated versions
                will be posted on this page.
              </p>
            </section>

            <section id="contact">
              <h2 className="text-2xl font-bold mb-3">Contact Us</h2>

              <p>
                If you have any questions regarding this Privacy Policy, please
                contact us:
              </p>

              <p className="font-medium mt-2">Email: contact@glowave.com</p>
            </section>

            {/* Back */}

            <div className="pt-10 border-t">
              <Link
                to="/contact"
                className="text-blue-600 font-semibold hover:underline"
              >
                Need help? Contact our team →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
