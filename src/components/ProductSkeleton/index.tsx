import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductSkeleton = () => (
  <div className="flex w-full flex-col space-y-3 m-2">
    <Skeleton className="h-[200px] m-4 w-[290px] max-md:w-[180px] rounded-xl" />
    <div className="mx-4">
      <div className="space-y-3">
        <div className="flex gap-2">
          <Skeleton className="h-3 w-[20px] max-md:w-[20px]" />
          <Skeleton className="h-3 w-[120px] max-md:w-[100px] " />
        </div>

        <div className="flex gap-4 my-1">
          <Skeleton className="h-3 w-[290px] max-md:w-[190px]" />
        </div>

        <div className="flex w-full justify-between items-center mt-2">
          <Skeleton className="h-3 w-[120px] max-md:w-[160px] " />
          <Skeleton className="h-6 w-[30px] max-md:w-[30px] mx-5" />
        </div>
      </div>
    </div>
  </div>
);

export default ProductSkeleton;
