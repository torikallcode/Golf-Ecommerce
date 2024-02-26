import { FooterJoin } from "../../Fragments/Join/FooterJoin"
import { HeadJoin } from "../../Fragments/Join/HeadJoin"

export const JoinSection = ({ classname }) => {
  return (<div className={`${classname} bg-primary-0 w-full flex flex-col justify-center items-center py-24 px-8`}>
    <HeadJoin classname="mx-auto max-w-md xl:max-w-lg"></HeadJoin>
    <FooterJoin classname="max-w-md w-full xl:max-w-lg"></FooterJoin>
  </div >
  )
}