import { Button } from "@/components/ui/button";

export function WaitlistOrBookingButton() {
  return (
    <div className="sticky bottom-0 border-b border-t bg-background p-4 sm:hidden">
      <Button className="w-full">
        {/* <Link href={"/booking/movie-id-here"}>Waitlist / Buy Tickets</Link> */}
        Coming soon
      </Button>
    </div>
  );
}
