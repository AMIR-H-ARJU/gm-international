import { Outlet } from "react-router-dom";
import NavBar from "../components/shared/Navbar";
import Footer from "../components/shared/footer";

export default function RootThings() {
  return (
    <>
      <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
    </>
  );
}
