import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk} from "./common";

const structuresSlice = createSlice({
  name: "structures",
  initialState: {
      data: [{ id: "Data" }],
      error: null,
      isLoading: false,
  },
  reducers: {
    addStructuresSucess(state, action) {
        const { data } = action.payload;
        state.isLoading = false;
        state.data = [...data];
    },
    addStructuresFailed(state, action) {
        state.isLoading = false;
        state.error = action.payload;
        state.data = [];
    },
  },
});

export const { addStructuresSucess, addStructuresFailed } = structuresSlice.actions;
export default structuresSlice.reducer;

export const fetchStructures = (
    { page }: { page: string },
): AppThunk => async (dispatch) => {
  try {
    const pageParsed = parseInt(page, 10);
    const pageQ = isFinite(pageParsed) ? pageParsed : 1;

    const res = await axios.get(`https://api.crystallography.io/api/v1/structures?page=${pageQ}`);
    dispatch(addStructuresSucess(res.data));
  } catch (err) {
    dispatch(addStructuresFailed(err.toString()));
  }
};