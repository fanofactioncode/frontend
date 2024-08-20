import Link from "next/link";

import { Button } from "@/components/ui/button";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Newsletter from "@/components/common/newsletter";
import SectionBadge from "@/components/ui/section-badge";
import MovieListItem from "@/components/common/movie-list-item";
import { PlayIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
      {/* <Header /> */}

      <Newsletter />
      <Footer />
    </>
  );
}
