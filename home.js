import react from 'react'
import {stylesheet,text,TouchableOpacity,view} from 'react-native'

const home = () => {
    return (
        <view>
            <Title/>
            <view styles={styles.bannerContainer}>
                <image source={{uri:'https://storyset.com/illustration/questions/amico'}}
                styles={styles.banner}
                resizeMode="contain"
                />
            </view>
            <TouchableOpacity onPress={()=> NavigationPreloadManager.navigate("Quiz")} styles={styles.button}>
                <text style={styles.buttonText}>start</text>
            </TouchableOpacity>

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
        flex: 1,
    },
    button: {
        width: '100%',
        bachgroundColor: '1A759F',
        padding: 20 ,
        borderRadius:16,
        alignItem: 'center',
        height: '100%'
    },
    buttonText:{
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
        marginBottom: 30,
    },
});