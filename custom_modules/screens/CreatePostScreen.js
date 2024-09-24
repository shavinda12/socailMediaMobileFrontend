import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import AppHeaderBackArrow from '../components/AppHeaderBackArrow';
import Button from '../components/Button';

const CreatePostScreen = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const onSubmit=()=>{
    console.log(title)
    console.log(description)
    setTitle("");
    setDescription("")
  }

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
      <Button title="Publish" function={onSubmit}/>
    </View>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {

    marginLeft:20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width:'90%'
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
    marginBottom:10,
    height: 150,
    textAlign: 'center',
  },
});
