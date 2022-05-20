// create function to generate array from given length
export const generateArray = (length: number): number[] => {
  return Array.from(Array(length).keys());
}