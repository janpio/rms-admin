export function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export const fetcher = (url: string) => fetch(url).then(r => r.json());

export const toBase64 = (file: File) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

