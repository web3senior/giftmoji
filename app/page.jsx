'use client'

import { useState, useEffect, useId, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { initContract, getEmoji, getReactionCounter } from '@/util/communication'
import { toast } from 'react-hot-toast'
import Sparkles from '@/components/Sparkles'
import LastGift from '@/components/LastGift'
import Web3 from 'web3'
import ABI from '@/abi/giftmoji.json'
import logoLukso from './../public/logo/lukso.svg'
import { useUpProvider } from '@/contexts/UpProvider'
import styles from './Page.module.scss'

export default function Page() {
  const [emoji, setEmoji] = useState([])
  const [reactionCounter, setReactionCounter] = useState(0)
  const [selectedEmoji, setSelectedEmoji] = useState()
  const { web3, contract } = initContract()
  const giftModal = useRef()
  const giftModalSendButton = useRef()
  const giftModalCancelButton = useRef()
  const giftModalMessage = useRef()
  const auth = useUpProvider()

  /**
   * Close the gift modal 
   */
  const giftModalClose = (action) => {

    // Check if user canceled gifting
    if (action === 'cancel') {
      giftModal.current.close()
      selectedEmoji.e.innerText = `Gift`
      return
    }

    const t = toast.loading(`Waiting for transaction's confirmation`)
    console.log(giftModalMessage.current.value)
    const message = giftModalMessage.current.value

    try {
      // window.lukso.request({ method: 'eth_requestAccounts' }).then((accounts) => {})
          const web3 = new Web3(auth.provider)
      
          // Create a Contract instance
          const contract = new web3.eth.Contract(ABI, process.env.NEXT_PUBLIC_CONTRACT)
        contract.methods
        .react(`${auth.wallet}`, selectedEmoji.item.emojiId, web3.utils.toHex(message))
        .send({
          from: auth.accounts[0],
          value: emoji.price,
        })
        .then((res) => {
          console.log(res)

          toast.success(`Done`)
          toast.dismiss(t)

          party.confetti(document.body, {
            count: party.variation.range(20, 40),
          })
        })
        .catch((error) => {
          toast.dismiss(t)
        })
    } catch (error) {
      console.log(error)
      toast.dismiss(t)
    }
  }

  const openModal = (e, item) => {
    e.target.innerText = `Sending...`
    setSelectedEmoji({ e: e.target, item: item, message: null })
    giftModal.current.showModal();
  }

  useEffect(() => {
    getEmoji().then(res => {
      if (Array.isArray(res)) {
        res.push({
          emojiId: `0x0`,
          name: `Your brand here`,
          emoji: `📣`,
          price: web3.utils.toWei(100, `ether`),
          ad: true
        })
        setEmoji(res)
      }
    })

    getReactionCounter().then(counter => setReactionCounter(counter))
  }, [])

  return (
    <div className={`${styles.page} ms-motion-slideDownIn mt-20`}>
      <div className={`__container`} data-width={`large`}>

        <dialog ref={giftModal}>
          {
            selectedEmoji && <div className={`d-f-c flex-column`}>
              <Sparkles className={`${styles.sparkles}`} size={1} color={`#fff`} />

              <figure className={`${styles.emoji__icon}`}>
                <Image
                  className={`animate__animated animate__heartBeat`}
                  src={`/emoji/${selectedEmoji.item.emoji}.svg`}
                  alt={`${process.env.NEXT_PUBLIC_NAME}`}
                  width={64}
                  height={64}
                  title={selectedEmoji.item.name}
                />
              </figure>
              <div className={`d-flex flex-row align-items-center justify-content-center gap-025 mt-10`}>
                <span className={`${styles.price} rounded`}>
                  {web3.utils.fromWei(selectedEmoji.item.price, `ether`)}
                </span>

                <div className={`${styles.priceIcon} d-flex align-items-center rounded`}>
                  <img alt={`L`} src={logoLukso.src} />
                  <code>LYX</code>
                </div>
              </div>
            </div>
          }
          <form method="dialog" className={`mt-10`}>
            <div className={`d-flex flex-column`}>
              <label for={`message`}>Please enter a message:</label>
              <input ref={giftModalMessage} type="text" className={`form-input`} name={`message`} id="" />
            </div>
            <div className={`d-flex flex-row gap-025 mt-10`}>
              <button type="submit" ref={giftModalSendButton} onClick={() => giftModalClose(`send`)}>Send</button>
              <button id="cancel" type="reset" ref={giftModalCancelButton} onClick={() => giftModalClose(`cancel`)}>Cancel</button>
            </div>
          </form>
        </dialog>

        <h1 className={`text-center mb-20`}>{reactionCounter} emojis gifted and counting!</h1>
        <div className={`${styles.grid} grid grid--fit w-100`} style={{ '--data-width': `110px` }}>
          {emoji && emoji.length > 0 && emoji.map((item, i) => {
            return (
              <div key={i} data-name={item.name} className={`${styles.emoji} d-flex flex-column align-items-center justify-content-between`}>
                <figure className={`${styles.emoji__icon}`}>
                  <Image
                    className={`animate__animated animate__heartBeat`}
                    src={`/emoji/${item.emoji}.svg`}
                    alt={`${process.env.NEXT_PUBLIC_NAME}`}
                    width={64}
                    height={64}
                    title={item.name}
                  />
                </figure>
                <div className={`w-100 d-flex flex-column grid--gap-050`}>
                  <div className={`d-flex flex-row align-items-center justify-content-center grid--gap-025`}>
                    <span className={`${styles.price} rounded`}>
                      {web3.utils.fromWei(item.price, `ether`)}
                    </span>

                    <div className={`${styles.priceIcon} d-flex align-items-center rounded`}>
                      <img alt={`L`} src={logoLukso.src} />
                      <code>LYX</code>
                    </div>
                  </div>
                  {!item?.ad && <button className={`rounded`} onClick={(e) => openModal(e, item)}>
                    Gift
                  </button>}
                  {item?.ad && <Link className={`rounded text-center`} href={`https://forms.gle/7CUviC2x4bXm5evG8`} target={`_blank`}>Apply Now</Link>}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* <div className={`__container`} data-width={`large`}>
        <LastGift />
      </div> */}
    </div>
  )
}
