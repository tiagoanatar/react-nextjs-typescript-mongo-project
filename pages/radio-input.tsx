import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
//import styles from '../styles/Home.module.scss';
import { Main } from "../components/layouts/main";
import { Admin } from "../components/layouts/admin";

import { BaseRadio } from "../components/base/BaseRadio";

const Home = () => {

  const [radioData, setRadioData] = useState<string | undefined>('')

  return (
    <>
      {radioData}
      <form>
        <BaseRadio
          label="Radio Text 01"
          name="radio-set-01"
          value="radio value 1"
          id="radio-01"
          alternate={true}
          effectValue={radioData}
          effectFunction={setRadioData}
        />
        <BaseRadio
          label="Radio Text 02"
          name="radio-set-01"
          value="radio value 2"
          id="radio-02"
          effectValue={radioData}
          effectFunction={setRadioData}
        />
        <BaseRadio
          label="Radio Text 03"
          name="radio-set-01"
          value="radio value 3"
          id="radio-03"
          effectValue={radioData}
          effectFunction={setRadioData}
        />
      </form>
    </>
  );
};

// Choose layout
Home.layout = Admin

export default Home;
