import { useParams } from "@remix-run/react";

export default () => {
  const { id } = useParams();
  return <div>Article {id}</div>;
};
