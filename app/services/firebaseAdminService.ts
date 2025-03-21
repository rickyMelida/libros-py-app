import {
  initializeApp,
  getApps,
  cert,
  App,
  ServiceAccount,
} from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const firebaseAdminService = () => {
  const serviceAccount = {
    type: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_TYPE,
    project_id: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PROJECT_ID,
    private_key_id: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY_ID,
    private_key: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY,
    client_email: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_CLIENT_EMAIL,
    client_id: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_CLIENT_ID,
    auth_uri: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_AUTH_URI,
    token_uri: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_TOKEN_URI,
    auth_provider_x509_cert_url:
      process.env.NEXT_PUBLIC_FIREBASE_ADMIN_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url:
      process.env.NEXT_PUBLIC_FIREBASE_ADMIN_CLIENT_X509_CERT_URL,
    universe_domain: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_UNIVERSE_DOMAIN,
  };
  let adminApp: App;

  if (!getApps().length) {
    adminApp = initializeApp({
      credential: cert(serviceAccount as ServiceAccount),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_ADMIN_AUTH_DATABASE_URL,
    });
  } else {
    adminApp = getApps()[0];
  }
  const adminAuth = getAuth();

  return adminAuth;
};

export default firebaseAdminService;
