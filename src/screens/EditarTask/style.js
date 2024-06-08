import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    tarefa: {
        backgroundColor: "#DDD",
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },

    titulo:{
        fontSize: 30,
    },

    input:{
        width:'100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: "#778DA9",
        marginTop: 20,
        paddingLeft: 10,
    },

    button:{
        width:'100%',
        marginTop: 20,
        height: 70,
        backgroundColor: "#415A77",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },

    textButton:{ 
        color: '#E0E1DD',
        fontSize: 20,
    },

    action: {
        flexDirection: 'row'
    },
   
});

export default styles