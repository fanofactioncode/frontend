import { Badge } from "@/components/ui/badge";

export function ContactInfo() {
  return (
    <section className="bg-[#ABB7C4]/10 py-16">
      <div className="container">
        <div className="flex flex-col gap-7 sm:flex-row">
          <div className="flex flex-col items-start gap-2 sm:flex-1">
            <Badge>Contact Info</Badge>
            <h2 className="text-3xl font-bold text-text sm:text-4xl">
              We are always happy to assist you
            </h2>
          </div>

          <div className="flex gap-6 sm:flex-1">
            <div className="flex-1 space-y-6">
              <h3 className="relative text-lg font-semibold text-text after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-[42px] after:rounded-full after:bg-[#FF499E] sm:text-xl">
                Email Address
              </h3>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-text sm:text-base">
                  info@fanofaction.com
                </p>
                <p className="text-sm text-text-sub sm:text-base">
                  Assistance hours: <br /> Everyday, Anytime
                </p>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="relative text-lg font-semibold text-text after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-[42px] after:rounded-full after:bg-[#FF499E] sm:text-xl">
                Number
              </h3>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-text sm:text-base">
                  +91 942 888 7271
                </p>
                <p className="text-sm text-text-sub sm:text-base">
                  Assistance hours: <br /> Everyday, Anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
