import { useQuery } from "@tanstack/react-query";

export const useAsyncFetch = (key:string, url:string) => {

  async function fetchData(){
    const res = await fetch(url)
    return await res.json()
  }

  const response = useQuery([key], fetchData);
  console.log(response);
  return response
}
