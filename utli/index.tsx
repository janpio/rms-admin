export function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export const fetcher = (url: string) => fetch(url).then(r => r.json())

