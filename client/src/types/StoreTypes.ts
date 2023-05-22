import { Action, AnyAction, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { rootReducer } from "../store/Store";

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;