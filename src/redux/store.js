import { configureStore } from "@reduxjs/toolkit";
import PcBuilderRuducer from "@/redux/features/pcBuilder/pcBuilderSlice";

export default configureStore({
  reducer: {
    pcBuilder: PcBuilderRuducer,
  },
});
