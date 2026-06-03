import type { Transition, Variants } from "framer-motion"

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

export const smoothTransition: Transition = { type: "tween", duration: 0.65, ease }
export const fastTransition: Transition = { type: "tween", duration: 0.45, ease }

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: smoothTransition },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { type: "tween", duration: 0.7, ease } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { type: "tween", duration: 0.6, ease: "easeOut" } },
}

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.6, ease } },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
