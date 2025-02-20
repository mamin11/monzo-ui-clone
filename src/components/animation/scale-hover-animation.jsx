import * as motion from "motion/react-client"

export default function HoverScaleAnimation({ children, className }) {
    return (
        <motion.div transition={{ type: "spring" }} whileHover={{ scale: 1.05 }} className={className}>{children}</motion.div>
    )
}


