import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Input } from '@chakra-ui/react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    navigate('/login');
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Signup</Button>
    </Box>
  );
};

export default Signup;
