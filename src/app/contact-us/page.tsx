import { Metadata } from "next";

import { ContactInfo } from "./_components/contact-info";
import { ContactMain } from "./_components/contact-main";

export const metadata: Metadata = {
  title: "The Ultimate Destination for Movie Rereleases",
  description:
    "Get in touch with FanOfAction to request your favorite movies for rerelease in theaters. Share your suggestions and help bring classic films back to the big screen!",
  keywords:
    "contact FanOfAction, request movie rereleases, suggest films for theaters, bring back classic movies, movie suggestions, theater rereleases, cinema requests, FanOfAction, fan of action, fan action, fanofaction, favorite films, cult classics, movie fan community",
};

export default function ContactUsPage() {
  return (
    <>
      <ContactMain />
      <ContactInfo />
    </>
  );
}
