import React from "react";

import Badge from "@/components/ui/badge";

export default function RefundAndCancellationPolicyPage() {
  return (
    <main className="container py-16 sm:py-24 sm:px-28">
      <div className="flex flex-col justify-center items-center gap-2">
        <Badge size="lg">Refund and Cancellation Policy</Badge>
        <h1 className="text-center text-3xl sm:text-6xl font-bold text-text mt-2">
          You better understand our refund and cancellation policy
        </h1>
        <p className="text-sm sm:text-base text-center text-text-sub mt-2 sm:mt-6">
          Read our terms below to about our refund and cancellation policy
        </p>
      </div>
      <section className="py-16 space-y-14 text-sm sm:text-base text-text-sub leading-5">
        <div className="space-y-5 sm:space-y-8">
          <h3 className="text-base sm:text-lg text-text uppercase font-semibold">
            LAST UPDATED AUGUST 12, 2024
          </h3>
        </div>

        <div className="space-y-12">
          <div className="space-y-3">
            <h2 className="text-base sm:text-xl text-text uppercase font-semibold">
              Refund Policy
            </h2>
            <p>
              At FanOfAction, we aim to provide our customers with an
              exceptional movie screening experience. This Refund Policy
              outlines our guidelines and procedures for processing refunds.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base sm:text-xl text-text font-semibold">
              Refund Eligibility
            </h3>
            <p>We offer refunds under the following circumstances:</p>

            <div className="border rounded-xl overflow-hidden">
              <div className="bg-text-sub/10 p-4">
                <h4 className="text-sm font-semibold text-text">
                  Cancelled Events
                </h4>
              </div>
              <div className="bg-background p-4">
                <p>
                  In the event of a screening cancellation, you will be entitled
                  to a full refund. We will make reasonable efforts to notify
                  ticket holders of any cancellations and initiate the refund
                  process automatically.
                </p>
              </div>
            </div>

            <div className="border rounded-xl overflow-hidden">
              <div className="bg-text-sub/10 p-4">
                <h4 className="text-sm font-semibold text-text">
                  Rescheduled Events
                </h4>
              </div>
              <div className="bg-background p-4">
                <p>
                  If an event is rescheduled, your tickets will remain valid for
                  the new date and time. If you are unable to attend the
                  rescheduled screening, you are eligible for a refund.
                </p>
              </div>
            </div>

            <div className="border rounded-xl overflow-hidden">
              <div className="bg-text-sub/10 p-4">
                <h4 className="text-sm font-semibold text-text">
                  Cancellation Request
                </h4>
              </div>
              <div className="bg-background p-4">
                <p>
                  If you wish to request a refund for reasons other than event
                  cancellation or rescheduling, please refer to section 2.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base sm:text-xl text-text font-semibold">
              How to Request a Refund
            </h3>
            <p>
              To request a refund for your ticket purchase, please follow these
              steps:
            </p>
            <p>
              Contact our customer support team at info@fanofaction.com within
              days of the event time. Provide your booking details, including
              the order number, name, and contact information. State the reason
              for your refund request.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base sm:text-xl text-text font-semibold">
              Refund Timeframes
            </h3>
            <p>
              Refunds will be processed within 5 business days after the
              approval of your refund request.
            </p>
            <p>
              Refunds will be issued to the original payment method used for the
              ticket purchase.
            </p>
            <p>
              The timeline for the refund to reflect in your account may vary
              depending on your payment provider.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base sm:text-xl text-text font-semibold">
              Non-Refundable Fees
            </h3>
            <p>Processing fees, if applicable, are non-refundable.</p>
            <p>
              Tickets for events with a clearly stated &quot;No Refund&quot;
              policy during the purchase process are non-refundable.
            </p>
            <p>
              Please respect the theater&apos;s rules and policies, including
              those related to conduct, food and drink, and safety.
            </p>
          </div>
        </div>

        <div className="space-y-14">
          <h2 className="text-base sm:text-xl text-text uppercase font-semibold">
            Cancellation Policy
          </h2>

          <div className="space-y-3">
            <h3 className="text-base sm:text-lg text-text font-semibold">
              Cancellation by Customers
            </h3>
            <p>
              If you wish to cancel your ticket purchase for reasons other than
              those mentioned in the Refund Policy, please contact us as soon as
              possible.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base sm:text-lg text-text font-semibold">
              Cancellation Procedures
            </h3>
            <p>
              To initiate the cancellation process, contact our customer support
              team at info@fanofaction.com.
            </p>
            <p>
              Provide your booking details, including the order number, name,
              and contact information.
            </p>
            <p>State the reason for your cancellation.</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base sm:text-lg text-text font-semibold">
              Cancellation Requirements
            </h3>
            <p>
              The eligibility for a cancellation refund will be assessed based
              on the terms and conditions of the specific event and the time of
              cancellation.
            </p>
            <p>
              Refunds for cancellations will be subject to the applicable
              cancellation fee and the terms outlined during the ticket
              purchase.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-base sm:text-lg text-text font-semibold">
              Cancellation by FanOfAction
            </h3>
            <p>
              We reserve the right to cancel an event due to unforeseen
              circumstances. In such cases, ticket holders will be entitled to a
              full refund as per the Refund Policy.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm sm:text-base text-text font-semibold">
              Contact Information
            </h3>
            <p>
              If you have any questions or concerns regarding our Refund and
              Cancellation Policy, please contact us at info@fanofaction.com.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
