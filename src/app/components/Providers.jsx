import React from "react";
("use client");

import { ThemeProvider } from "next-themes";

export default function Providers() {
    return (
        <ThemeProvider>
            <div></div>
        </ThemeProvider>
    );
}
