import { initializeApp } from 'firebase/app';
import {
  CollectionReference,
  DocumentReference,
  collection,
  doc,
  getFirestore,
} from 'firebase/firestore';

import creds from '~/utils/firebase/config';

const firebaseApp = initializeApp(creds);

const database = getFirestore(firebaseApp);

const db_dev = 'database/dev';

interface ICollection {
  ref: CollectionReference;
  string: string;
}

interface ICompanyInfo {
  ref: DocumentReference;
  string: string;
}

interface ICollections {
  companyInfo: ICompanyInfo;
  addresses: ICollection;
  carts: ICollection;
  orders: ICollection;
  products: ICollection;
  users: ICollection;
  employees: ICollection;
  endorsements: ICollection;
  students: ICollection;
  incidents: ICollection;
}

export const collections: ICollections = {
  // ? Shared Collections
  companyInfo: {
    ref: doc(database, `${db_dev}`),
    string: 'test',
  },
  users: {
    ref: collection(database, `${db_dev}/users`),
    string: `${db_dev}/users`,
  },
  employees: {
    ref: collection(database, `${db_dev}/employees`),
    string: `${db_dev}/employees`,
  },

  // ? Ecommerce Collections
  addresses: {
    ref: collection(database, `${db_dev}/address`),
    string: `${db_dev}/address`,
  },
  carts: {
    ref: collection(database, `${db_dev}/cart`),
    string: `${db_dev}/cart`,
  },
  orders: {
    ref: collection(database, `${db_dev}/orders`),
    string: `${db_dev}/orders`,
  },
  products: {
    ref: collection(database, `${db_dev}/products`),
    string: `${db_dev}/products`,
  },
  endorsements: {
    ref: collection(database, `${db_dev}/endorsements`),
    string: `${db_dev}/endorsements`,
  },

  // ? Incident Report Collections
  students: {
    ref: collection(database, `${db_dev}/students`),
    string: `${db_dev}/students`,
  },
  incidents: {
    ref: collection(database, `${db_dev}/incidents`),
    string: `${db_dev}/incidents`,
  },
};
