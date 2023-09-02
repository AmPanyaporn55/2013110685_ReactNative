import { View, Text, Button } from "react-native"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import FirstPage from "./pages/FirstPage"
import SecondPage from "./pages/SecondPage"
import ThirdPage from "./pages/ThirdPage"

/* function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail Screen</Text>
    </View>
  );
} */

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='FirstPage'
      screenOptions={{
        headerStyle:{
          backgroundColor:'#008b8b'
        },
        headerTintColor:'#ffff',
        headerBackTitleStyle:{
          fontWeight:'bold',
        }
      }}
      >
        {/* <Stack.Screen
          name='First'
          component={FirstPage}
          options={{ title: "Overview" }}
        /> */}

        <Stack.Screen name='First' component={FirstPage} 
          options={{title: 'FirstPage'}}
        />
        <Stack.Screen name='Second' component={SecondPage} 
          options={{title: 'SecondPage'}}
        />
        <Stack.Screen name='Third' component={ThirdPage} 
          options={{title: 'ThirdPage'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
