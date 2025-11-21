
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const dataFile = path.join(__dirname,"../data/users.json");

async function readUsersFile() {
    try{
        const raw = await fs.readFile(dataFile,"utf-8");
        const users = JSON.parse(raw);

        if(!Array.isArray(users)){
            return [];
        }
        return users;
    }
    catch(err){
        if(err.code == "ENOENT") return [];
        throw err;
    }
    
}

async function writeUsersFile(users) {
    const tmpFile = `${dataFile}.tmp`;
    const data = JSON.stringify(users,null,2);
    await fs.writeFile(tmpFile,data,"utf-8");
    await fs.rename(tmpFile,dataFile);
}



export const getAllUsers = async () => {
  const users = await readUsersFile();
  return users;
};
export const getUserById  = async(id)=>
{
    const users = await readUsersFile();
    const numericId = Number(id);
    if(Number.isNaN(numericId)) return null;
    return users.find((u)=>u.id === numericId)||null;

};


export const createUser = async ({ name, email }) => {
  const users = await readUsersFile();
  const newId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
  const newUser = { id: newId, name, email };
  users.push(newUser);
  await writeUsersFile(users);
  return newUser;
};
export const updateUser = async (id, payload) => {
  const users = await readUsersFile();
  const numericId = Number(id);
  const idx = users.findIndex((u) => u.id === numericId);
  if (idx === -1) return null;
  users[idx] = { ...users[idx], ...payload };
  await writeUsersFile(users);
  return users[idx];
};

/** Delete user by id, returns true if deleted, false if not found */
export const deleteUser = async (id) => {
  const users = await readUsersFile();
  const numericId = Number(id);
  const filtered = users.filter((u) => u.id !== numericId);
  if (filtered.length === users.length) return false; // not found
  await writeUsersFile(filtered);
  return true;
};