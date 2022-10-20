import { Outlet } from 'react-router-dom';
import { PageWrapper, PageContent } from './styles';
import { Header } from '../../components/Header/';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Navbar from '../../components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: green[600],
    },
  },
});

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Header />
        <PageContent>
          <Outlet />
        </PageContent>
        <Navbar />
      </PageWrapper>
    </ThemeProvider>
  );
};
export default Layout;
