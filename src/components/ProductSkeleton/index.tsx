import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProductSkeleton = () => (
    <div className="flex w-full flex-col space-y-3">
        <Skeleton className="h-[200px] w-[280px] max-md:w-[250px] rounded-xl" />
        <div className="space-y-3">
            <div className="flex gap-4">
                <Skeleton className="h-3 w-[180px] max-md:w-[150px]" />
            </div>
            <div className="flex gap-2">
                <Skeleton className="h-3 w-[50px] max-md:w-[30px]" />
                <Skeleton className="h-3 w-[200px] max-md:w-[160px] " />
            </div>

        </div>
    </div>
);

export default ProductSkeleton;
