import { AppButton } from "@/common/appButton/appButton";
import { myBtn } from "@/common/appButton/myBtn";

export function AppLayout() {
  return (
    <>
      {/* <div className="bg-red-300">asd</div> */}
      {/* <div className="bg-slate-400 h-screen w-[30%] ml-auto">asd</div> */}
      <AppButton buttonText="Hello" variant="contained" width="long" />
      <myBtn text="click" variant="outlined" color="primary" />
    </>
  );
}
