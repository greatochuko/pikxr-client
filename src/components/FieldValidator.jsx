import styles from "./FieldValidator.module.css";

export default function FieldValidator({ field, error }) {
  return field ? (
    <div
      className={`${styles.fieldError} ${error.validated && styles.validated}`}
      title={error.error}
    >
      {error.validated ? <>&#10003;</> : "!"}
    </div>
  ) : null;
}
