import { createSlice } from "@reduxjs/toolkit";
import { getCountry } from "../../services/api";



const countrySlice = createSlice ({
    name: 'country',
    initialState: {
        loading: false,
        countries: [],
        error: ''
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCountry.pending, state => {
            state.loading = true;
        }),
        builder.addCase(getCountry.fulfilled, (state, action) => {
            state.countries = action.payload;
            state.loading = false
          })
        builder.addCase(getCountry.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
});

export default countrySlice.reducer;