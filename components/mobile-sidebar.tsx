import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white"></Menu>
      </SheetTrigger>
      <SheetContent className="p-0 z-[100] " side="left">
        <Sidebar></Sidebar>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
