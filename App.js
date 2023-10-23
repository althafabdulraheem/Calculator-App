import {View,Text,Button,TextInput} from 'react-native';
import React,{useState} from 'react';
const App=()=>{

  let [result,setResult]=useState("")
  const handleClick=(value)=>{
    // console.log(`value is${value}`)
    console.log(result.length)
    if(result.length > 10)
    {
      setResult("Limit exceeds...")
      return false;
    }
    result=result.concat(value);
    setResult(result)
  }

  const calculate=()=>{
      result=eval(result).toString();
      
      setResult(result)

  }
  return(<View style={{backgroundColor:"plum",flex:1}}>
    {/* <View style={{width:500,height:300,backgroundColor:"red"}}></View>
    <View style={{width:200,height:100,backgroundColor:"green"}}> */}
      
    {/* </View> */}
        <Text style={{padding:60}}><Text>Calcu</Text><Text>Later</Text></Text>
        {/* calculator */}
        <View style={{padding:30}}>
        <TextInput style={{padding:30,borderStyle:"solid",borderColor:"black",borderWidth:2,backgroundColor:"white",color:'black',fontWeight:"bold"}} editable={false} value={result?result:"0.0"}/>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <Button title="1" color="grey"  onPress={()=>{handleClick("1")}}/>
          <Button title="2" color="grey" onPress={()=>{handleClick("2")}}/>
          <Button title="3" color="grey" onPress={()=>{handleClick("3")}}/>
          <Button title="CLEAR" color="grey" onPress={()=>{setResult("")}}/>
        </View>
          <Button title="4" color="grey" onPress={()=>{handleClick("4")}}/>
          <Button title="5" color="grey" onPress={()=>{handleClick("5")}}/>
          <Button title="6" color="grey"  onPress={()=>{handleClick("6")}}/>
          <Button title="2" color="grey" onPress={()=>{handleClick("2")}}/>
          <Button title="3" color="grey" onPress={()=>{handleClick("3")}}/>
          <Button title="4" color="grey" onPress={()=>{handleClick("4")}}/>
          <Button title="5" color="grey" onPress={()=>{handleClick("5")}}/>
          <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <Button title="+" color="grey"  onPress={()=>{handleClick("+")}}/>
          <Button title="-" color="grey" onPress={()=>{handleClick("-")}}/>
          <Button title="*" color="grey" onPress={()=>{handleClick("*")}}/>
          <Button title="/" color="grey" onPress={()=>{handleClick("/")}}/>
          <Button title="c" color="grey" onPress={()=>{handleClick("c")}}/>
          <Button title="=" color="black" onPress={calculate}/>
      
        </View>
        </View> 
    {/* <Text padding>hi</Text> */}
  </View>)
}
export default App;