import { useEffect, useState } from "react";
import { searchUsers } from "../services/searchServices";

import styles from "./SearchModal.module.css";
import SearchResult from "./SearchResult";

export default function SearchModal() {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function search() {
      const data = await searchUsers(query, signal);
      setSearchResults(data);
    }
    if (!query) {
      setSearchResults([]);
      return;
    }
    search();
    return () => controller.abort();
  }, [query]);

  return (
    <div
      className={styles.modal}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <form>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </form>
      <ul className={styles.searchResults}>
        {searchResults.map((result) => (
          <SearchResult key={result._id} result={result} />
        ))}
      </ul>
    </div>
  );
}
