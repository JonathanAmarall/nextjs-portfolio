import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import React from 'react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jonathan Amaral</Text>
          <Text color="gray.300" fontSize="small">
            jon.dev@mail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Jonathan Amaral"
        src="https://media-exp3.licdn.com/dms/image/C4D03AQGo3QUZ3JFsrQ/profile-displayphoto-shrink_200_200/0/1556216264495?e=1628726400&v=beta&t=TtwvzpN3kVkuia8r_lLozkwWU7kiPZmFN6gejhJ4E8M"
      />
    </Flex>
  );
}
