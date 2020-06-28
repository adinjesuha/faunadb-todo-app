import React, { useContext } from 'react';
import { IdentityContext } from '../../identity-context';
import { Text, Divider, Box } from 'theme-ui';

export default () => {
  const { user } = useContext(IdentityContext);
  return (
    <Box
      my={4}
    >
      <Text
        sx={{
          fontSize: [3,4],
          mb: "20px"
        }}
      >
        You are logged as <strong>{user.user_metadata.full_name}</strong>
      </Text>
      <Divider />
    </Box>
  )
}