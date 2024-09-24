import React, { useState } from 'react'
import AppHeaderBackArrow from '../components/AppHeaderBackArrow'
import { KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import Post from '../components/Post'
import Comment from '../components/Comment'
import Button from '../components/Button'





const TitleScreen = ({route}) => {
    const [comments,setComments]=useState("")
    const { title, description, comment } = route.params;
    console.log(title,description,comment)
    const onSubmit=()=>{
        console.log(comment)
    }

  return (
    <View>
        <AppHeaderBackArrow prevScreen={'Home'} title="Title"/>
        <Post title={title} description={description} comment={comment} />  
        <View>
        <ScrollView>
        <Comment/>    
        </ScrollView>
        </View>
        <TextInput
          multiline={true}
          numberOfLines={4}
          value={comments}
          onChangeText={setComments}
          placeholder="Description"
          style={[styles.input, , styles.textArea]}
        />
        <Button title="Comment" function={onSubmit}/>
    </View>
  )
}

export default TitleScreen

const styles=StyleSheet.create({
    input: {
        height: 50,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        textAlign: 'center',
        marginLeft:20
      },
      textArea: {
        marginTop: 10,
        marginBottom:10,
        height: 150,
        textAlign: 'center',
      },
      inputSection: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopColor: 'gray',
        borderTopWidth: 1,
      },
})