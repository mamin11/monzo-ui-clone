import Button from "./button";
import Menu from "./menu";

export default function Navigation() {
    return (
        <div className="sticky top-0 bg-[#F2F8F3]/80 backdrop-filter backdrop-blur-sm max-w-[90rem] max-h-[700px] mx-auto h-24 pt-4 pb-8 pl-[2rem] pr-[2rem]">
            <div className="flex justify-between">
                <div className="flex flex-row space-x-4">
                    <div className="text-4xl text-red-500 font-bold">wonzo</div>
                    <Menu />
                </div>
                <div className="flex space-x-4">
                    <Button title="Sign up" className={'rounded-lg'} />
                </div>
            </div>
        </div>
    )
}
