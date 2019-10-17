import {StyleSheet} from "react-native";

import color from "./color";

const style = StyleSheet.create({
    border : {
        borderStyle : "solid",
        borderColor: "#000000",
        borderWidth: 1
    },
    borderRadiusFull : {
        borderRadius : 9999
    },
    topLine : {
        borderStyle : "solid",
        borderColor: color.app.naviLine,
        borderTopWidth : 1
    },
    underLine : {
        borderStyle : "solid",
        borderColor: color.app.naviLine,
        borderBottomWidth : 1
    },
    underLineLG : {     //light gray
        borderStyle : "solid",
        borderColor: color.app.inputBg,
        borderBottomWidth : 1
    },
    leftLine : {
        borderStyle : "solid",
        borderColor: color.app.naviLine,
        borderLeftWidth : 1
    },
    rightLine : {
        borderStyle : "solid",
        borderColor: color.app.naviLine,
        borderRightWidth : 1
    },
    overHidden : {
        overflow : "hidden"
    },
    card : {
        borderStyle : "solid",
        borderColor: "#dddddd",
        borderWidth: 1,
        borderRadius : 6,
        backgroundColor : "#ffffff"
    }
});

export default style;
