type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;
        if(!this.tail){
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node; //adding
        this.tail = node; // pointing
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;

        const head = this.head;
        this.head = this.head.next;

        if(this.length === 0 ){
            this.tail = undefined; // the head is already undefined, doing these will help the above function
        }

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
