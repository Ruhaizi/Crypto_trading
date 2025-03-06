import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AvatarIcon,
  DragHandleHorizontalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import SideBar from "../SideBar/SideBar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);

  const handleNavigate = () => {
    if (auth.user) {
      auth.user.role === "ROLE_ADMIN"
        ? navigate("/admin/withdrawal")
        : navigate("/profile");
    }
  };

  return (
    <div className="px-4 py-3 border-b z-50 bg-background bg-opacity-80 backdrop-blur-md sticky top-0 left-0 right-0 flex justify-between items-center">
      {/* Left Section - Sidebar & Logo */}
      <div className="flex items-center gap-4">
        {/* Sidebar Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="rounded-full h-12 w-12 flex items-center justify-center hover:bg-gray-100 transition"
              variant="ghost"
              size="icon"
            >
              <DragHandleHorizontalIcon className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-72 border-r-0 flex flex-col justify-center" side="left">
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center gap-2">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://cdn.pixabay.com/photo/2021/04/30/16/47/binance-logo-6219389_1280.png" />
                  </Avatar>
                  <div>
                    <span className="font-bold text-orange-700">Crypto</span>
                    <span className="text-gray-800">Trade</span>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>
            <SideBar />
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <p
          onClick={() => navigate("/")}
          className="text-lg font-semibold cursor-pointer hover:text-orange-700 transition"
        >
          Crypto Trading
        </p>

        {/* Search Button */}
        <Button
          variant="outline"
          onClick={() => navigate("/search")}
          className="flex items-center gap-2 px-4 py-2 ml-6 border-gray-300 hover:border-gray-400 transition"
        >
          <MagnifyingGlassIcon className="h-5 w-5" />
          <span className="hidden md:inline-block">Search</span>
        </Button>
      </div>

      {/* Right Section - Profile Avatar */}
      <div>
        <Avatar className="cursor-pointer hover:shadow-lg transition" onClick={handleNavigate}>
          {!auth.user ? (
            <AvatarIcon className="h-9 w-9 text-gray-600" />
          ) : (
            <AvatarFallback className="bg-blue-600 text-white text-lg font-bold">
              {auth.user?.fullName[0].toUpperCase()}
            </AvatarFallback>
          )}
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
