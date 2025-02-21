import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductSkeleton = () => (
    <div className="flex w-full flex-col space-y-3">
        <Skeleton className="h-[200px] w-[290px] max-md:w-[200px] rounded-xl" />
        <div className="space-y-3">
            <div className="flex gap-4">
                <Skeleton className="h-3 w-[290px] max-md:w-[180px]" />
            </div>
            <div className="flex gap-2">
                <Skeleton className="h-3 w-[20px] max-md:w-[20px]" />
                <Skeleton className="h-3 w-[120px] max-md:w-[100px] " />
            </div>

        </div>
    </div>
);

export default ProductSkeleton;
