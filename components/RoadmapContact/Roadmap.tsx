import cat2 from '@/images/banner/cat.svg'
import BackgroundMobile from '@/images/roadmap/background-mobile.png'
import Question from '@/images/roadmap/question.gif'
import Title from '@/images/roadmap/roadmap-title.png'
import TitleDesktop from '@/images/roadmap/roadmapTitle.png'
import Image from 'next/image'
import { ReactElement } from 'react'

const Block = ({
  index,
  title,
  description,
  x,
  y,
  isLeft = true
}: {
  index: number
  title: string | ReactElement
  description: Array<string | ReactElement>
  x: number
  y: number
  isLeft?: boolean
}) => {
  return (
    <article
      style={{
        left: isLeft ? `${x}px` : 'unset',
        right: !isLeft ? `${x}px` : 'unset',
        top: `${y}px`
      }}
      className={
        'flex w-[457px] flex-col gap-8 absolute ' +
        (isLeft ? ` left-[] ` : ` right-[${x}px] `) +
        ` top-[${y}px] `
      }
    >
      <div className="flex flex-col gap-[10px] ">
        <p className="text-[#FF9345] text-2xl font-bold leading-[24px] ">{`Phase ${index}`}</p>
        <p className="text-[#FFFFE3] text-5xl font-bold -tracking-[-0.96px] ">{title}</p>
      </div>
      <p className="text-[#BEAFA5] font-[CreativeBlock] flex flex-col">
        {description.map((item: any, index: number) => {
          return <span key={index}>{item}</span>
        })}
      </p>
    </article>
  )
}

const BlockMobile = ({
  index,
  title,
  description
}: {
  index: number
  title: string | ReactElement
  description: Array<string | ReactElement>
}) => {
  return (
    <article className="flex flex-col gap-4 ">
      <div className="flex flex-col">
        <p className="text-[#FF9345] text-base font-bold ">{`Phase ${index}`}</p>
        <p className="text-[#FFFFE3] text-2xl font-bold -tracking-[-0.96px] ">{title}</p>
      </div>

      <p className="text-[#BEAFA5] text-base font-[CreativeBlock] flex flex-col ">
        {description.map((item: any, index: number) => {
          return <span key={index}>{item}</span>
        })}
      </p>
    </article>
  )
}

const Desktop = () => {
  return (
    <section id="roadmap" className="w-full h-[1982px] relative max-sm:hidden">
      <div className="w-[298px] h-[84px] absolute top-[276px] left-1/2 -translate-x-1/2">
        <Image fill src={TitleDesktop} alt="title" />
      </div>

      <Block
        key={1}
        index={1}
        title={
          <>
            Welcome <br /> MECHA
          </>
        }
        description={[
          <>
            Launch <span className="text-[#FFFFE3]">$MECHA</span> omnichain coin.
          </>
        ]}
        x={167}
        y={428}
      />
      <Block
        key={2}
        index={2}
        title={'Prepare for Airdrop'}
        description={[
          '- Snapshot addresses on Axelar Ecosystem.',
          '- Inscript early contributors.',
          '- LPs.'
        ]}
        x={80}
        y={628}
        isLeft={false}
      />
      <Block
        key={3}
        index={3}
        title={
          <>
            $MECHA <br /> TAKEOVER
          </>
        }
        description={[
          '- Renounce all ownership.',
          <>
            - Found up a <span className="text-[#FFFFE3]">$MECHA</span> DAO.
          </>
        ]}
        x={80}
        y={958}
        isLeft={false}
      />
      <Block
        key={4}
        index={4}
        title={<>VIBE AND HOLD</>}
        description={['- Talk with Mecha (AI)', '- Sing with Mecha (AI)']}
        x={80}
        y={1250}
        isLeft={false}
      />
      <Block key={5} index={5} title={<>Meme tracker</>} description={[]} x={167} y={1020} />
      <Block key={6} index={6} title={<>Mecha x Card</>} description={[]} x={167} y={1200} />
      <Block
        key={7}
        index={7}
        title={
          <>
            Pay with <br /> $MECHA
          </>
        }
        description={[]}
        x={167}
        y={1380}
      />
      <div className="w-[294px] h-[294px] absolute right-[206px] top-[1522px] ">
        <Image src={cat2} alt="cat" />
      </div>
      <div className="w-[167.925px] h-[167.925px] absolute right-[163px] top-[1400px] ">
        <Image className="mix-blend-luminosity" src={Question} alt="Question" />
      </div>
    </section>
  )
}

const Mobile = () => {
  return (
    <section
      id="roadmap"
      className="w-full max-sm:max-w-[414px] overflow-hidden h-[1625px] relative sm:hidden"
    >
      <div className="absolute inset-x-0 bottom-0 ">
        <Image src={BackgroundMobile} alt="BackgroundMobile" />
      </div>

      <article className="w-[298px] absolute top-[46px] right-[24px] flex flex-col gap-12  ">
        <div className="w-[173px] h-[56px]">
          <Image src={Title} alt="title" />
        </div>
        <BlockMobile
          key={1}
          index={1}
          title="WELCOME MECHA"
          description={[
            <>
              Launch <span className="text-[#FFFFE3]">$MECHA</span> omnichain coin.
            </>
          ]}
        />
        <BlockMobile
          key={2}
          index={2}
          title="Prepare for Airdrop"
          description={[
            '- Snapshot addresses on Axelar Ecosystem.',
            '- Inscript early contributors.',
            '- LPs.'
          ]}
        />
        <BlockMobile
          key={3}
          index={3}
          title="$MECHA TAKEOVER"
          description={[
            '- Renounce all ownership.',
            <>
              - Found up a <span className="text-[#FFFFE3]">$MECHA</span> DAO.
            </>
          ]}
        />
        <BlockMobile
          key={4}
          index={4}
          title={<>VIBE AND HOLD</>}
          description={['- Talk with Mecha (AI)', '- Sing with Mecha (AI)']}
        />
        <BlockMobile key={5} index={5} title={<>Meme tracker</>} description={['']} />
        <BlockMobile key={6} index={6} title={<>Mecha x Card</>} description={[]} />
        <BlockMobile key={7} index={7} title={<>Pay with $MECHA</>} description={[]} />
      </article>

      <div className="w-[211px] h-[206px] absolute right-[20px] top-[1285px] -scale-x-100 ">
        <Image src={cat2} alt="cat" />
      </div>
      <div className="w-[91px] h-[91px] absolute right-[10px] top-[1220px] ">
        <Image className="mix-blend-luminosity" src={Question} alt="Question" />
      </div>
    </section>
  )
}

const Roadmap = () => {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  )
}

export default Roadmap
