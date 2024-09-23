import AvatarCircles from "@/components/magicui/avi-circles";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

export async function AvatarCirclesDemo() {
  return (
    <div className="flex gap-4">
        <AvatarCircles numPeople={200} avatarUrls={avatarUrls} />
        <p className="mt-2">Join 200+ students on their journey to success</p>
    </div>
  )
}
