/** Mirror BondDepository reserve-bond branch when bondPriceInUSD reverts (e.g. LP calculator on uTRST). */
export function reserveBondPriceInUsd(
  bondPrice: bigint | undefined,
  principleDecimals: number,
): bigint | undefined {
  if (bondPrice === undefined) return undefined
  return (bondPrice * 10n ** BigInt(principleDecimals)) / 100n
}
