import React, {useState} from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import AppHeaderBackArrow from '../components/AppHeaderBackArrow';
import Button from '../components/Button';
import axios from 'axios';

const CreatePostScreen = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const publishPost = async () => {
    try {
      const post = {
        title,
        description,
      };
      const result = await axios.post(
        'http://192.168.43.137:3000/api/mobile/posts/newPost',
        post,
      );
      if (result.data.success == 200) {
        setTitle('');
        setDescription('');
      }else{
        Alert.alert(result.data.message)
      }
    } catch (error) {
      Alert.alert(error.message)
    }
  };

  const onSubmit = () => {
    publishPost();
    console.log(title);
    console.log(description);
  };

  return (
    <View>
      <AppHeaderBackArrow prevScreen={'Home'} title="Create Post" />
      <View style={styles.container}>
        <TextInput
          placeholder="Title"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          multiline={true}
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
          style={[styles.input, , styles.textArea]}
        />
      </View>
      <Button title="Publish" function={onSubmit} />
    </View>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
  },
  textArea: {
    marginTop: 10,
    marginBottom: 10,
    height: 150,
    textAlign: 'center',
  },
});
