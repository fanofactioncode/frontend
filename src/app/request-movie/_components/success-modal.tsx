import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface SuccessModalProps {
  open: boolean;
  onOpenChange: (value: boolean) => void;
}

export function SuccessModal({ open, onOpenChange }: SuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        aria-describedby="movie-dialog"
        className="w-[95%] max-w-lg rounded-xl sm:!rounded-3xl sm:px-12 sm:py-12"
      >
        <DialogHeader className="items-center justify-center">
          <div className="size-20 rounded-full bg-red-300"></div>
          <DialogTitle className="!text-lg !text-text">
            Your request has been proceed
          </DialogTitle>
          <DialogDescription className="text-center !text-sm !text-text-sub">
            Thanks for showing interest. We’ll soon going to be make this
            happend. Stay connected with use and subscribe to our newsletter to
            get latest updates.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mx-auto mt-8">
          <DialogClose asChild>
            <Button className="px-8 sm:min-w-[245px]">Subscribe</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
