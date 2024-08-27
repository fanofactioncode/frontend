import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Newsletter from "@/components/common/newsletter";
import Badge from "@/components/ui/badge";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="container py-16">
        <div className="flex flex-col justify-center items-center gap-2">
          <Badge>Privacy Policy</Badge>
          <h1 className="text-center text-4xl font-bold text-black">
            We are committed to your privacy
          </h1>
        <p className="text-sm text-center text-[#282828]">
            Learn more about how Dribbble collects and uses data and your rights
            as a Dribbble user.
          </p>
        </div>
        <div className="py-14 text-sm text-[#282828]">
          <h3 className="text-base text-black uppercase font-semibold">
            LAST UPDATED AUGUST 12, 2024
          </h3>

          <p className="text-justify mt-9">
            Thank you for visiting FanOfAction. At FanOfAction, we are committed
            to protecting your privacy and ensuring the security of your
            personal information. This Privacy Policy outlines how we collect,
            use, disclose, and protect your personal information when you use
            our website and services. By using FanOfAction, you consent to the
            practices described in this Privacy Policy.
          </p>

          <h2 className="text-base text-black uppercase font-semibold mt-12">
            Information We Collect
          </h2>
          <p className="text-justify mt-3">
            We may collect the following types of information when you use our
            website:
          </p>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </>
  );
}
