import React from "react";
import Link from "next/link";

import Badge from "@/components/ui/badge";

export default function TermsAndConditionsPage() {
  return (
    <main className="container py-16 sm:px-28 sm:py-24">
      <div className="flex flex-col items-center justify-center gap-2">
        <Badge size="lg">Terms of service</Badge>
        <h1 className="mt-2 text-center text-4xl font-bold text-text sm:text-6xl">
          Our terms of service
        </h1>
        <p className="mt-2 text-center text-sm text-text-sub sm:mt-6 sm:text-base">
          Read our terms below to learn more about your rights and
          responsibilities as a Dribbble user.
        </p>
      </div>
      <section className="space-y-14 py-16 text-sm leading-5 text-text-sub sm:text-base">
        <div className="space-y-5 sm:space-y-8">
          <h3 className="text-base font-semibold uppercase text-text sm:text-lg">
            LAST UPDATED AUGUST 12, 2024
          </h3>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-semibold uppercase text-text sm:text-xl">
            Acceptance of Terms
          </h2>
          <p>
            By accessing or using the services provided by{" "}
            <Link href="/" className="underline">
              FanOfAction
            </Link>
            , including but not limited to purchasing tickets for movie
            screenings, you agree to comply with and be bound by these Terms and
            Conditions. If you do not agree to these terms, please do not use
            our services.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-semibold uppercase text-text sm:text-xl">
            Ticket Purchases
          </h2>
          <p>
            All ticket sales are final unless otherwise specified. Refunds or
            exchanges may be provided in accordance with our Cancellation
            Policy.
          </p>
          <p>
            Tickets may be purchased online through our website or at the venue,
            subject to availability. Please bring a valid photo ID and the
            purchase confirmation (either printed or digital) when attending
            screenings.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-semibold uppercase text-text sm:text-xl">
            Cancellation Policy
          </h2>
          <p>
            If you need to cancel your ticket purchase, please contact us as
            soon as possible. Refund eligibility and processing times may vary
            based on the specific event. Detailed information on cancellations
            and refunds will be provided at the time of ticket purchase.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-semibold uppercase text-text sm:text-xl">
            Screening Policies
          </h2>
          <p>
            Attendees must arrive at the screening venue at least 10 minutes
            before the scheduled start time.
          </p>
          <p>Latecomers may not be admitted once the screening has started.</p>
          <p>
            Please respect the theater&apos;s rules and policies, including
            those related to conduct, food and drink, and safety.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-semibold uppercase text-text sm:text-xl">
            Film Schedule
          </h2>
          <p>
            The film schedule is subject to change without notice. We will make
            reasonable efforts to notify ticket holders of any changes via the
            contact information provided during the ticket purchase process.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-semibold uppercase text-text sm:text-xl">
            Copyright and Licensing
          </h2>
          <p>
            All films screened by{" "}
            <Link href="/" className="underline">
              FanOfAction
            </Link>{" "}
            are protected by copyright law. Unauthorized recording or
            distribution of the films is strictly prohibited. We hold the
            necessary licenses and permissions to screen films in public venues.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-semibold uppercase text-text sm:text-xl">
            Liability
          </h2>
          <p>
            <Link href="/" className="underline">
              FanOfAction
            </Link>{" "}
            and our theater partners are not responsible for any loss, damage,
            injury, or theft of personal belongings that may occur during your
            attendance at our screenings.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-semibold uppercase text-text sm:text-xl">
            Age Restrictions
          </h2>
          <p>
            Some films may have age restrictions or content advisories. Please
            check film details and ratings before purchasing tickets.
          </p>
          <p>
            By using{" "}
            <Link href="/" className="underline">
              FanOfAction
            </Link>
            , you acknowledge that you have read and understood this Privacy
            Policy and agree to its terms and conditions.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-semibold uppercase text-text sm:text-xl">
            Privacy Policy
          </h2>
          <p>
            We collect and store personal information as described in our{" "}
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>
            , which is accessible on our website.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-semibold uppercase text-text sm:text-xl">
            Changes to Terms and Conditions
          </h2>
          <p>
            We reserve the right to update or modify these Terms and Conditions
            at any time. You are responsible for reviewing these terms
            periodically to ensure your continued compliance.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base font-semibold uppercase text-text sm:text-xl">
            Contact Information
          </h2>
          <p>
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at:{" "}
            <Link
              href="mailto:info@fanofaction.com"
              target="_blank"
              className="underline"
            >
              info@fanofaction.com
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
