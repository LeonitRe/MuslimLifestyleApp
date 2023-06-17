import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useStateContext } from "./Context/ContextProvider";
import { NavBar, SideNavBar } from "./components";
import {
  AddProduct,
  Dashboard,
  Edit,
  Orders,
  Products,
  Reviews,
  Transactions,
  Users,
} from "./pages";

const App = () => {
  const { activeMenu } = useStateContext();
  return (
    <BrowserRouter>
      <main className="min-w-full h-screen flex bg-gray-200">
        <div className={`${activeMenu ? "basis-10" : "basis-15"}`}>
          <SideNavBar />
        </div>
        <div
          className={`w-full flex ${
            activeMenu ? "basis-90" : "basis-85"
          } flex-col justify-start items-start`}
        >
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
};
export default App;
