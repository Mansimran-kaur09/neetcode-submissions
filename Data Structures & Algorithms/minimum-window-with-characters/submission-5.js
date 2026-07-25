class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let tCount = {};
        for(let c of t) {
            tCount[c] = (tCount[c] || 0) + 1;
        }

        let have = 0,
            need = Object.keys(tCount).length;
        let resLen = Infinity;
        let res = [-1, -1];
        let l = 0;
        let sCount = {}
        for(let r = 0; r < s.length; r++) {
            const c = s[r]
            sCount[c] = (sCount[c] || 0) + 1;

            if(tCount[c] && sCount[c] === tCount[c]) {
                have++;
            }

            while(have === need) {
                if(r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l, r]
                }

                sCount[s[l]]--;
                if(tCount[s[l]] && sCount[s[l]] < tCount[s[l]]) {
                    have--;
                }
                l++;
            }
        }

        return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1)
    }
}
