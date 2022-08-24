import MainFeaturedPost from 'components/FeaturedPost';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const mainFeaturedPost = {
  title: 'Home page ',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const theme = createTheme();

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ padding: 5 }}>
        {<MainFeaturedPost post={mainFeaturedPost} />}
      </Container>
    </ThemeProvider>
  );
}
