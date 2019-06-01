import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ordersActions from "./src/modules/orders";

import Icon from "react-native-vector-icons/FontAwesome";

class MainScreen extends Component {
  componentWillMount() {
    this.props.OrdersActions.getOrderList(5);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "fetch",
      headerRight: (
        <Icon.Button
          name="comment"
          backgroundColor="#fff"
          color="#5bb487"
          style={{ paddingRight: 10 }}
          onPress={() => {
            navigation.navigate("DMs");
          }}
        />
      )
    };
  };

  render() {
    return this.props.orders.pending ? (
      <View style={styles.container}>
        <Text>loading...</Text>
      </View>
    ) : (
      <View style={styles.container}>
        {this.props.orders.map(order => (
          <View key={order.order_id}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: `${order.imageUrl}`
              }}
            />
            <Text>{order.destination}</Text>
            <Text>{order.due}</Text>
            <Text>{order.productName}</Text>
            <Text>{order.price}</Text>
          </View>
        ))}
      </View>
    );
  }
}

export default MainScreen;

const mapStateToProps = ({ orders }) => ({
  orders: orders.orderList
});

//다양한 리덕스 모듈을 적용해야하는 상황에서 유리
const mapDispatchToProps = dispatch => ({
  OrdersActions: bindActionCreators(ordersActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

