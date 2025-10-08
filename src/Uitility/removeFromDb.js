import { getStoredData } from "./saveToDb";

const removeData = (id) => {
  const getPreviousApps = getStoredData();
  const deleteData = getPreviousApps.filter((data) => data !== id);
  console.log(deleteData);
  const strInstalled = JSON.stringify(deleteData);
  localStorage.setItem("installApp", strInstalled);
};

export default removeData;
