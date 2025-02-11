import Image from "next/image";
import Button from "./button";

export default function HeroComponent() {
    return (
        <div className="w-full mt-1 xl:pl-[14.5rem] xl:pr-[15.5rem] 2xl:px-28">
            <div className="relative max-w-[90rem] max-h-[700px] mx-auto rounded-2xl mb-10">
                <Image alt="hero" src="/hero.png" width={1920} height={1080} className="rounded-2xl mb-10" />
                <div className="absolute h-full top-0 left-0 text-center grid grid-cols-2">
                    <div className="flex flex-col h-full justify-center text-start space-y-4 pl-10 pt-10 align-middle">
                        <h1 className=" text-6xl font-bold text-white">Make your money <br /> more monzo</h1>
                        <p className="text-white text-lg font-thin tracking-wide">Automate bills. Organise how you spend. Save in clever <br /> new ways. All with a free Monzo Current Account.</p>
                        <Button title="Open an account for free" className={'w-3/5 rounded-full'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
