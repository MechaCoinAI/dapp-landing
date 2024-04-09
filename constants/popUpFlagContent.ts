import BNB from '@/images/menu/BNB.png'
import Avalanche from '@/images/menu/Avalanche.png'
import Polygon from '@/images/menu/Polygon.png'
import Optimism from '@/images/menu/Optimism.png'
import Filecoin from '@/images/menu/Filecoin.png'
import Immutable from '@/images/menu/Immutable.png'
import Mantle from '@/images/menu/Mantle.png'
import Fantom from '@/images/menu/Fantom.png'
import Arbitrum from '@/images/menu/Arbitrum.png'
import Kava from '@/images/menu/Kava.png'
import Scroll from '@/images/menu/Scroll.png'
import Celo from '@/images/menu/Celo.png'
import Moonbeam from '@/images/menu/Moonbeam.png'
import Centrifuge from '@/images/menu/Centrifuge.png'
import Ether from '@/images/menu/Ether.png'
import Base from '@/images/menu/Base.png'
import Linear from '@/images/menu/Linear.png'
import Solana from '@/images/menu/Solana.png'
import Sui from '@/images/menu/Sui.png'
import Aptos from '@/images/menu/Aptos.png'
import Cosmos from '@/images/menu/Cosmos.png'

//FLAG
import ArbFlag from '@/images/flag/arbFlag.svg'
import EtherFlag from '@/images/flag/etherFlag.svg'
import BnbFlag from '@/images/flag/bnbFlag.svg'
import AvaxFlag from '@/images/flag/avaxFlag.svg'
import ScrollFlag from '@/images/flag/scrollFlag.svg'
import PolygonFlag from '@/images/flag/polygonFlag.svg'
import FilecoinFlag from '@/images/flag/filecoinFlag.svg'
import BaseFlag from '@/images/flag/baseFlag.svg'
import ImmutableFlag from '@/images/flag/immutableFlag.svg'
import OpFlag from '@/images/flag/opFlag.svg'
import FantomFlag from '@/images/flag/fantomFlag.svg'
import KavaFlag from '@/images/flag/kavaFlag.svg'
import CeloFlag from '@/images/flag/celoFlag.svg'
import LineaFlag from '@/images/flag/lineaFlag.svg'
import MantleFlag from '@/images/flag/mantleFlag.svg'
import CentrifugeFlag from '@/images/flag/centrifugeFlag.svg'
import MoonFlag from '@/images/flag/moonFlag.svg'
import randomFlag from '@/images/flag/RandomFlag.svg'
import CosmosFlag from '@/images/flag/cosmosFlag.svg'
import SolanaFlag from '@/images/flag/solanaFlag.svg'
import AptosFlag from '@/images/flag/aptosFlag.svg'
import SuiFlag from '@/images/flag/suiFlag.svg'
import otherFlag from '@/images/flag/otherFlag.svg'
// TOP
import EthereumWorld from '@/images/world/world1.jpg'
import ArbitrumWorld from '@/images/world/world6.jpg'
import OptimismWorld from '@/images/world/world11.jpg'
import PolygonWorld from '@/images/world/world17.jpg'
import AvalancheWorld from '@/images/world/world2.jpg'
import BaseWorld from '@/images/world/world8.jpg'
import BNBWorld from '@/images/world/world5.jpg'
import KavaWorld from '@/images/world/world10.jpg'
import MantleWorld from '@/images/world/world13.jpg'
import CeloWorld from '@/images/world/world9.jpg'
import FantomWorld from '@/images/world/world15.jpg'
import LineaWorld from '@/images/world/world12.jpg'
import MoonWorld from '@/images/world/world14.jpg'
import ImmuWorld from '@/images/world/world7.jpg'
import ScrollWorld from '@/images/world/world3.jpg'
import FileWorld from '@/images/world/world4.jpg'
import CentrifugeWorld from '@/images/world/world16.jpg'
import land18 from '@/images/world/world18.jpg'
import SolanaWorld from '@/images/world/SolanaWorld.png'
import AptosWorld from '@/images/world/AptosWorld.jpg'
import CosmosWorld from '@/images/world/CosmosWorld.jpg'
import SuiWorld from '@/images/world/SuiWorld.jpg'

//GameChest
import BNB_chest1 from '@/images/game/chest1-bnb.png'
import BNB_chest2 from '@/images/game/chest2-bnb.png'
export const popUpFlagContent = [
  {
    id: 0,
    name: 'Ethereum',
    icon: Ether,
    chain_id: 5,
    path: EtherFlag,
    flagInfo: `Welcome, esteemed [name of the person], the lord of Ethereum, masterfully funding and supercharging the Web3 and Blockchain universe!`,
    person: '',
    x: 3904,
    y: 838,
    land: 'TOP 1 - ETHEREUM',
    des: 'Ethereum ninjas land - supercharging the Web3 universe!',
    image: EthereumWorld,
    points: 0
  },
  {
    id: 1,
    name: 'Solana',
    flagInfo: `Step into Solana Space, the blockchain where mass adoption meets warp speed! This isn't your grandma's blockchain; it's fast, composable, green, and as globally distributed as your favorite conspiracy theory podcast. Join the Solana squad – we're not just building the future but doing it at Ludicrous Speed!`,
    person: '',
    icon: Solana,
    chain_id: 421613,
    path: SolanaFlag,
    x: 8572,
    y: 4032,
    land: 'TOP 2 - SOLANA',
    des: 'Arbitrum Land: A realm where Web3 apps race at lightning speeds and pocket-friendly gas!',
    image: SolanaWorld,
    points: 0
  },
  {
    id: 2,
    name: 'Arbitrum',
    icon: Arbitrum,
    flagInfo: `Welcome, [Name of the Person], the dynamic leader of Arbitrum Land, where you orchestrate the symphony of lightning-fast Web3 apps and cost-effective smart contracts!`,
    person: '',
    chain_id: 421613,
    path: ArbFlag,
    x: 16356,
    y: 1098,
    land: 'TOP 3 - ARBITRUM',
    des: 'Arbitrum Land: A realm where Web3 apps race at lightning speeds and pocket-friendly gas!',
    image: ArbitrumWorld,
    points: 0
  },
  {
    id: 3,
    name: 'Optimism',
    icon: Optimism,
    flagInfo: `"Welcome, [Name of the Person], the supreme wizard of OP Mainnet Kingdom, a realm of Layer 2 magic, where speed, stability, and scalability enhance Ethereum's powers!`,
    person: '',
    chain_id: 420,
    path: OpFlag,
    x: 12733,
    y: 3946,
    land: 'TOP 4 - OPTIMISM',
    des: "OP Kingdom: Ethereum's turbo sidekick, supercharging devs with speed and stability in a Layer 2 wonderland!",
    image: OptimismWorld,
    points: 0
  },
  {
    id: 4,
    name: 'Polygon',
    flagInfo: `Welcome, [Name of the Person], the ingenious architect of Polygon, the land where value creation and exchange are revolutionized by the marvels of zero-knowledge tech!`,
    person: '',
    icon: Polygon,
    chain_id: 88001,
    path: PolygonFlag,
    x: 12889,
    y: 653,
    land: 'TOP 5 - POLYGON',
    des: 'Polygon Region: The fundamental land that allows anyone to create and exchange value, powered by zero-knowledge technology.',
    image: PolygonWorld,
    points: 0
  },
  {
    id: 5,
    name: 'Avalanche',
    flagInfo: `Welcome, [Name of the Person], the visionary ruler of Avalanche, the scalable and future-ready Layer 1 playground where creativity knows no bounds!`,
    person: '',
    icon: Avalanche,
    chain_id: 43113,
    path: AvaxFlag,
    x: 6695,
    y: 1445,
    land: 'TOP 6 - AVALANCHE',
    des: 'The scalable, future-ready Layer 1 playground where devs build anything, any way they want!',
    image: AvalancheWorld,
    points: 0
  },
  {
    id: 6,
    name: 'Base',
    flagInfo: `Welcome, [Name of the Person], the pioneering force behind Base, Coinbase's brainchild, pure open-source innovation, crafted masterfully on the OP Stack!`,
    person: '',
    icon: Base,
    chain_id: 84531,
    path: BaseFlag,
    x: 2783,
    y: 5088,
    land: 'TOP 7 - BASE',
    des: "Base Ground: Coinbase's brainchild, crafted on the OP Stack. Just pure, open-source innovation!",
    image: BaseWorld,
    points: 0
  },
  {
    id: 7,
    name: 'BNB',
    flagInfo: `Welcome, [Name of the Person], the sovereign of BNB Chain Kingdom, where massive Web3 dApps thrive!`,
    person: '',
    icon: BNB,
    chain_id: 97,
    path: BnbFlag,
    x: 755,
    y: 834,
    land: 'TOP 8 - BNB CHAIN',
    des: "Base Ground: Coinbase's brainchild, crafted on the OP Stack. Just pure, open-source innovation!",
    image: BNBWorld,
    points: 0,
    gameChest1: BNB_chest1,
    gameChest2: BNB_chest2,
    xGame: 1200,
    yGame: 834,
    gameLink: 'https://number-knight-game.mechacoin.ai'
  },
  {
    id: 8,
    name: 'Kava',
    flagInfo: `Welcome, [Name of the Person], the trailblazing architect of Kava Network, the innovative Layer-1 land that fuses Cosmos' speed and scalability with Ethereum's developer-friendly ethos!`,
    person: '',
    icon: Kava,
    chain_id: null,
    path: KavaFlag,
    x: 6192,
    y: 7500,
    land: 'TOP 9 - KAVA',
    des: "Kava Kingdom: A trailblazing Layer-1 realm where Cosmos' swift winds meet Ethereum's nurturing soil, fostering unparalleled speed and developer harmony!",
    image: KavaWorld,
    points: 0
  },
  {
    id: 9,
    name: 'Mantle',
    flagInfo: `Welcome, [Name of the Person], the mastermind of Mantle Metropolis, where decentralized dreams and token-powered tech thrive, guided by the community's will!`,
    person: '',
    icon: Mantle,
    chain_id: 5001,
    path: MantleFlag,
    x: 2163,
    y: 10133,
    land: 'TOP 10 - MANTLE',
    des: 'Mantle Metropolis: Where decentralized tech and token power unite, guided by Mantle Network and Treasury, all in the hands of token holders!',
    image: MantleWorld,
    points: 0
  },
  {
    id: 10,
    name: 'Celo',
    flagInfo: `Welcome, [Name of the Person], the visionary steward of Celo, where Ethereum's potential is magnified with practical solutions, nurturing a thriving digital economy for all!`,
    person: '',
    icon: Celo,
    chain_id: 44787,
    path: CeloFlag,
    x: 9037,
    y: 6813,
    land: 'TOP 11 - CELO',
    des: "Celo Land: Ethereum's real-world scaling hero, crafting a thriving digital economy for everyone!",
    image: CeloWorld,
    points: 0
  },
  {
    id: 11,
    name: 'Fantom',
    flagInfo: `Welcome, [Name of the Person], the distinguished leader of Fantom Frontier, the land of next-gen speed and scalability, where high-performance blockchain and universal apps reign supreme!`,
    person: '',
    icon: Fantom,
    chain_id: 4002,
    path: FantomFlag,
    x: 1477,
    y: 7706,
    land: 'TOP 12 - FANTOM',
    des: 'Fantom Frontier: The speedy, scalable next-gen Layer-1 wonderland, home to high-performance blockchain and apps!',
    image: FantomWorld,
    points: 0
  },
  {
    id: 12,
    name: 'Linea',
    flagInfo: `Welcome, [Name of the Person], the visionary ruler of Linea Land, where the future of dapps is being redefined on the innovative grounds of ConsenSys zkEVM!`,
    person: '',
    icon: Linear,
    chain_id: 59140,
    path: LineaFlag,
    x: 13068,
    y: 7408,
    land: 'TOP 13 - LINEA',
    des: "Linea Land: The futuristic evolution of ConsenSys zkEVM, fueling a new era of dapps on Ethereum's grounds!",
    image: LineaWorld,
    points: 0
  },
  {
    id: 13,
    name: 'Moonbeam',
    flagInfo: `Welcome, [Name of the Person], the esteemed ruler of Moonbeam Realm, where the fusion of Ethereum and Polkadot powers the future of smart contracts and cross-chain connectivity!`,
    person: '',
    icon: Moonbeam,
    chain_id: 1287,
    path: MoonFlag,
    x: 9142,
    y: 9849,
    land: 'TOP 14 - MOONBEAM',
    des: 'Moonbeam Realm: A smart contract haven bridging Ethereum and Polkadot, mingling their powers for cross-chain connected apps!',
    image: MoonWorld,
    points: 0
  },
  {
    id: 14,
    name: 'Immutable',
    flagInfo: `Welcome, [Name of the Person], the esteemed champion of Immutable Isle, where the art of web3 gaming on Ethereum is honed to perfection, heralding a new era in the gaming universe!`,
    person: '',
    icon: Immutable,
    chain_id: null,
    path: ImmutableFlag,
    x: 5447,
    y: 4450,
    land: 'TOP 15 - IMMUTABLE',
    des: 'Immutable Isle: The champion land for crafting web3 games on Ethereum, powering up the next-gen gaming universe!',
    image: ImmuWorld,
    points: 0
  },
  {
    id: 15,
    name: 'Scroll',
    flagInfo: `Welcome, [Name of the Person], the esteemed guardian of Scroll Sanctuary, a creation of Ethereum's finest, offering a swift and solid Layer 2 haven for seamless app scaling!`,
    person: '',
    icon: Scroll,
    chain_id: 534351,
    path: ScrollFlag,
    x: 9382,
    y: 968,
    land: 'TOP 16 - SCROLL',
    des: "Scroll Sanctuary: Crafted by Ethereum's own devs, this swift, solid Layer 2 haven extends Ethereum's reach, scaling apps smoothly and surely!",
    image: ScrollWorld,
    points: 0
  },
  {
    id: 16,
    name: 'Filecoin',
    flagInfo: `Welcome, [Name of the Person], the cosmic guardian of Filecoin Galaxy, where decentralized data storage, marketplace, protocol, and cryptocurrency converge in harmony!`,
    person: '',
    icon: Filecoin,
    chain_id: 3141,
    path: FilecoinFlag,
    x: 1158,
    y: 3104,
    land: 'TOP 17 - FILECOIN',
    des: 'Filecoin Galaxy: The colossal universe of decentralized data storage, where marketplace, protocol, and cryptocurrency unite!',
    image: FileWorld,
    points: 0
  },
  {
    id: 17,
    name: 'Centrifuge',
    flagInfo: `Welcome, [Name of the Person], the master financier of Centrifuge World, a realm where the magic of onchain finance transforms real-world assets into digital tokens!`,
    person: '',
    icon: Centrifuge,
    chain_id: null,
    path: CentrifugeFlag,
    x: 5773,
    y: 10133,
    land: 'TOP 18 - CENTRIFUGE',
    des: 'Centrifuge TOP: A financial wonderland onchain, where tokenizing, managing, and investing in real-TOP assets happens like magic!',
    image: CentrifugeWorld,
    points: 0
  },
  {
    id: 18,
    name: 'Sui',
    flagInfo: `Step into SUI Lands, a pixelated paradise where digital wonders come to life! Our blockchain utopia offers speed, privacy, security, and accessibility in every pixel. Join the cosmic adventure where innovation meets ownership.
    `,
    person: '',
    icon: Sui,
    chain_id: null,
    path: SuiFlag,
    x: 16095,
    y: 7624,
    land: 'TOP 20 - SUI',
    des: '',
    image: SuiWorld,
    points: 0
  },
  {
    id: 19,
    name: 'Cosmos',
    flagInfo: `Welcome to Cosmos - The Interchain Land, where we've unlocked the gates to the open, scalable, and interconnected economy of the future. Step into a realm where possibilities transcend boundaries, and the interchain paves the way for a cosmic tapestry of innovation and collaboration!`,
    person: '',
    icon: Cosmos,
    chain_id: null,
    path: CosmosFlag,
    x: 16430,
    y: 5023,
    land: 'TOP 19 - APTOS',
    des: '',
    image: CosmosWorld,
    points: 0
  },

  {
    id: 20,
    name: 'Aptos',
    flagInfo: `Welcome to the Aptos Kingdom! The blockchain playground where developers craft future-proof apps with Move – making your move on Aptos is like strapping in for a cosmic joyride through the evolution of innovation.`,
    person: '',
    icon: Aptos,
    chain_id: null,
    path: AptosFlag,
    x: 15875,
    y: 10283,
    land: 'TOP 21 - COSMOS',
    des: '',
    image: AptosWorld,
    points: 0
  },
  {
    id: 21,
    name: 'Others',
    flagInfo: `Welcome, [Name of the Person], the emerging stars of Land 18, The Rising Realm, where relentless effort and brilliance pave the path to join the elite. Your journey to fame and glory begins now!`,
    person: '',
    icon: '',
    chain_id: null,
    path: otherFlag,
    x: 12500,
    y: 10000,
    land: 'LAND 22',
    des: 'The Rising Realm, where the unnamed heroes grind and shine, striving to join the elite. Your journey to fame starts here – farm, rank, and rise!',
    image: land18
  }
]
