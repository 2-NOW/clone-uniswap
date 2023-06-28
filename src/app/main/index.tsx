import { BlockSyncStatus } from "@/components/app/main/block-status";
import { Swap } from "@/components/app/main/swap";

export const Main = () => {
  return (
    <div className="flex min-h-screen flex-col items-center pb-20 pt-[72px]">
      <Swap />
      <BlockSyncStatus />
    </div>
  );
};
