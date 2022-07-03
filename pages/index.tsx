import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.scss'

import { BaseButton } from '../components/base/BaseButton'
import { LayoutHeader } from '../components/LayoutHeader'

const Home: NextPage = () => {
  return (
    <div>
      <LayoutHeader blockA={<BaseButton label="Header Button" type="button" />} blockB="Top Text" />

      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />

      <BaseButton label="Lower Button" type="button" />
    </div>
  )
}

export default Home
