import {Box, Flex, Image, Link, Text} from "@chakra-ui/react";

import githubIcon from "../../Styling/UI Assets/assets/icons/github-default.svg";
import githubHoverIcon from "../../Styling/UI Assets/assets/icons/github-active.svg";

function Footer() {
  return (
    <footer>
      <Box width="100%">
        <Flex
          align="center"
          bg="white"
          gap={2}
          height={"100%"}
          justify="center"
          margin="0 auto"
          maxWidth="1464px"
          padding="80px"
          width="100%"
        >
          <Link href="https://github.com/Flo-314/Aerolab-challenge" name="github profile">
            <Image
              alt="Github icon"
              height={{tablet: "32px", mobile: "24px"}}
              src={githubIcon}
              width={{tablet: "32px", mobile: "24px"}}
              onMouseLeave={(e) => {
                e.target.src = githubIcon;
              }}
              onMouseOver={(e) => {
                e.target.src = githubHoverIcon;
              }}
            />
          </Link>
          <Link href="https://github.com/Flo-314/Aerolab-challenge">
            <Text
              color="neutrals.600"
              fontSize={{desktop: "text.Dl1", mobile: "text.Ml1"}}
              fontWeight={1000}
            >
              View this repository
            </Text>
          </Link>
        </Flex>
      </Box>
    </footer>
  );
}

export default Footer;
