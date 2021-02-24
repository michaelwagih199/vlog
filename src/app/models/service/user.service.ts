import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import Users from '../users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dbPath = '/users';

  tutorialsRef: AngularFirestoreCollection<Users>;

  constructor(private db: AngularFirestore) {
    this.tutorialsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Users> {
    return this.tutorialsRef;
  }

  create(tutorial: Users): any {
    return this.tutorialsRef.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.tutorialsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.tutorialsRef.doc(id).delete();
  }
  
}
