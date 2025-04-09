import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const ProductSkeleton = () => (
  <div className="flex w-full flex-col items-center justify-center space-y-3">
    <Skeleton className="h-[200px] w-[290px] max-md:w-[190px] rounded-md" />
    <div className="w-full px-2 space-y-3">
      <div className="flex gap-2">
        <Skeleton className="h-3 w-[20px] max-md:w-[20px]" />
        <Skeleton className="h-3 w-[120px] max-md:w-[100px]" />
      </div>
      <Skeleton className="h-3 w-[290px] max-md:w-[170px] my-1" />
      <div className="flex w-full justify-between items-center gap-7 mt-2">
        <Skeleton className="h-3 w-[120px] max-md:w-[160px]" />
      </div>
    </div>
  </div>
);

export default ProductSkeleton;
