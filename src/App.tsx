import HomePage from "./routes/home/HomePage";
import MainLayout from "./components/layout/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
};

export default App;
