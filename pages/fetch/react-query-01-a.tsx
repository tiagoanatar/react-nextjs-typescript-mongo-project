import { Blank } from "../../components/layouts/blank";
import { useAsyncFetch } from "../../hooks/useAsyncFetch";
import Link from 'next/link';

const Test = () => {

  interface User {
    userId: 1,
    id: 1,
    title: string,
    completed: boolean
  }

  const { data, status } = useAsyncFetch('todo-call-01', 'https://jsonplaceholder.typicode.com/todos');

  return (
    <>
      <h1>Test Page</h1>
      <Link href="/radio-input">
        <a>Next Page</a>
      </Link>

      <h5>Data status: {status}</h5>
      
      <div style={container}>
        {data ? data.map((item, index) => {
          return (
            <div key={index} style={card}>
              <h6>{item.title} / {item.id}</h6>
            </div>
          )
        }) : null}
      </div>
    </>
  );
};

// Choose layout
Test.layout = Blank

// Styles
const container = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px'
}

const card = {
  border: '3px solid #ccc',
  width: '20%'
}

export default Test;
