import { type NextPage } from "next";

import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { DoubleNavbar } from "../components/DoubleNavbar/DoubleNavbar";

const Home: NextPage = () => {
  const theme = useMantineTheme();

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<DoubleNavbar />}
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      // header={<HeaderMegaMenu />}
    >
      {/* <ColorSchemeToggle /> */}
      <Text>Resize app to see responsive navbar in action</Text>
      {/* <Welcome /> */}
    </AppShell>
  );
};

export default Home;
