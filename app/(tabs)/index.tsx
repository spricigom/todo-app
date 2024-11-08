import { ScrollView, StyleSheet ,Pressable,Text, View } from "react-native";
import { useState } from "react";

export default function Index() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Estudar React', completed: false },
    { id: 2, title: 'Estudar Angular', completed: false },
    { id: 3, title: 'Estudar Vue', completed: false },
  ])
  return (
    <View style={styles.container}> 
    <View>
      <Text>Minhas Tarefas em React</Text>
      <ScrollView>
        {tasks.map(task => (
            <Text>{task.title}</Text>
        ))
        }
      </ScrollView>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttontext}>Alternar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: '100%'
  },  
  button:{
    backgroundColor: "#f1c40f",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
   marginBottom: 10
  },
  buttontext:{
    color: 'white',

  }
})