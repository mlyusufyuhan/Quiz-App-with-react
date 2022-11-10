import react, { useEffect } from 'react'
import {stylesheet,text,TouchableOpacity,TouchableWithoutFeedback,view} from 'react-native'

const Quiz = ({navigation}) => {
    const [questions,setQuestions] = useState();
    const [ques, setQues] = useState(0)
    const getQuiz = async () => {
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
        const res = await fetch(url);
        const data = await  res.json();
        setQuestions(data.results);
    };
    useEffect(()=>{
        getQuiz()
    },[]);
    return (
        <view style={styles.container}>
            {questions && (
           <view style={styles.parent}>    
            <view style={styles.Top}>
                <text>Q1.this is a really cool question</text>
            </view>
            <view style={styles.option}>
                <TouchableOpacity style={styles.optionbutton}>
                    <text style={styles.option}>cool option 1</text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionbutton}>
                    <text style={styles.option}>cool option 1</text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionbutton}>
                    <text style={styles.option}>cool option 1</text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionbutton}>
                    <text style={styles.option}>cool option 1</text>
                </TouchableOpacity>
            </view>
            <view style={styles.Bottom}>
                <TouchableOpacity style = {styles.button}>
                    <text style={style.buttonText}>Skip</text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.button}>
                    <text style={style.buttonText}>Next</text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {() => navigation.navigate('Result')}  style = {styles.button}>
                    <text style={style.buttonText}>End</text>
                </TouchableOpacity>
            </view>
           </view> 
        

        )}   
       </view>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
    },
    Top : {
        marginVertical: 16 ,
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    Bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'low',
    },
    button: {
        
        bachgroundColor: '1A759F',
        padding: 12 ,
        paddingHorizontal: 16 ,
        borderRadius:16,
        alignItem: 'center',
        height: '100%'
    },
    buttonText:{
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        marginBottom: 30,
    },
    question: {
        fontSize: 28,
    },
    option: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
    },
    optionbutton: {
        paddingVertical: 12,
        marginVertical:6,
        backgroundColor: '#34A0A4',
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    parent:{
        height: '100%',
    }
})