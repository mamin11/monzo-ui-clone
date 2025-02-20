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
        <div className="w-full mt-1 px-[1.25rem]">
            <div className="hero-section w-full max-w-[90rem] mx-auto rounded-2xl" >
                <div className=" h-full w-full my-auto  grid grid-cols-3">
                    <div className="h-full col-span-3 md:col-span-2 my-auto top-0 left-0">
                        <div className="col-span-2 flex flex-col h-full justify-center text-start space-y-8 pl-4 sm:pl-16 pt-10 align-middle">
                            <h1 className="text-[2rem] md:text-[3rem] xl:text-[4rem] leading-[1] font-bold tracking-normal text-white font-sans">Make your money <br /> more wonzo</h1>
                            <p className="text-white text-sm md:text-md lg:text-xl xl:text-2xl font-thin tracking-wide">Automate bills. Organise how you spend. Save in clever <br /> new ways. All with a free Monzo Current Account.</p>
                            <Button title="Open an account for free" className={'w-72 rounded-full text-sm md:text-lg'} />
                        </div>
                    </div>

                    <div className="grid col-span-3 md:col-span-1 lg:grid-rows-3 w-full h-full gap-4">
                        <div className="row-span-3 lg:row-span-2 w-full flex flex-col gap-6 pt-12 pr-8 xl:pr-20">
                            <div className="w-full flex justify-end pr-8">
                                <div className="lg:w-80 flex justify-end">
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

                            <div className="lg:w-[22rem] flex justify-start">
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

            <div className="w-full mx-auto max-w-[90rem] flex justify-end mt-3 mb-4 ">
                <p className="text-xs font-[600] font-sans tracking-wide">UK residents. Ts&Cs apply.</p>
            </div>
        </div>
    )
}
