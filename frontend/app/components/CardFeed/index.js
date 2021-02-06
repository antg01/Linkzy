import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";

// Local imports
// import styles from "./styles";
import feed from "../../utils/feed.js";
import logo from "../../assets/logo.png";
import friends from "../../assets/friends.jpeg";

const CardFeed = ({ feed }) => {
  return (
    <Container style={{ marginBottom: 0, height: "100%" }}>
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail source={logo} />
              <Body>
                <Text>{feed.title}</Text>
                <Text note>{feed.date}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={feed.imageUri}
                style={{ height: 150, width: "100%", flex: 1 }}
              />
              <Text>{feed.description}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: "#87838B" }}>
                <FontAwesome name="comment-o" size={24} color="#87838B" />
                <Text>1,926 comments</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default CardFeed;
