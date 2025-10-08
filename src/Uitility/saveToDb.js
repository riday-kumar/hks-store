const getStoredData = () => {
  const previousData = localStorage.getItem("installApp");
  const parsePreviousData = JSON.parse(previousData);

  if (parsePreviousData) {
    return parsePreviousData;
  } else {
    return [];
  }
};

const installNewApp = (id) => {
  const oldInstalled = getStoredData();
  if (oldInstalled.includes(id)) {
    alert("this app is alreday installed");
  } else {
    oldInstalled.push(id);

    const strInstalled = JSON.stringify(oldInstalled);
    localStorage.setItem("installApp", strInstalled);
  }
};

export { installNewApp, getStoredData };
