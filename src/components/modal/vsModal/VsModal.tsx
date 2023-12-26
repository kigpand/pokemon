import { useState } from "react";
import styles from "./VsModal.module.scss";
import VsModalSearch from "./search/VsModalSearch";
import VsModalResult from "./result/VsModalResult";
import { IPokemonList } from "../../../interface/IPokemonList";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

type SearchType = {
  searchPoke: IPokemonList | null;
  onSearch: boolean;
};

type Props = {
  currentPoke: IPokemonList;
  closeModal: () => void;
};

export default function VsModal({ currentPoke, closeModal }: Props) {
  const theme = useSelector((state: RootState) => state.datas.theme);
  const [search, setSearch] = useState<SearchType>({
    searchPoke: null,
    onSearch: false,
  });

  function getSearch(poke: IPokemonList) {
    setSearch({ searchPoke: poke, onSearch: true });
  }

  return (
    <section
      className={styles.vsModal}
      style={{ color: theme === "dark" ? "white" : "black" }}
    >
      {search.onSearch ? (
        <VsModalResult
          currentPoke={currentPoke}
          searchPoke={search.searchPoke!}
        />
      ) : (
        <VsModalSearch getSearch={getSearch} />
      )}
      <div className={styles.back} onClick={closeModal}></div>
    </section>
  );
}
