import styles from "./styles.module.css";
import { TitleInput } from "../TitleInput/TitleInput";
import { GenreDropdown } from "../GenreDropdown/GenreDropdown";
import { CinemaDropdown } from "../CinemaDropdown/CinemaDropdown";

export const MoviesFilter = () => {
  const filters = [
    { name: "Название", component: <TitleInput /> },
    { name: "Жанр", component: <GenreDropdown /> },
    { name: "Кинотеатр", component: <CinemaDropdown /> },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <span className={styles.title}>Фильтр поиска</span>
        <div className={styles.filters}>
          {filters.map(({ name, component }, index) => (
            <div key={index} className={styles.filter}>
              <span className={styles.label}>{name}</span>
              {component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
