import { useEffect, useState } from "react";
import { searchUsers } from "../services/searchServices";
import { Link } from "react-router-dom";

import styles from "./SearchModal.module.css";

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
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </form>
      <ul className={styles.searchResults}>
        {searchResults.map((result) => (
          <li className={styles.result} key={result._id}>
            <Link to={"/profile/" + result.username}>
              <img src={"http://localhost:5000/" + result.imageUrl} alt="" />
              <div className={styles.resultDetails}>
                <h3>{result.fullname}</h3>
                <p>
                  @{result.username} - <span>{result.followers} Followers</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
