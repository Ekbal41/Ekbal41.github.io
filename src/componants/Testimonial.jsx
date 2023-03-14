import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function Testimonial() {
  return (
    <>
      <Flex
        justifyContent={"center"}
        flexDir={"column"}
        alignItems={"center"}
        flexWrap={"wrap"}
        marginTop={12}
      >
        <Heading mb={4}>What User’s Say</Heading>
        <Text fontSize={"xl"}>
          Our templates are Trusted by 8,500 Customers Worldwide.
        </Text>
      </Flex>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Flex
            bg="white"
            rounded="md"
            p={24}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "80%", md: "50%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg="white"
            rounded="md"
            p={24}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "80%", md: "50%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg="white"
            rounded="md"
            p={24}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "80%", md: "50%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg="white"
            rounded="md"
            p={24}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "80%", md: "50%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg="white"
            rounded="md"
            p={24}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "80%", md: "50%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg="white"
            rounded="md"
            p={24}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "80%", md: "50%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg="white"
            rounded="md"
            p={24}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "80%", md: "50%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg="white"
            rounded="md"
            p={24}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "80%", md: "50%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg="white"
            rounded="md"
            p={24}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "80%", md: "50%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg="white"
            rounded="md"
            p={24}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "80%", md: "50%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            bg="white"
            rounded="md"
            p={24}
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"column"}
            gap={2}
          >
            <FaQuoteLeft fontSize={"50px"} color={"#e2e3e5"} />
            <Text w={{ base: "80%", md: "50%" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati repudiandae impedit omnis a ratione quae. Asperiores
              consequuntur alias repellendus voluptate.
            </Text>
            <Text>
              <span
                style={{
                  fontWeight: "bold",
                  margin: "0px 5px",
                  color: "#3182ce",
                }}
              >
                tanagan,
              </span>
              GUP Foundation
            </Text>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
