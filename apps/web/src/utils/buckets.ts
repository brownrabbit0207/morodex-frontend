export const INFO_BUCKETS = {
  sf: 0.1,
  nr: 0.9,
}

export function getBucket<T extends Record<string, number>>(buckets: T, defaultKey: keyof T): keyof T {
  // Get a random number between 0 and 1
  let n = cryptoRandom() * 100
  // Loop through the buckets and see if the random number falls
  // within the range of the bucket
