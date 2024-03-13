import React from "react";
import { Box, Container, Heading, Text, SimpleGrid, Image, Stack, Button, useColorModeValue } from "@chakra-ui/react";
import { FaAward, FaHandshake, FaUsers } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="2xl" mt={6} mb={2}>
          Celebrating Black Excellence
        </Heading>
        <Text color={"gray.500"}>Honoring achievements, leadership, and talent in our community.</Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={10}>
        <Feature icon={<FaAward fontSize="3rem" />} title="Awards & Recognition" text="Recognizing the outstanding accomplishments and contributions in various fields." />
        <Feature icon={<FaHandshake fontSize="3rem" />} title="Community Partnerships" text="Building strong partnerships to foster support and growth within the community." />
        <Feature icon={<FaUsers fontSize="3rem" />} title="Empowerment Initiatives" text="Empowering community members through education, mentorship, and economic opportunities." />
      </SimpleGrid>

      <Box py={10}>
        <Heading as="h3" size="lg" mb={4}>
          Featured Leaders
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <LeaderCard name="Dr. Mae Jemison" role="Astronaut & Physician" image="https://images.unsplash.com/photo-1553747069-aefa5a5c9bad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxEci4lMjBNYWUlMjBKZW1pc29ufGVufDB8fHx8MTcxMDI4OTUzM3ww&ixlib=rb-4.0.3&q=80&w=1080" />
          <LeaderCard name="Chadwick Boseman" role="Actor & Playwright" image="https://images.unsplash.com/photo-1546994372-f636adc59e4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDaGFkd2ljayUyMEJvc2VtYW58ZW58MHx8fHwxNzEwMjg5NTMzfDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <LeaderCard name="Kamala Harris" role="Vice President of the USA" image="https://images.unsplash.com/photo-1616892026745-1ab3c69efe21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxLYW1hbGElMjBIYXJyaXN8ZW58MHx8fHwxNzEwMjg5NTMzfDA&ixlib=rb-4.0.3&q=80&w=1080" />
        </SimpleGrid>
      </Box>
    </Container>
  );
};

const Feature = ({ title, text, icon }) => {
  return (
    <Stack align={"center"} textAlign={"center"}>
      <Box bg={useColorModeValue("gray.50", "gray.900")} rounded={"full"} p={6} color={useColorModeValue("black", "white")}>
        {icon}
      </Box>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const LeaderCard = ({ name, role, image }) => {
  return (
    <Stack align={"center"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8} borderRadius={"xl"}>
      <Image borderRadius={"full"} boxSize={"150px"} src={image} alt={`Image of ${name}`} objectFit={"cover"} />
      <Text fontWeight={600}>{name}</Text>
      <Text fontSize={"sm"} color={"gray.500"} mb={4}>
        {role}
      </Text>
      <Button
        w={"full"}
        mt={8}
        bg={useColorModeValue("blue.400", "blue.500")}
        color={"white"}
        rounded={"xl"}
        boxShadow={"0 5px 20px 0px rgba(72, 187, 120, 0.43)"}
        _hover={{
          bg: useColorModeValue("blue.500", "blue.600"),
        }}
      >
        Connect
      </Button>
    </Stack>
  );
};

export default Index;
