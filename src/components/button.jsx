
export default function Button({ title, className }) {
    return (
        <button className={`text-lg text-white font-semibold bg-[#016B83] pl-[1.4rem] pr-[1.4rem] py-3 ${className}`}>
            {title}
        </button>
    )
}
