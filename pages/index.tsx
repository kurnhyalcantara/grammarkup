import NextLink from "next/link"
import { Box, Heading, Text, Button, Divider, Flex } from "@chakra-ui/core"
import Container from "@/components/container"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import SEO from "@/components/seo"

const ArrowRight = (props) => (
  <Box as="svg" fill="currentColor" viewBox="0 0 20 20" {...props}>
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </Box>
)

const HomePage = () => {
  return (
    <>
      <SEO
        title="Grammarkup - A Web for learning grammar"
        description="A Web for learning grammar"
      />
      <Header />
      <Box mb={4}>
        <Box as="section" pt={40} pb={20}>
          <Container>
            <Box maxW="760px" mx="auto" textAlign="center">
              <Heading
                as="h1"
                fontSize={{ base: "2.25rem", md: "3rem", lg: "3.75rem" }}
                letterSpacing="tight"
                fontWeight="bold"
                mb={4}
                lineHeight="1.2"
              >
                Learn grammar
                <Box as="span" color="teal.500">
                  {" "}
                  with speed
                </Box>
              </Heading>

              <Text opacity={0.7} fontSize={{ base: "lg", lg: "xl" }} mt={6}>
                Grammarkup is a web for learn grammar
              </Text>

              <Flex justify="center" mt={8}>
                <NextLink href="/beginner/getting-started" passHref>
                  <Button
                    as="a"
                    h={12}
                    px={8}
                    fontSize="xl"
                    size="lg"
                    colorScheme="teal"
                    rightIcon={<ArrowRight fontSize="0.8em" />}
                  >
                    Get Started
                  </Button>
                </NextLink>
              </Flex>
            </Box>
          </Container>
        </Box>

        <Divider />

        <Footer />
      </Box>
    </>
  )
}

export default HomePage