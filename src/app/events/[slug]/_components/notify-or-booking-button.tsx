import { Button } from "@/components/ui/button";

export function NotifyOrBookingButton() {
  return (
    <div className="sticky bottom-0 border-b border-t bg-background p-4 sm:hidden">
      <Button className="w-full">Notify me</Button>
    </div>
  );
}
