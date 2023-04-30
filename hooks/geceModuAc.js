import localStorageKullan from "./localStorageKullan";
function useDarkMode() {
  const [geceModu, setGeceModu] = localStorageKullan("geceModu", false);

  const toggleDarkMode = () => {
    setGeceModu(!geceModu);
  };

  return [geceModu, toggleDarkMode];
}

export default useDarkMode;