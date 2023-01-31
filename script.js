function threeSum(arr, target) {
    //your code here
    let closeSum = Number.MAX_VALUE;

    for(let i = 0; i < arr.length; i++)
    {
        for(let j = i + 1; j < arr.length; j++)
        {
            for(let k = j + 1; k < arr.length; k++)
            {
                if(Math.abs(target - closeSum) > Math.abs(target - (arr[i] + arr[j] + arr[k])))
                  closeSum = (arr[i] + arr[j] + arr[k])
            }
        }
    }

    return closeSum
}

module.exports = threeSum;
