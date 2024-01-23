function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }

    const pivotIdx = partition(arr, lo, hi);
    qs(arr, lo, pivotIdx - 1); // weak sort on the left side of the sub-array
    qs(arr, pivotIdx + 1, hi); // weak sort on the right side of the sub-array
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];

    let idx = lo - 1; // always one step before swapping

    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            // swap the pivot value and swap the value just before pivot value to the idx(pivot) index
            idx++;
            const temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }

    // then ensure that the pivot is at the correct place
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}
export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}
