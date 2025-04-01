export function useStorage() {
  // save new data to storage
  const saveToStorage = (key, value) => {
    if (!key) {
      return false;
    }
    let listData = getDataStorage(key);
    if (!listData.includes(value)) {
      listData.push(value);
    } else {
      listData = listData.filter((item) => {
        return item !== value;
      });
    }
    localStorage.setItem(key, JSON.stringify(listData));
  };

  // get all data from storage
  const getDataStorage = (key) => {
    const isExist = localStorage.getItem(key);
    return isExist ? JSON.parse(localStorage.getItem(key)) : [];
  };

  return {
    saveToStorage,
    getDataStorage,
  }
}