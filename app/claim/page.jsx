'use client'

import Link from 'next/link'
import Image from 'next/image'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'
import { getClaim, getChillwhale } from './../../util/api'
import ABI from './../../abi/chillwhale.json'
import { useAuth, provider } from '../../contexts/AuthContext'
import Icon from '../../helper/MaterialIcon'
import Web3 from 'web3'
import moment from 'moment-timezone'
import DefaultPFP from './../../public/default-pfp.svg'
import PageTitle from './../../components/PageTitle'
import Shimmer from './../../helper/Shimmer'
import styles from './page.module.scss'

export default function Page({ params, searchParams }) {
  const [claim, setClaim] = useState([])
  const [chillwhale, setChillwhale] = useState([])
  const [chillwhaleData, setChillwhaleData] = useState([])
  const [options, setOptions] = useState({ list: [`Choice 1`, `Choice 2`, `Choice 3`] })
  // const filter = await searchParams
  // const page = filter.page
  // const product = await getProductList(filter)
  const auth = useAuth()

  const web3Readonly = new Web3(process.env.NEXT_LUKSO_PROVIDER)
  const _ = web3Readonly.utils
  const contractReadonly = new web3Readonly.eth.Contract(ABI, `0x86e817172b5c07f7036bf8aa46e2db9063743a83`)

  const fetchData = async (dataURL) => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
    }
    const response = await fetch(`${dataURL}`, requestOptions)
    if (!response.ok) throw new Response('Failed to get data', { status: 500 })
    return response.json()
  }

  // function numberToBytes32(number) {
  //   const hex = web3Readonly.utils.toHex(number);
  //   return web3Readonly.utils.padLeft(hex, 64);
  // }

  const getChillwhaleData = async (addresses) => {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', `application/json`)
    myHeaders.append('Accept', `application/json`)

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        query: `query MyQuery {
  Asset(
    limit: 30
    where: {isLSP7: {_eq: false}, id: {_eq: "0x86e817172b5c07f7036bf8aa46e2db9063743a83"}}
  ) {
    id
    isLSP7
    lsp4TokenName
    lsp4TokenSymbol
    lsp4TokenType
    name
    totalSupply
    owner_id
    tokens(where: {formattedTokenId: {_in: ${JSON.stringify(addresses)}}}) {
      id
      formattedTokenId
      name
      images(limit: 1) {
        src
      }
      holders {
        profile_id
        profile {
          fullName
          profileImages(limit: 1) {
            src
          }
        }
      }
    }
  }
}`,
      }),
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}`, requestOptions)
    if (!response.ok) {
      throw new Response('Failed to ', { status: 500 })
    }
    const data = await response.json()
    return data
  }


  useEffect(() => {
    getClaim().then(res => {
      setClaim(res)
    })

    getChillwhale().then(res => {
      console.log(res)
      setChillwhale(res)
      let addresses = []
      res.map(async (item, i) => {
        addresses.push(item.token_id.toString())
      })

      getChillwhaleData(addresses).then(res => {
        console.log(res)
        if (Array.isArray(res.data.Asset)) {

          setChillwhaleData(res.data.Asset[0].tokens)
        }
      })
    })
  }, [])

  return (
    <div className={`${styles.page} ms-motion-slideDownIn`}>
      <PageTitle title={`Claim`} path={`../`} />

      <div className={`__container`} data-width={`medium`}>
        <h3>Airdrop</h3>
        <div className={`grid grid--fit grid--gap-1 w-100`} style={{ '--data-width': `250px` }}>
          <table>
            <caption className={`text-uppercase`}></caption>
            <thead>
              <tr>
                <th scope={`col`} width={`25%`}>
                  Row
                </th>
                <th scope={`col`}>Universal Profile</th>
                <th scope={`col`}>Available</th>
              </tr>
            </thead>
            <tbody>
              {claim && claim.map((item, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{++i}</th>

                    <td className={`d-f-c`}>
                      <a target={`_blank`} className={`d-f-c grid--gap-050`} href={`https://universaleverything.io/${item.wallet}`}>
                        <Profile addr={item.wallet} />
                      </a>
                    </td>
                    <td>
                      <small>{item.claim_count} products</small>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <h3 className={`mt-40`}>Chillwhale eligibility</h3>
        <small>for Golden Punx</small>
        <a href="https://universal.page/collections/lukso/0x86e817172b5c07f7036bf8aa46e2db9063743a83?attributeKey=Clothing&attributeValue=Golden%20Punx&attributeType=undefined">View collection</a>
        <div className={`grid grid--fit grid--gap-1 w-100`} style={{ '--data-width': `250px` }}>
          <table>
            <caption className={`text-uppercase`}></caption>
            <thead>
              <tr>
                <th scope={`col`}>Row</th>
                <th scope={`col`}>Owner</th>
                <th scope={`col`}>TokenId</th>
                <th scope={`col`} className={`text-center`}>Status</th>
              </tr>
            </thead>
            <tbody>
              {chillwhaleData && chillwhaleData.map((item, i) => {
                console.log(item)
                return (
                  <tr key={i}>
                    <th scope="row">{++i}</th>
                    <td className={`d-f-c`}>
                      <a target={`_blank`} className={`d-f-c grid--gap-050`} href={`https://universaleverything.io/${item.wallet}`}>
                        <figure className={`${styles.pfp} d-f-c flex-column grid--gap-050`}>
                          <img alt={`Default PFP`} src={`${item.holders[0].profile.profileImages.length > 0 ? item.holders[0].profile.profileImages[0].src : DefaultPFP.src}`} className={`rounded`} />
                          <figcaption> {item.holders[0].profile.fullName}</figcaption>
                        </figure>
                      </a>
                    </td>
                    <td>
                      #{item.formattedTokenId}
                    </td>
                    <td>
                      {chillwhale && chillwhale.filter(filterItem => filterItem.token_id.toString() === item.formattedTokenId.toString())[0].status}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className={`grid grid--fit ${styles['polls']}`} style={{ '--data-width': `400px` }}>
          {claim && claim.length === 0 && (
            <>
              <Shimmer style={{ width: `100%`, height: `190px` }} />
              <Shimmer style={{ width: `100%`, height: `190px` }} />

            </>
          )}
        </div>
      </div>
    </div>
  )
}
/**
 * Profile
 * @param {String} addr
 * @returns
 */
const Profile = ({ addr }) => {
  const [data, setData] = useState()

  const getProfile = async (addr) => {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', `application/json`)
    myHeaders.append('Accept', `application/json`)

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        query: `query MyQuery {
  search_profiles(
    args: {search: "${addr}"}
    limit: 1
  ) {
    fullName
    name
    id
    profileImages {
      src
    }
  }
}`,
      }),
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}`, requestOptions)
    if (!response.ok) {
      throw new Response('Failed to ', { status: 500 })
    }
    const data = await response.json()
    setData(data)
    return data
  }

  useEffect(() => {
    getProfile(addr).then(console.log)
  }, [])

  if (!data)
    return (
      <>
        <figure className={`${styles.pfp} d-f-c flex-column grid--gap-050`}>
          <img alt={`Default PFP`} src={DefaultPFP.src} className={`rounded`} />
          <figcaption>@username</figcaption>
        </figure>
      </>
    )

  return (
    <>
      <figure className={`${styles.pfp} d-f-c flex-column grid--gap-050`}>
        <img
          alt={data.data.search_profiles[0].fullName}
          src={`${data.data.search_profiles[0].profileImages.length > 0 ? data.data.search_profiles[0].profileImages[0].src : 'https://ipfs.io/ipfs/bafkreiatl2iuudjiq354ic567bxd7jzhrixf5fh5e6x6uhdvl7xfrwxwzm'}`}
          className={`rounded`}
        />
        <figcaption>@{data.data.search_profiles[0].name}</figcaption>
      </figure>
    </>
  )
}
