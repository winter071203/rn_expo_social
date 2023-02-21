import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
interface IProps {
    avatar: string,
    username: string,
    fullname: string,
    _id: string
 }
const CardPeopleItemSearch: React.FC<IProps> = ({ avatar, username, fullname, _id }) => {
    const navigation = useNavigation<any>()
    return (
        <TouchableOpacity style={styles.card}
            onPress={() => navigation.navigate('OtherProfile', { id: _id })}
        >
            <Image 
                source={{ uri: avatar }}
                style={{ width: 40, height: 40, borderRadius: 50, marginRight: 10 }}
            />
            <View style={styles.cardInfo}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{username}</Text>
                <Text style={{ fontSize: 14, color: '#999' }}>{fullname}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CardPeopleItemSearch

const styles = StyleSheet.create({
    card: {
        height: 50, 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    cardInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
})