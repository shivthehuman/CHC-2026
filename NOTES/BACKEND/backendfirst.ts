/** 
 * ///!  NOTES: MASTERING TYPESCRIPT BACKEND & COMMANDS

//* 1. CORE CONCEPT: COMPILATION
/** TypeScript is not a runtime language; it is a compiled language. 
 This means your computer (specifically Node.js) cannot read TypeScript directly.
 It must be translated (transpiled) into standard JavaScript first

//* 2. THE DIFFERENCE: NPM vs NPX
- `npm`(Node Package Manager): Used to INSTALL things(e.g., `npm install`).
- `npx`(Node Package Execute): Used to RUN / EXECUTE command - line tools(e.g., `npx tsc`).

//* 3. PROJECT SETUP SEQUENCE (The "Local" Industry Standard Way)
- `npm init -y` -> Initialize Node project(creates package.json)
    - `npm install -D typescript @types/node tsx` -> Install TS, types, and the fast runner locally
- `npx tsc --init` -> Create tsconfig.json(The TS configuration file)


//* 4. WAYS TO RUN TS (Notice the use of 'npx', not 'npm')
     - Modern Dev Way(Auto - Restart): `npx tsx watch backendfirst.ts`
        - Legacy Dev Way: `npx ts-node backendfirst.ts`
- Production Way(Step 1): `npx tsc`(Compiles TS to JS)
         Production Way(Step 2): `node backendfirst.js`(Runs the generated JS file)


//* 5. PRO-TIPS FOR FEWER ERRORS & PRODUCTION
     - Use Package Scripts: Instead of typing long commands, add them to `package.json`:
"scripts": {
 "dev": "tsx watch backendfirst.ts",
  "build": "tsc",
  "start": "node backendfirst.js"
}
  Now you just run `npm run dev` for development, and`npm run start` for production.
- Enable Strict Mode: Open `tsconfig.json` and ensure `"strict": true` is uncommented.This forces you to write safer code and catches errors before you even run the file.
- Don't use Global Installs (`-g`) for project-specific tools. Always use Local (`-D`) + `npx` to avoid version conflicts between different projects.
 * 
 * 
 */





//Starting sirs lecture:
// ============================================================================
// PART 1: BASIC TYPESCRIPT FUNCTIONS
// ============================================================================

// In TS, we define the type of parameters (a: number) AND the return type (: number)
function addNumbers(a: number, b: number): number {
    return a + b;
}

const result: number = addNumbers(3, 3);
// console.log(result);
//to check the typeScript version----> tsc --version


//! now we are learning typescript on the go ---TYPESCRIPT


//Planing: 
//by building - Ek in memory DB
// InMeoryDB--> Save ('user-1', {fname,lname, })

//map --> hashMap (key, value);
//                  |     |
// what its?     type?  type?
//                  |     |
//               stirng  string    --Does our value trully a string?

//user object
// 1 { fname, lname, email, contact: {mobile}, address: {street, pin}}
// here it is object  thats why we have interfaces
//1 is user id: here


// ============================================================================
// PART 2: DEFINING CUSTOM TYPES & INTERFACES
// ============================================================================

// 1. Custom Type Alias: 
// Makes the code more readable. Now we know 'UserID' is just a string.
type UserID = string;

// 2. Interface: 
// Defines the exact shape our User object MUST follow. 
// Standard practice: Interface names always start with a Capital letter.
interface User {
    id: UserID;
    fname: string;

    // The '?' makes 'lname' OPTIONAL. You can provide it, or skip it.
    lname?: string;
    email: string;

    // Nested objects defining exact structure
    contact: {
        mobile: string;
    };
    address: {
        street: number;
        pin: number;
        country: string;
    };
}


// ============================================================================
// PART 3: IN-MEMORY DATABASE USING CLASS AND MAP
// ============================================================================

class InMemoryDB {
    // We use a 'Map' (Hashmap) instead of a regular object for better performance.
    // It stores data as Key-Value pairs -> Map<KeyType, ValueType>
    // 'private' means this database cannot be accessed directly from outside the class.
    // The underscore '_' is a naming convention for private variables.
    private _db: Map<UserID, User> = new Map<UserID, User>();

    constructor() {
        // Constructor is empty here, but ready if we need initial setup later
    }

    // --- CREATE (Insert Data) ---
    // Takes a full 'User' object, returns the 'UserID' string upon success
    public insertUser(data: User): UserID {
        // Validation: Prevent duplicate IDs
        if (this._db.has(data.id)) {
            throw new Error(`User with ID ${data.id} already exists`);
        }

        // Save to the map: Key is data.id, Value is the whole data object
        this._db.set(data.id, data);
        return data.id;
    }

    // --- UPDATE (Modify Data) ---
    // 'Omit<User, 'id'>' is TypeScript magic! 
    // It creates a temporary type that has all properties of 'User' EXCEPT 'id'.
    // This strictly prevents anyone from accidentally changing a user's unique ID during an update.
    public updateUser(id: UserID, updateData: Omit<User, 'id'>): boolean {
        // Validation: Ensure user exists before updating
        if (!this._db.has(id)) {
            throw new Error(`User with ID ${id} does not exist`);
        }

        // Use the Spread Operator (...) to merge the new data with the locked 'id'
        this._db.set(id, { ...updateData, id });
        return true;
    }

    // --- READ (Get Data) ---
    public getUserById(id: UserID): User {
        if (!this._db.has(id)) {
            throw new Error(`User with ID ${id} does not exist`);
        }

        // The '!' at the end is the "Non-Null Assertion Operator".
        // Because we already checked if the ID exists in the line above,
        // we use '!' to promise TypeScript: "Trust me, this will NOT return undefined."
        return this._db.get(id)!;
    }
}


// ============================================================================
// PART 4: EXECUTING THE CODE
// ============================================================================

// 1. Initialize the database
const myDB = new InMemoryDB();

// 2. Insert a new user (Notice we don't pass 'lname' because it is optional)
myDB.insertUser({
    id: '1',
    fname: 'shiv',
    email: 'shiv@gmail.com',
    contact: { mobile: '0008908' },
    address: {
        street: 3,
        pin: 34345,
        country: 'india'
    }
});

// 3. Update the existing user
// Thanks to 'Omit', if you try to type `id: '3'` inside this object, TypeScript will throw a red error!
myDB.updateUser('1', {
    fname: 'shivraj', // Updated name
    email: 'shiv@gmail.com',
    contact: { mobile: '0008908' },
    address: {
        street: 3,
        pin: 34345,
        country: 'india'
    }
});

/**[REVISION NOTES: OOP & IN-MEMORY DB IN TYPESCRIPT]

1. INTERFACES & TYPES:
- `type UserID = string;` creates readable custom types.
- `interface` defines the exact shape of an object.
- Use `?` for optional properties (e.g., `lname?: string`).

2. CLASS ARCHITECTURE:
- `private _db`: Underscore is a naming convention for private properties. Cannot be accessed outside the class.
- `Map<Key, Value>`: A fast key-value data structure used here to simulate a database. Methods: `.set()`, `.has()`, `.get()`.

3. ADVANCED TS FEATURES USED:
- `Omit<Type, 'property'>`: Removes a specific property from a type. Used in updates to prevent accidental overwriting of unique IDs.
- `!` (Non-Null Assertion): Tells the compiler a value will definitely not be null/undefined when we already wrote logic to verify it.
```</User,> */ 