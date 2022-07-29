import { combineReducers } from "redux";
import pokemon from "./pokemon";
import theme from "./theme";

export default combineReducers({
  pokemon,
  theme,
});
