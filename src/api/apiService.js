import axios from 'axios';

axios.defaults.baseURL = 'https://64860553a795d24810b79acf.mockapi.io';

export async function fetchContactsApi() {
  const response = await axios.get('/contacts');
  return response.data;
}

export async function addContactApi(contact) {
  const response = await axios.post('/contacts', contact);
  return response.data;
}

export async function deleteContactApi(contactId) {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.data;
}