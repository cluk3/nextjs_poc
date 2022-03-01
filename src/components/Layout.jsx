import Link from "next/link";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import React from "react";
import { BreadcrumbItem, Breadcrumb, Container, Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Container>
      <Box>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link href="/">Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link href="/about">About</Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Link href="/contacts">Contacts</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      {children}
    </Container>
  );
};

export default Layout;
