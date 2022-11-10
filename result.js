import react from 'react'
import {image,stylesheet,text,view} from 'react-native'

const result = ({navigation}) => {
    return (
        <view styles={styles.container}>
            <view>
                <text>result</text>
            </view>
            <view style={style.bannerContainer}>
            <image source={{uri:'https://storyset.com/illustration/questions/amico'}}
                styles={styles.banner}
                resizeMode="contain"
                />
            </view>
            <veiw>
                <touchableOpacity  onPress = {() => navigation.navigate('Result')}>
                    <text>Home</text>
                </touchableOpacity>
            </veiw>
            
        </view>
    );
};

const styles = StyleSheet.create({
    banner: {
        height: 300,
        weight: 300,
    },
    bannerContainer: {
        justifyContent: 'center' ,
        alignItem: 'center',
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
})