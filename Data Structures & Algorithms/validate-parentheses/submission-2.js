class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const config = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }

        for(const c of s) {
            switch(c) {
                case ')':
                case '}':
                case ']':
                    if(config[c] !== stack.pop()) return false;
                    break;
                default:
                    stack.push(c);
                    break;
            }
        }

        return stack.length === 0;
    }
}
