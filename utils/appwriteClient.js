import { Client, Account, ID } from "appwrite";

const appwriteClient = new Client();

appwriteClient
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6427fe5067c97fb3cf6d");

export default appwriteClient;
