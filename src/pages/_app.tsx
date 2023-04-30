import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { RecoilRoot } from 'recoil';

// Create a client
const queryClient = new QueryClient()

if (process.env.NODE_ENV === 'development') {
  if (typeof window === 'undefined') {
    import('../mocks/server').then(({ worker }) => {
      worker.listen();
    });
  } else {
    import('../mocks/browser').then(({ worker }) => {
      worker.start();
    });
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  ) 
}
