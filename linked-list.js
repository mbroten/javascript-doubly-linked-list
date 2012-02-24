var linkedListNode = function(key){
    return {
        key: key,
        next: null,
        prev: null
    };
};

var linkedList = function(){
    var head = null;

    var insert = function(node){
        node.next = head;
        if (head !== null){
            head.prev = node;
        }
        head = node;
        node.prev = null;
    };

    var search = function(key){
        var node = head;
        while (node !== null && node.key !== key){
            node = node.next;
        };
        return node;
    };

    var remove = function(node){
        if (node.prev === null){
            head = node.next;
        }
        else {
            node.prev.next = node.next;             
        }
        if (node.next !== null){
            node.next.prev = node.prev
        }
    };

    var getHead = function(){
        return head;
    };

    return {
        insert: insert,
        remove: remove,
        search: search,
        getHead: getHead
    };
};
