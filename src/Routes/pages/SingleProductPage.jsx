import {
  Badge,
  Button,
  HStack,
  Image,
  Text,
  useToast,
  VStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  SimpleGrid,
  Box,
  Flex,
  Divider,
  Center,
  IconButton,
  ButtonGroup,
  CircularProgress,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { NavLink, useParams } from "react-router-dom";
import AppContext from "../../context/Appcontext";
import { AiOutlineStar } from "react-icons/ai";
import { AddIcon, ArrowRightIcon, MinusIcon, StarIcon } from "@chakra-ui/icons";
import Scrollbars from "react-custom-scrollbars-2";

const SingleProductPage = () => {
  const { productsData, MeMoJi } = useContext(AppContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const { type, id } = useParams();
  const [singledata, setData] = React.useState({});
  const [quantity, setQuantity] = useState(+singledata.qty || 1);
  let user = JSON.parse(localStorage.getItem("user"));

  const getSinglePageData = async () => {
    let typedata = await Object.values(productsData.products[0])
      .flat(Infinity)
      .find((el) => el.id == id);

    setData(typedata);
    setLoading(false);
  };

  useEffect(() => {
    getSinglePageData();
  }, [id.quantity]);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  // const Saved = () =>

  const addTocart = () => {
    fetch("https://paradise-api.onrender.com/rest/cart", {
      method: "POST",
      body: JSON.stringify({
        user,
        ...singledata,
        ...{ updatedqty: quantity },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status == 201) {
          toast({
            title: `${singledata.title}`,
            description: `Added To Cart`,
            status: "success",
            position: "top",
            variant: "subtle",
            isClosable: true,
            duration: 2000,
          });
        } else {
          toast({
            title: `Something Went Wrong`,
            description: "Please Try again",

            status: "error",
            position: "top",
            variant: "subtle",
            isClosable: true,
            duration: 2000,
          });
        }
      })

      .catch((err) => {
        console.log(err);
        toast({
          title: `Internal Server Error`,
          description: "Please Try again",

          status: "error",
          position: "top",
          variant: "subtle",
          isClosable: true,
          duration: 2000,
        });
      });
  };

  let [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div style={{ display: "grid", placeItems: "center", height: "500px" }}>
        <CircularProgress
          isIndeterminate
          color="pink.500"
          thickness="6px"
          size="3.5rem"
        />
      </div>
    );
  }
  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 1, lg: 2 }}>
        {/* for image start */}
        <Box margin={{ base: "auto" }} objectFit={"cover"}>
          <Image src={singledata.image} alt="eror" />
        </Box>
        {/* for image end */}

        {/* for product info start */}
        <Box py={5} px={{ base: 2, sm: 3, md: 5 }}>
          <Text as="b" fontSize={{ base: "20px", md: "xl" }}>
            {singledata.title}
          </Text>
          <Text>{singledata.description}</Text>

          {/* for button & ratings  */}
          <Box
            w={{ base: "100%", md: "100%", lg: "50%" }}
            p={2}
            mt={{ base: "6", md: 7 }}
            border="2px solid #f3f3f3"
          >
            <Box
              py={3}
              display={"flex"}
              justifyContent={"space-between"}
              borderBottom="2px solid #f3f3f3"
            >
              <Text>Price</Text>
              <Text as="b">Rs {singledata.price}</Text>
            </Box>
            <Box
              py={3}
              display={"flex"}
              justifyContent={"space-between"}
              borderBottom="2px solid #f3f3f3"
            >
              <Text>Status</Text>
              <Text as="b">In Stock</Text>
            </Box>
            <Box
              py={3}
              display={"flex"}
              justifyContent={"space-between"}
              borderBottom="2px solid #f3f3f3"
            >
              <Text>Reviews</Text>
              <Text as="b">{MeMoJi.slice(0, 4)} Reviews</Text>
            </Box>
            <Box
              py={3}
              display={"flex"}
              justifyContent={"space-between"}
              borderBottom="2px solid #f3f3f3"
            >
              <Text>Quantity</Text>
              <Text>
                <ButtonGroup size="sm" isAttached variant="outline">
                  <IconButton
                    disabled={quantity <= 1}
                    onClick={handleDecrement}
                    aria-label="Add to friends"
                    icon={<MinusIcon />}
                  />
                  <Button>{quantity}</Button>
                  <IconButton
                    onClick={handleIncrement}
                    aria-label="Add to friends"
                    icon={<AddIcon />}
                  />
                </ButtonGroup>
              </Text>
            </Box>
            <Box>
              <Button
                onClick={addTocart}
                w={"full"}
                bgColor={"black"}
                borderRadius={0}
                _hover={{ color: "black", bgColor: "pink" }}
                color="white"
              >
                Add To Cart
              </Button>
            </Box>
          </Box>
          {/* for button & ratings */}
        </Box>
        {/* for product info end */}
      </SimpleGrid>
    </>
  );
};

export default SingleProductPage;
