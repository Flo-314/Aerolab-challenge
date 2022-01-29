import {Box, Flex, Image, Link, Text} from "@chakra-ui/react";

import githubIcon from "../../UI Assets/assets/icons/github-default.svg";
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
          <Link href="https://github.com/Flo-314/Aerolab-challenge">
            <Image src={githubIcon} />
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
