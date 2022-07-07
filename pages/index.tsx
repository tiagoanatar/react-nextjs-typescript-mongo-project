import type { NextPage } from "next";
import { InferGetStaticPropsType } from 'next'
import Image from "next/image";
import { useState } from "react";
//import styles from '../styles/Home.module.scss';

import { BaseButton } from "../components/base/BaseButton";
import { LayoutHeader } from "../components/LayoutHeader";
import Link from 'next/link'

interface User {
  id: string
  name: string
  username: string
  email: string
  address: string
  phone: string
  website: string
  company: string
}

interface Users {
  users: User[]
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await res.json()

  return {
    props: {
      users,
    },
  }
}

const Home: NextPage<Users> = ({ users }) => {

  return (
    <div>
      <LayoutHeader
        blockA={<BaseButton label="Header Button" type="button" />}
        blockB="Top Text"
      />

      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />

      {users.map((item, index) => {
        return (<div key={index}>{ item.name }</div>)
      })}

      <Link href="/radio-input">
          <a>Radui Input</a>
        </Link>
      
    </div>
  );
};

export default Home;