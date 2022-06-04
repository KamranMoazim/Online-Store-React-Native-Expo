import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'


import Screen from './Screen'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import colors from '../config/colors'
import Icon from '../components/Icon'


import useAuth from '../hooks/useAuth'


const menuItems = [
    {
        title:"My Listings",
        icon:{
            name:"format-list-bulleted",
            backgroundColor:colors.secondary
        }
    },
    {
        title:"My Messages",
        icon:{
            name:"email",
            backgroundColor:colors.primary
        }
    },
]

export default function AccountScreen() {

    // const {user, setUser} = useContext(AuthContext);
    const {user, logOut} = useAuth();


  return (
    <Screen style={[styles.screen, {paddingTop:0}]}>
        <View >
            <ListItem 
                title={user.name}
                subTitle={user.email}
                image={require("../assets/mosh.jpg")} />
        </View>
        
        <View style={styles.container}>
            <FlatList 
                data={menuItems}
                keyExtractor={(item)=>item.title.toString()}
                renderItem={({item}) => (<ListItem 
                    title={item.title} 
                    IconComponent={<Icon backgroundColor={item.icon.backgroundColor} name={item.icon.name} />} 
                    />)}
                ItemSeparatorComponent={ListItemSeparator}
             />
        </View>

        <ListItem 
            title="Logout"
            IconComponent={<Icon 
                name="logout"
                backgroundColor="#ffe66d"
                />} 
            onPress={()=>logOut()}
        />
    </Screen>
  )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20,
    },
    screen:{
        backgroundColor:colors.light
    }
})