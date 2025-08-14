"use client";

import { useAuth } from "@/lib/hooks/use-auth";
import { persistor, store } from "@/lib/rtk/store";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function AuthProvider({ children }: { children: React.ReactNode }) {
  useAuth(); // This will handle user data insertion after login
  return <>{children}</>;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        // staleTime: 0,
        retry: 0,
      },
    },
    queryCache: new QueryCache({
      onError: (error: unknown) => {
        console.error(error);
      },
    }),
    mutationCache: new MutationCache({
      onError: (error: unknown) => {
        console.error(error);
      },
    }),
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
