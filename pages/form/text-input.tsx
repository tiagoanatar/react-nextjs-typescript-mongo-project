import { useState } from "react";
//import styles from '../styles/Home.module.scss';
import { Admin } from "../../components/layouts/admin";
import { BaseInput } from "../../components/base/BaseInput";
import { useAsyncFetch } from "../../hooks/useAsyncFetch";
import { useOnWindowScroll } from "../../hooks/useOnWindowScroll";

const Home = () => {

  const { data, status } = useAsyncFetch('todo-call-02', 'https://jsonplaceholder.typicode.com/todos');

  return (
    <>
      <form>
        <BaseInput
          label="Input Text 01"
          name="text-set-01"
          value={data ? data[0]?.title : ''}
          id="text-01"
        />
        <BaseInput
          label="Input Text 02"
          name="text-set-01"
          value={data ? data[1]?.title : ''}
          id="text-02"
        />
        <BaseInput
          label="Input Text 02"
          name="text-set-01"
          value=""
          id="text-02"
        />
      </form>
    </>
  );
};

// Choose layout
Home.layout = Admin

export default Home;
