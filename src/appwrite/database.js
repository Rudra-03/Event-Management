import { Client, Databases, Query, ID } from "appwrite";
import conf from "./conf.js";
export class DatabaseService {
  client = new Client();
  database;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.database = new Databases(this.client);
  }

  async checkvenue({ venue, eventdate, starttime, endtime }) {
    try {
      const documents = await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteEventsCollectionId,
      );
      const events = documents.documents.filter((doc) => (doc.venue == venue && doc.eventdate == eventdate && doc.starttime <= starttime && doc.endtime >= endtime));
      console.log(events);
      return events.length === 0;
    } catch (error) {
      throw error;
    }
  }
  async createEvent({
    eventname,
    eventcatgory,
    eventdate,
    starttime,
    endtime,
    venue,
  }) {
    try {
      console.log(eventname);
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteEventsCollectionId,
        ID.unique(),
        {
          eventname,
          eventcatgory,
          eventdate,
          starttime,
          endtime,
          venue,
        }
      );
    } catch (error) {
      throw error;
    }
  }
  async getEvents() {
    try {
      return await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteEventsCollectionId
      );
    } catch (error) {
      console.log("Appwrite serive :: getEvents :: error", error);
    }
  }

  async getEventById(eventId) {
    try {
      return await this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteEventsCollectionId,
        eventId
      );
    } catch (error) {
      console.log("Appwrite serive :: getEventById :: error", error);
    }
  }

  async getParticipants() {
    try {
      return await this.database.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteParticipantsCollectionId,
      );
    } catch (error) {
      console.log("Appwrite serive :: getParticipants :: error", error);
    }
  }

  async registerParticipant({userid, name, email, category, eventname }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteParticipantsCollectionId,
        ID.unique(),
        {
          userid,
          name,
          email,
          category,
          eventname,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: registerParticipant :: error", error);
    }
  }
}
const databaseService = new DatabaseService();
export default databaseService;
