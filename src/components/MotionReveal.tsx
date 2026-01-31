import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
    threshold?: number;
}

const MotionReveal = ({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
    yOffset = 30,
    threshold = 0.1,
}: MotionRevealProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: threshold }}
            transition={{ duration: duration, delay: delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default MotionReveal;
