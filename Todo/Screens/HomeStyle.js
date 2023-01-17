import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  screenHeaderColor: {
    color: '#41AADE',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInput: {
    borderColor: '#0E9EC2',
  },
  BorderInput: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#0E9EC2',
    borderRadius: 13,
    paddingLeft:10
  },
  ButtonColor: {
    color: '#41AADE',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#41AADE',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  listComponentBgColor: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#0E9EC2',
  },
  listFont: {
    color: '#ffffff',
    fontSize:16
  },
  TextInputWrapper:{
    marginTop:20,
    marginBottom:6,
  },
  buttonSpace:{
    marginBottom:12,
  },
  headerStyle: {
    marginLeft: 100,
  },
  navigationWrapper: {
    marginTop:10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorFlexWrapper:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'row'
  }

});
