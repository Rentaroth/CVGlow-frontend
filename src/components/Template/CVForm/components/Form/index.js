//import { PersonalInformation } from "./personalInformation";
import { Education } from "./Education";

function Form() {
  return (
    <section className="w-full h-fit p-2 flex flex-col items-center bg-basic_yellow">
      <Education />
    </section>
  );
}

export { Form };