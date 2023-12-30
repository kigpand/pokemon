import { useRef, useState } from "react";
import styles from "./VsModalSearch.module.scss";
import { onSearchItem } from "../../../../utils/makeData";
import { IPokemonList } from "../../../../interface/IPokemonList";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

type Props = {
  getSearch: (poke: IPokemonList) => void;
};

type VSProps = {
  poke: IPokemonList;
  resetPoke: () => void;
} & Props;

function SearchComponent({
  getSearchPoke,
}: {
  getSearchPoke: (poke: IPokemonList) => void;
}) {
  const searchRef = useRef<HTMLInputElement>(null);

  function handleSubmitButton(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearchItem(searchRef, getSearchPoke);
  }

  return (
    <form className={styles.search} onSubmit={handleSubmitButton}>
      <div className={styles.searchLabel}>
        검색할 포켓몬명이나 도감번호를 입력해주세요
      </div>
      <input type="text" className={styles.searchInput} ref={searchRef}></input>
      <input type="submit" className={styles.searchButton}></input>
    </form>
  );
}

function VsCheckComponent({ poke, getSearch, resetPoke }: VSProps) {
  return (
    <>
      <div className={styles.searchTitle}>
        검색된 <strong>{poke.name}</strong>과 비교하시겠습니까?
      </div>
      <div className={styles.searchButtons}>
        <button onClick={() => getSearch(poke)}>예</button>
        <button onClick={resetPoke}>아니오</button>
      </div>
    </>
  );
}

export default function VsModalSearch({ getSearch }: Props) {
  const [searchPoke, setSearchPoke] = useState<IPokemonList | null>(null);
  const theme = useSelector((state: RootState) => state.datas.theme);

  function getSearchPoke(poke: IPokemonList) {
    setSearchPoke(poke);
  }
  return (
    <div
      className={styles.modalSearch}
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
      }}
    >
      <header className={styles.title}>어떤 포켓몬과 비교하시겠습니까?</header>
      <main className={styles.main}>
        {searchPoke ? (
          <VsCheckComponent
            poke={searchPoke}
            getSearch={getSearch}
            resetPoke={() => setSearchPoke(null)}
          />
        ) : (
          <SearchComponent getSearchPoke={getSearchPoke} />
        )}
      </main>
    </div>
  );
}
