import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import filter from "lodash.filter";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

// Local imports
import logo from "../../assets/logo.png";
import styles from "./styles";
import EventsTemplate from "../../components/EventsTemplate/index.js";
import CardFeed from "../../components/CardFeed/index.js";
import ipAdd from "../../utils/ipAdd.js";
import feed from "../../utils/feed.js";
import Form from "../../components/FormTemplate/index";

const editForm = [
  {
    id: 1,
    render: "text",
    placeholder: "Write here...",
    label: "Title",
    multiline: false,
    type: "name",
    security: false,
    autoCapitalize: "none",
    value: "",
  },
  {
    id: 2,
    render: "text",
    placeholder: "Write here...",
    label: "Description",
    multiline: true,
    type: "none",
    security: false,
    autoCapitalize: "none",
    value: "",
  },
];

const SearchScreen = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();

  const API_ENDPOINT = `http://${ipAdd}:4000/api/news`;

  useEffect(() => {
    axios
      .get(API_ENDPOINT)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isFocused]);

  const submitEvent = (data) => {
    const output = [
      // { category: categories.category, image: categories.imageUri },
    ];
    for (const key in data) {
      output.push({ field: data[key].label, value: data[key].value });
    }

    const title = output.filter((item) => item.field === "Title")[0].value;
    console.log(title);
    const description = output.filter((item) => item.field === "Description")[0]
      .value;
    console.log(description);

    axios
      .post(`http://${ipAdd}:4000/api/news`, {
        title,
        description,
      })
      .then((response) => {
        console.log("posted");
        () => {
          setModalVisible(!modalVisible);
        };
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const mapingEventDB = ({ item }) => {
    return <CardFeed id={feed.id} feed={feed} />;
  };

  const maping = () => {
    return feed.map((feed) => <CardFeed key={feed.key} feed={feed} />);
  };

  const handlePress = () => {
    setModalVisible(true);
  };

  const Intext = () => {
    return (
      <View style={styles.inputBox}>
        <TouchableOpacity style={styles.input} onPress={handlePress}>
          <View style={styles.insidetext}>
            <Text style={styles.text}>What's on your mind?</Text>
          </View>
        </TouchableOpacity>

        <Modal animationType="slide" transparent={false} visible={modalVisible}>
          <View style={styles.modal}>
            <View style={styles.modal}>
              <Form inputs={editForm} onSubmit={submitEvent} />
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.filter}>My Feed</Text>
        <Intext onPres={handlePress} />
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
