import type { NextPage } from "next";
import { InferGetStaticPropsType } from 'next'
import Image from "next/image";
import { useState } from "react";
//import styles from '../styles/Home.module.scss';

import { BaseButton } from "../components/base/BaseButton";
import { LayoutHeader } from "../components/structure/LayoutHeader";
import Link from 'next/link'
import { Admin } from "../components/layouts/admin";

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

const Home = ({ users }:Users) => {

  return (
    <div>
      <LayoutHeader
        blockA={<BaseButton label="Header Button" type="button" />}
        blockB="Top Text"
      />

      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />

      <div className="container">
        <div className="row">
          <div className="col">
          <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
          </div>
          <div className="col">
            Column
          </div>
          <div className="col">
            Column
          </div>
        </div>
      </div>

      {users.map((item, index) => {
        return (<div key={index}>{ item.name }</div>)
      })}

      <Link href="/radio-input">
          <a>Radui Input</a>
        </Link>
      
    </div>
  );
};

// Choose layout
Home.layout = Admin

export default Home;