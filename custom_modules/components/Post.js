import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Post = props => {
  return (
    <View style={postStyle.postContainer}>
      <View style={postStyle.bodyContainer}>
        <Text style={postStyle.titleStyle}>Title</Text>
        <Text style={postStyle.descriptionStyle}>
          no more discription         
        </Text>
      </View>
      <View style={postStyle.commentContainer}>
        <Text>05 comments</Text>
      </View>
    </View>
  );
};

export default Post;

const postStyle = StyleSheet.create({
  postContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    marginTop: 15,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius:4
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
  },
  bodyContainer:{
    borderWidth: 1,
    borderColor: 'black',
    padding:8,
    borderRadius:4
  },
  descriptionStyle: {
    fontSize: 15,
    color: 'black',
    marginTop: '20px',
  },
  commentContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems:'center'
  },
});
