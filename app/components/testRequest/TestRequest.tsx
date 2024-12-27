"use client";

import { useState } from "react";

import {
  selectBody,
  selectStatus,
  getApiTest,
} from "@/lib/features/testRequest/testAPISlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import styles from "./TestRequest.module.css";

export const TestRequest = () => {
  const dispatch = useAppDispatch();
  const body = useAppSelector(selectBody);
  const status = useAppSelector(selectStatus);

  return (
    <div>
      <div className={styles.row}>
        <span aria-label="Count" className={styles.value}>
          {body.test}
          <br/>
          {body.bbb}
          <br/>
          {status}
          <br/>
        </span>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(getApiTest());
          }}
        >
          Get Api
        </button>
      </div>
    </div>
  );
};
