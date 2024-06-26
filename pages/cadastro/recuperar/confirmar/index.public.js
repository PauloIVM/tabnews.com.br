import { Box, DefaultLayout, Heading, Text } from '@/TabNewsUI';

export default function ConfirmRecoverPassword() {
  return (
    <DefaultLayout containerWidth="medium" metadata={{ title: 'Confirme seu email' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', mt: 10 }}>
        <Heading as="h1">Confira seu e-mail</Heading>
        <Text>Você receberá um link para definir uma nova senha.</Text>
      </Box>
    </DefaultLayout>
  );
}
