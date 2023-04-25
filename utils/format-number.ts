export function formatNumber(n: number) {
  const { format } = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BRL",
  });

  return format(n);
}
