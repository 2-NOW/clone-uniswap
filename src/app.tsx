import { Logo } from "./assets/svgs";
import { Background } from "./background";

const Header = () => {
  return (
    <header className="px-3 py-5">
      <Logo className="text-white" />
    </header>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

function App() {
  return (
    <>
      <Layout>hi</Layout>
      <Background />
    </>
  );
}

export default App;
