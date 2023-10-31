import '@/styles/globals.css'
import Layout from "@/components/Layout";

export default function App({ Component, pageProps, props, router }) {
  return (
    <Layout props={props}>
      <Component {...pageProps} />
    </Layout>
  );
}
