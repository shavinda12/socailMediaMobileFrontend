import { ScrollView, View} from 'react-native';
import AppHeader from '../components/AppHeader';
import Button from '../components/Button';
import Post from '../components/Post';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Home = () => {
  const [postArray, setPostArray] = useState([]);
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('CreatePost');
  };

  const getPosts = async () => {
    try {
      const result = await axios.get(
        'http://192.168.43.137:3000/api/mobile/posts/',
      );
      setPostArray(result.data.message);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={{display: 'flex', flexDirection: 'column'}}>
      <AppHeader title="Home" />
      <Button title="Create New Post" function={onPress} />
      <ScrollView>
        <View>
        {postArray &&
          postArray.map(post => (
            <Post
              title={post.title}
              description={post.description}
              comment={post.num_of_comments}
            />
          ))}
          </View>
      </ScrollView>
    </View>
  );
};

export default Home;
