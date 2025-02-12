import Image from "next/image";
import Button from "./button";
import EnterAnimation from "./animation/enter-animation";

const FauxImage = ({ image, className }) => {
    return (
        <Image alt="faux image" src={image} width={30} height={30} className={`rounded-lg shadow-md ${className}`} />
    )
}

const FauxItem = ({ image, title, description, children }) => {
    return (
        <div className="flex justify-between bg-white rounded-2xl px-2 py-3 items-center gap-4">
            <div className="flex items-center justify-between w-full gap-2">
                <div className="flex items-center gap-2">
                    {image}
                    <div className="flex flex-col px-1">
                        <p className="text-black text-[0.7rem] tracking-wider">{title}</p>
                        <p className="text-gray-500 text-[0.6rem] font-thin tracking-wide">{description}</p>
                    </div>
                </div>

                {children}
            </div>
        </div>
    )
}

export default function HeroComponent() {
    return (
        <div className="w-full mt-1 xl:pl-[14.5rem] xl:pr-[15.5rem] 2xl:px-28">
            <div className="relative max-w-[90rem] max-h-[700px] mx-auto rounded-2xl">
                <Image alt="hero" src="/hero.png" width={1920} height={1080} className="rounded-2xl" />
                <div className="absolute h-full w-full my-auto top-0 left-0 grid grid-cols-3">
                    <div className="h-full col-span-2 my-auto top-0 left-0">
                        <div className="col-span-2 flex flex-col h-full justify-center text-start space-y-8 pl-16 pt-10 align-middle">
                            <h1 className="text-[4rem] leading-[1] font-bold tracking-normal text-white font-sans">Make your money <br /> more wonzo</h1>
                            <p className="text-white text-2xl font-thin tracking-wide">Automate bills. Organise how you spend. Save in clever <br /> new ways. All with a free Monzo Current Account.</p>
                            <Button title="Open an account for free" className={'w-72 rounded-full'} />
                        </div>
                    </div>

                    <div className="grid grid-rows-3 w-full h-full gap-4">
                        <div className="row-span-2 w-full flex flex-col gap-6 pt-12 pr-20">
                            <div className="w-full flex justify-end pr-8">
                                <div className="w-80 flex justify-end">
                                    <EnterAnimation duration={0.4}>
                                        <FauxItem
                                            title='Interest earned'
                                            description='Interest for May so far'
                                            image={<FauxImage image='/faux1.png' />}
                                            children={<p className="text-lg pl-10 text-green-700">£9.57</p>}
                                        />
                                    </EnterAnimation>
                                </div>
                            </div>

                            <div className="w-[22rem] flex justify-start">
                                <EnterAnimation duration={0.8}>
                                    <FauxItem
                                        title='Get paid one business day early 💸'
                                        description='When paid by Bacs 🎉'
                                        image={<FauxImage image='/faux5.png' />}
                                    />
                                </EnterAnimation>
                            </div>

                            <div className="w-full flex justify-end pr-8">
                                <div className="w-[12rem]">
                                    <EnterAnimation duration={0.9}>
                                        <FauxItem
                                            title='Cashback offers'
                                            description='On top brands'
                                            image={
                                                <div className="flex items-center -space-x-4">
                                                    <FauxImage image='/faux2.png' className='z-30' />
                                                    <FauxImage image='/faux3.png' className='z-20' />
                                                    <FauxImage image='/faux4.png' className='z-10' />
                                                </div>
                                            }
                                        />
                                    </EnterAnimation>
                                </div>
                            </div>
                        </div>

                        <div className="row-span-1 flex flex-col justify-end p-4">
                            <div className="flex justify-end gap-4">
                                <Image alt="cass logo" src="/cass-logo.png" width={100} height={50} className="rounded-lg shadow-md" />
                                <Image alt="fass logo" src="/fass.png" width={50} height={50} className="rounded-lg shadow-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-end mt-3 mb-4 xl:pl-[14.5rem] xl:pr-[15.5rem] 2xl:px-28">
                <p className="text-xs font-[600] font-sans tracking-wide">UK residents. Ts&Cs apply.</p>
            </div>
        </div>
    )
}
