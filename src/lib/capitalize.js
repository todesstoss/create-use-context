export default function capitalize(string) {
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.substring(1);
}
