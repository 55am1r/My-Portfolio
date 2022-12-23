import { configureStore } from "@reduxjs/toolkit";
import skillData from "./SkillDataSlice";

export default configureStore({
  reducer: {
    skillData,
  },
});
