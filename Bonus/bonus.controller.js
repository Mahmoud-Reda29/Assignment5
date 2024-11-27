
export const majority = (req, res) => {
    const { nums } = req.body;
    if (!Array.isArray(nums) || nums.length === 0) {
        return res.status(400).json({ error: 'Invalid input. Provide an array of numbers.' });
    }
    try {
        const result = majorityElement(nums);
        const functionCode = majorityElement.toString();
        res.status(200).json({
            functionCode: functionCode,
            majorityElement: result
        });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
}


const majorityElement = function(nums) {
    const numbersCount = {}
    const majority = Math.floor(nums.length/2)
    for(const num of nums){
        numbersCount[num] = (numbersCount[num] || 0)+1;
        if (numbersCount[num]>majority){
            return num
        } 
    }
};



















// fs.writeFileSync(
//     "./bonus.js",
//     `
//     function findMissing(arr, k) {
//       let missingCount = 0;
//       let current = 1;
      
//       for (let num of arr) {
//           while (current < num) {
//               missingCount++;
//               if (missingCount === k) return current;
//               current++;
//           }
//           current = num + 1;
//       }
//       while (missingCount < k) {
//           missingCount++;
//           current++;
//       }
      
//       return current - 1;
//   }
  
//   console.log(findMissing([2, 3, 4, 7, 11], 5));
//     `,
//     "utf-8"
//   );//