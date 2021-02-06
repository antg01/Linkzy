import React, { useState, useEffect } from "react";
import { View, Image, Text, TextInput, FlatList } from "react-native";
import Axios from "axios";
import filter from "lodash.filter";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

// Local imports
import logo from "../../assets/logo.png";
import styles from "./styles";
import EventsTemplate from "../../components/EventsTemplate/index.js";
import CardFeed from "../../components/CardFeed/index.js";
import ipAdd from "../../utils/ipAdd.js";
import feed from "../../utils/feed.js";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = () => {
  const navigation = useNavigation();

  const [query, setQuery] = useState("");
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();

  const API_ENDPOINT = `http://${ipAdd}:4000/api/events`;

  useEffect(() => {
    Axios.get(API_ENDPOINT)
      .then((response) => {
        setData(response.data);
        setFullData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isFocused]);

  const handleSearch = (text) => {
    setQuery(text);
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, (item) => {
      return contains(item, formattedQuery);
    });
    setData(filteredData);
  };

  const contains = ({ title }, query) => {
    if (title.includes(query)) {
      return true;
    }
    return false;
  };

  const mapingEventDB = ({ item }) => {
    return <EventsTemplate id={item.id} event={item} />;
  };

  const maping = () => {
    return feed.map((feed) => <CardFeed key={feed.key} feed={feed} />);
  };

  const RenderHeader = () => {
    return (
      <View style={styles.inputBox}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={(queryText) => handleSearch(queryText)}
          placeholder="What's on your mind?"
          style={styles.input}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.filter}>My Feed</Text>
        <RenderHeader />
        {/* <FlatList
          data={data}
          keyExtractor={(item) => item.title}
          renderItem={mapingEventDB}
          showsVerticalScrollIndicator={false}
        /> */}
      </View>
      <ScrollView>{maping()}</ScrollView>
    </View>
  );
};

export default SearchScreen;
