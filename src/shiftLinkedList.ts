export function shiftLinkedList(head: LinkedList, k: number) {
  let tailLinkedList = head

  const getListLength = (linkedList: LinkedList): number => {
    if (linkedList.next) {
      return getListLength(linkedList.next) + 1
    } else {
      tailLinkedList = linkedList
      return 1
    }
  }

  const getNewHeadAndTail = (linkedList: LinkedList, netStepsToNewHeadRemaining: number): LinkedList[] => {
    switch (netStepsToNewHeadRemaining) {
      case 0:
        return [head, tailLinkedList]
      case 1:
        return [linkedList.next as LinkedList, linkedList]
      default:
        return getNewHeadAndTail(linkedList.next as LinkedList, netStepsToNewHeadRemaining - 1)
    }
  }

  const listLength: number = getListLength(head)
  const netK: number = k % listLength
  const netStepsToNewHead = netK > 0 ? listLength - Math.abs(netK) : Math.abs(netK)
  const newHeadAndTail: LinkedList[] = getNewHeadAndTail(head, netStepsToNewHead)

  tailLinkedList.next = head
  newHeadAndTail[1].next = null
  return newHeadAndTail[0]
}

class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

const head = new LinkedList(0);
head.next = new LinkedList(1);
head.next.next = new LinkedList(2);
head.next.next.next = new LinkedList(3);
head.next.next.next.next = new LinkedList(4);
head.next.next.next.next.next = new LinkedList(5);
// const result = shiftLinkedList(head, 2);
// var expected = [4, 5, 0, 1, 2, 3];

const result = shiftLinkedList(head, 6);
// const result = shiftLinkedList(head, 0);
