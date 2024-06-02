/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map();
    this.max = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache.has(key)) {
        let temp = this.cache.get(key)
        // 推到最前面
        this.cache.delete(key);
        this.cache.set(key,temp);
        return temp;
    }
    // 题目要求，没有该值，就return-1
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)) {
        this.cache.delete(key);
    } else if(this.cache.size >= this.max) {
        // 新增有缓存淘汰机制
        this.cache.delete(
            this.cache.keys().next().value
        );
    }
    this.cache.set(key,value);

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */