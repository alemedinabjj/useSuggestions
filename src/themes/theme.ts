import {
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  extendTheme,
  Box
} from "@chakra-ui/react";
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)"
};
export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        margin: 0,
        padding: 0,
        fontFamily: "body",
        lineHeight: "base",
        bg: 'gray.900',
        color: 'gray.200',
      },
      '*, *::before, &::after': {
        boxSizing: 'border-box'
      },
      'h1, h2, h3, h4, h5, h6': {
        margin: 0,
        fontWeight: 'bold',
        lineHeight: 'tight',
        color: 'gray.200',
      },
      'h1': {
        fontSize: '4xl',
      },
      'input, textarea, select, button': {
        fontFamily: 'body',
      },
      'input': {
        borderColor: 'gray.400',
      }
    },
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles
              }
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
              ...activeLabelStyles
            },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top"
            }
          }
        }
      }
    }
  }
});
