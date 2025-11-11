"use client";

// Redux
import { Provider } from "react-redux"
import store from "@/redux/store";
import React from "react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}