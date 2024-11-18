'use client';

import { ReactNode, useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { RootState, store } from '../../store/store';

function ThemeWrapper({ children }: { children: ReactNode }) {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.className = theme;
    }
  }, [theme]);

  return <>{children}</>;
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </Provider>
  );
}
