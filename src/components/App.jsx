import { Route, Routes } from "react-router-dom";
import { Layout } from "Layout";
import { Permanent } from "pages/Permanent/Permanent";
import { Makeup } from "pages/Makeup/Makeup";
import { Eyebrows } from "pages/Eyebrows/Eyebrows";
import { Courses } from "pages/Courses/Courses";
import { Home } from "pages/Home/Home";
export const App = () => {

  return(
 <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/permanent" element={<Permanent />} />
        <Route path="/makeup" element={<Makeup/>}/>
        <Route path="/eyebrows" element={<Eyebrows />} />
        <Route path="/courses" element={<Courses />} />
         </Route>
      </Routes>
  );
};
