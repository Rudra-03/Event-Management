const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteEventsCollectionId: String(
    import.meta.env.VITE_APPWRITE_EVENTS_COLLECTION_ID
  ),
  appwriteParticipantsCollectionId: String(
    import.meta.env.VITE_APPWRITE_PARTICIPANTS_COLLECTION_ID
  ),
  appwriteCulturalCollectionId: String(
    import.meta.env.VITE_APPWRITE_CULTURAL_COLLECTION_ID
  ),
  appwriteTechnicalCollectionId: String(
    import.meta.env.VITE_APPWRITE_TECHNICAL_COLLECTION_ID
  ),
  appwriteCulturalParticipantsCollectionId: String(
    import.meta.env.VITE_APPWRITE_CULTURAL_PARTICIPANTS_COLLECTION_ID
  ),
  appwriteTechnicalParticipantsCollectionId: String(
    import.meta.env.VITE_APPWRITE_TECHNICAL_PARTICIPANTS_COLLECTION_ID
  ),
};

export default conf;
