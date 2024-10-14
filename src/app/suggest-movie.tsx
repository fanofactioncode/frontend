import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SuggestMovie() {
  return (
    <section className="container space-y-9 py-16">
      <div className="flex flex-col items-center justify-center gap-2">
        <Badge>Share your favorite</Badge>
        <h2 className="text-center text-4xl font-bold text-text">
          Ready to suggest a movie !
        </h2>
        <p className="text-center text-sm text-text-sub">
          Lorem ipsum dolor sit amet consectetur. Adipiscing etiam enim
          vulputate ut mauris orci tortor. Amet pellentesque volutpat non lectus
          viverra molestie. Venenatis facilisis egestas non fermentum aenean
          sed. Ornare nunc ornare eu et lacus accumsan elementum nibh. Sem lacus
          lacus eu adipiscing eget sed.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Button>Suggest Movie</Button>
      </div>
    </section>
  );
}
