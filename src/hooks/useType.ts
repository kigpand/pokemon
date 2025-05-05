import types from "json/types.json";
import { useEffect, useState } from "react";
import { useStorage } from "./useStorage";
import type { IType } from "interface/IType";
import { getTypeEn, typeConvertDamegeData } from "utils/convert";

export function useType() {
  const [typeData, setTypeData] = useState<IType | null>(null);
  const { setTypeStorage, getTypeStorage } = useStorage();

  useEffect(() => {
    const type = getTypeStorage();
    setTypeData(type ?? null);
  }, [getTypeStorage]);

  const handleChangeType = (item: string) => {
    const value = getTypeEn(item);
    setTypeStorage(value);
    const type = types.find((type) => type.name === value);
    if (type) {
      setTypeData(typeConvertDamegeData(type));
    }
  };

  return { typeData, handleChangeType };
}
