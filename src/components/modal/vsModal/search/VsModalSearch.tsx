import { useRef, useState } from "react";
import styles from "./VsModalSearch.module.scss";
import { onSearchItem } from "../../../../utils/makeData";
import { IPokemonList } from "../../../../interface/IPokemonList";

function SearchComponent({
  getSearchPoke,
}: {
  getSearchPoke: (poke: IPokemonList) => void;
}) {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.search}>
      <div className={styles.searchLabel}>
        검색할 포켓몬명이나 도감번호를 입력해주세요
      </div>
      <input type="text" className={styles.searchInput} ref={searchRef}></input>
      <div
        className={styles.searchButton}
        onClick={() => onSearchItem(searchRef, getSearchPoke)}
      >
        검색
      </div>
    </div>
  );
}

export default function VsModalSearch() {
  const [onSearch, setOnSearch] = useState<boolean>(false);
  const [searchPoke, setSearchPoke] = useState<IPokemonList | null>(null);

  function getSearchPoke(poke: IPokemonList) {
    setSearchPoke(poke);
  }
  return (
    <div className={styles.modalSearch}>
      <header className={styles.title}>어떤 포켓몬과 비교하시겠습니까?</header>
      <main className={styles.main}>
        {searchPoke ? (
          <div>sss</div>
        ) : (
          <SearchComponent getSearchPoke={getSearchPoke} />
        )}
      </main>
    </div>
  );
}
