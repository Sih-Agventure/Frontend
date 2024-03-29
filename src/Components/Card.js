import { Flex, useColorModeValue, chakra, Image, Box } from "@chakra-ui/react";
export default function Cards() {
  return (
    <>
      <Flex
        bg={useColorModeValue("#F9FAFB", "gray.600")}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          maxW="xs"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
        >
          <Box px={4} py={2}>
            <chakra.h1
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="3xl"
              textTransform="uppercase"
            >
              Tractor
            </chakra.h1>
            <chakra.p
              mt={1}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </chakra.p>
          </Box>

          <Image
            h={48}
            w="full"
            fit="cover"
            mt={2}
            src="https://www.deere.co.in/assets/images/region-1/products/tractors/d-series-tractors/john-deere-india-d-series-tractors.jpg"
            alt="NIKE AIR"
          />

          <Flex
            alignItems="center"
            justifyContent="space-between"
            px={4}
            py={2}
            bg="gray.900"
            roundedBottom="lg"
          >
            <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
              ₹ 3999
            </chakra.h1>
            <chakra.button
              px={2}
              py={1}
              bg="white"
              fontSize="xs"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "gray.200",
              }}
              _focus={{
                bg: "gray.400",
              }}
            >
              Add to cart
            </chakra.button>
          </Flex>
        </Box>
      </Flex>

      <Flex
        bg={useColorModeValue("#F9FAFB", "gray.600")}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          maxW="xs"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
        >
          <Box px={4} py={2}>
            <chakra.h1
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="3xl"
              textTransform="uppercase"
            >
              AXE
            </chakra.h1>
            <chakra.p
              mt={1}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </chakra.p>
          </Box>

          <Image
            h={48}
            w="full"
            fit="cover"
            mt={2}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWprNzBvL2Sxfp1hOdh3dWBrop7VPM7_uxUg&usqp=CAU"
            alt="NIKE AIR"
          />

          <Flex
            alignItems="center"
            justifyContent="space-between"
            px={4}
            py={2}
            bg="gray.900"
            roundedBottom="lg"
          >
            <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
              ₹ 249
            </chakra.h1>
            <chakra.button
              px={2}
              py={1}
              bg="white"
              fontSize="xs"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "gray.200",
              }}
              _focus={{
                bg: "gray.400",
              }}
            >
              Add to cart
            </chakra.button>
          </Flex>
        </Box>
      </Flex>

      <Flex
        bg={useColorModeValue("#F9FAFB", "gray.600")}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          maxW="xs"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
        >
          <Box px={4} py={2}>
            <chakra.h1
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="3xl"
              textTransform="uppercase"
            >
              Shovel
            </chakra.h1>
            <chakra.p
              mt={1}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </chakra.p>
          </Box>

          <Image
            h={48}
            w="full"
            fit="cover"
            mt={2}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3ugQ8qnt2NhS1wjbOlK1sOAlhhBo6Xpj1g&usqp=CAU"
            alt="NIKE AIR"
          />

          <Flex
            alignItems="center"
            justifyContent="space-between"
            px={4}
            py={2}
            bg="gray.900"
            roundedBottom="lg"
          >
            <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
              ₹ 199
            </chakra.h1>
            <chakra.button
              px={2}
              py={1}
              bg="white"
              fontSize="xs"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "gray.200",
              }}
              _focus={{
                bg: "gray.400",
              }}
            >
              Add to cart
            </chakra.button>
          </Flex>
        </Box>
      </Flex>

      <Flex
        bg={useColorModeValue("#F9FAFB", "gray.600")}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          maxW="xs"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
        >
          <Box px={4} py={2}>
            <chakra.h1
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="3xl"
              textTransform="uppercase"
            >
              Rake
            </chakra.h1>
            <chakra.p
              mt={1}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </chakra.p>
          </Box>

          <Image
            h={48}
            w="full"
            fit="cover"
            mt={2}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD8m2RgJ3NYyYau0paLB8cOODcTtOcCVs7zQ&usqp=CAU"
            alt="NIKE AIR"
          />

          <Flex
            alignItems="center"
            justifyContent="space-between"
            px={4}
            py={2}
            bg="gray.900"
            roundedBottom="lg"
          >
            <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
              ₹ 299
            </chakra.h1>
            <chakra.button
              px={2}
              py={1}
              bg="white"
              fontSize="xs"
              color="gray.900"
              fontWeight="bold"
              rounded="lg"
              textTransform="uppercase"
              _hover={{
                bg: "gray.200",
              }}
              _focus={{
                bg: "gray.400",
              }}
            >
              Add to cart
            </chakra.button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
            }