import Link from "next/link";

import {
  FacebookCircleIcon,
  InstagramCircleIcon,
  TwitterCircleIcon,
} from "@/components/icons";

export function SocialLinks() {
  return (
    <div className="bottom-0 right-0 flex flex-col gap-2 sm:absolute sm:bottom-24">
      <Link
        href="https://www.instagram.com/fanofaction"
        aria-label="Instagram"
        target="_blank"
        tabIndex={-1}
      >
        <InstagramCircleIcon />
      </Link>
      <Link
        href="https://www.facebook.com/WeAreFanOfAction/"
        aria-label="Facebook"
        target="_blank"
        tabIndex={-1}
      >
        <FacebookCircleIcon />
      </Link>
      <Link
        href="https://www.youtube.com/@WeAreFanOfAction"
        aria-label="Youtube"
        target="_blank"
        tabIndex={-1}
      >
        <TwitterCircleIcon />
      </Link>
    </div>
  );
}
