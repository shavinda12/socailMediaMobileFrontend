import {Text, View} from 'react-native';
import AppHeader from '../components/AppHeader';
import Button from '../components/Button';
import Post from '../components/Post';
import { useNavigation } from '@react-navigation/native';
const Home = () => {

  const navigation=useNavigation()

  const onPress=()=>{
    navigation.navigate('CreatePost')
  }


  return (
    <View style={{display:"flex",flexDirection:'column'}}>
      <AppHeader title="Home"/>
      <Button title="Create New Post" function={onPress}/>
      <Post/>
      <Post/>
      <Post/>
    </View>
  );
};

export default Home;
