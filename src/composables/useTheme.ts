import { ref } from "vue";

function useTheme() {
  const isDark = ref(true);

  function switchTheme() {
    isDark.value = !isDark.value;
    isDark.value
      ? (document.documentElement.className = "dark")
      : (document.documentElement.className = "light");
  }

  return {
    isDark,
    switchTheme,
  };
}

export { useTheme };
