export function rearrangeLinkedList(head: LinkedList, k: number) {
  let firstHead: LinkedList | null = null
  let lastHead: LinkedList | null = null
  let firstK: LinkedList | null = null
  let lastK: LinkedList | null = null
  let firstTail: LinkedList | null = null
  let lastTail: LinkedList | null = null

  const reconstructList = (linkedList: LinkedList): LinkedList => {
    let rearrangedList: LinkedList | null = null

    if (linkedList.value === k) {
      if (!firstK) {
        firstK = linkedList
      } else {
        if (lastK) {
          lastK.next = linkedList
        }
      }

      lastK = linkedList
    } else if (linkedList.value < k) {
      if (!firstHead) {
        firstHead = linkedList
      } else {
        if (lastHead) {
          lastHead.next = linkedList
        }
      }

      lastHead = linkedList
    } else {
      if (!firstTail) {
        firstTail = linkedList
      } else {
        if (lastTail) {
          lastTail.next = linkedList
        }
      }
      lastTail = linkedList
    }      

    if (linkedList.next) {
      return reconstructList(linkedList.next)
    } else {
      if (lastTail) {
        lastTail.next = null
        rearrangedList = firstTail
      }

      if (lastK) {
        lastK.next = rearrangedList ? rearrangedList : null
        rearrangedList = firstK
      }

      if (lastHead) {
        lastHead.next = rearrangedList ? rearrangedList : null
        rearrangedList = firstHead
      }
      return rearrangedList as LinkedList
    }    
  }

  return reconstructList(head)
}

// This is the class of the input linked list.
class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

const head = new LinkedList(3);
head.next = new LinkedList(0);
head.next.next = new LinkedList(5);
head.next.next.next = new LinkedList(2);
head.next.next.next.next = new LinkedList(1);
head.next.next.next.next.next = new LinkedList(4);
const result = rearrangeLinkedList(head, 3);
console.log(result)

