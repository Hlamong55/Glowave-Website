import { Link } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";

function Refund() {
  return (
    <section className="pt-32 pb-18 bg-linear-to-b from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>

          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            At Glowave, we strive to deliver high-quality digital services. This
            Refund Policy outlines when refunds may be issued and how refund
            requests are handled.
          </p>
        </div>

        {/* Highlight Cards */}

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-7 rounded-2xl shadow-md border border-gray-300 text-center">
            <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-3" />

            <h3 className="text-lg font-bold mb-2">Eligible Refunds</h3>

            <p className="text-gray-700">
              Refunds may be issued if services have not been delivered as
              agreed or if cancellation occurs before project work begins.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 text-center">
            <FaTimesCircle className="text-red-500 text-4xl mx-auto mb-3" />

            <h3 className="text-lg font-bold mb-2">Non-Refundable</h3>

            <p className="text-gray-700">
              Completed work, delivered milestones, and consultation services
              are generally non-refundable.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 text-center">
            <FaClock className="text-blue-600 text-4xl mx-auto mb-3" />

            <h3 className="text-lg font-bold mb-2">Processing Time</h3>

            <p className="text-gray-700">
              Approved refunds are processed within 5-10 business days depending
              on the payment provider.
            </p>
          </div>
        </div>

        {/* Detailed Sections */}

        <div className="space-y-12 text-gray-700 leading-relaxed max-w-5xl mx-auto">
          <section>
            <h2 className="text-2xl font-bold mb-3">
              Service-Based Refunds
            </h2>

            <p>
              Glowave provides digital services such as website development, SEO
              strategies, and marketing campaigns. Refunds are evaluated based
              on project status and agreed milestones.
            </p>

            <p>
              If a project is canceled before work begins, clients may be
              eligible for a partial or full refund depending on the agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">
              Project Cancellation
            </h2>

            <p>
              Clients may request project cancellation at any time. However,
              refunds will only apply to work that has not yet been completed.
            </p>

            <p>
              Any completed design, development, or consulting work remains
              non-refundable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Milestone Payments</h2>

            <p>
              For projects delivered in stages, payments made for completed
              milestones are non-refundable. Future milestones may be cancelled
              if work has not started.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-3">Refund Processing</h2>

            <p>
              If a refund request is approved, it will be processed using the
              original payment method within 5-10 business days.
            </p>

            <p>
              Processing times may vary depending on the payment provider or
              banking institution.
            </p>
          </section>
        </div>

        {/* CTA */}

        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold mb-3">
            Need help with a refund request?
          </h3>

          <p className="text-gray-600 mb-5">Our team is here to assist you.</p>

          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 hover:scale-105 transition hover:shadow-xl"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Refund;
