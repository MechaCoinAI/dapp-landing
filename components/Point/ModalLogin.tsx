import React from 'react'
import Modal from "../common/Modal";
import Image from 'next/image';
import ScrewSVG from "@/images/meow-ai/screw.svg";
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { toast } from 'react-toastify';


type TypeModalLogin = {
    closeModal: () => void
    isOpen: boolean
}

export default function ModalLogin({
    closeModal,
    isOpen,
}: TypeModalLogin) {

    const { data: session, status } = useSession()

    return (
        <Modal closeModal={closeModal} isOpen={isOpen}>
            <div
                className="flex flex-col gap-10 p-[32px] rounded-2xl relative w-[440px] bg-linear-modal backdrop-blur-[20px]"
                style={{
                    background:
                        "linear-gradient(0deg, rgba(128, 128, 128, 0.20) 0%, rgba(128, 128, 128, 0.20) 100%), rgba(255, 117, 17, 0.08)",
                }}
            >
                <h1 className='font-bold'>Login</h1>
                <p className="text-base font-normal">
                    Meow meow MEOW 🐱,
                    <br /> {`Please connect your Twitter/X to join the airdrop! This is just to verify your account, we won't be able to post or make changes.`}
                </p>
                <div className="flex items-center gap-5">
                    <div

                        onClick={ () => {
                            signIn('twitter')
                          }
                        }
                        className="flex whitespace-nowrap cursor-pointer items-center justify-center relative flex-1 text-xl p-4 text-[#0A0905] bg-orange-500 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.40)] border-[2px] border-[#000]"

                    >
                        <Image src={ScrewSVG} width={6} height={6} alt="" className="absolute left-[4px] top-[5px]" />
                        <Image
                            src={ScrewSVG}
                            width={6}
                            height={6}
                            alt=""
                            className="absolute left-[4px] bottom-[5px]"
                        />
                        <Image src={ScrewSVG} width={6} height={6} alt="" className="absolute right-[4px] top-[5px]" />
                        <Image
                            src={ScrewSVG}
                            width={6}
                            height={6}
                            alt=""
                            className="absolute right-[4px] bottom-[5px]"
                        />
                        Connect Account
                    </div>
                    {/* <div
                        className="flex whitespace-nowrap cursor-pointer items-center justify-center relative flex-1 text-xl p-4 text-[#BEAFA5] border-[2px] border-[#BEAFA5]"
                        onClick={() => signOut()}
                    >
                        <Image src={ScrewSVG} width={6} height={6} alt="" className="absolute left-[4px] top-[5px]" />
                        <Image
                            src={ScrewSVG}
                            width={6}
                            height={6}
                            alt=""
                            className="absolute left-[4px] bottom-[5px]"
                        />
                        <Image src={ScrewSVG} width={6} height={6} alt="" className="absolute right-[4px] top-[5px]" />
                        <Image
                            src={ScrewSVG}
                            width={6}
                            height={6}
                            alt=""
                            className="absolute right-[4px] bottom-[5px]"
                        />
                        Keep generating
                    </div> */}
                </div>
            </div>
        </Modal>
    )
}
