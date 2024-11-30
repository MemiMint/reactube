import { Box, Flex, Avatar, FlexProps, Text } from "@chakra-ui/react";

export const Subscriptions = async (props: FlexProps) => {
  const request = await fetch(
    "https://dummyjson.com/users?limit=10&skip=20&select=firstName,age,image,username",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const data: {
    users: { id: number; firstName: string; age: number; image: string; username: string }[];
  } = await request.json();

  const users = data.users;

  return (
    <Box
      mt={2}
      maxH={200}
      overflowY='auto'
      w='100%'
      py={4}
      as='div'
      borderBottom='1px solid #E5E5E5'
    >
      <Text ml={6} mb={2} fontSize={16}>
        Subscriptions
      </Text>
      {users.map((user, index) => {
        return (
          <Box
            key={index}
            as='a'
            href='#'
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
          >
            <Flex
              align='center'
              p='2'
              mx='4'
              borderRadius='lg'
              role='group'
              cursor='pointer'
              fontSize={14}
              gap={6}
              _hover={{
                bg: "#E5E5E5",
                color: "black",
              }}
              {...props}
            >
              <Avatar size='sm' src={user.image} /> <Text>{user.firstName}</Text>
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

<Box w='100%' py={4} as='div' borderBottom='1px solid #E5E5E5'></Box>;
