import Stepper from "../components/Stepper";
import StepperControl from "../components/StepperControl";

function App(){
    return(
        <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
          {/* Stepper */} 
          <div className="horizontal container mt-5 "></div>
          <Stepper />
          {/* Navigator controls */} 
          <StepperControl />
        </div>
    )
}
export default App;