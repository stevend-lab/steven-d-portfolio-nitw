import { motion } from 'framer-motion';

export default function AnimatedOutline() {
    return (
        <div className="absolute inset-0 z-10 pointer-events-none">
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="w-full h-full"
            >
                {/* Border Path */}
                <rect
                    x="2"
                    y="2"
                    width="96"
                    height="96"
                    rx="6"
                    ry="6"
                    fill="none"
                    id="borderPath"
                />

                {/* Moving text on the path */}
                <motion.text
                    fontSize="5"
                    fill="#00FFE0"
                    fontWeight="bold"
                >
                    <motion.textPath
                        href="#borderPath"
                        startOffset="100%"
                        animate={{ startOffset: '0%' }}
                        transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
                    >
                        Portfolio • Portfolio • Portfolio • Portfolio • Portfolio •
                    </motion.textPath>
                </motion.text>
            </svg>
        </div>
    );
}