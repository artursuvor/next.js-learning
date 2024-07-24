"use client";
import { clientSideFunction } from "@/utils/client-utils";
import { useTheme, ThemeProvider } from "@/components/theme-provider";

export default function ClientRoutePage(){
    const result = clientSideFunction();
    const theme = useTheme();
    return (
        <ThemeProvider>
          <div style={{ backgroundColor: theme.colors.secondary, color: theme.colors.primary }}>
            <h1>ClientRoutePage</h1>
            <p>{result}</p>
          </div>
        </ThemeProvider>
      );
    }