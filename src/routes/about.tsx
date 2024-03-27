import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useQuery, gql } from '@apollo/client';

const GET_CEO = gql`
query ExampleQuery {
  company {
    ceo
  }
}
`;

export default function About() {
  const User  = useContext(UserContext);
  const { loading, error, data } = useQuery(GET_CEO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log('useContext data',User);
  console.log('data through apollo client',data);
  
  return (
    <>
    <div>
      CEO of SpaceX is {data?.company?.ceo ? data?.company?.ceo : '?'}
    </div>
    </>   
  )
}
