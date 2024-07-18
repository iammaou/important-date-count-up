import DatePickerComponent from "./components/DatePickerComponent";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full h-screen m-0 p-0 bg-gradient-to-t from-[#8eff95] to-[#03da96]">
      <DatePickerComponent />
      <Footer />
    </div>
  );
};

export default App;
