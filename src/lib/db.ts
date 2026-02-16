import Dexie, { type EntityTable } from 'dexie';

export interface Appointment {
    id?: number;
    service: string;
    date: string;
    time: string;
    name: string;
    phone?: string;
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

// Schema definition for version 2
db.version(2).stores({
    appointments: '++id, service, date, time, name, phone, status, createdAt'
});

export { db };
