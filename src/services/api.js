
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiClient from '../api_client/api_client';




export const getCountry = createAsyncThunk('country/getCountry', async (name) => {
    try {
        const response = await apiClient.get(`/name/${name}`)
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

