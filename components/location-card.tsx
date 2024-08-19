import { DirectionAwareHover } from "./direction-aware-hover";
import { Button } from "./ui/button";

export function LocationCard({
  name,
  location,
}: {
  name: string;
  location: string;
}) {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="flex w-full items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">{name}</p>
        <p className="font-normal text-neutral-300 text-sm">{location}</p>
        <div className="mt-2 flex gap-2">
          <Button className="hidden md:block">Order now</Button>
          <Button className="md:bg-neutral-800 md:text-white md:hover:bg-neutral-700">
            Contact us
          </Button>
        </div>
      </DirectionAwareHover>
    </div>
  );
}
