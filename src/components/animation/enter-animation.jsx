import * as motion from "motion/react-client"

export default function EnterAnimation({ duration, children }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: duration,
                scale: { type: "spring", visualDuration: duration, bounce: 0.5 },
            }}
        >{children}</motion.div>
    )
}

/**
 * ==============   Styles   ================
 */

const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    borderRadius: "50%",
}

