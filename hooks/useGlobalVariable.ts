import { useQuery } from "@tanstack/react-query";

export const useGlobalVariable = ()=> {

  const setGlobalVariable = (value: string | number) => {
    console.log(value)
    return value
  }

  const { data } = useQuery(['global-variable'], setGlobalVariable);
  
  const getGlobalVariable = () => {
    console.log(data);
    return data
  }

  return {setGlobalVariable, getGlobalVariable}
}
