/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { AssetTable } from "./AssetTable";
import { Button } from "@/components/ui/button";
import StockChart from "../StockDetails/StockChart";
import {
  ChatBubbleIcon,
  ChevronLeftIcon,
  Cross1Icon,
  DotIcon,
} from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCoinDetails,
  fetchCoinList,
  fetchTradingCoinList,
  getTop50CoinList,
} from "@/Redux/Coin/Action";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { sendMessage } from "@/Redux/Chat/Action";
import { ScrollArea } from "@/components/ui/scroll-area";
import SpinnerBackdrop from "@/components/custome/SpinnerBackdrop";

const Home = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("all");
  const { coin, chatBot, auth } = useSelector((store) => store);
  const [isBotRelease, setIsBotRelease] = useState(false); //

  useEffect(() => {
    dispatch(fetchCoinList(page));
  }, [page]);

  useEffect(() => {
    dispatch(fetchCoinDetails({
      coinId: "bitcoin",
      jwt: auth.jwt || localStorage.getItem("jwt"),
    }))
    
  }, []);

  useEffect(() => {
    if (category == "top50") {
      dispatch(getTop50CoinList());
    }else if( category == "trading"){
      dispatch(fetchTradingCoinList())
    }
  }, [category]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleBotRelease = () => setIsBotRelease(!isBotRelease);

  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed:", inputValue);
      dispatch(
        sendMessage({
          prompt: inputValue,
          jwt: auth.jwt || localStorage.getItem("jwt"),
        })
      );
      setInputValue("");
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatBot.messages]);

  

  if (coin.loading) {
    return <SpinnerBackdrop />;
  }

  return (
    <div className="relative">
      <div className="lg:flex ">
        <div className="lg:w-[50%] border-r">
          <div className="p-3 flex items-center gap-4 ">
            <Button
              variant={category == "all" ? "default" : "outline"}
              onClick={() => setCategory("all")}
              className="rounded-full"
            >
              All
            </Button>
            <Button
              variant={category == "top50" ? "default" : "outline"}
              onClick={() => setCategory("top50")}
              className="rounded-full"
            >
              Top 50
            </Button>
            
           
          </div>
          <AssetTable
            category={category}
            coins={category == "all" ? coin.coinList : coin.top50}
          />
          {category == "all" && (
            <Pagination className="border-t py-3">
              <PaginationContent>
                <PaginationItem>
                  <Button
                    variant="ghost"
                    disabled={page == 1}
                    onClick={() => handlePageChange(page - 1)}
                  >
                    <ChevronLeftIcon className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    onClick={() => handlePageChange(1)}
                    isActive={page == 1}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    onClick={() => handlePageChange(2)}
                    isActive={page == 2}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    onClick={() => handlePageChange(3)}
                    isActive={page == 3}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                {page > 3 && (
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => handlePageChange(3)}
                      isActive
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    className="cursor-pointer"
                    onClick={() => handlePageChange(page + 1)}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>

        <div className="hidden lg:block lg:w-[50%] p-5">
          <StockChart coinId={"bitcoin"} />
          <div className="flex gap-5 items-center">
            <div>
              <Avatar>
                <AvatarImage src={coin.coinDetails?.image?.large} />
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p>{coin.coinDetails?.symbol?.toUpperCase()}</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400">{coin.coinDetails?.name}</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold">
                  {coin.coinDetails?.market_data.current_price.usd}
                </p>
                <p
                  className={`${
                    coin.coinDetails?.market_data.market_cap_change_24h < 0
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  <span className="">
                    {coin.coinDetails?.market_data.market_cap_change_24h}
                  </span>
                  <span>
                    (
                    {
                      coin.coinDetails?.market_data
                        .market_cap_change_percentage_24h
                    }
                    %)
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
  {isBotRelease && (
    <div className="rounded-xl w-[20rem] md:w-[25rem] h-[70vh] bg-white shadow-xl border border-gray-300">
      {/* Chat Header */}
      <div className="flex justify-between items-center border-b px-6 h-[12%] bg-gray-100 rounded-t-xl">
        <p className="font-semibold text-lg text-gray-800">Chat Bot</p>
        <Button onClick={handleBotRelease} size="icon" variant="ghost">
          <Cross1Icon className="w-5 h-5 text-gray-600 hover:text-red-500 transition" />
        </Button>
      </div>

      {/* Chat Messages */}
      <div className="h-[76%] flex flex-col overflow-y-auto gap-4 px-5 py-3 scroll-container">
        {/* Welcome Message */}
        <div className="self-start">
          <div className="bg-gray-800 text-white px-4 py-3 rounded-lg shadow-md">
            <p className="font-medium">Hi, {auth.user?.fullName} 👋</p>
            <p className="text-sm opacity-80">
              You can ask any crypto-related question, like price, market cap, etc.
            </p>
          </div>
        </div>

        {/* Chat Messages Loop */}
        {chatBot.messages.map((item, index) => (
          <div
            ref={chatContainerRef}
            key={index}
            className={`flex ${item.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {item.role === "user" ? (
              <div className="bg-blue-600 text-white px-4 py-3 rounded-full max-w-[75%] shadow-md">
                {item.prompt}
              </div>
            ) : (
              <div className="bg-gray-700 text-white px-4 py-3 rounded-lg max-w-[75%] shadow-md">
                {item.ans}
              </div>
            )}
          </div>
        ))}

        {chatBot.loading && <p className="text-center text-gray-500">Fetching data...</p>}
      </div>

      {/* Chat Input */}
      <div className="h-[12%] border-t flex items-center px-4 bg-gray-800 rounded-b-xl">
        <Input
          className="w-full h-12 border-none outline-none bg-transparent"
          placeholder="Write a prompt..."
          onChange={handleChange}
          value={inputValue}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  )}

  {/* Chat Bot Toggle Button */}
  <div onClick={handleBotRelease} className="relative w-[10rem] cursor-pointer group">
    <Button className="w-full h-[3rem] flex gap-2 items-center rounded-full bg-blue-600 hover:bg-blue-700 shadow-md transition">
      <MessageCircle
        className="fill-white -rotate-[90deg] stroke-none group-hover:scale-110 transition"
        size={30}
      />
      <span className="text-white text-lg font-semibold">Chat Bot</span>
    </Button>
  </div>
</section>

    </div>
  );
};

export default Home;
