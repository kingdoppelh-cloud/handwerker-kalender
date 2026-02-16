import Dexie, { type EntityTable } from 'dexie';

export interface Appointment {
    id?: number;
    service: string;
    date: string;
    time: string;
    name: string;
    phone?: string;
    email?: string;
    address: string;
    description?: string;
    status?: string;
    createdAt?: string;
}

const db = new Dexie('HandwerkerDB') as Dexie & {
    appointments: EntityTable<
        Appointment,
        'id' // primary key "id" (for the type-safety)
    >;
};

// Schema definition for version 3
db.version(3).stores({
    appointments: '++id, service, date, time, name, phone, email, status, createdAt'
});

export { db };
