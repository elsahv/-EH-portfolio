import { sanityClient, urlFor } from "../client";
import { PortableText } from "@portabletext/react";

const test = ({ title }) => {
  return (
    <>
      <h2>{title}</h2>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "websites"]{
    title,
  }`;

  const website = await sanityClient.fetch(query);
  if (!website) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: website.title,
      },
    };
  }
};

export default test;
