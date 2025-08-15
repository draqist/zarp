import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, CreditCard, Map, MapPin, Plus } from "lucide-react";

const CustomerPage = () => {
  return (
    <div className="max-h-screen overflow-scroll bg-[#F8FBFB] p-5 flex flex-col gap-8 h-screen">
      <section className="flex flex-col gap-9">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-medium">Hi, Steve!</h1>
            <span className="text-xs text-[#676775]">Zarping something?</span>
          </div>
          <Bell />
        </div>
        <section className="flex flex-col gap-6">
          <div className="p-4 bg-[#0F0D13] text-white flex items-center justify-between rounded-2xl h-[84px]">
            <div className="flex items-center gap-3">
              <div className="bg-[#27262B] border-[1px] border-white/20 h-12 w-12 rounded-full items-center flex justify-center">
                <CreditCard color="white" size={20} />
              </div>
              <div className="flex flex-col">
                <h1 className="text-white font-sans text-xl font-semibold">
                  {" "}
                  $150.50{" "}
                </h1>
                <span className="text-xs font-sans"> Account Balance</span>
              </div>
            </div>
            <Button size="sm" variant="secondary">
              <Plus /> Topup
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-white border-[1px] border-gray-400/20 items-center p-1 rounded-full flex-grow">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white border-[1px] border-gray-500/20">
                <MapPin size={18} />
              </div>
              <Input
                className="w-fit flex-grow focus-visible:outline-0 focus-visible:border-none focus-visible:ring-0 border-none shadow-none font-sans placeholder:text-sm"
                placeholder="Where to zarp it?"
              />
            </div>
            <div className="!h-12 !w-12 flex items-center justify-center rounded-full bg-white border-[1px] border-gray-500/20">
              <Map size={18} />
            </div>
          </div>
        </section>
      </section>
      {/* ROUTES */}
      <section className="flex flex-col gap-3">
        <h1 className="font-medium font-inter text-xl"> Your routes </h1>
        <div className="p-4 bg-white text-white flex items-center justify-between rounded-2xl border-[1px] border-gray-400/20 h-20">
          <div className="flex items-center gap-3">
            <div className="bg-[#27262B] border-[1px] border-white/20 h-12 w-12 rounded-md items-center flex justify-center">
              <CreditCard color="white" size={20} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-black font-sans text-xl font-semibold">
                {" "}
                $150.50{" "}
              </h1>
              <span className="text-xs text-[#676775] font-sans">
                {" "}
                Account Balance
              </span>
            </div>
          </div>
          <Badge variant="destructive">Cancelled</Badge>
        </div>
      </section>
    </div>
  );
};

export default CustomerPage;
