import Image from "next/image";
import Button from "./button";

export default function HeroComponent() {
    return (
        <div className="w-full mt-1 xl:pl-[14.5rem] xl:pr-[15.5rem] 2xl:px-28">
            <div className="relative max-w-[90rem] max-h-[700px] mx-auto rounded-2xl mb-10">
                <Image alt="hero" src="/hero.png" width={1920} height={1080} className="rounded-2xl mb-10" />
                <div className="absolute h-full w-full my-auto top-0 left-0 grid grid-cols-3">
                    <div className="col-span-2 flex flex-col h-full justify-center text-start space-y-8 pl-16 pt-10 align-middle">
                        <h1 className="text-[4rem] leading-[1] font-bold tracking-normal text-white font-sans">Make your money <br /> more wonzo</h1>
                        <p className="text-white text-2xl font-thin tracking-wide">Automate bills. Organise how you spend. Save in clever <br /> new ways. All with a free Monzo Current Account.</p>
                        <Button title="Open an account for free" className={'w-72 rounded-full'} />
                    </div>

                    <div className="flex flex-col h-full justify-center text-start space-y-4 pl-10 pt-10 align-middle">
                    </div>
                </div>
            </div>
        </div>
    )
}
