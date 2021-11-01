import { createDbWorker } from "sql.js-httpvfs";

const workerUrl = new URL(
  "../../node_modules/sql.js-httpvfs/dist/sqlite.worker.js",
  import.meta.url
);
const wasmUrl = new URL("../../node_modules/sql.js-httpvfs/dist/sql-wasm.wasm", import.meta.url);

export const load = async() => {
    console.log(workerUrl)
  const worker = await createDbWorker(
    [
      {
        from: "inline",
        config: {
          serverMode: "full",
          url: "/example.sqlite3",
          requestChunkSize: 4096,
        },
      },
    ],
    workerUrl.toString(),
    wasmUrl.toString()
  );

  const result = await worker.db.query(`select * from mytable`);

  console.log(result);
}
