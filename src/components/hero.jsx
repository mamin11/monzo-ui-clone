import Image from "next/image";

export default function HeroComponent() {
    return (
        <div className="w-full mt-1 pl-[14.5rem] pr-[15.5rem]">
            <Image src="/hero.png" width={1920} height={1080} className="rounded-2xl mb-10" />
        </div>
    )
}
