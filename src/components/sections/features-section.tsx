import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function CameraAnimation() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <motion.span
        className="font-serif text-6xl md:text-8xl text-foreground"
        animate={{ scale: active ? 1.2 : 1, opacity: active ? 1 : 0.5 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        📸
      </motion.span>
    </div>
  )
}

function PartyAnimation() {
  const [step, setStep] = useState(0)
  const emojis = ["🎉", "🥂", "💐", "🎂"]

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % emojis.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-full p-4 flex items-center justify-center">
      <motion.span
        key={step}
        className="text-6xl md:text-8xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {emojis[step]}
      </motion.span>
    </div>
  )
}

function BrowsAnimation() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2))
    }, 40)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <span className="text-5xl md:text-6xl">🌿</span>
      <span className="text-sm text-muted-foreground">Идеальная форма</span>
      <div className="w-full max-w-[120px] h-1.5 bg-foreground/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.04, ease: "linear" }}
        />
      </div>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Услуги
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Individual Photo Session Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <CameraAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Индивидуальная съёмка</h3>
              <p className="text-muted-foreground text-sm mt-1">Портретная и lifestyle-фотосессия под ваш образ и характер. Полная подготовка, работа с позой и светом.</p>
            </div>
          </motion.div>

          {/* Holiday Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <PartyAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Праздники и события</h3>
              <p className="text-muted-foreground text-sm mt-1">День рождения, свадьба, выпускной — сохраним каждый момент радости в живых и атмосферных кадрах.</p>
            </div>
          </motion.div>

          {/* Brows Card */}
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.96 }}
            data-clickable
          >
            <div className="flex-1">
              <BrowsAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Оформление бровей</h3>
              <p className="text-muted-foreground text-sm mt-1">Коррекция, окрашивание и ламинирование бровей. Подбор формы под черты лица, результат с первого раза.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}