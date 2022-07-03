import { ComponentType, ReactNode } from 'react'; 

interface Header {
  blockA?: ReactNode | string
  blockB?: ReactNode | string
  blockC?: ReactNode | string
}

export const LayoutHeader = ({blockA, blockB, blockC} : Header) => {
  return (
    <header className="theme-global-header">
      { blockA ? ( <section>{ blockA }</section> ) : null}
      { blockB ? ( <section>{ blockB }</section> ) : null}
      { blockC ? ( <section>{ blockC }</section> ) : null}
    </header>
  )
}