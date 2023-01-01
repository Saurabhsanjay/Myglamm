import {
    Box,
    Flex,
    Icon,
    IconButton,
    Link,
    List,
    ListItem,
    ListIcon,
    Text,
    useColorMode,
  } from "@chakra-ui/react";
  
 export default function AdminUI() {
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <Flex direction="row">
        <Box
          as="aside"
          width="80px"
          height="100vh"
          bg={`mode.${colorMode}.sidebarBg`}
          color={`mode.${colorMode}.sidebarText`}
        >
          <Flex align="center" mt={5}>
            <Icon name="logo" size="32px" />
          </Flex>
          <List mt={8}>
            <ListItem>
              <ListIcon icon="add" />
              <Link>Add Product</Link>
            </ListItem>
            <ListItem>
              <ListIcon icon="delete" />
              <Link>Delete Product</Link>
            </ListItem>
            <ListItem>
              <ListIcon icon="dollar-sign" />
              <Link>View Revenue</Link>
            </ListItem>
            <ListItem>
              <ListIcon icon="users" />
              <Link>Manage Users</Link>
            </ListItem>
          </List>
        </Box>
        <Box bg={`mode.${colorMode}.bg`} color={`mode.${colorMode}.text`} p={8}>
          <Flex align="center" justify="space-between" mb={8}>
            <Text fontSize="2xl">Admin Dashboard</Text>
            <IconButton
              variant="ghost"
              aria-label="Toggle dark mode"
              icon={colorMode === "light" ? "sun" : "moon"}
              onClick={toggleColorMode}
            />
          </Flex>
          {/* Main content goes here */}
        </Box>
      </Flex>
    );
  }
  