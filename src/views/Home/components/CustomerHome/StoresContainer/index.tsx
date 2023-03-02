import React from "react";
import { CustomerStoreCard } from "./CustomerStoreCard";

interface Props {
  stores: any[]
  onStoreClick: (storeId: string) => void
}

export const StoresContainer = ({stores, onStoreClick}: Props) => {
  return <div>
    {stores.map((store) => {
      return <CustomerStoreCard store={store} onCardClick={() => onStoreClick(store.storeUid)} />
    })}
  </div>;
};
