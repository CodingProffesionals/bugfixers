import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function About() {
  const User  = useContext(UserContext);
  console.log('About',User);
  
  return (
    <>
    <div>about</div>
    </>   
  )
}
