import { NativeBaseProvider, extendTheme, Box, Center } from 'native-base';

function Example() {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#0081C9',
        100: '#5BC0F8',
        200: '#86E5FF',
        300: '#FFC93C',
      
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706'
      }
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark'
    }
  });
  return <NativeBaseProvider theme={theme}>
      <Box bg="primary.300" p="4" />
    </NativeBaseProvider>;
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };