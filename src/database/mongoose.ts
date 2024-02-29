import { connect, connection, connections } from "mongoose";

export const mongooseConnect = async (connectionString: string) => {
  connection
    .on("error", (error) => {
      console.log("ERROR: Connection to MongoDB failed", error);
    })

    .once("open", () => {
      const infos = connections;

      infos.map((info) =>
        console.log(
          `Connected to ${info.host}:${info.port}/${info.name} mongo Database`
        )
      );
    });

  await connect(connectionString);
  return connection.getClient().db();
};

export const mongoDisconnect = async () => {
  await connection.close();
};
