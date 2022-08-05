import React from "react";
import styles from "./NotFound.module.scss";

function notFoundBlock() {
    return (
            <h1 className={styles.root}>
                <span>:(</span>
                <br/>
                ничего не найдено
            </h1>

    )
}
export default notFoundBlock