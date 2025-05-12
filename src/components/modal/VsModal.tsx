import { useState } from "react";
import type { IPokemonList } from "interface/IPokemonList";
import VsModalSearch from "./VsModalSearch";
import VsModalResult from "./VsModalResult";
import ModalPortal from "ModalPortal";

type SearchType = {
  searchPoke: IPokemonList | null;
  onSearch: boolean;
};

type Props = {
  currentPoke: IPokemonList;
  closeModal: () => void;
};

export default function VsModal({ currentPoke, closeModal }: Props) {
  const [search, setSearch] = useState<SearchType>({
    searchPoke: null,
    onSearch: false,
  });

  function getSearch(poke: IPokemonList) {
    setSearch({ searchPoke: poke, onSearch: true });
  }

  return (
    <ModalPortal
      handleCloseModal={closeModal}
      component={
        search.onSearch ? (
          <VsModalResult
            currentPoke={currentPoke}
            searchPoke={search.searchPoke!}
          />
        ) : (
          <VsModalSearch getSearch={getSearch} />
        )
      }
    ></ModalPortal>
  );
}
