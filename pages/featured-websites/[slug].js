/* eslint-disable @next/next/no-img-element */
import { PortableText } from "@portabletext/react";
import sanityClient from "../../utils/client";
import { urlFor } from "../../utils/image";
import { motion } from "framer-motion";

import {
  WebsiteTitle,
  WebsiteDescription,
  ImgWrapper,
  Padding,
  Wrapper,
} from "../../components/Slug.styled";

const FeaturedWebsites = ({ websitetitle, websiteImg, description, body }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Wrapper>
          <Padding>
            <WebsiteTitle>{websitetitle}</WebsiteTitle>
            <WebsiteDescription>{description}</WebsiteDescription>

            <ImgWrapper>
              <img
                src={urlFor(websiteImg)}
                alt=""
                className="img"
                width="100%"
                height="100%"
              />
            </ImgWrapper>
          </Padding>
          <Padding>
            <PortableText value={body} />
          </Padding>
        </Wrapper>
      </motion.div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const query = `*[_type == "websites" && slug.current == $pageSlug][0] {
    websitetitle,
    description,
    websiteImg,
    body,
}`;

  const website = await sanityClient.fetch(query, { pageSlug });
  if (!website) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        websitetitle: website.websitetitle,
        description: website.description,
        websiteImg: website.websiteImg,
        body: website.body,
      },
    };
  }
};

export default FeaturedWebsites;
