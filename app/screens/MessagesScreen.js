import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'


import Screen from './Screen'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'


let initialMessages = [
    {
        id:"1",
        title:"T1",
        description:"D1",
        image:require("../assets/mosh.jpg")
    },
    {
        id:"2",
        title:"T1",
        description:"D1",
        image:require("../assets/mosh.jpg")
    }
]

export default function MessagesScreen() {

    const [messages, setMessages] = useState(initialMessages);
    const [refereshing, setRefereshing] = useState(false);


    const handleDeleteMessage = (message) => {
        const newMessages = messages.filter((m)=>m.id !== message.id);
        setMessages(newMessages);
    }


  return (
      <Screen>
        <FlatList 
            data={messages}
            keyExtractor={(message) => message.id.toString()}
            renderItem={({item}) => (
                <ListItem 
                    key={item.id}
                    title={item.title}
                    subTitle={item.description}
                    image={item.image} 
                    onPress={()=>console.log("Pressed ", item)}
                    renderRightActions={() => <ListItemDeleteAction onPress={() => handleDeleteMessage(item)} />}
                />
            )}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refereshing}
            onRefresh={()=>{
                setMessages(initialMessages)
            }}
        />
     </Screen>
  )
}

const styles = StyleSheet.create({})