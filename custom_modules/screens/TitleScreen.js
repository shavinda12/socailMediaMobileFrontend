import React, { useState } from 'react'
import AppHeaderBackArrow from '../components/AppHeaderBackArrow'
import { ScrollView, StyleSheet, TextInput, View } from 'react-native'
import Post from '../components/Post'
import Comment from '../components/Comment'
import Button from '../components/Button'




const TitleScreen = () => {

    const [comment,setComment]=useState("")
    const onSubmit=()=>{
        console.log(comment)
    }
  return (
    <View>
        <AppHeaderBackArrow prevScreen={'Home'} title="Title"/>
        <Post/>  
        <ScrollView>
        <Comment/>    
        </ScrollView>
        <TextInput
          multiline={true}
          numberOfLines={4}
          value={comment}
          onChangeText={setComment}
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
})