import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import serviceAccount from "@common/Services/service-account.json"

@Injectable()
export class FirebaseService {
  constructor() {
    if (!admin.apps.length) {
      const credential = admin.credential.cert(
        serviceAccount as admin.ServiceAccount
      );
      admin.initializeApp({
        credential
      });
    }
  }

  admin() {
    return admin;
  }

  firestore() {
    return admin.firestore();
  }

}
