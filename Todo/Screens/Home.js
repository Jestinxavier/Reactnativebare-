import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useReducer, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeStyle = require('./HomeStyle');

const Home = () => {
  const [name, setName] = useState('Enter name');
  const [phone, setPhone] = useState('Enter Phone Numer');
  const [errorValidator, setErrorValidator] = useState(false);

  const [list, setList] = useState([
    {
      no: 1,
      name: 'abi',
      phone: '1234567890',
    },
    {
      no: 2,
      name: 'xyz',
      phone: '0987654321',
    },
  ]);

  const handleSubmit = () => {
    if (
      name &&
      phone &&
      name !== 'Enter name' &&
      phone !== 'Enter Phone Numer'
    ) {
      setErrorValidator(false);
      setList(preState => {
        let count = list.length + 1;
        return [...preState, {no: count, name, phone}];
      });
      setName('Enter name');
      setPhone('Enter Phone Numer');
    } else {
      setErrorValidator(true);
      setName('Enter name');
      setPhone('Enter Phone Numer');
    }
  };
  return (
    <View>
      <View style={[HomeStyle.navigationWrapper]}>
        <TouchableOpacity>
          <Image source={require('../Image/icon/leftbtn.png')} />
        </TouchableOpacity>
        <View style={HomeStyle.headerStyle}>
          <Text style={HomeStyle.screenHeaderColor}>ADD DETAILS</Text>
        </View>
      </View>
      <View style={HomeStyle.TextInputWrapper}>
        <View style={HomeStyle.BorderInput}>
          <TextInput
            style={{color: '#939393'}}
            value={name}
            placeholder="Enter name"
            onPressIn={() => setName('')}
            onChangeText={val => setName(val)}
          />
        </View>
        <View style={HomeStyle.BorderInput}>
          <TextInput
            keyboardType='numeric'
            style={{color: '#939393'}}
            value={phone}
            onPressIn={() => setPhone('')}
            placeholder="Enter Phone Numer"
            onChangeText={val => setPhone(val)}
          />
        </View>
        {errorValidator && (
          <View style={HomeStyle.errorFlexWrapper}>
            <Text style={{color: 'red'}}>
              Both Name And Phone Number Is Required*{' '}
            </Text>
          </View>
        )}
      </View>
      <View
        style={[
          {display: 'flex', alignItems: 'center'},
          HomeStyle.buttonSpace,
        ]}>
        <View style={{width: '40%'}}>
          <TouchableOpacity
            style={HomeStyle.button}
            onPressIn={() => {
              handleSubmit();
            }}>
            <Text style={HomeStyle.text}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {list.map((item, index) => {
          return (
            <View style={HomeStyle.listComponentBgColor} key={index}>
              <View>
                <Text style={HomeStyle.listFont}>{item.no}</Text>
              </View>
              <View>
                <Text style={HomeStyle.listFont}>{item.name}</Text>
              </View>
              <View>
                <Text style={HomeStyle.listFont}>{item.phone}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;
