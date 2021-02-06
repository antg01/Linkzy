import React from "react";
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";

// Local Imports
import styles from "./styles";

const ImageTemplate = (props) => {
  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    // const newField = { ...fields };
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // if (!result.cancelled) {
    //   newField.image.value = result.uri;
    //   newField.image.info = result;
    //   setFields(newField);
    // }
  };

  return (
    <TouchableOpacity>
      <Image source={require("../../assets/defimg.png")} style={styles.image} />
    </TouchableOpacity>
    //   <View style={styles.container}>
    //   <Text style={styles.label}>{props.label}</Text>
    //   <TextInput
    //     style={styles.input}
    //     onChangeText={(text) => props.onChange(text)}
    //     value={props.value}
    //     multiline={props.multiline}
    //     placeholder={props.placeholder}
    //     textContentType={props.type}
    //     secureTextEntry={props.security}
    //     autoCapitalize={props.autoCapitalize}
    //   />
    // </View>
  );
};

export default ImageTemplate;
