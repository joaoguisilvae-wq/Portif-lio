import { motion } from "framer-motion";

const Orb = ({ className }: { className: string }) => (
  <motion.div
    className={`absolute rounded-full blur-[120px] opacity-30 ${className}`}
    animate={{
      x: [0, 15, -10, 10, 0],
      y: [0, -20, 0, -10, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      <Orb className="w-[500px] h-[500px] bg-purple-900 top-[10%] left-[20%]" />
      <Orb className="w-[400px] h-[400px] bg-violet-800 top-[10%] right-[10%]" />
      <Orb className="w-[600px] h-[600px] bg-purple-950 bottom-[-15%] right-[-10%]" />
      <Orb className="w-[400px] h-[400px] bg-purple-950 bottom-[10%] left-[5%]" />
    </div>
  );
};

export default Background;
