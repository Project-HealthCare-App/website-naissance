const host = "http://localhost:8080";

{/* Methode GET pour reception des données du serveur bouchon */}
const search = async (url: string) => {
  const response = await fetch(
    `${host}/${url}`,
     {
        headers: {'accept': 'application/json'}
    }
);
  const data = await response.json();
  return data;
}

{/* Methode POST pour envoi des données dans le serveur bouchon */}

const create = async (url: string, body: any) => {
  const response = await fetch(
    `${host}/${url}`,
     {
        headers: {'accept': 'application/json', 'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(body)
    }
);
  return response;
}

export {search, create};