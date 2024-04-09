import Image from "next/image"
import Background from '@/images/roadmap/bg-contact-mobile.png'


const Desktop = () => {
  return (
    <section className="w-full relative h-[652px] flex justify-center items-center max-sm:hidden ">
      <article className="flex flex-col items-center py-12 px-16 gap-6 rounded-3xl bg-[#0A0905E5] ">
        <p className="text-[#F36D0B] text-4xl font-bold leading-[36px] "> Contact for Partnership</p>
        <p className="text-[#F4E8DC] text-[49.852px] font-bold leading-[49.852px] ">contact@mechacoin.ai</p>
      </article>
    </section>
  )
}

const Mobile = () => {
  return (
    <section className="w-full h-[652px] relative flex justify-center items-center sm:hidden">
      <div className="absolute inset-0">
        <Image src={Background} alt="background" />
      </div>

      <article className="relative w-[382px] flex flex-col items-center py-12 px-16 gap-6 rounded-3xl bg-[#0A0905E5] ">
        <p className="text-[#F36D0B] text-2xl font-bold text-center"> Contact for Partnership</p>
        <p className="text-[#F4E8DC] text-base font-bold  ">contact@mechacoin.ai</p>
      </article>
    </section>
  )
}

const Contact = () => {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  )
}

export default Contact