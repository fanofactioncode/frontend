import React from "react";

import Badge from "@/components/ui/badge";

export default function TermsAndConditionsPage() {
  return (
    <main className="container py-16 sm:py-24 sm:px-28">
      <div className="flex flex-col justify-center items-center gap-2">
        <Badge size="lg">Terms of service</Badge>
        <h1 className="text-center text-4xl sm:text-6xl font-bold text-text mt-2">
          Our terms of service
        </h1>
        <p className="text-sm sm:text-base text-center text-text-sub mt-2 sm:mt-6">
          Read our terms below to learn more about your rights and
          responsibilities as a Dribbble user.
        </p>
      </div>
      <section className="py-16 space-y-14 text-sm sm:text-base text-text-sub leading-5">
        <div className="space-y-5 sm:space-y-8">
          <h3 className="text-base sm:text-lg text-text uppercase font-semibold">
            LAST UPDATED AUGUST 12, 2024
          </h3>
        </div>

        <div className="space-y-3">
          <h2 className="text-base sm:text-xl text-text uppercase font-semibold">
            Acceptance of Terms
          </h2>
          <p>
            By accessing or using the services provided by FanOfAction,
            including but not limited to purchasing tickets for movie
            screenings, you agree to comply with and be bound by these Terms and
            Conditions. If you do not agree to these terms, please do not use
            our services.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base sm:text-xl text-text uppercase font-semibold">
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
          <h2 className="text-base sm:text-xl text-text uppercase font-semibold">
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
          <h2 className="text-base sm:text-xl text-text uppercase font-semibold">
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
          <h2 className="text-base sm:text-xl text-text uppercase font-semibold">
            Film Schedule
          </h2>
          <p>
            The film schedule is subject to change without notice. We will make
            reasonable efforts to notify ticket holders of any changes via the
            contact information provided during the ticket purchase process.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base sm:text-xl text-text uppercase font-semibold">
            Copyright and Licensing
          </h2>
          <p>
            All films screened by FanOfAction are protected by copyright law.
            Unauthorized recording or distribution of the films is strictly
            prohibited. We hold the necessary licenses and permissions to screen
            films in public venues.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base sm:text-xl text-text uppercase font-semibold">
            Liability
          </h2>
          <p>
            FanOfAction and our theater partners are not responsible for any
            loss, damage, injury, or theft of personal belongings that may occur
            during your attendance at our screenings.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base sm:text-xl text-text uppercase font-semibold">
            Age Restrictions
          </h2>
          <p>
            Some films may have age restrictions or content advisories. Please
            check film details and ratings before purchasing tickets.
          </p>
          <p>
            By using FanOfAction, you acknowledge that you have read and
            understood this Privacy Policy and agree to its terms and
            conditions.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base sm:text-xl text-text uppercase font-semibold">
            Privacy Policy
          </h2>
          <p>
            We collect and store personal information as described in our
            Privacy Policy, which is accessible on our website.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base sm:text-xl text-text uppercase font-semibold">
            Changes to Terms and Conditions
          </h2>
          <p>
            We reserve the right to update or modify these Terms and Conditions
            at any time. You are responsible for reviewing these terms
            periodically to ensure your continued compliance.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-base sm:text-xl text-text uppercase font-semibold">
            Contact Information
          </h2>
          <p>
            If you have any questions or concerns about these Terms and
            Conditions, please contact us at: info@fanofaction.com.
          </p>
        </div>
      </section>
    </main>
  );
}
