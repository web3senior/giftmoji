import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router'
import { useUpProvider } from '../contexts/UpProvider'
import LSP0ERC725Account from '@lukso/lsp-smart-contracts/artifacts/LSP0ERC725Account.json'
import party from 'party-js'
import ABI from './../abi/giftmoji.json'
import toast, { Toaster } from 'react-hot-toast'
import Web3 from 'web3'
import Hero from './../assets/hero.svg'
import styles from './Home.module.scss'

function Home() {
  const [emoji, setEmoji] = useState([])
  const [react, setReact] = useState([])
  const [profiles, setProfiles] = useState()
  let [searchParams] = useSearchParams()
  const auth = useUpProvider()
  const web3 = new Web3(auth.provider)
  const _ = web3.utils
  const contract = new web3.eth.Contract(ABI, import.meta.env.VITE_CONTRACT)

  const getAllEmoji = async () => await contract.methods.getAllEmoji().call()

  const getAllUserReaction = async () => await contract.methods.getAllUserReaction(`${auth.contextAccounts[0]}`).call()

  const action = async (e, emoji) => {
    const t = toast.loading(`Waiting for transaction's confirmation`)

    const message = prompt(`Please enter a message:`)

    try {
      // window.lukso.request({ method: 'eth_requestAccounts' }).then((accounts) => {
      contract.methods
        .react(`${auth.contextAccounts[0]}`, emoji.emojiId, _.toHex(message))
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
      // })
    } catch (error) {
      console.log(error)
      toast.dismiss(t)
    }
  }

  const getIPFS = async (CID) => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }
    const response = await fetch(`${import.meta.env.VITE_IPFS_GATEWAY}${CID}`, requestOptions)
    if (!response.ok) return { result: false } //throw new Response('Failed to get data', { status: 500 })
    return response.json()
  }

  /**
   * Fetch Universal Profile
   * @param {address} addr
   * @returns
   */

  const fetchProfile = async (_addr) => {
    const LSP0ERC725Contract = new web3.eth.Contract(LSP0ERC725Account.abi, _addr)
    try {
      return LSP0ERC725Contract.methods
        .getData('0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5')
        .call()
        .then(async (data) => {
          data = data.substring(6, data.length)
          // console.log(data)
          //  data ="0x" + data.substring(6)
          //  console.log(data)
          // slice the bytes to get its pieces
          const hashFunction = '0x' + data.slice(0, 8)
          // console.log(hashFunction)
          const hash = '0x' + data.slice(76)
          const url = '0x' + data.slice(76)
          // console.log(hashFunction, ' | ', hash, ' | ', url)
          // check if it uses keccak256
          //  if (hashFunction === '0x6f357c6a') {
          // download the json file
          // console.log(`-------------`,web3.utils.hexToUtf8(url).replace('ipfs://', '').replace('://', ''))
          const json = await getIPFS(web3.utils.hexToUtf8(url).replace('ipfs://', '').replace('://', ''))
          return json
        })
    } catch (error) {
      console.log(`fetch profile error => `, error)
      return []
    }
  }

  useEffect(() => {
    console.clear()

    console.log(auth)

    getAllEmoji().then((res) => {
      console.log(res)
      if (res.length < 1) return
      setEmoji(res)
    })

    getAllUserReaction().then(async (res) => {
      console.log(res)

      if (res.length > 0) setReact(res)

      let responses_with_profile = []
      await Promise.all(
        res.map(async (response, i) => {
          return fetchProfile(response.sender).then((profile) => {
            responses_with_profile.push(Object.assign(profile, response))
          })
        })
      )

      setProfiles(responses_with_profile)
    })
  }, [])

  return (
    <div className={`${styles.page} __container`} data-width={`large`}>
      <Toaster />

      <header className={`${styles.header} d-flex flex-column align-items-center justify-content-between`}>
        <figure className={`ms-motion-slideDownIn`}>
          <img className={`Hero`} src={Hero} alt={`${import.meta.env.VITE_NAME}`} width={220} height={48} />
        </figure>
        <h2 className={`text-capitalize`}>{import.meta.env.VITE_NAME}</h2>
        {/* <p>{import.meta.env.NEXT_PUBLIC_SLOGAN}</p> */}
      </header>

      <main className={`${styles.main}`}>
        <div className={`grid grid--fit grid--gap-1 w-100`} style={{ '--data-width': `100px` }}>
          {emoji.length === 0 && (
            <div className={`d-flex align-items-center justify-content-between w-100`} style={{ '--data-width': `58px` }}>
              <div className={`shimmer ${styles.shimmer}`} />
              <div className={`shimmer ${styles.shimmer}`} />
              <div className={`shimmer ${styles.shimmer}`} />
              <div className={`shimmer ${styles.shimmer}`} />
              <div className={`shimmer ${styles.shimmer}`} />
              <div className={`shimmer ${styles.shimmer}`} />
              <div className={`shimmer ${styles.shimmer}`} />
              <div className={`shimmer ${styles.shimmer}`} />
              <div className={`shimmer ${styles.shimmer}`} />
              <div className={`shimmer ${styles.shimmer}`} />
              <div className={`shimmer ${styles.shimmer}`} />
            </div>
          )}
          {emoji &&
            emoji.map((item, i) => {
              return (
                <div key={i} data-name={item.name} className={`${styles.emoji} d-flex flex-column align-items-center justify-content-center card animate__animated animate__heartBeat`} title={item.name} onClick={(e) => action(e, item)}>
                  <span className={`${styles.emoji__icon}`}>{item.emoji}</span>
                  {/* <Image className={styles.emoji__icon} src={`/${item.emoji}.svg`} alt={`${import.meta.env.NEXT_PUBLIC_NAME}`} width={32} height={32} /> */}
                  <h3>{(react && react.length > 0 && react.filter((filterItem, i) => filterItem.emojiId === item.emojiId).length) || 0}</h3>
                  <small>{_.fromWei(item.price, `ether`)} LYX</small>
                </div>
              )
            })}
        </div>

        {profiles && profiles.length > 0 && (
          <div className={`${styles.profiles} grid grid--fill grid--gap-1 w-100 `} style={{ '--data-width': `32px` }}>
            {profiles.map((profile, i) => {
              return (
                <a key={i} target={`_blank`} href={`https://universaleverything.io/${profile.sender}`}>
                  <span>{emoji && emoji.filter((filterItem) => filterItem.emojiId === profile.emojiId)[0].emoji}</span>
                  {profile.LSP3Profile?.profileImage.length > 0 ? (
                    <img
                      className={`rounded ms-depth-16`}
                      alt={profile?.LSP3Profile?.name}
                      title={_.toUtf8(profile.message)}
                      src={`${
                        profile.LSP3Profile?.profileImage[0].url.search(`https://`) === -1
                          ? import.meta.env.VITE_IPFS_GATEWAY + profile.LSP3Profile?.profileImage[0].url.replace('ipfs://', '').replace('://', '')
                          : profile.LSP3Profile?.profileImage[0].url
                      }`}
                    />
                  ) : (
                    <img className={`rounded ms-depth-16`} alt={``} title={_.toUtf8(profile.message)} src={`https://universaleverything.io/assets/images/profile-default.svg`} />
                  )}
                </a>
              )
            })}
          </div>
        )}
      </main>

      <footer className={`${styles.footer} ms-motion-slideDownIn`}>
        <figure className={`${styles.arattalabs} ms-motion-slideDownIn ms-depth-16`}>
          <img className={styles.nft} src="/arattalabs.svg" alt={`${import.meta.env.NEXT_PUBLIC_NAME}`} width={26} height={26} />
        </figure>
      </footer>

      <a href={`/admin`} style={{ opacity: `0`, position: `fixed`, left: `0`, bottom: `0`, zIndex: `999` }}>
        admin
      </a>
    </div>
  )
}

export default Home
