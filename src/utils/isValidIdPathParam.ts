export default function isValidIdPathParam(id: string): boolean {
  const treatedId = Number.parseInt(id);
  return !isNaN(treatedId);
}
