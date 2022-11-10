import react from 'react'
import {stylesheet,text,view} from 'react-native'

const Title = () => {
    return (
        <view styles={styles.container}>
            <text styles={styles.title}>quizApp</text>
        </view>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize: 36,
        fontWeight: '600',
    },

    container: {
        paddingVertical: 16,
        justifyContent: 'center',
        alignItem:  'center' , 
     }
})