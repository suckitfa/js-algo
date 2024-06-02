class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(val) {
        const node = new Node(val)
        let p = this.head;
        if (this.head) {
            // 找到链表的最后一个节点
            while(p.next) {
                p = p.next;
            }
            p.next = node;
        } else {
            // 当前链表为空的
            this.head = node;            
        }
        this.length ++;
    }

    print() {
        let p = this.head
        let ret = ''
        if(this.head) {
            do {
                ret += `${p.val} =>`;
                p = p.next;
            } while(p.next);
            ret += p.val;//加上最后一个节点的值
            console.log(ret)
        } else {
            console.log('empty')
        }
    }
}

const linkList = new LinkedList()
linkList.append(1)
linkList.append(2)
linkList.append(3)
linkList.append(4)
console.log(`length of linklied = ${linkList.length}`)

inkList.print()