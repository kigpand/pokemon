import { IPokemonList } from "interface/IPokemonList";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import types from "json/types.json";
import { typeConvertDamegeData } from "utils/convert";

export function useStorage() {
  const location = useLocation();
  const nav = useNavigate();

  const setCurrentPokeStorage = useCallback(
    (list: IPokemonList) => {
      sessionStorage.setItem("currentPoke", JSON.stringify(list));
      if (!location.pathname.includes("detail")) {
        nav("/detail");
      }
    },
    [nav, location]
  );

  const getCurrentPokeStorage = useCallback(() => {
    const item = sessionStorage.getItem("currentPoke");
    return item ? JSON.parse(item) : null;
  }, []);

  const clearCurrentPokeStorage = useCallback(() => {
    sessionStorage.removeItem("currentPoke");
  }, []);

  const setTypeStorage = useCallback(
    (type: string) => {
      sessionStorage.setItem("type", type);
      if (!location.pathname.includes("type")) {
        nav("/type");
      }
    },
    [nav, location]
  );

  const getTypeStorage = useCallback(() => {
    const sessionType = sessionStorage.getItem("type");
    if (!sessionType) return null;
    const type = types.find((type) => type.name === sessionType);
    return type ? typeConvertDamegeData(type) : null;
  }, []);

  const clearTypeStorage = useCallback(() => {
    sessionStorage.removeItem("type");
  }, []);

  return {
    setCurrentPokeStorage,
    setTypeStorage,
    clearCurrentPokeStorage,
    clearTypeStorage,
    getCurrentPokeStorage,
    getTypeStorage,
  };
}
