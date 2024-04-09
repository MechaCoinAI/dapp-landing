export function isNumberCheck(value: number | string): boolean{
    return typeof value === "number" && !Number.isNaN(value);
}

export function formatPoint(value: number | string): string{
   return value.toLocaleString('en-US')
}