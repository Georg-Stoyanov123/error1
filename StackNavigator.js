import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler'

const Stack = createStackNavigator()
export default class StackNavigator extends React.Component {
    render() {
        return(
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: true
        }}>
            <Stack.Screen name="Bowel cancer" component={BowelCancerScreen} />
            <Stack.Screen name="Bone cancer" component={BoneCancerScreen} />
            <Stack.Screen name="Breast cancer" component={BreastCancerScreen} />
            <Stack.Screen name="Blood cancer" component={BloodCancerScreen} />
            <Stack.Screen name="Colon cancer" component={ColonCancerScreen} />
            <Stack.Screen name="Skin cancer" component={SkinCancerScreen} />
            <Stack.Screen name="Lung cancer" component={LungCancerScreen} />
            <Stack.Screen name="Kidney Cancer" component={KidneyCancerScreen} />
            <Stack.Screen name="Oral cancer" component={OralCancerScreen} />
            <Stack.Screen name="Bronchus cancer" component={BronchusCancerScreen} />
            <Stack.Screen name="Prostate cancer" component={ProstateCancerScreen} />
        </Stack.Navigator>
        </NavigationContainer>
        )
    }
}