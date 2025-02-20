import Image from "next/image"
import EnterAnimation from "./animation/enter-animation"
import HoverScaleAnimation from "./animation/scale-hover-animation"

const FeaturesItems = () => {
    return (
        <div className="grid grid-cols-2 gap-4 w-full h-full max-h-[66vh] max-w-[90rem] mx-auto pb-20">
            <div className="w-full h-full grid grid-cols-2 gap-4">
                <HoverScaleAnimation>
                    <div className="rounded-3xl h-full">
                        <Image alt="features-cta" src="/hooks-desktop-card-hand.png" width={1080} height={1920} className="rounded-3xl h-full object-center object-cover" />
                    </div>
                </HoverScaleAnimation>
                <div className="w-full h-full grid grid-row-3 gap-4">
                    <div className="bg-green-300 row-span-2 rounded-3xl">
                        <HoverScaleAnimation className="rounded-3xl h-full">
                            <Image alt="features-cta" src="/hooks-desktop-spring.png" width={1080} height={1920} className="rounded-3xl h-full object-center object-cover" />
                        </HoverScaleAnimation>
                    </div>
                    <div className="bg-[#112231] row-span-1 rounded-3xl">
                        <HoverScaleAnimation className="row-span-1 rounded-3xl h-full">
                            <Image alt="features-cta" src="/Which_Recommended_Provider_with_Title.png" width={1080} height={1080} className="rounded-3xl px-6 h-full object-center object-scale-down" />
                        </HoverScaleAnimation>
                    </div>
                </div>
            </div>
            <div className="w-full h-full grid grid-row-5 gap-4">
                <HoverScaleAnimation>
                    <div className="bg-slate-300 row-span-2 w-full rounded-3xl py-16"
                        style={{
                            backgroundImage: 'url(/hooks-mobile-hands-lg.png)',
                            backgroundSize: 'cover', height: '100%', width: '100%',
                            backgroundRepeat: 'no-repeat', objectFit: 'cover',
                            overflowClipMargin: 'content-box',
                            overflow: 'clip', objectPosition: 'left bottom'
                        }}>
                    </div>
                </HoverScaleAnimation>
                <HoverScaleAnimation>
                    <div className="bg-purple-300 row-span-3 rounded-3xl w-full">
                        <img alt="features-cta" src="/hooks-mobile-travel-lg.png" className="rounded-3xl w-full h-full object-center object-cover" />
                    </div>
                </HoverScaleAnimation>
            </div>
        </div>
    )
}

export default function FeaturesComponent() {
    return (
        <div className="bg-white w-full h-full flex flex-col justify-center items-center">
            <div className="w-full max-w-[90rem] mx-auto py-12 text-center flex flex-col justify-center items-center gap-7">
                <h1 className="cta-text font-[800] [word-spacing:-9px]">Banking never felt like this</h1>
                <p className="text-gray-600 text-sm md:text-xl font-thin tracking-wide">
                    Earn cashback. Get paid early. Split bills.
                    <span className="text-[#016B83] inter-font font-[550]"> Free yourself from travel fees.</span>
                </p>
            </div>

            <FeaturesItems />
        </div>
    )
}
