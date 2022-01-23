import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";
import { User } from "../../../store/types/user";


export const Home:FC = () => {
  const user = useSelector((state: RootState) => state.user.user);

  let content = (<View><Text>Error</Text></View>)
  
  if(user){
    content = (
      <View style={styles.container}>
      <View >
        <View style={styles.topSection}>
          <Text>Сумма на счете</Text>
          <Text>{user.n_amount} {user.vc_currency_code}</Text>
          <Text>{user.vc_service_name}</Text>
        </View>
      </View>
    </View>)
  }

  return content;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  topSection: {

  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
